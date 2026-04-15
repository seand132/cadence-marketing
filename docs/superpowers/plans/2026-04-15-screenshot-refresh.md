# Screenshot Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace 6 existing marketing screenshots and add 2 new ones with polished, production-quality images showing a realistic sales team scenario with real headshots.

**Architecture:** Set up demo data in Supabase QA via service-role SQL, upload headshots to Supabase Storage, capture 8 screenshots with Playwright against production (app.cadencehq.co), then update the marketing site to reference the two new files.

**Tech Stack:** Supabase MCP (execute_sql, get_project_url, get_publishable_keys), Playwright 1.58 (app/node_modules), sips (macOS built-in for image resize), Node.js ESM scripts.

---

## File map

| File | Action | Purpose |
|---|---|---|
| `marketing/scripts/capture-screenshots.mjs` | Create | Playwright script — logs in, navigates, captures 8 screenshots |
| `marketing/scripts/demo-data.sql` | Create | Reference copy of all SQL run against QA database |
| `marketing/public/screenshots/dashboard.png` | Replace | Refreshed with sales personas |
| `marketing/public/screenshots/tasks.png` | Replace | Refreshed with sales tasks |
| `marketing/public/screenshots/one-on-ones.png` | Replace | Refreshed with sales team names |
| `marketing/public/screenshots/one-on-one-detail.png` | Create | NEW — Devon's 1:1 detail with structured sections |
| `marketing/public/screenshots/team-meetings.png` | Replace | Refreshed with sales meeting |
| `marketing/public/screenshots/kpis.png` | Replace | Refreshed with sales KPIs |
| `marketing/public/screenshots/goals.png` | Create | NEW — Goals tab |
| `marketing/public/screenshots/team.png` | Replace | Refreshed with photos |
| `marketing/src/app/features/page.tsx` | Modify | Add two new screenshot blocks (1:1 detail + goals) |

---

## Task 1: Look up QA workspace and user IDs

**Files:**
- No files modified — discovery step only

- [ ] **Step 1: Get Rachel's user ID and workspace ID**

Using the Supabase MCP `execute_sql` tool, run:

```sql
SELECT id, display_name, email, workspace_id
FROM profiles
WHERE email = 'claude.test@cadencehq.co';
```

Note the `id` (Rachel's user ID) and `workspace_id`. You will need both throughout this plan. Call them `RACHEL_ID` and `WORKSPACE_ID`.

- [ ] **Step 2: Check for existing team members**

```sql
SELECT id, display_name, email, role, job_title
FROM profiles
WHERE workspace_id = '<WORKSPACE_ID>'
  AND id != '<RACHEL_ID>';
```

If 3 rows already exist, skip Task 2 and note their IDs as `DEVON_ID`, `AISHA_ID`, `BEN_ID`. If fewer than 3 exist, proceed to Task 2.

- [ ] **Step 3: Check existing demo content**

```sql
SELECT count(*) AS tasks     FROM tasks      WHERE workspace_id = '<WORKSPACE_ID>';
SELECT count(*) AS one_on_ones FROM one_on_ones WHERE workspace_id = '<WORKSPACE_ID>';
SELECT count(*) AS kpis      FROM kpis        WHERE workspace_id = '<WORKSPACE_ID>';
SELECT count(*) AS goals     FROM goals       WHERE workspace_id = '<WORKSPACE_ID>';
```

Note counts. Task 6 will delete and re-insert all demo content regardless.

---

## Task 2: Create 3 team member auth users and profiles

Skip this task if Task 1 Step 2 found 3 existing users.

**Files:**
- No files modified — database only

- [ ] **Step 1: Insert Devon Lewis into auth.users**

Using Supabase MCP `execute_sql`:

```sql
INSERT INTO auth.users (
  id, instance_id, aud, role, email, encrypted_password,
  email_confirmed_at, raw_app_meta_data, raw_user_meta_data,
  is_super_admin, created_at, updated_at,
  confirmation_token, recovery_token,
  email_change_token_new, email_change, email_change_token_current,
  email_change_confirm_status, phone_change, phone_change_token,
  reauthentication_token, is_sso_user
)
VALUES (
  gen_random_uuid(),
  '00000000-0000-0000-0000-000000000000',
  'authenticated', 'authenticated',
  'devon.lewis@cadencedemo.co',
  crypt('Demo2026!', gen_salt('bf')),
  now(),
  '{"provider":"email","providers":["email"]}'::jsonb,
  '{}'::jsonb,
  false, now(), now(),
  '', '', '', '', '', 0, '', '', '', false
)
RETURNING id;
```

Note the returned UUID as `DEVON_ID`.

> **If this fails** (auth schema not accessible via execute_sql): Use the Supabase MCP `get_project_url` and `get_publishable_keys` to get the project URL and service role key, then run via curl:
> ```bash
> curl -X POST '<PROJECT_URL>/auth/v1/admin/users' \
>   -H 'apikey: <SERVICE_ROLE_KEY>' \
>   -H 'Authorization: Bearer <SERVICE_ROLE_KEY>' \
>   -H 'Content-Type: application/json' \
>   -d '{"email":"devon.lewis@cadencedemo.co","password":"Demo2026!","email_confirm":true}'
> ```
> Note the `id` from the response as `DEVON_ID`.

- [ ] **Step 2: Insert Aisha Morris into auth.users**

Same SQL as Step 1 with email `aisha.morris@cadencedemo.co`. Note returned UUID as `AISHA_ID`.

- [ ] **Step 3: Insert Ben Torres into auth.users**

Same SQL as Step 1 with email `ben.torres@cadencedemo.co`. Note returned UUID as `BEN_ID`.

- [ ] **Step 4: Insert profiles for all three**

```sql
INSERT INTO profiles (id, email, display_name, first_name, last_name, workspace_id, role, job_title, reports_to, created_at)
VALUES
  ('<DEVON_ID>', 'devon.lewis@cadencedemo.co',  'Devon Lewis',  'Devon',  'Lewis',  '<WORKSPACE_ID>', 'employee', 'Account Executive',      '<RACHEL_ID>', now()),
  ('<AISHA_ID>', 'aisha.morris@cadencedemo.co', 'Aisha Morris', 'Aisha',  'Morris', '<WORKSPACE_ID>', 'employee', 'Account Executive',      '<RACHEL_ID>', now()),
  ('<BEN_ID>',   'ben.torres@cadencedemo.co',   'Ben Torres',   'Ben',    'Torres', '<WORKSPACE_ID>', 'employee', 'Sales Development Rep',  '<RACHEL_ID>', now());
```

If profiles were auto-created by a trigger, use UPDATE instead:

```sql
UPDATE profiles SET
  display_name = 'Devon Lewis', first_name = 'Devon', last_name = 'Lewis',
  workspace_id = '<WORKSPACE_ID>', role = 'employee',
  job_title = 'Account Executive', reports_to = '<RACHEL_ID>'
WHERE id = '<DEVON_ID>';

UPDATE profiles SET
  display_name = 'Aisha Morris', first_name = 'Aisha', last_name = 'Morris',
  workspace_id = '<WORKSPACE_ID>', role = 'employee',
  job_title = 'Account Executive', reports_to = '<RACHEL_ID>'
WHERE id = '<AISHA_ID>';

UPDATE profiles SET
  display_name = 'Ben Torres', first_name = 'Ben', last_name = 'Torres',
  workspace_id = '<WORKSPACE_ID>', role = 'employee',
  job_title = 'Sales Development Rep', reports_to = '<RACHEL_ID>'
WHERE id = '<BEN_ID>';
```

---

## Task 3: Update Rachel's profile

**Files:**
- No files modified — database only

- [ ] **Step 1: Rename Claude Test to Rachel Cole and set her job title**

```sql
UPDATE profiles SET
  display_name = 'Rachel Cole',
  first_name   = 'Rachel',
  last_name    = 'Cole',
  job_title    = 'Sales Manager',
  role         = 'manager'
WHERE id = '<RACHEL_ID>';
```

- [ ] **Step 2: Rename the workspace**

```sql
UPDATE workspaces SET name = 'Cadence Demo' WHERE id = '<WORKSPACE_ID>';
```

- [ ] **Step 3: Verify**

```sql
SELECT display_name, job_title, role FROM profiles WHERE workspace_id = '<WORKSPACE_ID>' ORDER BY role DESC;
SELECT name FROM workspaces WHERE id = '<WORKSPACE_ID>';
```

Expected: 4 rows — Rachel Cole (manager), Devon Lewis, Aisha Morris, Ben Torres (all employee).

---

## Task 4: Source and prepare headshots

**Files:**
- Temporary: `marketing/scripts/avatars/rachel.jpg`, `devon.jpg`, `aisha.jpg`, `ben.jpg`

- [ ] **Step 1: Create avatars directory**

```bash
mkdir -p "/Users/seandavis/Documents/Claude/Projects/Cadence/marketing/scripts/avatars"
```

- [ ] **Step 2: Search for headshots**

Use WebSearch or Claude in Chrome to find 4 royalty-free professional headshot photos from Unsplash. Criteria:
- Rachel: professional woman, ~35-45, manager energy, business casual
- Devon: Black man, ~28-35, confident, professional
- Aisha: Black woman, ~25-32, professional, warm
- Ben: Hispanic or Latino man, ~24-30, enthusiastic, younger

Unsplash search URLs to try:
- `https://unsplash.com/s/photos/professional-headshot-woman`
- `https://unsplash.com/s/photos/professional-headshot-man`
- `https://unsplash.com/s/photos/business-headshot`

For each photo found, note the direct image URL (click Download → right-click → Copy Image Address for the 400px size).

- [ ] **Step 3: Download all 4 photos**

```bash
cd "/Users/seandavis/Documents/Claude/Projects/Cadence/marketing/scripts/avatars"
curl -L -o rachel-raw.jpg "<RACHEL_PHOTO_URL>"
curl -L -o devon-raw.jpg  "<DEVON_PHOTO_URL>"
curl -L -o aisha-raw.jpg  "<AISHA_PHOTO_URL>"
curl -L -o ben-raw.jpg    "<BEN_PHOTO_URL>"
```

- [ ] **Step 4: Resize all 4 to 400×400px square**

```bash
cd "/Users/seandavis/Documents/Claude/Projects/Cadence/marketing/scripts/avatars"
sips -z 400 400 rachel-raw.jpg --out rachel.jpg
sips -z 400 400 devon-raw.jpg  --out devon.jpg
sips -z 400 400 aisha-raw.jpg  --out aisha.jpg
sips -z 400 400 ben-raw.jpg    --out ben.jpg
ls -la *.jpg
```

Expected: 4 `.jpg` files all showing reasonable file sizes (10–200KB each).

---

## Task 5: Upload headshots to Supabase Storage and update profiles

**Files:**
- No files modified — database + storage only

- [ ] **Step 1: Get the Supabase project URL and service role key**

Using the Supabase MCP `get_project_url` tool, get the project URL (format: `https://xxxxxxxxxxxx.supabase.co`). Using `get_publishable_keys`, get the service role key. Note both as `SUPABASE_URL` and `SERVICE_ROLE_KEY`.

- [ ] **Step 2: Check the storage bucket**

Using `execute_sql`:

```sql
SELECT id, name, public FROM storage.buckets;
```

Note the bucket name used for avatars (typically `avatars`). If no avatars bucket exists, create one:

```sql
INSERT INTO storage.buckets (id, name, public)
VALUES ('avatars', 'avatars', true);
```

- [ ] **Step 3: Upload all 4 headshots**

```bash
SUPABASE_URL="<SUPABASE_URL>"
SERVICE_ROLE_KEY="<SERVICE_ROLE_KEY>"
AVATARS_DIR="/Users/seandavis/Documents/Claude/Projects/Cadence/marketing/scripts/avatars"

for person in rachel devon aisha ben; do
  curl -X POST "${SUPABASE_URL}/storage/v1/object/avatars/demo/${person}.jpg" \
    -H "Authorization: Bearer ${SERVICE_ROLE_KEY}" \
    -H "Content-Type: image/jpeg" \
    --data-binary "@${AVATARS_DIR}/${person}.jpg"
  echo "Uploaded ${person}.jpg"
done
```

- [ ] **Step 4: Update avatar_url on all 4 profiles**

```sql
UPDATE profiles SET avatar_url = '<SUPABASE_URL>/storage/v1/object/public/avatars/demo/rachel.jpg' WHERE id = '<RACHEL_ID>';
UPDATE profiles SET avatar_url = '<SUPABASE_URL>/storage/v1/object/public/avatars/demo/devon.jpg'  WHERE id = '<DEVON_ID>';
UPDATE profiles SET avatar_url = '<SUPABASE_URL>/storage/v1/object/public/avatars/demo/aisha.jpg'  WHERE id = '<AISHA_ID>';
UPDATE profiles SET avatar_url = '<SUPABASE_URL>/storage/v1/object/public/avatars/demo/ben.jpg'    WHERE id = '<BEN_ID>';
```

- [ ] **Step 5: Verify one URL is publicly accessible**

```bash
curl -I "<SUPABASE_URL>/storage/v1/object/public/avatars/demo/rachel.jpg"
```

Expected: HTTP 200.

---

## Task 6: Clear and insert all demo content

**Files:**
- Create: `marketing/scripts/demo-data.sql` (reference copy)

Run all SQL via Supabase MCP `execute_sql`. Write the same SQL to `marketing/scripts/demo-data.sql` using the Write tool so it can be re-run in the future.

- [ ] **Step 1: Clear any existing demo content**

```sql
DELETE FROM goal_subtasks  WHERE workspace_id = '<WORKSPACE_ID>';
DELETE FROM goal_members   WHERE workspace_id = '<WORKSPACE_ID>';
DELETE FROM goals          WHERE workspace_id = '<WORKSPACE_ID>';
DELETE FROM kpis           WHERE workspace_id = '<WORKSPACE_ID>';
DELETE FROM one_on_one_notes WHERE one_on_one_id IN (SELECT id FROM one_on_ones WHERE workspace_id = '<WORKSPACE_ID>');
DELETE FROM one_on_ones    WHERE workspace_id = '<WORKSPACE_ID>';
DELETE FROM meeting_agenda_items WHERE workspace_id = '<WORKSPACE_ID>';
DELETE FROM team_meetings  WHERE workspace_id = '<WORKSPACE_ID>';
DELETE FROM tasks          WHERE workspace_id = '<WORKSPACE_ID>';
```

- [ ] **Step 2: Insert tasks**

```sql
INSERT INTO tasks (id, title, priority, status, assigned_to, created_by, due_date, workspace_id, tags, created_at, updated_at)
VALUES
  (gen_random_uuid(), 'Prepare Q2 pipeline review',           'high',   'todo',        '<RACHEL_ID>', '<RACHEL_ID>', '2026-04-20', '<WORKSPACE_ID>', '{}', now(), now()),
  (gen_random_uuid(), 'Follow up with Northgate account',     'high',   'in_progress', '<DEVON_ID>',  '<RACHEL_ID>', '2026-04-18', '<WORKSPACE_ID>', '{}', now(), now()),
  (gen_random_uuid(), 'Send proposal to Westfield Group',     'high',   'in_review',   '<DEVON_ID>',  '<RACHEL_ID>', '2026-04-22', '<WORKSPACE_ID>', '{}', now(), now()),
  (gen_random_uuid(), 'Update territory assignments',         'medium', 'todo',        '<AISHA_ID>',  '<RACHEL_ID>', '2026-04-25', '<WORKSPACE_ID>', '{}', now(), now()),
  (gen_random_uuid(), 'Review SDR call recordings',          'medium', 'todo',        '<BEN_ID>',    '<RACHEL_ID>', '2026-04-21', '<WORKSPACE_ID>', '{}', now(), now()),
  (gen_random_uuid(), 'Schedule QBR with leadership',        'low',    'todo',        '<RACHEL_ID>', '<RACHEL_ID>', '2026-04-30', '<WORKSPACE_ID>', '{}', now(), now());
```

- [ ] **Step 3: Insert 1:1 records**

```sql
INSERT INTO one_on_ones (id, manager_id, employee_id, scheduled_date, recurrence, is_complete, workspace_id, created_at)
VALUES
  (gen_random_uuid(), '<RACHEL_ID>', '<DEVON_ID>', '2026-04-22', 'weekly', false, '<WORKSPACE_ID>', now()),
  (gen_random_uuid(), '<RACHEL_ID>', '<AISHA_ID>', '2026-04-23', 'weekly', false, '<WORKSPACE_ID>', now()),
  (gen_random_uuid(), '<RACHEL_ID>', '<BEN_ID>',   '2026-04-24', 'weekly', false, '<WORKSPACE_ID>', now());
```

- [ ] **Step 4: Get Devon's 1:1 ID and insert notes**

```sql
SELECT id FROM one_on_ones
WHERE manager_id = '<RACHEL_ID>' AND employee_id = '<DEVON_ID>';
```

Note the returned UUID as `DEVON_OOO_ID`, then:

```sql
INSERT INTO one_on_one_notes (id, one_on_one_id, section, content, user_id, created_at, updated_at)
VALUES
  (gen_random_uuid(), '<DEVON_OOO_ID>', 'going_well',  'Northgate deal progressing — legal review starts this week',     '<RACHEL_ID>', now(), now()),
  (gen_random_uuid(), '<DEVON_OOO_ID>', 'going_well',  'Exceeded call volume goal — 47 calls vs 40 target',              '<DEVON_ID>',  now(), now()),
  (gen_random_uuid(), '<DEVON_OOO_ID>', 'challenges',  'Waiting on Westfield contract redline — blocking close',          '<DEVON_ID>',  now(), now()),
  (gen_random_uuid(), '<DEVON_OOO_ID>', 'kpi_checkin', 'Quota attainment at 94% — on track for Q2 close',                '<RACHEL_ID>', now(), now()),
  (gen_random_uuid(), '<DEVON_OOO_ID>', 'kpi_checkin', 'Pipeline coverage at 82% — need 2 more qualified opps by EOW',   '<RACHEL_ID>', now(), now()),
  (gen_random_uuid(), '<DEVON_OOO_ID>', 'general',     'Thinking about enterprise motion — worth discussing path to AE2', '<DEVON_ID>',  now(), now());
```

- [ ] **Step 5: Insert team meeting with agenda**

```sql
WITH mtg AS (
  INSERT INTO team_meetings (id, workspace_id, created_by, title, scheduled_date, status, recurrence_interval, created_at, updated_at)
  VALUES (gen_random_uuid(), '<WORKSPACE_ID>', '<RACHEL_ID>', 'Weekly Pipeline Review', '2026-04-22', 'upcoming', 'weekly', now(), now())
  RETURNING id
)
INSERT INTO meeting_agenda_items (id, meeting_id, workspace_id, created_by, content, item_type, status, sort_order, created_at, updated_at)
SELECT
  gen_random_uuid(), mtg.id, '<WORKSPACE_ID>', '<RACHEL_ID>', item.content, 'text', item.status, item.ord, now(), now()
FROM mtg,
(VALUES
  ('Review open deals by rep — Northgate, Westfield, Elm Street', 'open',      1),
  ('Forecast update for Q2 — where do we land?',                  'open',      2),
  ('Blockers and escalations — anything needing my help?',        'discussed', 3),
  ('Wins from this week',                                         'open',      4)
) AS item(content, status, ord);
```

- [ ] **Step 6: Insert KPIs**

```sql
INSERT INTO kpis (id, name, target_value, current_value, unit, time_period, assigned_to, is_on_track, workspace_id, created_by, created_at, updated_at)
VALUES
  (gen_random_uuid(), 'Pipeline Coverage',   100, 82,  'percentage', 'quarterly', '<RACHEL_ID>', true,  '<WORKSPACE_ID>', '<RACHEL_ID>', now(), now()),
  (gen_random_uuid(), 'Quota Attainment',    100, 94,  'percentage', 'quarterly', '<DEVON_ID>',  true,  '<WORKSPACE_ID>', '<RACHEL_ID>', now(), now()),
  (gen_random_uuid(), 'Demos Booked',         20, 14,  'number',     'monthly',   '<AISHA_ID>',  true,  '<WORKSPACE_ID>', '<RACHEL_ID>', now(), now()),
  (gen_random_uuid(), 'SDR Response Time',    80, 58,  'percentage', 'monthly',   '<BEN_ID>',    false, '<WORKSPACE_ID>', '<RACHEL_ID>', now(), now());
```

- [ ] **Step 7: Insert goals with subtasks**

```sql
WITH g1 AS (
  INSERT INTO goals (id, title, description, status, due_date, assigned_to, created_by, workspace_id, created_at, updated_at)
  VALUES (gen_random_uuid(), 'Hit Q2 Revenue Target', 'Close enough pipeline to hit the Q2 number', 'in_progress', '2026-06-30', '<RACHEL_ID>', '<RACHEL_ID>', '<WORKSPACE_ID>', now(), now())
  RETURNING id
),
g2 AS (
  INSERT INTO goals (id, title, description, status, due_date, assigned_to, created_by, workspace_id, created_at, updated_at)
  VALUES (gen_random_uuid(), 'Expand into 2 New Verticals', 'Open qualified pipeline in manufacturing and logistics', 'not_started', '2026-06-30', '<AISHA_ID>', '<RACHEL_ID>', '<WORKSPACE_ID>', now(), now())
  RETURNING id
)
INSERT INTO goal_subtasks (id, goal_id, title, is_complete, position, workspace_id, created_at)
SELECT gen_random_uuid(), g1.id, sub.title, sub.done, sub.pos, '<WORKSPACE_ID>', now()
FROM g1,
(VALUES
  ('Close 3 enterprise deals',              true,  1),
  ('Expand SMB pipeline to 80% coverage',   false, 2),
  ('Complete 15 discovery calls in April',  true,  3)
) AS sub(title, done, pos)
UNION ALL
SELECT gen_random_uuid(), g2.id, sub.title, sub.done, sub.pos, '<WORKSPACE_ID>', now()
FROM g2,
(VALUES
  ('Identify 5 target accounts per vertical', false, 1),
  ('Book intro calls with 3 manufacturing leads', false, 2)
) AS sub(title, done, pos);
```

- [ ] **Step 8: Save the SQL as a reference file**

Write the full SQL (all steps above, with actual IDs substituted) to `marketing/scripts/demo-data.sql` using the Write tool so it can be re-run without looking up IDs again.

---

## Task 7: Write the Playwright screenshot script

**Files:**
- Create: `marketing/scripts/capture-screenshots.mjs`

- [ ] **Step 1: Install Playwright in the marketing project**

```bash
cd "/Users/seandavis/Documents/Claude/Projects/Cadence/marketing"
npm install --save-dev playwright
npx playwright install chromium
```

Expected: Playwright installed, Chromium browser downloaded.

- [ ] **Step 2: Create the script**

Write the following to `marketing/scripts/capture-screenshots.mjs`:

```js
// capture-screenshots.mjs
// Run from the marketing directory:
//   node scripts/capture-screenshots.mjs
//
// Requires: npm install --save-dev playwright && npx playwright install chromium
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
  // Wait for the main app shell to be visible (sidebar nav)
  await page.waitForSelector('nav, [data-testid="sidebar"], aside', { timeout: 15000 });
  // Give React a moment to finish rendering
  await page.waitForTimeout(800);
}

async function screenshot(page, filename) {
  await page.waitForTimeout(400);
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

  // ── Login ────────────────────────────────────────────────────
  console.log('Logging in...');
  await page.goto(`${BASE_URL}/login`);
  await page.waitForSelector('input[type="email"]', { timeout: 10000 });
  await page.fill('input[type="email"]', EMAIL);
  await page.fill('input[type="password"]', PASSWORD);
  await page.click('button[type="submit"]');
  await page.waitForURL(`${BASE_URL}/dashboard`, { timeout: 15000 });
  await waitForApp(page);
  console.log('Logged in.\n');

  // ── 1. Dashboard ─────────────────────────────────────────────
  console.log('Capturing screenshots...');
  await page.goto(`${BASE_URL}/dashboard`);
  await waitForApp(page);
  await screenshot(page, 'dashboard.png');

  // ── 2. Tasks ─────────────────────────────────────────────────
  await page.goto(`${BASE_URL}/tasks`);
  await waitForApp(page);
  await page.waitForSelector('table, [data-testid="task-list"], .task-row, tr', { timeout: 10000 });
  await screenshot(page, 'tasks.png');

  // ── 3. 1:1 Meetings list ─────────────────────────────────────
  await page.goto(`${BASE_URL}/one-on-ones`);
  await waitForApp(page);
  await page.waitForSelector('[data-testid="one-on-one-item"], .one-on-one-row, h3, h2', { timeout: 10000 });
  await screenshot(page, 'one-on-ones.png');

  // ── 4. 1:1 Detail — Devon Lewis ──────────────────────────────
  // Click the first 1:1 card in the list (Devon is listed first by scheduled_date)
  const firstOooLink = await page.locator('a[href*="/one-on-ones/"]').first();
  const oooHref = await firstOooLink.getAttribute('href');
  await page.goto(`${BASE_URL}${oooHref}`);
  await waitForApp(page);
  await page.waitForSelector('section, .section-header, h3', { timeout: 10000 });
  await screenshot(page, 'one-on-one-detail.png');

  // ── 5. Team Meetings detail ───────────────────────────────────
  await page.goto(`${BASE_URL}/team-meetings`);
  await waitForApp(page);
  await page.waitForSelector('a[href*="/team-meetings/"]', { timeout: 10000 });
  const firstMeetingLink = await page.locator('a[href*="/team-meetings/"]').first();
  const meetingHref = await firstMeetingLink.getAttribute('href');
  await page.goto(`${BASE_URL}${meetingHref}`);
  await waitForApp(page);
  await page.waitForSelector('[data-testid="agenda-item"], .agenda-item, li', { timeout: 10000 });
  await screenshot(page, 'team-meetings.png');

  // ── 6. KPIs tab ──────────────────────────────────────────────
  await page.goto(`${BASE_URL}/kpis`);
  await waitForApp(page);
  await page.waitForSelector('[data-testid="kpi-card"], .kpi-card, .card', { timeout: 10000 });
  await screenshot(page, 'kpis.png');

  // ── 7. Goals tab ─────────────────────────────────────────────
  // Click the Goals tab
  const goalsTab = page.locator('button:has-text("Goals"), [role="tab"]:has-text("Goals")');
  await goalsTab.click();
  await page.waitForTimeout(600);
  await page.waitForSelector('[data-testid="goal-card"], .goal-card, .card', { timeout: 10000 });
  await screenshot(page, 'goals.png');

  // ── 8. Team org chart ────────────────────────────────────────
  await page.goto(`${BASE_URL}/team`);
  await waitForApp(page);
  await page.waitForSelector('[data-testid="org-chart"], .org-chart, .team-member, img[alt]', { timeout: 10000 });
  await screenshot(page, 'team.png');

  await browser.close();
  console.log('\nDone. 8 screenshots saved to public/screenshots/');
}

main().catch(err => { console.error(err); process.exit(1); });
```

---

## Task 8: Run the screenshot script and verify output

**Files:**
- Modify: `marketing/public/screenshots/*.png` (8 files replaced/created)

- [ ] **Step 1: Run the script**

```bash
cd "/Users/seandavis/Documents/Claude/Projects/Cadence/marketing"
node scripts/capture-screenshots.mjs
```

Expected output:
```
Logging in...
Logged in.

Capturing screenshots...
  ✓ dashboard.png
  ✓ tasks.png
  ✓ one-on-ones.png
  ✓ one-on-one-detail.png
  ✓ team-meetings.png
  ✓ kpis.png
  ✓ goals.png
  ✓ team.png

Done. 8 screenshots saved to public/screenshots/
```

- [ ] **Step 2: Verify screenshot files exist and have reasonable sizes**

```bash
ls -lh "/Users/seandavis/Documents/Claude/Projects/Cadence/marketing/public/screenshots/"
```

Expected: 8 `.png` files, each between 100KB and 2MB.

- [ ] **Step 3: Visually inspect all 8 screenshots**

Read each PNG file using the Read tool and check:
- No Next.js "N" dev indicator in any corner
- Rachel Cole and real headshots visible (not initials-only avatars)
- Sales team content visible (not engineering team names)
- Devon's 1:1 shows the structured sections (What's Going Well, Challenges, etc.)
- Goals tab shows goal cards with subtasks
- All 8 images look complete (no blank/loading states)

If any screenshot has issues (loading spinner visible, wrong page, initials still showing), re-run the script for that page only by temporarily removing the other `screenshot()` calls and running again.

---

## Task 9: Update features page to reference new screenshots

**Files:**
- Modify: `marketing/src/app/features/page.tsx`

The features page needs two additions:
1. A second screenshot in the 1:1 Meetings section showing the detail view
2. A second screenshot in the KPI Goals section showing the Goals tab

- [ ] **Step 1: Add 1:1 detail screenshot below the existing 1:1 list screenshot**

In `features/page.tsx` at line ~280, after the closing `</div>` of the existing `one-on-ones.png` browser frame (around line 283), add inside the same `flex-1 w-full` container:

```tsx
              {/* 1:1 detail view */}
              <div
                style={{
                  borderRadius: 10,
                  overflow: 'hidden',
                  border: '1px solid #D0CAC0',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                  marginTop: 16,
                }}
              >
                <div
                  style={{
                    background: '#EBE6DD',
                    padding: '10px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    borderBottom: '1px solid #D0CAC0',
                  }}
                >
                  <div style={{ display: 'flex', gap: 5 }}>
                    {['#C2604A', '#C8782A', '#7B8F6A'].map((c, i) => (
                      <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.75 }} />
                    ))}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      background: 'white',
                      borderRadius: 4,
                      padding: '3px 12px',
                      fontSize: 11,
                      color: '#9C968B',
                      fontFamily: 'var(--font-dm-sans)',
                    }}
                  >
                    app.cadencehq.co/1-1s/devon-lewis
                  </div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/screenshots/one-on-one-detail.png"
                  alt="Cadence 1:1 meeting detail with structured agenda sections"
                  style={{ width: '100%', maxWidth: '100%', display: 'block' }}
                />
              </div>
```

The insertion point is right after this existing block (around line 281):
```tsx
                <img
                  src="/screenshots/one-on-ones.png"
                  alt="Cadence 1:1 meeting agendas"
                  style={{ width: '100%', maxWidth: '100%', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
```

Insert the new block between `</div>{/* closes browser frame */}` and `</div>{/* closes flex-1 w-full */}`.

- [ ] **Step 2: Add Goals tab screenshot below the existing KPIs screenshot**

In `features/page.tsx`, the existing kpis.png image block is around line 690–700. After the closing `</div>` of that browser frame, add inside the same `flex-1 w-full` container:

```tsx
              {/* Goals tab */}
              <div
                style={{
                  borderRadius: 10,
                  overflow: 'hidden',
                  border: '1px solid #D0CAC0',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.10)',
                  marginTop: 16,
                }}
              >
                <div
                  style={{
                    background: '#EBE6DD',
                    padding: '10px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    borderBottom: '1px solid #D0CAC0',
                  }}
                >
                  <div style={{ display: 'flex', gap: 5 }}>
                    {['#C2604A', '#C8782A', '#7B8F6A'].map((c, i) => (
                      <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.75 }} />
                    ))}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      background: 'white',
                      borderRadius: 4,
                      padding: '3px 12px',
                      fontSize: 11,
                      color: '#9C968B',
                      fontFamily: 'var(--font-dm-sans)',
                    }}
                  >
                    app.cadencehq.co/goals
                  </div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/screenshots/goals.png"
                  alt="Cadence team goals with subtasks and progress tracking"
                  style={{ width: '100%', maxWidth: '100%', display: 'block' }}
                />
              </div>
```

- [ ] **Step 3: Verify the marketing site builds without errors**

```bash
cd "/Users/seandavis/Documents/Claude/Projects/Cadence/marketing"
npm run build 2>&1 | tail -20
```

Expected: Build completes with no errors. Warnings about `img` vs `Image` are acceptable (they already exist).

---

## Task 10: Final review and commit

**Files:**
- All modified files above

- [ ] **Step 1: Check git status**

```bash
cd "/Users/seandavis/Documents/Claude/Projects/Cadence/marketing"
git status
```

Expected: Modified `src/app/features/page.tsx`; new files in `public/screenshots/` and `scripts/`.

- [ ] **Step 2: Stage and commit**

```bash
cd "/Users/seandavis/Documents/Claude/Projects/Cadence/marketing"
git add public/screenshots/ scripts/capture-screenshots.mjs scripts/demo-data.sql scripts/avatars/ src/app/features/page.tsx
git commit -m "$(cat <<'EOF'
feat: refresh marketing screenshots with sales team demo data

- Replace 6 existing screenshots with sales team personas (Rachel Cole,
  Devon Lewis, Aisha Morris, Ben Torres) using real headshots
- Add two new screenshots: 1:1 detail view and Goals tab
- Remove Next.js dev indicator by capturing against production
- Update features page to show 1:1 detail and Goals screenshots
- Add capture-screenshots.mjs Playwright script for future re-runs
- Add demo-data.sql for repeatable QA data setup

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
EOF
)"
```

- [ ] **Step 3: Verify commit**

```bash
cd "/Users/seandavis/Documents/Claude/Projects/Cadence/marketing"
git log --oneline -3
git show --stat HEAD
```

---

## Notes

- **Re-running screenshots later:** Run `node scripts/capture-screenshots.mjs` from the marketing directory at any time. The demo data in Supabase QA persists until manually cleared.
- **Goals tab URL:** The script clicks the Goals tab rather than navigating to a URL, since the exact query param format needs to match the app's router. If the tab click fails, try navigating to `/kpis?tab=goals` directly.
- **Playwright selector fallbacks:** The selectors in the script use multiple fallbacks (e.g., `'table, [data-testid="task-list"], .task-row, tr'`). If any screenshot captures a loading state, increase the `waitForTimeout` for that page from 800ms to 1500ms.
- **Profile photo aspect ratio:** `sips -z 400 400` forces a square crop. If a photo has important content at the edges, use `sips -Z 400` (preserves aspect ratio, max dimension 400px) instead.
