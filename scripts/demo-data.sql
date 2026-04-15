-- Cadence QA Demo Data
-- Workspace: 6fca2843-5a41-49d7-bb04-2f44f031a586
-- Last run: 2026-04-15
--
-- Profiles:
--   RACHEL_ID:  8a1ff025-844d-47e3-a174-e362d40e03bc  (manager)
--   DEVON_ID:   f0c98ba8-ac6b-49b8-9f00-93ff5bcd6907
--   AISHA_ID:   3dd241a5-11fb-4532-acc8-cbdccccdd8a7
--   BEN_ID:     15097fd9-178f-4faa-be1d-87b369c138d4


-- ============================================================
-- STEP 1: Clear existing demo content
-- ============================================================

DELETE FROM goal_subtasks  WHERE workspace_id = '6fca2843-5a41-49d7-bb04-2f44f031a586';
DELETE FROM goal_members   WHERE workspace_id = '6fca2843-5a41-49d7-bb04-2f44f031a586';
DELETE FROM goals          WHERE workspace_id = '6fca2843-5a41-49d7-bb04-2f44f031a586';
DELETE FROM kpis           WHERE workspace_id = '6fca2843-5a41-49d7-bb04-2f44f031a586';
DELETE FROM one_on_one_notes WHERE one_on_one_id IN (SELECT id FROM one_on_ones WHERE workspace_id = '6fca2843-5a41-49d7-bb04-2f44f031a586');
DELETE FROM one_on_ones    WHERE workspace_id = '6fca2843-5a41-49d7-bb04-2f44f031a586';
DELETE FROM meeting_agenda_items WHERE workspace_id = '6fca2843-5a41-49d7-bb04-2f44f031a586';
DELETE FROM team_meetings  WHERE workspace_id = '6fca2843-5a41-49d7-bb04-2f44f031a586';
DELETE FROM tasks          WHERE workspace_id = '6fca2843-5a41-49d7-bb04-2f44f031a586';


-- ============================================================
-- STEP 2: Tasks
-- ============================================================

INSERT INTO tasks (id, title, priority, status, assigned_to, created_by, due_date, workspace_id, tags, created_at, updated_at)
VALUES
  (gen_random_uuid(), 'Prepare Q2 pipeline review',           'high',   'todo',        '8a1ff025-844d-47e3-a174-e362d40e03bc', '8a1ff025-844d-47e3-a174-e362d40e03bc', '2026-04-20', '6fca2843-5a41-49d7-bb04-2f44f031a586', '{}', now(), now()),
  (gen_random_uuid(), 'Follow up with Northgate account',     'high',   'in_progress', 'f0c98ba8-ac6b-49b8-9f00-93ff5bcd6907', '8a1ff025-844d-47e3-a174-e362d40e03bc', '2026-04-18', '6fca2843-5a41-49d7-bb04-2f44f031a586', '{}', now(), now()),
  (gen_random_uuid(), 'Send proposal to Westfield Group',     'high',   'in_review',   'f0c98ba8-ac6b-49b8-9f00-93ff5bcd6907', '8a1ff025-844d-47e3-a174-e362d40e03bc', '2026-04-22', '6fca2843-5a41-49d7-bb04-2f44f031a586', '{}', now(), now()),
  (gen_random_uuid(), 'Update territory assignments',         'medium', 'todo',        '3dd241a5-11fb-4532-acc8-cbdccccdd8a7', '8a1ff025-844d-47e3-a174-e362d40e03bc', '2026-04-25', '6fca2843-5a41-49d7-bb04-2f44f031a586', '{}', now(), now()),
  (gen_random_uuid(), 'Review SDR call recordings',           'medium', 'todo',        '15097fd9-178f-4faa-be1d-87b369c138d4', '8a1ff025-844d-47e3-a174-e362d40e03bc', '2026-04-21', '6fca2843-5a41-49d7-bb04-2f44f031a586', '{}', now(), now()),
  (gen_random_uuid(), 'Schedule QBR with leadership',         'low',    'todo',        '8a1ff025-844d-47e3-a174-e362d40e03bc', '8a1ff025-844d-47e3-a174-e362d40e03bc', '2026-04-30', '6fca2843-5a41-49d7-bb04-2f44f031a586', '{}', now(), now());


-- ============================================================
-- STEP 3: 1:1 records
-- ============================================================

INSERT INTO one_on_ones (id, manager_id, employee_id, scheduled_date, recurrence, is_complete, workspace_id, created_at)
VALUES
  (gen_random_uuid(), '8a1ff025-844d-47e3-a174-e362d40e03bc', 'f0c98ba8-ac6b-49b8-9f00-93ff5bcd6907', '2026-04-22', 'weekly', false, '6fca2843-5a41-49d7-bb04-2f44f031a586', now()),
  (gen_random_uuid(), '8a1ff025-844d-47e3-a174-e362d40e03bc', '3dd241a5-11fb-4532-acc8-cbdccccdd8a7', '2026-04-23', 'weekly', false, '6fca2843-5a41-49d7-bb04-2f44f031a586', now()),
  (gen_random_uuid(), '8a1ff025-844d-47e3-a174-e362d40e03bc', '15097fd9-178f-4faa-be1d-87b369c138d4', '2026-04-24', 'weekly', false, '6fca2843-5a41-49d7-bb04-2f44f031a586', now());


-- ============================================================
-- STEP 4: Devon's 1:1 notes
-- Note: Replace DEVON_OOO_ID with result of:
--   SELECT id FROM one_on_ones
--   WHERE manager_id = '8a1ff025-844d-47e3-a174-e362d40e03bc'
--     AND employee_id = 'f0c98ba8-ac6b-49b8-9f00-93ff5bcd6907';
-- ============================================================

-- Last known Devon 1:1 ID: 59f3690a-ea4b-4300-bedd-437ffec43e9d
-- (Will change each time Step 3 re-runs — always query first)

INSERT INTO one_on_one_notes (id, one_on_one_id, section, content, user_id, created_at, updated_at)
SELECT
  gen_random_uuid(),
  (SELECT id FROM one_on_ones WHERE manager_id = '8a1ff025-844d-47e3-a174-e362d40e03bc' AND employee_id = 'f0c98ba8-ac6b-49b8-9f00-93ff5bcd6907'),
  n.section, n.content, n.user_id, now(), now()
FROM (VALUES
  ('going_well',  'Northgate deal progressing — legal review starts this week',         '8a1ff025-844d-47e3-a174-e362d40e03bc'),
  ('going_well',  'Exceeded call volume goal — 47 calls vs 40 target',                  'f0c98ba8-ac6b-49b8-9f00-93ff5bcd6907'),
  ('challenges',  'Waiting on Westfield contract redline — blocking close',              'f0c98ba8-ac6b-49b8-9f00-93ff5bcd6907'),
  ('kpi_checkin', 'Quota attainment at 94% — on track for Q2 close',                    '8a1ff025-844d-47e3-a174-e362d40e03bc'),
  ('kpi_checkin', 'Pipeline coverage at 82% — need 2 more qualified opps by EOW',       '8a1ff025-844d-47e3-a174-e362d40e03bc'),
  ('general',     'Thinking about enterprise motion — worth discussing path to AE2',    'f0c98ba8-ac6b-49b8-9f00-93ff5bcd6907')
) AS n(section, content, user_id);


-- ============================================================
-- STEP 5: Team meeting + agenda
-- ============================================================

WITH mtg AS (
  INSERT INTO team_meetings (id, workspace_id, created_by, title, scheduled_date, status, recurrence_interval, created_at, updated_at)
  VALUES (gen_random_uuid(), '6fca2843-5a41-49d7-bb04-2f44f031a586', '8a1ff025-844d-47e3-a174-e362d40e03bc', 'Weekly Pipeline Review', '2026-04-22', 'upcoming', 'weekly', now(), now())
  RETURNING id
)
INSERT INTO meeting_agenda_items (id, meeting_id, workspace_id, created_by, content, item_type, status, sort_order, created_at, updated_at)
SELECT
  gen_random_uuid(), mtg.id, '6fca2843-5a41-49d7-bb04-2f44f031a586', '8a1ff025-844d-47e3-a174-e362d40e03bc', item.content, 'text', item.status, item.ord, now(), now()
FROM mtg,
(VALUES
  ('Review open deals by rep — Northgate, Westfield, Elm Street', 'open',      1),
  ('Forecast update for Q2 — where do we land?',                  'open',      2),
  ('Blockers and escalations — anything needing my help?',        'discussed', 3),
  ('Wins from this week',                                         'open',      4)
) AS item(content, status, ord);


-- ============================================================
-- STEP 6: KPIs
-- ============================================================

INSERT INTO kpis (id, name, target_value, current_value, unit, time_period, assigned_to, is_on_track, workspace_id, created_by, created_at, updated_at)
VALUES
  (gen_random_uuid(), 'Pipeline Coverage',   100, 82,  'percentage', 'quarterly', '8a1ff025-844d-47e3-a174-e362d40e03bc', true,  '6fca2843-5a41-49d7-bb04-2f44f031a586', '8a1ff025-844d-47e3-a174-e362d40e03bc', now(), now()),
  (gen_random_uuid(), 'Quota Attainment',    100, 94,  'percentage', 'quarterly', 'f0c98ba8-ac6b-49b8-9f00-93ff5bcd6907', true,  '6fca2843-5a41-49d7-bb04-2f44f031a586', '8a1ff025-844d-47e3-a174-e362d40e03bc', now(), now()),
  (gen_random_uuid(), 'Demos Booked',         20, 14,  'number',     'monthly',   '3dd241a5-11fb-4532-acc8-cbdccccdd8a7', true,  '6fca2843-5a41-49d7-bb04-2f44f031a586', '8a1ff025-844d-47e3-a174-e362d40e03bc', now(), now()),
  (gen_random_uuid(), 'SDR Response Time',    80, 58,  'percentage', 'monthly',   '15097fd9-178f-4faa-be1d-87b369c138d4', false, '6fca2843-5a41-49d7-bb04-2f44f031a586', '8a1ff025-844d-47e3-a174-e362d40e03bc', now(), now());


-- ============================================================
-- STEP 7: Goals + subtasks
-- Note: workspace_id cast to ::uuid required in goal_subtasks VALUES clause
-- ============================================================

WITH g1 AS (
  INSERT INTO goals (id, title, description, status, due_date, assigned_to, created_by, workspace_id, created_at, updated_at)
  VALUES (gen_random_uuid(), 'Hit Q2 Revenue Target', 'Close enough pipeline to hit the Q2 number', 'in_progress', '2026-06-30', '8a1ff025-844d-47e3-a174-e362d40e03bc', '8a1ff025-844d-47e3-a174-e362d40e03bc', '6fca2843-5a41-49d7-bb04-2f44f031a586', now(), now())
  RETURNING id
),
g2 AS (
  INSERT INTO goals (id, title, description, status, due_date, assigned_to, created_by, workspace_id, created_at, updated_at)
  VALUES (gen_random_uuid(), 'Expand into 2 New Verticals', 'Open qualified pipeline in manufacturing and logistics', 'not_started', '2026-06-30', '3dd241a5-11fb-4532-acc8-cbdccccdd8a7', '8a1ff025-844d-47e3-a174-e362d40e03bc', '6fca2843-5a41-49d7-bb04-2f44f031a586', now(), now())
  RETURNING id
)
INSERT INTO goal_subtasks (id, goal_id, title, is_complete, position, workspace_id, created_at)
SELECT gen_random_uuid(), g1.id, sub.title, sub.done::boolean, sub.pos::int, '6fca2843-5a41-49d7-bb04-2f44f031a586'::uuid, now()
FROM g1,
(VALUES
  ('Close 3 enterprise deals',             'true',  '1'),
  ('Expand SMB pipeline to 80% coverage',  'false', '2'),
  ('Complete 15 discovery calls in April', 'true',  '3')
) AS sub(title, done, pos)
UNION ALL
SELECT gen_random_uuid(), g2.id, sub.title, sub.done::boolean, sub.pos::int, '6fca2843-5a41-49d7-bb04-2f44f031a586'::uuid, now()
FROM g2,
(VALUES
  ('Identify 5 target accounts per vertical',      'false', '1'),
  ('Book intro calls with 3 manufacturing leads',  'false', '2')
) AS sub(title, done, pos);


-- ============================================================
-- STEP 8: Verify counts
-- Expected: tasks=6, one_on_ones=3, ooo_notes=6, team_meetings=1,
--           agenda_items=4, kpis=4, goals=2, goal_subtasks=5
-- ============================================================

SELECT
  (SELECT count(*) FROM tasks              WHERE workspace_id = '6fca2843-5a41-49d7-bb04-2f44f031a586') AS tasks,
  (SELECT count(*) FROM one_on_ones        WHERE workspace_id = '6fca2843-5a41-49d7-bb04-2f44f031a586') AS one_on_ones,
  (SELECT count(*) FROM one_on_one_notes   WHERE one_on_one_id IN (SELECT id FROM one_on_ones WHERE workspace_id = '6fca2843-5a41-49d7-bb04-2f44f031a586')) AS ooo_notes,
  (SELECT count(*) FROM team_meetings      WHERE workspace_id = '6fca2843-5a41-49d7-bb04-2f44f031a586') AS team_meetings,
  (SELECT count(*) FROM meeting_agenda_items WHERE workspace_id = '6fca2843-5a41-49d7-bb04-2f44f031a586') AS agenda_items,
  (SELECT count(*) FROM kpis               WHERE workspace_id = '6fca2843-5a41-49d7-bb04-2f44f031a586') AS kpis,
  (SELECT count(*) FROM goals              WHERE workspace_id = '6fca2843-5a41-49d7-bb04-2f44f031a586') AS goals,
  (SELECT count(*) FROM goal_subtasks      WHERE workspace_id = '6fca2843-5a41-49d7-bb04-2f44f031a586') AS goal_subtasks;
