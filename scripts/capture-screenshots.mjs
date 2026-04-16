// capture-screenshots.mjs
// Run from the marketing directory:
//   node scripts/capture-screenshots.mjs
//
// Captures 8 screenshots to public/screenshots/

import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SCREENSHOTS_DIR = path.join(__dirname, '..', 'public', 'screenshots');
const BASE_URL = 'https://app.cadencehq.co';
const EMAIL = 'claude.test@cadencehq.co';
const PASSWORD = 'CadenceQA2026!';
const VIEWPORT = { width: 1280, height: 800 };

async function waitForApp(page) {
  await page.waitForSelector('nav, aside, [data-testid="sidebar"]', { timeout: 15000 });
  await page.waitForTimeout(1000);
}

async function screenshot(page, filename) {
  await page.waitForTimeout(500);
  await page.screenshot({
    path: path.join(SCREENSHOTS_DIR, filename),
    fullPage: false,
  });
  console.log(`  ✓ ${filename}`);
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: VIEWPORT });
  const page = await context.newPage();

  // ── Login ─────────────────────────────────────────────────────
  console.log('Logging in...');
  await page.goto(`${BASE_URL}/login`);
  await page.waitForSelector('input[type="email"]', { timeout: 15000 });
  await page.fill('input[type="email"]', EMAIL);
  await page.fill('input[type="password"]', PASSWORD);
  await page.click('button[type="submit"]');
  await page.waitForURL(`${BASE_URL}/dashboard`, { timeout: 20000 });
  await waitForApp(page);
  console.log('Logged in.\n');

  console.log('Capturing screenshots...');

  // ── 1. Dashboard ──────────────────────────────────────────────
  await page.goto(`${BASE_URL}/dashboard`);
  await waitForApp(page);
  // Dismiss "You're all set!" onboarding banner if present
  try {
    await page.click('button[aria-label="Dismiss getting started checklist"]', { timeout: 3000 });
    await page.waitForTimeout(500);
  } catch {
    // Banner not present or already dismissed
  }
  await screenshot(page, 'dashboard.png');

  // ── 2. Tasks ──────────────────────────────────────────────────
  await page.goto(`${BASE_URL}/tasks`);
  await waitForApp(page);
  await page.waitForTimeout(1000);
  await screenshot(page, 'tasks.png');

  // ── 3. 1:1 Meetings list ──────────────────────────────────────
  await page.goto(`${BASE_URL}/one-on-ones`);
  await waitForApp(page);
  await page.waitForTimeout(1000);
  await screenshot(page, 'one-on-ones.png');

  // ── 4. 1:1 Detail — Devon Lewis ───────────────────────────────
  const firstOooLink = page.locator('a[href*="/one-on-ones/"]').first();
  await firstOooLink.waitFor({ timeout: 10000 });
  const oooHref = await firstOooLink.getAttribute('href');
  await page.goto(`${BASE_URL}${oooHref}`);
  await waitForApp(page);
  await page.waitForTimeout(1200);
  await screenshot(page, 'one-on-one-detail.png');

  // ── 5. Team Meetings detail ────────────────────────────────────
  await page.goto(`${BASE_URL}/team-meetings`);
  await waitForApp(page);
  await page.waitForSelector('a[href*="/team-meetings/"]', { timeout: 10000 });
  const firstMeetingLink = page.locator('a[href*="/team-meetings/"]').first();
  const meetingHref = await firstMeetingLink.getAttribute('href');
  await page.goto(`${BASE_URL}${meetingHref}`);
  await waitForApp(page);
  await page.waitForTimeout(1000);
  await screenshot(page, 'team-meetings.png');

  // ── 6. KPIs tab ───────────────────────────────────────────────
  await page.goto(`${BASE_URL}/kpis`);
  await waitForApp(page);
  await page.waitForTimeout(1200);
  await screenshot(page, 'kpis.png');

  // ── 7. Goals tab ──────────────────────────────────────────────
  const goalsTab = page.locator('button:has-text("Goals"), [role="tab"]:has-text("Goals")').first();
  await goalsTab.waitFor({ timeout: 10000 });
  await goalsTab.click();
  await page.waitForTimeout(600);
  // Goals page has My Goals / Team Goals sub-tabs — click Team Goals
  const teamGoalsTab = page.locator('button:has-text("Team Goals"), [role="tab"]:has-text("Team Goals")').first();
  try {
    await teamGoalsTab.waitFor({ timeout: 5000 });
    await teamGoalsTab.click();
    await page.waitForTimeout(800);
  } catch {
    // No Team Goals sub-tab found — proceed with current view
  }
  await screenshot(page, 'goals.png');

  // ── 8. Team org chart ─────────────────────────────────────────
  await page.goto(`${BASE_URL}/team`);
  await waitForApp(page);
  await page.waitForTimeout(1000);
  await screenshot(page, 'team.png');

  await browser.close();
  console.log('\nDone. 8 screenshots saved to public/screenshots/');
}

main().catch(err => { console.error(err); process.exit(1); });
