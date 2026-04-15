# Blog Page Redesign — Design Spec
**Date:** 2026-04-15  
**Project:** Cadence Marketing Site (`cadencehq.co/blog`)  
**Status:** Approved — ready for implementation

---

## Summary

Redesign the `/blog` page from a basic editorial list into a search-first resource hub. The primary goals are discoverability (find content fast via search and filters), and a framework for a future resource library (templates, checklists, guides) that can be filled in as content is created.

The individual blog post pages (`/blog/[slug]`) are not in scope for this redesign. SEO metadata already added to posts yesterday is fully preserved.

---

## What Changes

The current page has:
- Warm cream hero with title + tagline
- Large dark navy featured post card (most recent post only)
- RhythmDivider decorative SVG
- 2-column grid of smaller cards (client-side category filter, no search)
- Green newsletter section
- Orange CTA section

The new page replaces the hero and featured card with a search-first header, upgrades the grid to 3 columns with search + filter controls, and adds a resource library section.

---

## Page Structure (top to bottom)

### 1. Navy Header
- Background: `#1C2B3A`
- Eyebrow: "The Cadence Blog" (small, uppercase, muted)
- H1: "Everything you need to manage better."
- Descriptor line: "Practical guides, frameworks, and resources for frontline managers."
- Centered search input with placeholder: `Search — try "delegation" or "1:1"`
- Search input styling: semi-transparent white on navy, glows on focus

### 2. Category Filter Bar
- Background: `#F5F0E8` (warm cream), bottom border `#DDD8CE`
- Pill buttons for: All, 1:1s, Delegation, Team Culture, KPIs, Management, Feedback
- Each pill shows a post count in parentheses: e.g. `Management (5)`
- Active pill: `#1C2B3A` background, white text
- Inactive pill: white background, `#D0CAC0` border, muted text
- Post counts are derived live from the MDX posts — no hardcoded values

### 3. Article Grid
- Background: white
- Results meta line above grid: e.g. "13 articles", "5 articles in Management", `2 results for "1:1"`
- 3-column grid, collapses to 2 on tablet, 1 on mobile
- No separate "featured" post — all posts treated equally, sorted newest-first
- The existing featured post card and RhythmDivider are removed

**Card anatomy:**
- Emoji thumbnail (placeholder until real cover images load; cover images displayed when present)
- Category kicker (uppercase, 10px, category color)
- Post title
- 2-line excerpt (clamped)
- Footer: author avatar + "Sean Davis · X min read" | "Read →" in orange

**Search behavior:**
- Client-side, instant (no server round-trip)
- Filters on: title, excerpt, kicker, category
- Works in combination with the active category filter
- No results state: "No articles found / Try a different search term or browse all categories."

### 4. Resources & Templates Section
- Background: `#F5F0E8`
- Heading: "Resources & Templates" + orange "COMING SOON" badge
- Descriptor: "Free templates, checklists, and guides to go alongside every article."
- 3-column grid of placeholder resource cards (dashed border, muted styling)
- Initial placeholders:
  - 📋 Template · 1:1s — "Weekly 1:1 Agenda Template"
  - ✅ Checklist · Delegation — "Delegation Readiness Checklist"
  - 💬 Guide · Feedback — "SBI Feedback Framework Card"
- When real resources are ready, cards become active (solid border, download/link action)
- Resource data lives in a new `src/app/blog/resourceData.ts` file — typed array consistent with the existing `blogData.ts` pattern. Each entry has: `icon`, `label`, `title`, `desc`, and `status: 'coming-soon' | 'available'`

### 5. Newsletter Section
- Keep existing green (`#7A9E82`) section
- Minor copy tweak: "Practical ideas for frontline managers. No fluff, no spam. Unsubscribe anytime."
- Email input + Subscribe button (navy background)

### 6. CTA Section
- Keep existing orange (`#C8782A`) section
- Copy update: "Ready to put it into practice?" (replaces "Ready to try Cadence?")
- Button: "Start free with Cadence" (replaces "Start free")

---

## Files to Change

| File | Change |
|------|--------|
| `src/app/blog/page.tsx` | Full rewrite — new header, remove featured card + RhythmDivider, add resource section, update CTA copy |
| `src/app/blog/BlogFilterGrid.tsx` | Full rewrite — add search input (lifted up or co-located), 3-col grid, search logic, results meta line |
| `src/app/blog/blogData.ts` | No change needed — data lives in MDX files via `getAllPosts()` |
| `src/lib/blog.ts` | No change |

| `src/app/blog/resourceData.ts` | New file — typed list of resource placeholders (icon, label, title, desc, status: 'coming-soon' \| 'available') |

---

## Search Implementation

Client-side only. No external library needed at 13–50 posts.

Logic:
```
query = searchInput.toLowerCase().trim()
filtered = posts.filter(p =>
  p.title.toLowerCase().includes(query) ||
  p.excerpt.toLowerCase().includes(query) ||
  p.kicker.toLowerCase().includes(query) ||
  p.category.toLowerCase().includes(query)
)
```

Search and category filter compose: active category narrows the pool, then search filters within it.

**Component architecture:** `BlogFilterGrid` is expanded into the full interactive section of the page. It renders:
1. The navy header (eyebrow, H1, descriptor, search input)
2. The category filter bar
3. The article grid

`page.tsx` (server component) calls `getAllPosts()`, passes `posts` as a prop to `BlogFilterGrid`, then renders the static sections below it (resources, newsletter, CTA). This keeps all interactive state — search query, active category — in one client component with no URL params or server round-trips needed.

---

## SEO Preservation

All existing SEO work is preserved:
- `page.tsx` metadata export (title, description, OpenGraph, Twitter) — unchanged
- Individual post `metaTitle`, `metaDescription`, `shareTitle`, `shareUrl` fields in MDX — untouched
- Post slugs and URLs — unchanged
- `getAllPosts()` sort order (newest first) — unchanged
- The removal of the featured post card does not affect SEO; it was a UI element only

---

## What Is NOT in Scope

- Individual post page (`/blog/[slug]`) — no changes
- Adding a bookmarking / save-for-later feature (deferred to future phase)
- Populating actual resource templates (content to be created separately)
- Newsletter backend / email capture logic (currently uses mailto fallback; unchanged)
- Guided reading paths by manager type (deferred to future phase)
- Adding new blog posts (separate workflow)

---

## Future Phases (not in this build)

- **Resources populated:** As templates/checklists are created, swap placeholder cards for real downloads
- **Save for later / reading list:** Bookmark articles to a local reading queue
- **Guided paths:** "New Manager," "Managing Remote Teams" curated reading sequences
- **Related posts:** Show 2–3 related articles at bottom of each post page

---

## Approved Mockup

Interactive HTML mockup saved at:
`.superpowers/brainstorm/3405-1776269340/content/full-page-draft.html`

Design approved by Sean Davis on 2026-04-15.
