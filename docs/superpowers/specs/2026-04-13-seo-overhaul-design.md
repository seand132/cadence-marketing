# Cadence Marketing Site — Comprehensive SEO Overhaul

**Date:** 2026-04-13
**Scope:** cadencehq.co marketing site (`/Users/seandavis/Documents/Claude/Projects/Cadence/marketing`)
**Approach:** Next.js native metadata API + lightweight custom consent banner (Option A)

---

## Context & Current State

The Cadence marketing site (Next.js 15 App Router, Supabase, Tailwind v4) has solid foundational SEO in place but several high-impact gaps:

**Already working:**
- robots.txt (correct, points to sitemap)
- Static sitemap.xml (home + 6 core pages, no blog posts)
- Root `metadata` export with title, description, OG image, Twitter card
- Dynamic OG images for root and `/blog/[slug]` via `opengraph-image.tsx`
- All pages have unique `title` and `description`
- `/starter-pack` has full per-page OG + Twitter metadata (the pattern to replicate)
- Favicon system (SVG + Apple touch icon)
- Font optimization (DM Sans, Source Sans 3 with `display: swap`)

**Critical gaps:**
- No `metadataBase` — canonical URLs not resolving correctly
- Blog posts absent from sitemap (static XML only)
- Zero JSON-LD structured data
- 8 of 9 pages missing per-page `openGraph` and `twitter` metadata
- No analytics
- No cookie consent

---

## Section 1 — Root Metadata & Canonical URLs

**File:** `src/app/layout.tsx`

Add `metadataBase: new URL('https://cadencehq.co')` to the root `metadata` export. This is the single most impactful change — it enables Next.js to resolve all relative URLs in metadata exports throughout the app into proper canonical URLs.

Add explicit `robots: { index: true, follow: true }` to the root metadata.

Add a separate `export const viewport: Viewport` export (Next.js 15 pattern — not inside `metadata`) with `width: 'device-width', initialScale: 1`.

No structural changes to `layout.tsx` — additions only.

---

## Section 2 — Sitemap & Robots

**Delete:** `/public/sitemap.xml` and `/public/robots.txt`
**Create:** `src/app/sitemap.ts` and `src/app/robots.ts` (Next.js native dynamic versions)

### sitemap.ts

Queries Supabase for all published blog post slugs and their `updated_at` timestamps at build/request time. Generates a full sitemap including:

| URL | Priority | Change Freq |
|-----|----------|-------------|
| `/` | 1.0 | weekly |
| `/features` | 0.8 | monthly |
| `/pricing` | 0.8 | monthly |
| `/blog` | 0.7 | weekly |
| `/blog/[slug]` x all published posts | 0.6 | monthly |
| `/starter-pack` | 0.7 | monthly |
| `/about` | 0.5 | monthly |
| `/faq` | 0.5 | monthly |

`/privacy` and `/terms` intentionally excluded — no SEO value, no need to spend crawl budget there.

### robots.ts

Returns a `MetadataRoute.Robots` object allowing all user agents, pointing sitemap to `https://cadencehq.co/sitemap.xml`. Replaces the static `robots.txt`.

---

## Section 3 — Per-Page OpenGraph & Twitter Metadata

**Pattern:** Follow the existing `/starter-pack` metadata as the template.

All 8 remaining pages get a full `openGraph` and `twitter` object added to their `metadata` export. Static pages use the root OG image (`/og-image.png`). The `/blog/[slug]` `generateMetadata` function is extended to declare the per-post OG + Twitter metadata using the dynamic OG image that already exists via `opengraph-image.tsx` — it just needs to be wired into the metadata object.

### Pages to update:

| Page | File | Notes |
|------|------|-------|
| `/` | `page.tsx` | Root OG image |
| `/about` | `about/page.tsx` | Root OG image |
| `/blog` | `blog/page.tsx` | Root OG image |
| `/features` | `features/page.tsx` | Root OG image |
| `/pricing` | `pricing/page.tsx` | Root OG image |
| `/faq` | `faq/page.tsx` | Root OG image |
| `/privacy` | `privacy/page.tsx` | Root OG image |
| `/terms` | `terms/page.tsx` | Root OG image |
| `/blog/[slug]` | `blog/[slug]/page.tsx` | Dynamic per-post OG image |

`/starter-pack` already complete — no changes needed.

Each static page OG object includes: `title`, `description`, `url` (full canonical), `siteName: 'Cadence'`, `images` array with width/height/alt, `type: 'website'`. Twitter card includes: `card: 'summary_large_image'`, `title`, `description`, `images`, `creator: '@seand132'`.

---

## Section 4 — JSON-LD Structured Data

### Reusable component

**Create:** `src/components/JsonLd.tsx`

A minimal typed component that renders a `<script type="application/ld+json">` tag. Content is always server-controlled structured data serialized via `JSON.stringify` — not user input — so the XSS surface is zero. No third-party package needed.

### Schemas to implement

| Schema | Where injected | Purpose |
|--------|---------------|---------|
| `Organization` | `layout.tsx` | Google Knowledge Panel, brand entity recognition |
| `WebSite` | `layout.tsx` | Enables sitelinks search box in Google |
| `BlogPosting` | `blog/[slug]/page.tsx` | Rich results: headline, date, author |
| `BreadcrumbList` | `blog/[slug]/page.tsx` | Breadcrumb trail in SERPs |
| `FAQPage` | `faq/page.tsx` | FAQ accordion directly in Google search results |

### Organization schema (root layout)

Fields: `@type: Organization`, `name: 'Cadence'`, `url: 'https://cadencehq.co'`, `logo` pointing to the horizontal lockup SVG, `sameAs` array with Twitter/X profile URL.

### WebSite schema (root layout)

Fields: `@type: WebSite`, `name: 'Cadence'`, `url: 'https://cadencehq.co'`, `potentialAction` of type `SearchAction` targeting `/blog?q={search_term_string}`. Enables a sitelinks search box in Google results.

### BlogPosting schema (`blog/[slug]/page.tsx`)

Generated dynamically from post data: `headline`, `datePublished`, `dateModified` (from Supabase `updated_at`), `author` (`Person` type, `name: 'Sean Davis'`), `description` (post meta description), `image` (OG image URL), `url` (full canonical post URL), `publisher` (Organization reference).

### FAQPage schema (`faq/page.tsx`)

Maps the FAQ data already rendered on the page to a `mainEntity` array of `Question` objects with `acceptedAnswer`. Enables accordion-style rich results directly in Google SERPs — high click-through rate boost for branded + informational queries.

---

## Section 5 — Google Analytics 4 + Cookie Consent Banner

### GA4 Integration

**Measurement ID:** `G-MV39PMR859`
**Env var:** `NEXT_PUBLIC_GA_ID=G-MV39PMR859` (add to Vercel env vars + local `.env.local`)

GA4 loaded via `next/script` with `strategy="afterInteractive"` — deferred until after hydration, zero render blocking. The script only initialises after the user grants consent. On decline, the script is never appended to the DOM.

### Consent Banner Component

**Create:** `src/components/CookieConsent.tsx`
**Mount in:** `layout.tsx` body (after `<main>`, before footer)

**Behaviour:**
- Appears on first visit (fixed bottom bar, full-width)
- Choice persisted to `localStorage`: key `cadence_cookie_consent` with value `'granted'` or `'denied'`; key `cadence_cookie_consent_date` for 12-month re-prompt
- If `'granted'`: GA4 script initialises and fires
- If `'denied'`: GA4 never loads — no tracking whatsoever
- Re-appears after 12 months
- `'use client'` component — reads localStorage on mount, renders nothing if decision already made

**Design (Cadence brand):**
- Background: `#2C2C2C` (Charcoal) — matches footer, feels native to the site
- Body text: `#9C968B` (Warm Stone) — subdued, not alarmist
- Accept button: `#C8782A` (Cadence Amber) with hover `#D08835` — primary CTA style
- Decline: plain text link in Warm Stone
- Font: DM Sans 14px
- Copy (Cadence voice): *"We use cookies to understand how Cadence is used — it helps us make it better. Accept to enable analytics, or decline to browse without tracking."*

---

## Section 6 — `next.config.ts` Security & Cache Headers

Add a `headers()` async function to `next.config.ts` returning two rule sets:

**All routes (`/(.*)`)**:
- `X-Frame-Options: DENY` — prevents clickjacking
- `X-Content-Type-Options: nosniff` — prevents MIME sniffing
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

**Brand assets (`/brand/(.*)`)**:
- `Cache-Control: public, max-age=31536000, immutable` — long TTL for static brand assets

No redirects needed — no legacy URLs identified.

---

## Implementation Order

### Phase 1 — Technical foundations (highest impact, no UI)
1. `metadataBase` + `robots` metadata + `viewport` export in `layout.tsx`
2. `src/app/robots.ts` — delete `/public/robots.txt`
3. `src/app/sitemap.ts` — delete `/public/sitemap.xml`
4. `next.config.ts` security + cache headers

### Phase 2 — Metadata completeness
5. Per-page `openGraph` + `twitter` for 8 static pages
6. Blog `[slug]` `generateMetadata` extended with OG + Twitter

### Phase 3 — Structured data
7. `src/components/JsonLd.tsx` component
8. `Organization` + `WebSite` schemas in root layout
9. `BlogPosting` + `BreadcrumbList` in blog `[slug]` page
10. `FAQPage` schema in `/faq`

### Phase 4 — Analytics
11. `src/components/CookieConsent.tsx` (brand-styled)
12. GA4 via `next/script` conditional on consent, mounted in `layout.tsx`
13. Add `NEXT_PUBLIC_GA_ID` to Vercel env vars

---

## Files Created / Modified

| Action | File |
|--------|------|
| Modified | `src/app/layout.tsx` |
| Created | `src/app/sitemap.ts` |
| Created | `src/app/robots.ts` |
| Deleted | `public/sitemap.xml` |
| Deleted | `public/robots.txt` |
| Modified | `src/app/page.tsx` |
| Modified | `src/app/about/page.tsx` |
| Modified | `src/app/blog/page.tsx` |
| Modified | `src/app/blog/[slug]/page.tsx` |
| Modified | `src/app/features/page.tsx` |
| Modified | `src/app/pricing/page.tsx` |
| Modified | `src/app/faq/page.tsx` |
| Modified | `src/app/privacy/page.tsx` |
| Modified | `src/app/terms/page.tsx` |
| Modified | `next.config.ts` |
| Created | `src/components/JsonLd.tsx` |
| Created | `src/components/CookieConsent.tsx` |

---

## Success Criteria

- `metadataBase` resolves all canonical URLs correctly (no Next.js dev warnings about relative URLs)
- `/sitemap.xml` returns all published blog post URLs dynamically
- Google Search Console accepts sitemap with no errors
- All 9 pages render full OG + Twitter metadata (verify via Meta's Sharing Debugger and Twitter Card Validator)
- JSON-LD validates without errors in Google's Rich Results Test
- GA4 fires page views on consent; stays completely silent on decline
- Consent banner renders in Cadence brand style, persists decision across sessions and browser refreshes
- All security headers present and correct (verify via securityheaders.com)
