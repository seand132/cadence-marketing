# Screenshot refresh design

**Date:** 2026-04-15  
**Status:** Approved

## Summary

Replace the current 6 marketing screenshots with 8 polished, production-quality screenshots. Key problems with the existing ones: all team members show initials-only avatars (no photos), the Next.js dev indicator ("N") is visible in every screenshot, the demo personas are a generic engineering team, and two significant features (Goals, 1:1 detail) are completely absent from marketing.

## Decisions

| Question | Decision |
|---|---|
| Profile photos | Stock/royalty-free headshots from Unsplash |
| Demo scenario | Sales team (most universally legible) |
| Execution approach | Supabase SQL + Playwright automation |
| Scope | 8 screenshots (6 refreshed, 2 new) |

## New personas

The logged-in user is Rachel Cole. She manages three direct reports.

| Name | Role | Avatar initials |
|---|---|---|
| Rachel Cole | Sales Manager | RC |
| Devon Lewis | Account Executive | DL |
| Aisha Morris | Account Executive | AM |
| Ben Torres | Sales Development Rep | BT |

Each persona gets a royalty-free headshot sourced from Unsplash, resized to 200×200px, uploaded to Supabase Storage, and linked via the `avatar_url` field on their profile record.

## Screenshots — 8 screens

### 1. Dashboard (existing, refreshed)
Rachel's home view. Stats bar: 5 active tasks, 1 overdue, 3 KPIs on track. Upcoming 1:1s panel showing Devon and Aisha. Team tasks section showing delegated work across all three reports. Greeting: "Good morning, Rachel!"

### 2. Tasks (existing, refreshed)
Task list with 6-7 sales-specific tasks across multiple people:
- "Prepare Q2 pipeline review" — High / Rachel / To Do
- "Follow up with Northgate account" — High / Devon / In Progress
- "Review SDR call recordings" — Medium / Ben / To Do
- "Update territory assignments" — Medium / Aisha / To Do
- "Schedule QBR with leadership" — Low / Rachel / To Do
- "Send proposal to Westfield Group" — High / Devon / In Review

Mix of priorities and statuses to show the filtering/sorting UI.

### 3. 1:1 Meetings list (existing, refreshed)
Three recurring weekly 1:1s — Devon, Aisha, Ben. All showing profile photos and "Upcoming" next meeting date. No initials-only avatars.

### 4. 1:1 Detail — Devon Lewis (NEW)
Devon's 1:1 detail page. Structured sections visible:
- **What's Going Well** — "Northgate deal progressing well", "Exceeded call volume goal this week"
- **Challenges & Blockers** — "Waiting on legal review for Enterprise contract"
- **Action Items** — 1-2 linked tasks shown inline
- **Goals & KPI Check-in** — quota at 94%, pipeline coverage on track

This screen is the strongest product differentiator — no other small-team tool structures 1:1s this way.

### 5. Team Meetings detail (existing, refreshed)
"Weekly Pipeline Review" meeting. Status: Upcoming. Agenda items:
- "Review open deals by rep"
- "Forecast update for Q2"
- "Blockers and escalations"
- "Wins from this week"

Some items marked Discussed to show the meeting-in-progress state.

### 6. KPIs tab (existing, refreshed)
KPIs tab on the KPIs & Goals page. Four KPI cards:
- Pipeline Coverage — 82% / 100% — On Track — Rachel
- Quota Attainment — 94% / 100% — On Track — Devon
- Demos Booked — 14 / 20 — On Track — Aisha
- SDR Response Time — 58% / 80% — Off Track — Ben

One off-track card keeps the demo realistic rather than suspiciously perfect.

### 7. Goals tab (NEW)
Goals tab on the same KPIs & Goals page. Two team goals with subtasks:
- "Hit Q2 revenue target" — In Progress — subtasks visible (e.g., "Close 3 enterprise deals", "Expand SMB pipeline")
- "Expand into 2 new verticals" — Not Started

This feature is completely absent from current marketing.

### 8. Team org chart (existing, refreshed)
Org chart view: Rachel at top as Sales Manager, Devon / Aisha / Ben below with titles and real profile photos. No initials-only avatars.

## Build steps

### Step 1 — Source headshots
Download 4 royalty-free professional headshots from Unsplash. Diverse set: Rachel (woman), Devon (man), Aisha (woman), Ben (man). Resize each to 200×200px.

### Step 2 — Upload to Supabase Storage
Upload each photo to Supabase Storage in the Cadence QA project. Confirm the correct bucket name by checking the Supabase dashboard — likely `avatars`. Capture the public URL for each.

### Step 3 — Supabase SQL — update users and demo data
Run SQL against the Cadence QA project to:
- Update the 4 user profiles: names, titles, avatar URLs
- Upsert tasks (6-7 records matching the task list above)
- Upsert 3 one-on-one records (Devon, Aisha, Ben — weekly)
- Upsert 1:1 notes for Devon's session (structured sections)
- Upsert 1 team meeting ("Weekly Pipeline Review") with agenda items
- Upsert 4 KPI records
- Upsert 2 goal records with subtasks

### Step 4 — Playwright screenshot script
Script logs into app.cadencehq.co (production — no Next.js dev indicator) as Rachel Cole, navigates to each of the 8 pages, and captures screenshots at 1280×800. Output files saved to `marketing/public/screenshots/`.

Pages and output filenames:
| Route | Output file | Notes |
|---|---|---|
| /dashboard | dashboard.png | |
| /tasks | tasks.png | |
| /one-on-ones | one-on-ones.png | |
| /one-on-ones/[id] | one-on-one-detail.png | ID resolved at runtime after Step 3 data setup |
| /team-meetings/[id] | team-meetings.png | ID resolved at runtime after Step 3 data setup |
| /kpis | kpis.png | KPIs tab is default; confirm URL format in app |
| /kpis (goals tab) | goals.png | Confirm query param format — likely `?tab=goals` based on app code, but verify |
| /team | team.png | |

### Step 5 — Update marketing site
- Add `goals.png` and `one-on-one-detail.png` to the features page where appropriate
- Verify all existing `<Image>` references still resolve

## What we're not adding

- **Task detail view** — the list view communicates the feature; the detail page is mostly edit UI
- **Settings** — utility screen, not a feature showcase
- **Login/signup** — not worth adding to marketing

## Test account

- **URL:** app.cadencehq.co
- **Email:** claude.test@cadencehq.co
- **Password:** CadenceQA2026!
- **Workspace:** Cadence QA
- **Supabase project:** Cadence (credentials in memory)
