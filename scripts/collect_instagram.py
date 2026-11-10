"""Collect public Instagram media for M.A.D. Collaboratives (website use pending the studio's written confirmation).

Reads the logged-out, publicly served profile and post pages only. No login, cookies,
proxies or browser impersonation. Stops on the first block, login wall or rate limit.

Usage:
  .venv/bin/python scripts/collect_instagram.py collect   # fetch pages, download originals
  .venv/bin/python scripts/collect_instagram.py process   # validate, dedupe, optimise, manifest
"""
from __future__ import annotations

import hashlib
import json
import re
import sys
import time
from datetime import datetime, timezone
from pathlib import Path

import requests
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "public/assets/mad"
RAW = ROOT / "docs/research/raw"
CURATION = ROOT / "scripts/mad-curation.json"
ACCOUNTS = {"m.a.d_collaboratives": "studio", "naitik67": "naitik"}
# Third-party posts about the studio, used with credit (permission to be confirmed with the publisher).
CREDITED = {"sylph_consultancy": "Sylph Creatives"}
MAX_POSTS_PER_ACCOUNT = 80
DELAY = 2.5

session = requests.Session()
session.headers["Accept"] = "text/html"


class Blocked(RuntimeError):
    pass


def get(url: str, binary: bool = False):
    response = session.get(url, timeout=60)
    if response.status_code in (401, 403, 429) or "/accounts/login" in response.url:
        raise Blocked(f"{response.status_code} {url}")
    response.raise_for_status()
    return response.content if binary else response.text


def json_blocks(page: str):
    for block in re.findall(r'<script type="application/json"[^>]*>(.*?)</script>', page, re.S):
        try:
            yield json.loads(block)
        except json.JSONDecodeError:
            continue


def walk(node, visit):
    if isinstance(node, dict):
        visit(node)
        for value in node.values():
            walk(value, visit)
    elif isinstance(node, list):
        for value in node:
            walk(value, visit)


def media_nodes(page: str):
    found = {}

    def visit(node):
        if isinstance(node.get("code"), str) and "media_type" in node and isinstance(node.get("user"), dict):
            current = found.get(node["code"])
            if current is None or len(json.dumps(node)) > len(json.dumps(current)):
                found[node["code"]] = node

    for block in json_blocks(page):
        walk(block, visit)
    return found


def best_image(node):
    candidates = (node.get("image_versions2") or {}).get("candidates") or []
    return candidates[0]["url"] if candidates else node.get("display_uri")


def best_video(node):
    versions = node.get("video_versions") or []
    return max(versions, key=lambda v: v.get("width") or 0)["url"] if versions else None


def parse_post(node):
    caption = node.get("caption")
    caption = caption.get("text", "") if isinstance(caption, dict) else ""
    items = node.get("carousel_media") or [node]
    return {
        "shortcode": node["code"],
        "url": f"https://www.instagram.com/p/{node['code']}/",
        "owner": node["user"].get("username"),
        "taken_at": node.get("taken_at"),
        "product_type": node.get("product_type"),
        "caption": caption,
        "hashtags": sorted(set(re.findall(r"#(\w+)", caption))),
        "mentions_studio": "m.a.d_collaboratives" in caption or "naitik67" in caption,
        "items": [
            {
                "index": index,
                "media_type": "video" if item.get("media_type") == 2 or item.get("video_versions") else "image",
                "image_url": best_image(item),
                "video_url": best_video(item),
                "width": item.get("original_width"),
                "height": item.get("original_height"),
                "alt": item.get("accessibility_caption"),
            }
            for index, item in enumerate(items)
        ],
    }


def collect():
    RAW.mkdir(parents=True, exist_ok=True)
    posts = json.loads((RAW / "posts.json").read_text()) if (RAW / "posts.json").exists() else {}
    log = []
    try:
        for account in ACCOUNTS:
            queue = list(media_nodes(get(f"https://www.instagram.com/{account}/")))
            seen = set(queue)
            fetched = 0
            while queue and fetched < MAX_POSTS_PER_ACCOUNT:
                code = queue.pop(0)
                if code in posts:
                    continue
                time.sleep(DELAY)
                page = get(f"https://www.instagram.com/p/{code}/")
                fetched += 1
                nodes = media_nodes(page)
                if code in nodes:
                    posts[code] = parse_post(nodes[code]) | {"discovered_via": account}
                for other, node in nodes.items():
                    if other not in seen and node["user"].get("username") == account:
                        seen.add(other)
                        queue.append(other)
            log.append(f"{account}: {fetched} post pages fetched, {len(queue)} discovered but not fetched")
    except Blocked as error:
        log.append(f"Stopped: Instagram blocked access ({error}). No retries attempted.")
    (RAW / "posts.json").write_text(json.dumps(posts, indent=1, ensure_ascii=False))
    download(posts, log)
    (RAW / "collection-log.txt").write_text("\n".join(log) + "\n")
    print("\n".join(log))


def excluded():
    """Personal and family posts listed in the curation file are never downloaded or published."""
    return set(json.loads(CURATION.read_text()).get("exclude", {})) if CURATION.exists() else set()


def is_usable(post):
    if post["shortcode"] in excluded():
        return False
    # Credited posts count when they tag the studio or were published as collaborations on its grid.
    return post["owner"] in ACCOUNTS or (
        post["owner"] in CREDITED and (post["mentions_studio"] or post.get("discovered_via") == "m.a.d_collaboratives")
    )


def download(posts, log):
    count = 0
    for post in posts.values():
        if not is_usable(post):
            continue
        folder = BASE / "originals" / ACCOUNTS.get(post["owner"], "credited")
        folder.mkdir(parents=True, exist_ok=True)
        for item in post["items"]:
            stem = f"{post['shortcode']}-{item['index']:02d}"
            targets = [(folder / f"{stem}.jpg", item["image_url"])]
            if item["video_url"]:
                (BASE / "videos").mkdir(parents=True, exist_ok=True)
                targets.append((BASE / "videos" / f"{stem}.mp4", item["video_url"]))
            for path, url in targets:
                if path.exists() or not url:
                    continue
                try:
                    path.write_bytes(get(url, binary=True))
                    count += 1
                    time.sleep(0.4)
                except Blocked as error:
                    log.append(f"Media download stopped: {error}")
                    return
                except requests.RequestException as error:
                    log.append(f"Failed {path.name}: {error}")
    log.append(f"Downloaded {count} new files")


def average_hash(image: Image.Image) -> str:
    small = ImageOps.grayscale(image).resize((16, 16), Image.Resampling.LANCZOS)
    pixels = list(small.get_flattened_data())
    mean = sum(pixels) / len(pixels)
    return "".join("1" if p > mean else "0" for p in pixels)


def ratio(width, height):
    value = width / height
    for label, target in {"1:1": 1, "4:5": 0.8, "3:4": 0.75, "2:3": 0.667, "9:16": 0.5625, "16:9": 1.778, "3:2": 1.5, "4:3": 1.333, "5:4": 1.25}.items():
        if abs(value - target) < 0.02:
            return label
    return f"{value:.3f}"


SIZES = (2000, 1000)
# "usage_approved" means selected for the website by the project brief; written confirmation is still outstanding.
PENDING = "selected for the website; written confirmation from the studio (and, for credited images, the publisher) pending"


def optimise(image: Image.Image, folder: str, asset_id: str):
    """Write WebP renditions (2000px and 1000px long edge) and return their manifest fields."""
    out_dir = BASE / "optimised" / folder
    out_dir.mkdir(parents=True, exist_ok=True)
    paths = {}
    for size in SIZES:
        out = out_dir / (f"{asset_id}.webp" if size == SIZES[0] else f"{asset_id}-{size}.webp")
        if not out.exists():
            web = image.copy()
            web.thumbnail((size, size), Image.Resampling.LANCZOS)
            web.save(out, "WEBP", quality=82 if size == SIZES[0] else 78, method=6)
        paths[size] = out
    with Image.open(paths[SIZES[0]]) as done:
        width, height = done.size
    return {
        "optimised_path": "/" + str(paths[SIZES[0]].relative_to(ROOT / "public")),
        "optimised_small_path": "/" + str(paths[SIZES[1]].relative_to(ROOT / "public")),
        "optimised_width": width,
        "optimised_height": height,
    }


def process():
    posts = json.loads((RAW / "posts.json").read_text())
    curation = json.loads(CURATION.read_text()) if CURATION.exists() else {"assets": {}, "projects": {}}
    for sub in ("thumbnails", "manifest"):
        (BASE / sub).mkdir(parents=True, exist_ok=True)
    assets, seen_sha, seen_hash = [], {}, []
    for post in sorted(posts.values(), key=lambda p: p["taken_at"] or 0, reverse=True):
        if not is_usable(post):
            continue
        source = ACCOUNTS.get(post["owner"], "credited")
        for item in post["items"]:
            stem = f"{post['shortcode']}-{item['index']:02d}"
            original = BASE / "originals" / source / f"{stem}.jpg"
            if not original.exists():
                continue
            try:
                with Image.open(original) as probe:
                    probe.verify()
                image = ImageOps.exif_transpose(Image.open(original)).convert("RGB")
            except Exception as error:  # corrupt download
                print("invalid", original, error)
                continue
            sha = hashlib.sha256(original.read_bytes()).hexdigest()
            ahash = average_hash(image)
            duplicate_of = seen_sha.get(sha) or next(
                (asset_id for other, asset_id in seen_hash if sum(a != b for a, b in zip(other, ahash)) <= 6), None
            )
            asset_id = f"mad-{stem}"
            curated = curation["assets"].get(asset_id, {})
            entry = {
                "id": asset_id,
                "source_account": post["owner"],
                "credit": CREDITED.get(post["owner"]),
                "source_post_url": post["url"],
                "shortcode": post["shortcode"],
                "slide": item["index"] + 1,
                "published": datetime.fromtimestamp(post["taken_at"], timezone.utc).date().isoformat() if post["taken_at"] else None,
                "caption": post["caption"],
                "hashtags": post["hashtags"],
                "instagram_alt": item["alt"],
                "media_type": item["media_type"],
                "original_path": "/" + str(original.relative_to(ROOT / "public")),
                "video_path": None,
                "width": image.width,
                "height": image.height,
                "aspect_ratio": ratio(image.width, image.height),
                "sha256": sha,
                "duplicate_of": duplicate_of,
                "project": curated.get("project"),
                "category": curated.get("category", "unverified"),
                "role": curated.get("role"),
                "alt": curated.get("alt"),
                "usage_approved": False,
                "usage_status": "not selected for the website",
            }
            video = BASE / "videos" / f"{stem}.mp4"
            if video.exists():
                entry["video_path"] = "/" + str(video.relative_to(ROOT / "public"))
            seen_sha.setdefault(sha, asset_id)
            seen_hash.append((ahash, asset_id))
            thumb = BASE / "thumbnails" / f"{asset_id}.webp"
            if not thumb.exists():
                preview = image.copy()
                preview.thumbnail((640, 640), Image.Resampling.LANCZOS)
                preview.save(thumb, "WEBP", quality=78, method=6)
            entry["thumbnail_path"] = "/" + str(thumb.relative_to(ROOT / "public"))
            folder = curated.get("folder")
            entry["optimised_path"] = None
            if folder and not duplicate_of:
                entry.update(optimise(image, folder, asset_id), usage_approved=True, usage_status=PENDING)
            assets.append(entry)
            for crop in curated.get("crops", []):
                crop_id = f"{asset_id}-{crop['suffix']}"
                region = image.crop(tuple(crop["box"]))
                assets.append(entry | {
                    "id": crop_id,
                    "derived_from": asset_id,
                    "crop_box": crop["box"],
                    "duplicate_of": None,
                    "width": region.width,
                    "height": region.height,
                    "aspect_ratio": ratio(region.width, region.height),
                    "project": crop.get("project", entry["project"]),
                    "category": crop.get("category", entry["category"]),
                    "role": crop.get("role"),
                    "alt": crop["alt"],
                    **optimise(region, crop["folder"], crop_id),
                    "usage_approved": True,
                    "usage_status": PENDING,
                })
    manifest = {
        "brand": "M.A.D. Collaboratives",
        "designer": "Naitik Parekh",
        "generated": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "collection_method": "Logged-out public Instagram pages, parsed with Python. No login, cookies or circumvention.",
        "excluded_posts": sorted(excluded()),
        "sources": [
            {"account": a, "profile_url": f"https://www.instagram.com/{a}/"} for a in ACCOUNTS
        ] + [{"account": a, "profile_url": f"https://www.instagram.com/{a}/", "credit": c} for a, c in CREDITED.items()],
        "projects": curation.get("projects", {}),
        "assets": assets,
    }
    (BASE / "manifest/assets.json").write_text(json.dumps(manifest, indent=1, ensure_ascii=False))
    # Compact index bundled by the website: only approved, optimised renditions.
    media = {
        a["id"].removeprefix("mad-"): {
            "src": a["optimised_path"],
            "small": a["optimised_small_path"],
            "width": a["optimised_width"],
            "height": a["optimised_height"],
            "alt": a["alt"],
            "source": a["source_post_url"],
            "account": a["source_account"],
            "credit": a["credit"],
            "published": a["published"],
        }
        for a in assets
        if a.get("optimised_path") and a["usage_approved"]
    }
    (ROOT / "src/data/mad-media.json").write_text(json.dumps(media, indent=1, ensure_ascii=False) + "\n")
    print(f"{len(assets)} assets, {sum(1 for a in assets if a['optimised_path'])} optimised, "
          f"{sum(1 for a in assets if a['duplicate_of'])} duplicates")


def contact_sheet():
    """Numbered contact sheets for one-pass human/AI curation instead of image-by-image review."""
    from PIL import ImageDraw

    out = RAW / "sheets"
    out.mkdir(parents=True, exist_ok=True)
    for source in ("studio", "naitik", "credited"):
        files = sorted((BASE / "originals" / source).glob("*.jpg"))
        for page in range(0, len(files), 48):
            sheet = Image.new("RGB", (8 * 220, 6 * 240), "white")
            draw = ImageDraw.Draw(sheet)
            for index, file in enumerate(files[page:page + 48]):
                with Image.open(file) as image:
                    image.thumbnail((210, 210))
                    x, y = (index % 8) * 220, (index // 8) * 240
                    sheet.paste(image.convert("RGB"), (x + 5, y + 5))
                    draw.text((x + 5, y + 220), file.stem, fill="black")
            sheet.save(out / f"{source}-{page // 48 + 1}.jpg", quality=80)


if __name__ == "__main__":
    {"collect": collect, "process": process, "sheets": contact_sheet}[sys.argv[1] if len(sys.argv) > 1 else "collect"]()
