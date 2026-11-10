/** Settled scroll-frame contact sheets for visual QA. Usage: node scripts/capture.mjs <out-dir> <label> <path> [width] [height] */
import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';

const [out = 'test-results/capture', label = 'page', path = '/', width = '1440', height = '900'] = process.argv.slice(2);
const base = process.env.CAPTURE_URL || 'http://localhost:5181';
const viewport = { width: +width, height: +height };
const mobile = viewport.width < 600;
await mkdir(out, { recursive: true });
const browser = await chromium.launch({ channel: process.env.CAPTURE_CHANNEL || 'chrome' });
const context = await browser.newContext({ viewport, deviceScaleFactor: 1, isMobile: mobile, hasTouch: mobile });
await context.addInitScript(() => {
  sessionStorage.setItem('hasVisited', 'true');
  localStorage.setItem('cookies', 'accepted');
});
const page = await context.newPage();
const errors = [];
page.on('pageerror', error => errors.push(error.message));
page.on('console', message => message.type() === 'error' && errors.push(message.text()));
await page.goto(base + path, { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForSelector('[data-experience-ready]', { state: 'attached', timeout: 30000 });
await page.waitForTimeout(2500);
const total = await page.evaluate(() => document.documentElement.scrollHeight);
const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
const frames = [];
for (let y = 0; y < total; y += Math.round(viewport.height * 0.9)) {
  await page.evaluate(top => window.scrollTo(0, top), y);
  await page.waitForTimeout(1300);
  frames.push((await page.screenshot()).toString('base64'));
  if (frames.length >= 24) break;
}
const broken = await page.evaluate(() => [...document.images].filter(i => i.complete && !i.naturalWidth && i.src).map(i => i.src));
const columns = mobile ? 6 : 3;
const sheet = await browser.newPage({ viewport: { width: columns * (mobile ? 260 : 600), height: 800 } });
for (let start = 0, n = 0; start < frames.length; start += columns * 3, n++) {
  const tiles = frames.slice(start, start + columns * 3).map((f, i) => `<figure><figcaption>${start + i}</figcaption><img src="data:image/png;base64,${f}"></figure>`).join('');
  await sheet.setContent(`<style>body{margin:0;background:#999}main{display:grid;grid-template-columns:repeat(${columns},1fr);gap:4px;padding:4px}figure{margin:0;position:relative}figcaption{position:absolute;background:#000;color:#fff;font:11px sans-serif;padding:2px 4px}img{width:100%;display:block}</style><main>${tiles}</main>`);
  await sheet.screenshot({ path: `${out}/${label}-${n}.png`, fullPage: true });
}
console.log(JSON.stringify({ label, path, total, overflow, frames: frames.length, broken, errors: errors.slice(0, 8) }));
await browser.close();
