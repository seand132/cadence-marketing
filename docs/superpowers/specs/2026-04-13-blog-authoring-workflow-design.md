# Cadence Blog — Authoring & Publishing Workflow

**Date:** 2026-04-13
**Scope:** cadencehq.co marketing site — blog content creation, image generation, and publishing
**Approach:** Claude Code terminal-native authoring + OpenAI GPT-4o image generation + Vercel preview branch for sign-off

---

## Context & Current State

The Cadence blog has 13 published MDX posts in `content/blog/`. The system is filesystem-based: `src/lib/blog.ts` reads `.mdx` files dynamically at build time using `gray-matter`. Posts support `draft: true` and future `publishDate` in frontmatter to hide unpublished content from the live site. Each post has a custom JPG cover image in `public/images/blog/`.

A legacy `src/app/blog/blogData.ts` hardcoded array coexists with the dynamic system — new posts added via MDX do not require changes to it. It is left in place.

---

## Workflow Overview

Five phases. Phases 1–3 happen in the terminal (no build waits). Phases 4–5 involve one Vercel build.

### Phase 1 — Initiation

Three supported modes, used interchangeably depending on the week:

| Mode | How it starts |
|------|--------------|
| Topic prompt | "Write a post about X" — Claude writes the full post |
| Notes drop | Sean pastes rough thoughts or an outline — Claude develops it into a post |
| Topic proposal | Claude reviews the existing 13 posts and proposes 3–5 ideas by category/gap — Sean picks one |

### Phase 2 — Draft

Claude writes the complete `.mdx` file with:
- Full article body in Cadence voice (warm, clear, mentor-like — not corporate, not AI-sounding)
- All required frontmatter fields (see template below)
- `draft: true` set so the post is invisible on the live site during iteration

File created at: `content/blog/[slug].mdx`

### Phase 3 — Terminal Iteration

Claude displays the post in the terminal. Sean reads and gives feedback. Claude revises. Repeat as needed — no build waits, fully synchronous. This is the main editing loop.

### Phase 4 — Image + Preview Deployment

Once the prose is approved:

1. **Image generation** — Claude crafts a scene-specific prompt using the locked style template (see Section 2) and calls the OpenAI GPT-4o image API via curl. The generated image is saved to `public/images/blog/[slug].jpg`. Sean reviews the image; if rejected, Claude generates another.

2. **Preview branch** — Claude commits everything to `draft/[slug]`, pushes to GitHub. Vercel auto-builds a preview deployment. Claude provides the preview URL.

3. **Browser review** — Sean opens the URL and reviews the fully rendered post on the actual site design. One build wait at this stage only.

### Phase 5 — Publish

Sean approves. Claude:
1. Removes `draft: true` from frontmatter
2. Merges `draft/[slug]` to `main`
3. Vercel deploys to production (~2 minutes)

Post is live at `https://cadencehq.co/blog/[slug]`.

---

## MDX Frontmatter Template

Every new post uses this complete frontmatter. Nothing omitted.

```mdx
---
title: ""
date: "YYYY-MM-DD"
excerpt: ""
category: ""
kicker: ""
readTime: "X min read"
author: "Sean Davis"
coverImage: "/images/blog/[slug].jpg"
slug: "[slug]"
metaTitle: "[Title] | Cadence Blog"
metaDescription: ""
ctaHeading: ""
ctaBody: ""
shareTitle: ""
shareUrl: "https://cadencehq.co/blog/[slug]"
draft: true
---
```

**Valid kicker values** (maps to styled label + color in the UI):
- `One-on-Ones` / `1:1s` — green
- `Delegation` — navy
- `Team Culture` — amber
- `Performance` / `KPIs` — navy
- `Framework` / `Management` — green
- `Feedback` — amber

---

## Section 2 — Image Generation

### Tool
OpenAI GPT-4o image generation API (`gpt-image-1` model). Called via curl from the terminal. Requires `OPENAI_API_KEY` in `.env.local`.

### Prompt Template

```
Cinematic editorial photograph. [SCENE]. Warm natural light, 
mid-century modern office setting, muted earth tones — cream, 
amber, charcoal. Film grain. No text. No logos.
```

The `[SCENE]` descriptor is written per-post to reflect the article topic. Examples:
- 1:1s post: *"a manager and employee in a focused one-on-one conversation across a small wooden table"*
- Delegation post: *"a manager reviewing a handwritten task list while a team member works independently in the background"*
- Feedback post: *"two colleagues having a calm, direct conversation in a warmly lit office"*

Everything outside the scene descriptor is locked to maintain visual consistency across the blog.

### Output Spec
- Model: `gpt-image-1`
- Size: `1792x1024` (landscape, matches existing cover images)
- Format: JPEG, saved to `public/images/blog/[slug].jpg`
- Cost: ~$0.04–0.07 per image

### Review Step
Claude displays the image path immediately after generation. Sean opens it to review. If rejected, Claude generates again with an adjusted scene prompt. Only approved images are committed to the draft branch.

---

## Section 3 — Supporting Infrastructure

### Environment Variable
`OPENAI_API_KEY` — added to `.env.local` (gitignored) and to the Vercel project (Development + Preview + Production, though it is only used locally during authoring).

### No Code Changes Required
The existing MDX + `src/lib/blog.ts` + Vercel stack handles everything. New posts appear automatically via the dynamic file reader. No changes to blog components, routing, or `blogData.ts`.

### Branch Naming Convention
Draft branches: `draft/[slug]` (e.g. `draft/goal-setting-for-small-teams`)

---

## Writing Standards

All posts must follow the Cadence voice defined in `CLAUDE.md`:

- Warm, clear, mentor-like — not corporate, not cheerful
- Written in first person as Sean Davis (founder perspective, real management experience)
- No exclamation points beyond 1 per post maximum
- No superlatives without evidence ("the best", "most powerful")
- No jargon: "synergy", "leverage", "unlock", "game-changing"
- Opening paragraph draws from a specific, personal moment or observation — not a generic statement
- Minimum ~1,200 words per post (existing posts average ~1,400–1,800 words)
- Each post ends with the CTA block (already handled by `blog/[slug]/page.tsx`)

---

## Files Created / Modified

| Action | File |
|--------|------|
| Created (per post) | `content/blog/[slug].mdx` |
| Created (per post) | `public/images/blog/[slug].jpg` |
| Modified (once) | `.env.local` — add `OPENAI_API_KEY` |
| Vercel env var (once) | `OPENAI_API_KEY` added to project |

---

## Success Criteria

- New posts can be initiated, drafted, iterated, and published entirely within a Claude Code session
- Posts are invisible on the live site until explicitly published (draft flag removed and merged to main)
- Cover images are visually consistent with the existing blog aesthetic
- No post goes to production without Sean reviewing the Vercel preview URL
- The full cycle (idea → live post) takes one Claude Code session with one Vercel build wait at the end
