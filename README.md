# M.A.D. Collaboratives — studio website

Portfolio website for **M.A.D. Collaboratives** (Make A Difference), the boutique design studio led by Principal Architect **Naitik Parekh**. Built with React 19 and Vite, with GSAP/ScrollTrigger and Lenis motion, sliders, lightbox and page transitions. Identity, content and photography belong to the studio.

## Run locally

```bash
npm install
npm run dev        # Vite dev server
npm run build      # production output in dist/
npm run preview    # preview the production build
PW_CHANNEL=chrome npm test   # Playwright, desktop + mobile (or run `npx playwright install chromium` and drop PW_CHANNEL)
```

## Pages
| Route | Content |
|---|---|
| `/` | Hero, studio statement, philosophy slider, Naitik's quote, studio introduction, featured work, Sylph quote, selected details, Naitik profile, Instagram selection, enquiry CTA |
| `/projects` | Five published spaces plus an index of the studio's Instagram highlight projects |
| `/projects/:slug` | Split detail view: verified metadata, source captions, credits, gallery with lightbox, related spaces |
| `/about` | Studio, Naitik Parekh, approach (attributed quotes), recognition |
| `/contact` | Instagram channels, city, enquiry modal |
| `/privacy`, `/terms` | Draft wording pending the studio's review |

## Content and assets
- Verified brand facts: `src/data/studio.js`. Projects: `src/data/projects.js`. Research: `docs/research/`.
- Photography is collected and processed by `scripts/collect_instagram.py` (`collect`, `process`, `sheets`). Curation, crops and personal-post exclusions live in `scripts/mad-curation.json`. Outputs are `public/assets/mad/manifest/assets.json` (full manifest) and `src/data/mad-media.json` (site index).
- `docs/research/asset-report.md` lists usage-approval status and the media still missing.

## Enquiry form
No backend is connected. Without one, the form says so before submission and sends nothing. To connect it:

1. Copy `.env.example` to `.env.local`.
2. Set `VITE_CONTACT_ENDPOINT` to an API that accepts a JSON `POST` with `name`, `email`, `phone`, `project_type`, `project_location`, `budget`, `message` and attribution fields.
3. Rebuild.

## Deployment
Deploy `dist/` to a static host with SPA fallback to `index.html` (`public/_redirects` covers Netlify, `vercel.json` covers Vercel). The display serif loads from Adobe Fonts kit `pig8glj`, which is domain-locked. Add the production domain to the kit, or the headings fall back. Canonical URLs and structured data are waiting for a confirmed domain.

Motion and layout hooks live in `src/animations/referenceEngine.js` and are driven by `data-*` attributes. Shared site chrome is in `src/components/layout/`.
# naitik
