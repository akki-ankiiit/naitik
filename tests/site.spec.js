import { test, expect } from "@playwright/test";

async function openPage(page, path = "/") {
  await page.addInitScript(() => {
    sessionStorage.setItem("hasVisited", "true");
    localStorage.setItem("cookies", "accepted");
  });
  await page.goto(path);
  await expect(page.locator("[data-experience-ready]")).toBeAttached();
  await expect(page.locator("[data-preloader]")).toBeHidden();
}

const pages = [
  ["/", /M\.A\.D\. Collaboratives — Interior Architecture/],
  ["/projects", /^Projects — /],
  ["/projects/gilded-bedroom", /^Bedroom with Gilded Relief — /],
  ["/about", /^About the Studio/],
  ["/contact", /^Contact — /],
];

for (const [path, title] of pages) {
  test(`${path} renders with M.A.D. branding, no errors and no overflow`, async ({ page }) => {
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await openPage(page, path);
    await expect(page).toHaveTitle(title);
    await expect(page.locator("body")).not.toContainText(/Azure|Era Residence|6260906952/i);
    const overflowing = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1);
    expect(overflowing).toBe(false);
    expect(errors).toEqual([]);
  });
}

test("homepage hero loads and the page scrolls", async ({ page }) => {
  await openPage(page);
  await expect(page.locator(".hero-s h1")).toHaveText("M.A.D.");
  await expect
    .poll(() => page.locator(".hero-img").first().evaluate((image) => image.complete && image.naturalWidth > 0))
    .toBe(true);
  await page.mouse.wheel(0, 1600);
  await expect.poll(() => page.evaluate(() => scrollY)).toBeGreaterThan(300);
});

test("project cards lead to their detail pages", async ({ page }) => {
  await openPage(page, "/projects");
  await expect(page.locator(".portfolio-card")).toHaveCount(5);
  await page.locator('a[href="/projects/lounge"]').click();
  await expect(page).toHaveURL(/\/projects\/lounge$/);
  await expect(page.locator(".project-title")).toHaveText("Lounge in Stone & Ivory");
});

test("instagram links point to the verified accounts", async ({ page }) => {
  await openPage(page);
  const hrefs = await page.locator('.mad-social a[href*="instagram.com"]').evaluateAll((links) => links.map((link) => link.href));
  expect(hrefs).toContain("https://www.instagram.com/m.a.d_collaboratives/");
  expect(hrefs).toContain("https://www.instagram.com/naitik67/");
});

test("enquiry form is honest when no endpoint is configured", async ({ page }) => {
  await openPage(page, "/contact");
  await page.locator('[data-modal-cta-btn="book-a-call"]:visible').first().click();
  const form = page.locator("#wf-form-Book-a-call");
  await expect(form.locator(".mad-form-notice")).toBeVisible();
  await form.locator("#name").fill("Test");
  await form.locator("#email").fill("test@example.com");
  await form.locator("#project_type").selectOption({ index: 1 });
  await form.locator("#message").fill("A test enquiry");
  await form.evaluate((element) => element.requestSubmit());
  await expect(form.locator("[data-form-status]")).toContainText("nothing has been sent");
});

test("mobile menu reaches the about page", async ({ page, isMobile }) => {
  test.skip(!isMobile, "The menu button is mobile-only.");
  await openPage(page);
  await page.locator('[data-modal-menu-btn="mob"]').first().click();
  await page.locator('[data-modal-menu="mob"] a[href="/about"]').click();
  await expect(page).toHaveURL(/\/about$/);
});
