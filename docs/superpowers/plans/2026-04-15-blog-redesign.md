# Blog Page Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the Cadence marketing blog page with a search-first resource hub featuring a navy header with live search, category filter pills with post counts, a 3-column article grid, and a placeholder resource library section.

**Architecture:** `BlogFilterGrid` (client component) is expanded to own the navy header, search input, filter bar, and article grid — all interactive state lives there. `page.tsx` (server component) calls `getAllPosts()`, passes posts as a prop to `BlogFilterGrid`, then renders the static resources section, newsletter, and CTA below it. A new `resourceData.ts` file holds typed placeholder data for the resources section.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, gray-matter (MDX frontmatter). No test framework — type-check with `npx tsc --noEmit`, integration-check with `npm run build`.

---

## File Map

| File | Status | Responsibility |
|------|--------|---------------|
| `src/app/blog/resourceData.ts` | **Create** | Typed `Resource[]` array — icon, label, title, desc, status |
| `src/app/blog/BlogFilterGrid.tsx` | **Rewrite** | Navy header + search input + category filter bar + article grid (all state here) |
| `src/app/blog/page.tsx` | **Rewrite** | Metadata (unchanged) + shell: `<BlogFilterGrid>` + resources section + newsletter + CTA |

`src/lib/blog.ts` and `src/app/blog/blogData.ts` — **no changes**.

---

## Task 1: Create `resourceData.ts`

**Files:**
- Create: `src/app/blog/resourceData.ts`

- [ ] **Step 1: Create the file with the `Resource` type and placeholder data**

```typescript
// src/app/blog/resourceData.ts

export type ResourceStatus = 'coming-soon' | 'available'

export interface Resource {
  icon: string
  label: string
  title: string
  desc: string
  status: ResourceStatus
  href?: string // populated when status === 'available'
}

export const resources: Resource[] = [
  {
    icon: '📋',
    label: 'Template · 1:1s',
    title: 'Weekly 1:1 Agenda Template',
    desc: 'A simple, reusable agenda that makes every 1:1 worth attending.',
    status: 'coming-soon',
  },
  {
    icon: '✅',
    label: 'Checklist · Delegation',
    title: 'Delegation Readiness Checklist',
    desc: 'Know when — and how — to hand off work without losing control.',
    status: 'coming-soon',
  },
  {
    icon: '💬',
    label: 'Guide · Feedback',
    title: 'SBI Feedback Framework Card',
    desc: 'A one-page reference for giving feedback that actually lands.',
    status: 'coming-soon',
  },
]
```

- [ ] **Step 2: Type-check**

```bash
cd /Users/seandavis/Documents/Claude/Projects/Cadence/marketing
npx tsc --noEmit
```

Expected: 0 errors.

- [ ] **Step 3: Commit**

```bash
cd /Users/seandavis/Documents/Claude/Projects/Cadence/marketing
git add src/app/blog/resourceData.ts
git commit -m "feat(blog): add resource data types and placeholder entries"
```

---

## Task 2: Rewrite `BlogFilterGrid.tsx`

This component now owns the full interactive portion of the page: navy header (with search), filter bar, and article grid. It receives `posts: BlogPost[]` as a prop from the server component.

**Files:**
- Rewrite: `src/app/blog/BlogFilterGrid.tsx`

Import reference — `BlogPost` is exported from `@/lib/blog`:
```typescript
import type { BlogPost } from '@/lib/blog'
```

The `KICKER_MAP` from `src/lib/blog.ts` (labels include trailing ` ·` and `Management` maps to `Framework ·`):
```typescript
export const KICKER_MAP: Record<string, { label: string; color: string }> = {
  'One-on-Ones': { label: 'One-on-Ones ·', color: '#7A9E82' },
  '1:1s':        { label: 'One-on-Ones ·', color: '#7A9E82' },
  Delegation:    { label: 'Delegation ·',  color: '#1C2B3A' },
  'Team Culture':{ label: 'Team Culture ·',color: '#C8782A' },
  Performance:   { label: 'Performance ·', color: '#1C2B3A' },
  KPIs:          { label: 'Performance ·', color: '#1C2B3A' },
  Framework:     { label: 'Framework ·',   color: '#7A9E82' },
  Management:    { label: 'Framework ·',   color: '#7A9E82' },
  Feedback:      { label: 'Feedback ·',    color: '#C8782A' },
}
```

- [ ] **Step 1: Write the new `BlogFilterGrid.tsx`**

```tsx
'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import type { BlogPost } from '@/lib/blog'
import { KICKER_MAP } from '@/lib/blog'

const CATEGORIES = ['All', '1:1s', 'Delegation', 'Team Culture', 'KPIs', 'Management', 'Feedback']

interface Props {
  posts: BlogPost[]
}

function getKickerDisplay(post: BlogPost): { label: string; color: string } {
  return KICKER_MAP[post.kicker] ?? KICKER_MAP[post.category] ?? { label: post.category, color: '#7A9E82' }
}

function countByCategory(posts: BlogPost[], category: string): number {
  if (category === 'All') return posts.length
  return posts.filter((p) => p.category === category).length
}

export default function BlogFilterGrid({ posts }: Props) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = useMemo(() => {
    let result = posts
    if (activeCategory !== 'All') {
      result = result.filter((p) => p.category === activeCategory)
    }
    const q = searchQuery.trim().toLowerCase()
    if (q) {
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.kicker.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
    }
    return result
  }, [posts, activeCategory, searchQuery])

  function getMetaLabel(): string {
    const q = searchQuery.trim()
    if (q) {
      return filteredPosts.length === 0
        ? `No results for "${q}"`
        : `${filteredPosts.length} result${filteredPosts.length !== 1 ? 's' : ''} for "${q}"`
    }
    if (activeCategory !== 'All') {
      return `${filteredPosts.length} article${filteredPosts.length !== 1 ? 's' : ''} in ${activeCategory}`
    }
    return `${filteredPosts.length} article${filteredPosts.length !== 1 ? 's' : ''}`
  }

  return (
    <>
      {/* ── Navy header with search ── */}
      <section
        style={{ background: '#1C2B3A' }}
        className="pt-14 pb-12 px-6 text-center"
      >
        <p
          className="mb-3"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 700,
            fontSize: 11,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(245,240,232,0.45)',
          }}
        >
          The Cadence Blog
        </p>
        <h1
          className="mb-3"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 700,
            fontSize: 'clamp(32px, 5vw, 52px)',
            color: '#F5F0E8',
            lineHeight: 1.15,
          }}
        >
          Everything you need<br />to manage better.
        </h1>
        <p
          className="mb-8"
          style={{
            fontFamily: 'var(--font-source-sans)',
            fontSize: 16,
            color: 'rgba(245,240,232,0.6)',
            lineHeight: 1.5,
          }}
        >
          Practical guides, frameworks, and resources for frontline managers.
        </p>
        <div className="relative max-w-xl mx-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder='Search — try "delegation" or "1:1"'
            style={{
              width: '100%',
              padding: '14px 48px 14px 18px',
              fontSize: 15,
              borderRadius: 8,
              border: '2px solid rgba(245,240,232,0.15)',
              background: 'rgba(255,255,255,0.08)',
              color: '#F5F0E8',
              outline: 'none',
              fontFamily: 'var(--font-source-sans)',
              transition: 'border-color 0.15s, background 0.15s',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'rgba(245,240,232,0.4)'
              e.currentTarget.style.background = 'rgba(255,255,255,0.12)'
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'rgba(245,240,232,0.15)'
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
            }}
          />
          <span
            className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
            aria-hidden="true"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="6.5" cy="6.5" r="4.5" stroke="rgba(245,240,232,0.4)" strokeWidth="1.5" />
              <path d="M10.5 10.5L14 14" stroke="rgba(245,240,232,0.4)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
        </div>
      </section>

      {/* ── Category filter bar ── */}
      <div
        style={{
          background: '#F5F0E8',
          borderBottom: '1px solid #DDD8CE',
          padding: '16px 24px',
        }}
      >
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = cat === activeCategory
            const count = countByCategory(posts, cat)
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '6px 14px',
                  borderRadius: 6,
                  fontSize: 13,
                  fontWeight: isActive ? 600 : 500,
                  fontFamily: 'var(--font-dm-sans)',
                  background: isActive ? '#1C2B3A' : 'white',
                  color: isActive ? 'white' : '#6B6560',
                  border: isActive ? '1px solid #1C2B3A' : '1px solid #D0CAC0',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.12s',
                }}
              >
                {cat}
                <span style={{ fontSize: 11, opacity: 0.65, marginLeft: 3 }}>({count})</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* ── Article grid ── */}
      <section style={{ background: 'white' }} className="pt-10 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Results meta */}
          <p
            className="mb-6"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 13,
              color: '#9C968B',
              fontWeight: 500,
            }}
          >
            {getMetaLabel()}
          </p>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 18,
                  fontWeight: 600,
                  color: '#6B6560',
                  marginBottom: 8,
                }}
              >
                No articles found
              </p>
              <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: 14, color: '#9C968B' }}>
                Try a different search term or browse all categories.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => {
                const kicker = getKickerDisplay(post)
                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col"
                    style={{
                      borderRadius: 10,
                      border: '1px solid #D0CAC0',
                      background: '#FAFAF8',
                      overflow: 'hidden',
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'border-color 0.15s, box-shadow 0.15s',
                    }}
                  >
                    {/* Cover image or placeholder */}
                    {post.coverImage ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        style={{ width: '100%', height: 160, objectFit: 'cover', display: 'block' }}
                      />
                    ) : (
                      <div
                        style={{
                          width: '100%',
                          height: 160,
                          background: 'linear-gradient(135deg, #E8E0D4 0%, #D0CAC0 100%)',
                        }}
                      />
                    )}

                    <div className="flex flex-col flex-1 p-6">
                      {/* Kicker */}
                      <p
                        className="mb-2"
                        style={{
                          fontFamily: 'var(--font-dm-sans)',
                          fontWeight: 700,
                          fontSize: 10,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: kicker.color,
                        }}
                      >
                        {kicker.label}
                      </p>

                      {/* Title */}
                      <h2
                        className="mb-2 flex-1"
                        style={{
                          fontFamily: 'var(--font-dm-sans)',
                          fontWeight: 600,
                          fontSize: 16,
                          color: '#2C2C2C',
                          lineHeight: 1.35,
                        }}
                      >
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p
                        className="mb-4"
                        style={{
                          fontFamily: 'var(--font-source-sans)',
                          fontSize: 13,
                          color: '#6B6560',
                          lineHeight: 1.6,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {post.excerpt}
                      </p>

                      {/* Footer */}
                      <div
                        className="flex items-center justify-between pt-4"
                        style={{ borderTop: '1px solid #EBE6DE' }}
                      >
                        <div className="flex items-center gap-2">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src="https://whzwyvjerrsyqjmktxcg.supabase.co/storage/v1/object/public/avatars/06d4938c-f40d-46dd-b24c-3a2596e0c8a1/avatar.jpg?t=1773037991750"
                            alt="Sean Davis"
                            style={{
                              width: 24,
                              height: 24,
                              borderRadius: '50%',
                              objectFit: 'cover',
                              border: '1.5px solid #D0CAC0',
                              flexShrink: 0,
                            }}
                          />
                          <span
                            style={{
                              fontFamily: 'var(--font-dm-sans)',
                              fontSize: 12,
                              color: '#9C968B',
                            }}
                          >
                            Sean Davis · {post.readTime}
                          </span>
                        </div>
                        <span
                          className="inline-flex items-center gap-1 text-xs font-semibold"
                          style={{ color: '#C8782A', fontFamily: 'var(--font-dm-sans)' }}
                        >
                          Read
                          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                            <path
                              d="M2.5 6.5h8M7.5 4l3 2.5-3 2.5"
                              stroke="#C8782A"
                              strokeWidth="1.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 2: Type-check**

```bash
cd /Users/seandavis/Documents/Claude/Projects/Cadence/marketing
npx tsc --noEmit
```

Expected: 0 errors. Common issues to fix if they appear:
- `WebkitLineClamp` / `WebkitBoxOrient` — React's inline style types accept these as camelCase; if TypeScript complains, cast the style object: `style={{ ...rest } as React.CSSProperties}`
- Missing `useMemo` import — add to the React import line

- [ ] **Step 3: Commit**

```bash
cd /Users/seandavis/Documents/Claude/Projects/Cadence/marketing
git add src/app/blog/BlogFilterGrid.tsx
git commit -m "feat(blog): rewrite BlogFilterGrid with navy header, live search, and 3-col grid"
```

---

## Task 3: Rewrite `page.tsx`

The server component now has one job: fetch posts, hand them to `BlogFilterGrid`, then render the static sections below.

**Files:**
- Rewrite: `src/app/blog/page.tsx`

The existing `metadata` export at the top of `page.tsx` is preserved **exactly as-is** — do not change any field.

- [ ] **Step 1: Write the new `page.tsx`**

```tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import BlogFilterGrid from './BlogFilterGrid'
import { resources } from './resourceData'
import type { Resource } from './resourceData'
import { getAllPosts } from '@/lib/blog'

// ── SEO metadata — unchanged from previous version ──
export const metadata: Metadata = {
  title: 'The Cadence Blog | Practical management for real teams',
  description:
    'Practical management for real teams. 1:1s, delegation, team culture, and building systems that actually work.',
  openGraph: {
    title: 'The Cadence Blog | Practical management for real teams',
    description: 'Practical management for real teams. 1:1s, delegation, team culture, and building systems that actually work.',
    url: 'https://cadencehq.co/blog',
    siteName: 'Cadence',
    images: [
      {
        url: `https://cadencehq.co/og-image.png?v=${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || 'dev'}`,
        width: 1200,
        height: 630,
        alt: 'The Cadence Blog',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Cadence Blog | Practical management for real teams',
    description: 'Practical management for real teams. 1:1s, delegation, team culture, and building systems that actually work.',
    images: [`https://cadencehq.co/og-image.png?v=${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || 'dev'}`],
    creator: '@seand132',
  },
}

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <div
      style={{
        background: 'white',
        border: '1.5px dashed #C0BAB0',
        borderRadius: 10,
        padding: 22,
        opacity: 0.8,
      }}
    >
      <div style={{ fontSize: 22, marginBottom: 10 }}>{resource.icon}</div>
      <p
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontWeight: 700,
          fontSize: 10,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#9C968B',
          marginBottom: 6,
        }}
      >
        {resource.label}
      </p>
      <p
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontWeight: 600,
          fontSize: 15,
          color: '#6B6560',
          marginBottom: 6,
          lineHeight: 1.3,
        }}
      >
        {resource.title}
      </p>
      <p
        style={{
          fontFamily: 'var(--font-source-sans)',
          fontSize: 12,
          color: '#9C968B',
          lineHeight: 1.5,
        }}
      >
        {resource.desc}
      </p>
    </div>
  )
}

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <>
      {/* Interactive section — search, filters, grid */}
      <BlogFilterGrid posts={posts} />

      {/* ── Resources & Templates ── */}
      <section style={{ background: '#F5F0E8', borderTop: '1px solid #DDD8CE' }} className="py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-baseline gap-3 mb-2">
            <h2
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 700,
                fontSize: 22,
                color: '#2C2C2C',
              }}
            >
              Resources &amp; Templates
            </h2>
            <span
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 700,
                fontSize: 10,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                background: '#C8782A',
                color: 'white',
                padding: '3px 8px',
                borderRadius: 4,
              }}
            >
              Coming Soon
            </span>
          </div>
          <p
            className="mb-8"
            style={{
              fontFamily: 'var(--font-source-sans)',
              fontSize: 15,
              color: '#6B6560',
              lineHeight: 1.6,
              maxWidth: 560,
            }}
          >
            Free templates, checklists, and guides to go alongside every article. The practical tools to put ideas into practice.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.map((r) => (
              <ResourceCard key={r.title} resource={r} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section style={{ background: '#7A9E82' }} className="py-14 px-6">
        <div className="max-w-md mx-auto text-center">
          <h2
            className="mb-2"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 700,
              fontSize: 24,
              color: 'white',
            }}
          >
            Get management insights monthly.
          </h2>
          <p
            className="mb-8"
            style={{
              fontFamily: 'var(--font-source-sans)',
              fontSize: 15,
              color: 'rgba(255,255,255,0.8)',
              lineHeight: 1.5,
            }}
          >
            Practical ideas for frontline managers. No fluff, no spam. Unsubscribe anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded"
              style={{
                border: 'none',
                fontFamily: 'var(--font-source-sans)',
                fontSize: 15,
                outline: 'none',
                background: 'white',
                color: '#2C2C2C',
              }}
            />
            <a
              href="mailto:hello@cadencehq.co?subject=Subscribe to Cadence Blog"
              className="inline-flex items-center justify-center px-6 py-3 rounded font-semibold"
              style={{
                background: '#1C2B3A',
                color: 'white',
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 600,
                fontSize: 15,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Subscribe
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#C8782A' }} className="py-20 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2
            className="mb-6"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 700,
              fontSize: 'clamp(28px, 4vw, 36px)',
              color: 'white',
              lineHeight: 1.2,
            }}
          >
            Ready to put it into practice?
          </h2>
          <Link
            href="https://app.cadencehq.co/signup"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold transition-opacity hover:opacity-90"
            style={{
              background: 'white',
              color: '#C8782A',
              borderRadius: 4,
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Start free with Cadence
          </Link>
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 2: Type-check**

```bash
cd /Users/seandavis/Documents/Claude/Projects/Cadence/marketing
npx tsc --noEmit
```

Expected: 0 errors.

- [ ] **Step 3: Commit**

```bash
cd /Users/seandavis/Documents/Claude/Projects/Cadence/marketing
git add src/app/blog/page.tsx
git commit -m "feat(blog): rewrite page.tsx — search-first layout with resources section and updated copy"
```

---

## Task 4: Build verification and smoke test

- [ ] **Step 1: Run the production build**

```bash
cd /Users/seandavis/Documents/Claude/Projects/Cadence/marketing
npm run build
```

Expected: exits with code 0, no TypeScript errors, no Next.js build errors. The `/blog` route should appear in the build output.

If the build fails, the most common causes are:
- A TypeScript type mismatch in the new files — check the error line and fix the type
- A missing import — add the import at the top of the file
- `WebkitLineClamp`/`WebkitBoxOrient` inline style type errors — add `as React.CSSProperties` cast to that style object in `BlogFilterGrid.tsx`

- [ ] **Step 2: Start dev server and verify visually**

```bash
cd /Users/seandavis/Documents/Claude/Projects/Cadence/marketing
npm run dev
```

Open `http://localhost:3000/blog` and verify:

1. Navy header renders with "Everything you need to manage better." headline
2. Search bar is visible and accepts input
3. Typing "delegation" filters the grid to delegation articles
4. Clearing the search restores all articles
5. Clicking "1:1s" pill filters to 1:1 articles and updates the meta count label
6. Clicking "All" restores all articles
7. Each card shows: cover image or gradient placeholder, category kicker in correct color, title, 2-line excerpt, author avatar + read time, orange "Read →"
8. Resources section shows 3 dashed placeholder cards with "Coming Soon" badge
9. Newsletter section and CTA section render correctly
10. Verify `/blog/[slug]` still works (individual post pages unchanged)
11. No console errors in the browser

- [ ] **Step 3: Commit final verification note**

```bash
cd /Users/seandavis/Documents/Claude/Projects/Cadence/marketing
git commit --allow-empty -m "chore(blog): build verified — blog redesign complete"
```

---

## Cleanup

After all tasks pass:

- [ ] Delete `src/app/blog/blogData.ts` if it is no longer imported anywhere

  Check first:
  ```bash
  cd /Users/seandavis/Documents/Claude/Projects/Cadence/marketing
  grep -r "blogData" src/
  ```
  If no results, it's safe to delete:
  ```bash
  git rm src/app/blog/blogData.ts
  git commit -m "chore(blog): remove unused blogData.ts"
  ```

---

## What Is Explicitly Not Changed

- `src/lib/blog.ts` — untouched
- `src/app/blog/[slug]/page.tsx` — individual post pages unchanged
- `src/app/blog/[slug]/opengraph-image.tsx` — unchanged
- All MDX files in `content/blog/` — unchanged
- The `metadata` export in `page.tsx` — copied verbatim, no modifications
