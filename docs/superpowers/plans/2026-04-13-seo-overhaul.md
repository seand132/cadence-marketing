# SEO Overhaul Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Comprehensively optimize cadencehq.co for SEO — covering canonical URLs, dynamic sitemap, per-page OG metadata, JSON-LD structured data, GA4 analytics with cookie consent, and security headers.

**Architecture:** Next.js native metadata API throughout — no new packages. JSON-LD injected via a thin `JsonLd` server component. GA4 loaded conditionally inside a `CookieConsent` client component that also manages the consent banner. All changes follow existing file conventions.

**Tech Stack:** Next.js 15 App Router, React 19, TypeScript, `next/script`, `src/lib/blog.ts` (filesystem-based blog), Tailwind v4, DM Sans / Source Sans 3.

**Spec:** `docs/superpowers/specs/2026-04-13-seo-overhaul-design.md`

---

## File Map

| Action | File | Responsibility |
|--------|------|---------------|
| Modified | `src/app/layout.tsx` | metadataBase, robots, viewport, JsonLd schemas, CookieConsent |
| Created | `src/app/sitemap.ts` | Dynamic sitemap including all blog posts |
| Created | `src/app/robots.ts` | Dynamic robots (replaces static txt) |
| Deleted | `public/sitemap.xml` | Replaced by sitemap.ts |
| Deleted | `public/robots.txt` | Replaced by robots.ts |
| Modified | `src/app/page.tsx` | OG + Twitter metadata |
| Modified | `src/app/about/page.tsx` | OG + Twitter metadata |
| Modified | `src/app/blog/page.tsx` | OG + Twitter metadata |
| Modified | `src/app/blog/[slug]/page.tsx` | OG + Twitter metadata in generateMetadata |
| Modified | `src/app/features/page.tsx` | OG + Twitter metadata |
| Modified | `src/app/pricing/page.tsx` | OG + Twitter metadata |
| Modified | `src/app/faq/page.tsx` | OG + Twitter metadata, FAQPage JSON-LD |
| Modified | `src/app/privacy/page.tsx` | OG + Twitter metadata |
| Modified | `src/app/terms/page.tsx` | OG + Twitter metadata |
| Modified | `next.config.ts` | Security + cache headers |
| Created | `src/components/JsonLd.tsx` | Reusable JSON-LD script component |
| Created | `src/components/CookieConsent.tsx` | Consent banner + conditional GA4 loading |

---

## Task 1: Root Layout — metadataBase, robots, viewport

**Files:**
- Modify: `src/app/layout.tsx`

The existing `metadata` export is missing `metadataBase` (canonical URL resolution) and `robots`. The `viewport` should be a separate named export per Next.js 15 conventions.

- [ ] **Step 1: Add Viewport import and update layout.tsx**

Open `src/app/layout.tsx`. Replace the existing import line:

```ts
import type { Metadata } from 'next'
```

with:

```ts
import type { Metadata, Viewport } from 'next'
```

- [ ] **Step 2: Add viewport export**

After the font declarations and before the `export const metadata` line, add:

```ts
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}
```

- [ ] **Step 3: Add metadataBase and robots to metadata export**

In the existing `metadata` object, add two new fields at the top (after the opening `{`):

```ts
export const metadata: Metadata = {
  metadataBase: new URL('https://cadencehq.co'),
  robots: { index: true, follow: true },
  title: 'Cadence: Management in rhythm.',
  // ... rest unchanged
```

- [ ] **Step 4: Verify dev server shows no metadata warnings**

Run: `cd /Users/seandavis/Documents/Claude/Projects/Cadence/marketing && npm run dev`

Open `http://localhost:3000` and check the terminal — there should be no warnings about relative URLs in metadata. Stop the server with Ctrl+C.

- [ ] **Step 5: Commit**

```bash
cd /Users/seandavis/Documents/Claude/Projects/Cadence/marketing
git add src/app/layout.tsx
git commit -m "feat(seo): add metadataBase, robots, and viewport to root layout"
```

---

## Task 2: Replace Static robots.txt with Dynamic robots.ts

**Files:**
- Delete: `public/robots.txt`
- Create: `src/app/robots.ts`

- [ ] **Step 1: Create src/app/robots.ts**

```ts
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://cadencehq.co/sitemap.xml',
  }
}
```

- [ ] **Step 2: Delete the static file**

```bash
rm /Users/seandavis/Documents/Claude/Projects/Cadence/marketing/public/robots.txt
```

- [ ] **Step 3: Verify robots route**

Run: `npm run dev`
Open: `http://localhost:3000/robots.txt`
Expected output:
```
User-agent: *
Allow: /

Sitemap: https://cadencehq.co/sitemap.xml
```
Stop the server.

- [ ] **Step 4: Commit**

```bash
git add src/app/robots.ts
git commit -m "feat(seo): replace static robots.txt with dynamic robots.ts"
```

---

## Task 3: Replace Static sitemap.xml with Dynamic sitemap.ts

**Files:**
- Delete: `public/sitemap.xml`
- Create: `src/app/sitemap.ts`

The blog uses the filesystem (`content/blog/*.mdx`) via `getAllPosts()` from `@/lib/blog` — not Supabase. The sitemap calls `getAllPosts()` to include all published posts dynamically.

- [ ] **Step 1: Create src/app/sitemap.ts**

```ts
import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

const BASE_URL = 'https://cadencehq.co'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/features`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/starter-pack`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...blogRoutes]
}
```

- [ ] **Step 2: Delete the static file**

```bash
rm /Users/seandavis/Documents/Claude/Projects/Cadence/marketing/public/sitemap.xml
```

- [ ] **Step 3: Verify sitemap route**

Run: `npm run dev`
Open: `http://localhost:3000/sitemap.xml`
Expected: XML with all static routes AND all blog post URLs. Stop the server.

- [ ] **Step 4: Commit**

```bash
git add src/app/sitemap.ts
git commit -m "feat(seo): replace static sitemap.xml with dynamic sitemap.ts including blog posts"
```

---

## Task 4: Add Security and Cache Headers to next.config.ts

**Files:**
- Modify: `next.config.ts`

- [ ] **Step 1: Replace next.config.ts content**

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'whzwyvjerrsyqjmktxcg.supabase.co',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        source: '/brand/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
};

export default nextConfig;
```

- [ ] **Step 2: Verify headers are applied**

Run: `npm run dev`
Run in another terminal:
```bash
curl -I http://localhost:3000 | grep -E 'X-Frame|X-Content|Referrer'
```
Expected:
```
x-frame-options: DENY
x-content-type-options: nosniff
referrer-policy: strict-origin-when-cross-origin
```
Stop the dev server.

- [ ] **Step 3: Commit**

```bash
git add next.config.ts
git commit -m "feat(seo): add security headers and brand asset cache-control"
```

---

## Task 5: Per-Page OG and Twitter Metadata — Static Pages

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/about/page.tsx`
- Modify: `src/app/blog/page.tsx`
- Modify: `src/app/features/page.tsx`
- Modify: `src/app/pricing/page.tsx`
- Modify: `src/app/privacy/page.tsx`
- Modify: `src/app/terms/page.tsx`

Each page gets a full `openGraph` and `twitter` object. The `/starter-pack` page already has this — skip it. The pattern is exactly what `/starter-pack` uses.

The OG image uses the commit SHA cache-busting pattern already established in the root layout and starter-pack.

- [ ] **Step 1: Update src/app/page.tsx metadata**

Replace the existing `metadata` export:

```ts
export const metadata: Metadata = {
  title: 'Cadence: Management tools for small teams',
  description: 'Cadence gives managers a real system for 1:1s, delegation, and team rhythm. 14-day free trial.',
  openGraph: {
    title: 'Cadence: Management tools for small teams',
    description: 'Cadence gives managers a real system for 1:1s, delegation, and team rhythm. 14-day free trial.',
    url: 'https://cadencehq.co',
    siteName: 'Cadence',
    images: [
      {
        url: `https://cadencehq.co/og-image.png?v=${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || 'dev'}`,
        width: 1200,
        height: 630,
        alt: 'Cadence: Management tools for small teams',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cadence: Management tools for small teams',
    description: 'Cadence gives managers a real system for 1:1s, delegation, and team rhythm. 14-day free trial.',
    images: [`https://cadencehq.co/og-image.png?v=${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || 'dev'}`],
    creator: '@seand132',
  },
}
```

- [ ] **Step 2: Update src/app/about/page.tsx metadata**

Replace the existing `metadata` export:

```ts
export const metadata: Metadata = {
  title: 'About Cadence: Built by a manager who needed this.',
  description: "Cadence exists because the tools that existed weren't built for small-team managers. Here's the story, and what we believe.",
  openGraph: {
    title: 'About Cadence: Built by a manager who needed this.',
    description: "Cadence exists because the tools that existed weren't built for small-team managers. Here's the story, and what we believe.",
    url: 'https://cadencehq.co/about',
    siteName: 'Cadence',
    images: [
      {
        url: `https://cadencehq.co/og-image.png?v=${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || 'dev'}`,
        width: 1200,
        height: 630,
        alt: 'About Cadence: Built by a manager who needed this.',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Cadence: Built by a manager who needed this.',
    description: "Cadence exists because the tools that existed weren't built for small-team managers.",
    images: [`https://cadencehq.co/og-image.png?v=${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || 'dev'}`],
    creator: '@seand132',
  },
}
```

- [ ] **Step 3: Update src/app/blog/page.tsx metadata**

Replace the existing `metadata` export:

```ts
export const metadata: Metadata = {
  title: 'The Cadence Blog | Practical management for real teams',
  description: 'Practical management for real teams. 1:1s, delegation, team culture, and building systems that actually work.',
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
```

- [ ] **Step 4: Update src/app/features/page.tsx metadata**

Replace the existing `metadata` export:

```ts
export const metadata: Metadata = {
  title: 'Cadence Features: 1:1s, Team Meetings, Task Delegation, Team Dashboard, KPI Goals',
  description: 'Seven focused tools for small-team managers. 1:1 meetings, team meetings with shared agendas, task delegation, team dashboard, KPI goals, org chart. Built for teams of 3 to 8.',
  openGraph: {
    title: 'Cadence Features: 1:1s, Team Meetings, Task Delegation, Team Dashboard, KPI Goals',
    description: 'Seven focused tools for small-team managers. 1:1 meetings, task delegation, team dashboard, KPI goals. Built for teams of 3 to 8.',
    url: 'https://cadencehq.co/features',
    siteName: 'Cadence',
    images: [
      {
        url: `https://cadencehq.co/og-image.png?v=${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || 'dev'}`,
        width: 1200,
        height: 630,
        alt: 'Cadence Features',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cadence Features: 1:1s, Team Meetings, Task Delegation, Team Dashboard, KPI Goals',
    description: 'Seven focused tools for small-team managers. Built for teams of 3 to 8.',
    images: [`https://cadencehq.co/og-image.png?v=${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || 'dev'}`],
    creator: '@seand132',
  },
}
```

- [ ] **Step 5: Update src/app/pricing/page.tsx metadata**

Replace the existing `metadata` export:

```ts
export const metadata: Metadata = {
  title: 'Cadence Pricing: Simple pricing. No per-seat surprises.',
  description: 'One flat monthly rate covers your whole team. Most management tools charge per person. Cadence does not. Starter from $10/month.',
  openGraph: {
    title: 'Cadence Pricing: Simple pricing. No per-seat surprises.',
    description: 'One flat monthly rate covers your whole team. Most management tools charge per person. Cadence does not. Starter from $10/month.',
    url: 'https://cadencehq.co/pricing',
    siteName: 'Cadence',
    images: [
      {
        url: `https://cadencehq.co/og-image.png?v=${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || 'dev'}`,
        width: 1200,
        height: 630,
        alt: 'Cadence Pricing',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cadence Pricing: Simple pricing. No per-seat surprises.',
    description: 'One flat monthly rate covers your whole team. Starter from $10/month.',
    images: [`https://cadencehq.co/og-image.png?v=${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || 'dev'}`],
    creator: '@seand132',
  },
}
```

- [ ] **Step 6: Update src/app/faq/page.tsx metadata**

Replace the existing `metadata` export:

```ts
export const metadata: Metadata = {
  title: 'FAQ — Cadence',
  description: 'Common questions about Cadence — pricing, setup, features, and privacy.',
  openGraph: {
    title: 'FAQ — Cadence',
    description: 'Common questions about Cadence — pricing, setup, features, and privacy.',
    url: 'https://cadencehq.co/faq',
    siteName: 'Cadence',
    images: [
      {
        url: `https://cadencehq.co/og-image.png?v=${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || 'dev'}`,
        width: 1200,
        height: 630,
        alt: 'FAQ — Cadence',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ — Cadence',
    description: 'Common questions about Cadence — pricing, setup, features, and privacy.',
    images: [`https://cadencehq.co/og-image.png?v=${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || 'dev'}`],
    creator: '@seand132',
  },
}
```

- [ ] **Step 7: Update src/app/privacy/page.tsx metadata**

Replace the existing `metadata` export:

```ts
export const metadata: Metadata = {
  title: 'Privacy Policy | Cadence',
  description: 'How Cadence collects, uses, and protects your data.',
  openGraph: {
    title: 'Privacy Policy | Cadence',
    description: 'How Cadence collects, uses, and protects your data.',
    url: 'https://cadencehq.co/privacy',
    siteName: 'Cadence',
    images: [
      {
        url: `https://cadencehq.co/og-image.png?v=${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || 'dev'}`,
        width: 1200,
        height: 630,
        alt: 'Privacy Policy | Cadence',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Cadence',
    description: 'How Cadence collects, uses, and protects your data.',
    images: [`https://cadencehq.co/og-image.png?v=${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || 'dev'}`],
    creator: '@seand132',
  },
}
```

- [ ] **Step 8: Update src/app/terms/page.tsx metadata**

Replace the existing `metadata` export:

```ts
export const metadata: Metadata = {
  title: 'Terms of Service | Cadence',
  description: 'The terms and conditions for using Cadence.',
  openGraph: {
    title: 'Terms of Service | Cadence',
    description: 'The terms and conditions for using Cadence.',
    url: 'https://cadencehq.co/terms',
    siteName: 'Cadence',
    images: [
      {
        url: `https://cadencehq.co/og-image.png?v=${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || 'dev'}`,
        width: 1200,
        height: 630,
        alt: 'Terms of Service | Cadence',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | Cadence',
    description: 'The terms and conditions for using Cadence.',
    images: [`https://cadencehq.co/og-image.png?v=${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || 'dev'}`],
    creator: '@seand132',
  },
}
```

- [ ] **Step 9: TypeScript check**

```bash
cd /Users/seandavis/Documents/Claude/Projects/Cadence/marketing
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 10: Commit**

```bash
git add src/app/page.tsx src/app/about/page.tsx src/app/blog/page.tsx src/app/features/page.tsx src/app/pricing/page.tsx src/app/faq/page.tsx src/app/privacy/page.tsx src/app/terms/page.tsx
git commit -m "feat(seo): add openGraph and twitter metadata to all static pages"
```

---

## Task 6: Blog Post OG and Twitter Metadata in generateMetadata

**Files:**
- Modify: `src/app/blog/[slug]/page.tsx`

The existing `generateMetadata` returns only `title` and `description`. Extend it to include `openGraph` and `twitter`. The per-post OG image is already generated by `src/app/blog/[slug]/opengraph-image.tsx` — it just needs to be declared in the metadata so crawlers find it.

- [ ] **Step 1: Update generateMetadata in blog/[slug]/page.tsx**

Replace the existing `generateMetadata` function:

```ts
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  const title = post.metaTitle || `${post.title} | Cadence Blog`
  const description = post.metaDescription || post.excerpt
  const ogImageUrl = `https://cadencehq.co/blog/${post.slug}/opengraph-image`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://cadencehq.co/blog/${post.slug}`,
      siteName: 'Cadence',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'Sean Davis'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageUrl],
      creator: '@seand132',
    },
  }
}
```

- [ ] **Step 2: TypeScript check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/blog/\[slug\]/page.tsx
git commit -m "feat(seo): add per-post openGraph and twitter metadata to blog generateMetadata"
```

---

## Task 7: Create JsonLd Component

**Files:**
- Create: `src/components/JsonLd.tsx`

This is a React 19 Server Component. In React 19 (which this project uses — `"react": "19.2.3"`), `<script>` elements with string children are rendered correctly without escaping for non-JS script types. Content is always `JSON.stringify` output of server-controlled data structures — no user input reaches this component.

- [ ] **Step 1: Create src/components/JsonLd.tsx**

```tsx
// Server Component — no 'use client' directive
// Content passed to this component must always be server-controlled data (JSON.stringify output).
// User input must never be passed directly to the schema prop.

interface JsonLdProps {
  schema: Record<string, unknown>
  id?: string
}

export function JsonLd({ schema, id }: JsonLdProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      suppressHydrationWarning
    >
      {JSON.stringify(schema)}
    </script>
  )
}
```

- [ ] **Step 2: TypeScript check**

```bash
npx tsc --noEmit
```

Expected: no errors (React 19 types support string children on `<script>` elements).

- [ ] **Step 3: Commit**

```bash
git add src/components/JsonLd.tsx
git commit -m "feat(seo): add JsonLd server component for structured data"
```

---

## Task 8: Organization and WebSite Schemas in Root Layout

**Files:**
- Modify: `src/app/layout.tsx`

Add `Organization` and `WebSite` JSON-LD schemas to the root layout so they appear on every page.

- [ ] **Step 1: Import JsonLd in layout.tsx**

Add to the existing imports at the top of `src/app/layout.tsx`:

```ts
import { JsonLd } from '@/components/JsonLd'
```

- [ ] **Step 2: Define schemas as constants above the RootLayout function**

Add these constants after the `viewport` export and before `export default function RootLayout`:

```ts
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Cadence',
  url: 'https://cadencehq.co',
  logo: 'https://cadencehq.co/brand/cadence-horizontal-lockup.svg',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@cadencehq.co',
    contactType: 'customer support',
  },
  sameAs: [
    'https://twitter.com/seand132',
  ],
}

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Cadence',
  url: 'https://cadencehq.co',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://cadencehq.co/blog?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}
```

- [ ] **Step 3: Add JsonLd components to the layout JSX**

Inside `RootLayout`, add the two `JsonLd` components inside `<body>`, right before `<NavClient />`:

```tsx
<body style={{ background: '#2C2C2C', overflowX: 'hidden', maxWidth: '100vw' }}>
  <JsonLd schema={organizationSchema} id="schema-organization" />
  <JsonLd schema={webSiteSchema} id="schema-website" />
  <NavClient />
  <main style={{ paddingBottom: 80 }}>{children}</main>
  {/* ... footer and scripts unchanged */}
```

- [ ] **Step 4: Verify schemas render**

Run: `npm run dev`
Open: `http://localhost:3000`
View page source and search for `application/ld+json` — two script blocks should appear with Organization and WebSite schemas. Stop the server.

- [ ] **Step 5: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat(seo): add Organization and WebSite JSON-LD schemas to root layout"
```

---

## Task 9: BlogPosting and BreadcrumbList Schemas on Blog Posts

**Files:**
- Modify: `src/app/blog/[slug]/page.tsx`

- [ ] **Step 1: Import JsonLd in blog/[slug]/page.tsx**

Add to the existing imports:

```ts
import { JsonLd } from '@/components/JsonLd'
```

- [ ] **Step 2: Build schemas and add to JSX**

Inside `BlogPostPage`, after the `const kicker = getKicker(...)` line and `const formattedDate = ...` block, add:

```ts
const blogPostSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.metaDescription || post.excerpt,
  image: post.coverImage || `https://cadencehq.co/blog/${post.slug}/opengraph-image`,
  datePublished: post.date,
  dateModified: post.date,
  url: `https://cadencehq.co/blog/${post.slug}`,
  author: {
    '@type': 'Person',
    name: post.author || 'Sean Davis',
    url: 'https://cadencehq.co/about',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Cadence',
    logo: {
      '@type': 'ImageObject',
      url: 'https://cadencehq.co/brand/cadence-horizontal-lockup.svg',
    },
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://cadencehq.co',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: 'https://cadencehq.co/blog',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: post.title,
      item: `https://cadencehq.co/blog/${post.slug}`,
    },
  ],
}
```

- [ ] **Step 3: Add JsonLd components to blog post JSX**

Inside the `return (...)` in `BlogPostPage`, add the schemas right after the opening `<div>`:

```tsx
return (
  <div style={{ background: '#F5F0E8', minHeight: '100vh' }}>
    <JsonLd schema={blogPostSchema} id={`schema-blogpost-${post.slug}`} />
    <JsonLd schema={breadcrumbSchema} id={`schema-breadcrumb-${post.slug}`} />
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '24px 24px 0' }}>
    {/* ... rest unchanged */}
```

- [ ] **Step 4: Verify on a blog post**

Run: `npm run dev`
Open any blog post (e.g., `http://localhost:3000/blog/[any-slug]`)
View page source — search for `BlogPosting` and `BreadcrumbList` in `application/ld+json` script blocks. Stop the server.

- [ ] **Step 5: Commit**

```bash
git add src/app/blog/\[slug\]/page.tsx
git commit -m "feat(seo): add BlogPosting and BreadcrumbList JSON-LD schemas to blog posts"
```

---

## Task 10: FAQPage Schema on /faq

**Files:**
- Modify: `src/app/faq/page.tsx`

The `CATEGORIES` array is already exported from `FaqAccordion.tsx` — import and map it to FAQPage schema.

- [ ] **Step 1: Import JsonLd and CATEGORIES in faq/page.tsx**

Add imports at the top of `src/app/faq/page.tsx`:

```ts
import { JsonLd } from '@/components/JsonLd'
import { CATEGORIES } from './FaqAccordion'
```

- [ ] **Step 2: Build FAQPage schema and add to JSX**

In `FaqPage`, build the schema and render it. The function becomes:

```tsx
export default function FaqPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: CATEGORIES.flatMap((category) =>
      category.items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      }))
    ),
  }

  return (
    <div style={{ background: '#2C2C2C', minHeight: '100vh' }}>
      <JsonLd schema={faqSchema} id="schema-faqpage" />
      {/* ─── HERO — unchanged below this line */}
```

- [ ] **Step 3: Verify**

Run: `npm run dev`
Open: `http://localhost:3000/faq`
View page source — search for `FAQPage` in `application/ld+json`. You should see all FAQ questions/answers. Stop the server.

- [ ] **Step 4: Commit**

```bash
git add src/app/faq/page.tsx
git commit -m "feat(seo): add FAQPage JSON-LD schema to /faq"
```

---

## Task 11: Cookie Consent Banner Component

**Files:**
- Create: `src/components/CookieConsent.tsx`

This is a `'use client'` component. It reads `localStorage` on mount, shows a banner on first visit, persists the decision, and conditionally loads GA4 scripts when consent is granted.

**GA4 Measurement ID:** `G-MV39PMR859` (read from `process.env.NEXT_PUBLIC_GA_ID`)

**Consent storage:**
- Key: `cadence_cookie_consent` — value: `'granted'` | `'denied'`
- Key: `cadence_cookie_consent_date` — value: ISO date string of when consent was given

**Re-prompt:** 12 months after the stored date.

- [ ] **Step 1: Create src/components/CookieConsent.tsx**

```tsx
'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

const CONSENT_KEY = 'cadence_cookie_consent'
const CONSENT_DATE_KEY = 'cadence_cookie_consent_date'
const GA_ID = process.env.NEXT_PUBLIC_GA_ID

function isConsentExpired(dateStr: string): boolean {
  const consentDate = new Date(dateStr)
  const twelveMonthsAgo = new Date()
  twelveMonthsAgo.setFullYear(twelveMonthsAgo.getFullYear() - 1)
  return consentDate < twelveMonthsAgo
}

export function CookieConsent() {
  const [consent, setConsent] = useState<'granted' | 'denied' | null>(null)
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY) as 'granted' | 'denied' | null
    const storedDate = localStorage.getItem(CONSENT_DATE_KEY)

    if (stored && storedDate && !isConsentExpired(storedDate)) {
      setConsent(stored)
      setShowBanner(false)
    } else {
      setShowBanner(true)
    }
  }, [])

  function handleAccept() {
    localStorage.setItem(CONSENT_KEY, 'granted')
    localStorage.setItem(CONSENT_DATE_KEY, new Date().toISOString())
    setConsent('granted')
    setShowBanner(false)
  }

  function handleDecline() {
    localStorage.setItem(CONSENT_KEY, 'denied')
    localStorage.setItem(CONSENT_DATE_KEY, new Date().toISOString())
    setConsent('denied')
    setShowBanner(false)
  }

  return (
    <>
      {/* GA4 — only loads when consent is granted */}
      {consent === 'granted' && GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {/* Consent banner */}
      {showBanner && (
        <div
          role="dialog"
          aria-label="Cookie consent"
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
            background: '#2C2C2C',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 24,
            flexWrap: 'wrap',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 14,
              color: '#9C968B',
              margin: 0,
              lineHeight: 1.5,
              flex: 1,
              minWidth: 240,
            }}
          >
            We use cookies to understand how Cadence is used — it helps us make it better. Accept to enable analytics, or decline to browse without tracking.
          </p>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexShrink: 0 }}>
            <button
              onClick={handleDecline}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 14,
                color: '#9C968B',
                padding: '8px 4px',
                textDecoration: 'underline',
              }}
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              style={{
                background: '#C8782A',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 600,
                fontSize: 14,
                color: 'white',
                padding: '8px 20px',
                borderRadius: 4,
                transition: 'background 150ms ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#D08835' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#C8782A' }}
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  )
}
```

- [ ] **Step 2: TypeScript check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/CookieConsent.tsx
git commit -m "feat(analytics): add CookieConsent component with GA4 conditional loading"
```

---

## Task 12: Mount CookieConsent in Root Layout and Add Env Var

**Files:**
- Modify: `src/app/layout.tsx`
- Create: `.env.local` (if not exists)

- [ ] **Step 1: Import CookieConsent in layout.tsx**

Add to the existing imports in `src/app/layout.tsx`:

```ts
import { CookieConsent } from '@/components/CookieConsent'
```

- [ ] **Step 2: Mount CookieConsent in layout JSX**

Add `<CookieConsent />` between the closing `</main>` and the opening `<footer>` in `RootLayout`:

```tsx
<main style={{ paddingBottom: 80 }}>{children}</main>
<CookieConsent />

{/* Footer */}
<footer style={{ background: '#2C2C2C' }} className="py-12">
```

- [ ] **Step 3: Add env var to .env.local**

Check if `.env.local` exists:
```bash
ls /Users/seandavis/Documents/Claude/Projects/Cadence/marketing/.env.local
```

If it exists, append to it. If not, create it. Add:
```
NEXT_PUBLIC_GA_ID=G-MV39PMR859
```

- [ ] **Step 4: Verify banner and GA4 flow**

Run: `npm run dev`

1. Open `http://localhost:3000` in an incognito window (or clear localStorage first)
2. The consent banner should appear at the bottom of the screen
3. Open DevTools → Application → Local Storage — `cadence_cookie_consent` should not exist yet
4. Click **Accept**
5. The banner should disappear
6. Check Local Storage — `cadence_cookie_consent` should be `'granted'`
7. Check DevTools → Network — GA4 requests to `googletagmanager.com` should appear

Test decline:
1. Clear localStorage and refresh
2. Banner appears — click **Decline**
3. `cadence_cookie_consent` is `'denied'` in Local Storage
4. No GA4 network requests appear

Stop the server.

- [ ] **Step 5: Add NEXT_PUBLIC_GA_ID to Vercel environment**

In Vercel dashboard for the cadencehq.co project:
- Settings → Environment Variables
- Add: `NEXT_PUBLIC_GA_ID` = `G-MV39PMR859` for Production, Preview, and Development environments

- [ ] **Step 6: TypeScript check and final commit**

```bash
npx tsc --noEmit
```

```bash
git add src/app/layout.tsx .env.local
git commit -m "feat(analytics): mount CookieConsent in root layout, add GA4 env var"
```

---

## Self-Review

### Spec coverage check

| Spec requirement | Task |
|-----------------|------|
| metadataBase in root layout | Task 1 |
| robots metadata at root | Task 1 |
| viewport export | Task 1 |
| Dynamic robots.ts | Task 2 |
| Dynamic sitemap.ts with blog posts | Task 3 |
| Security headers in next.config.ts | Task 4 |
| Per-page OG + Twitter (8 static pages) | Task 5 |
| Blog [slug] OG + Twitter in generateMetadata | Task 6 |
| JsonLd component | Task 7 |
| Organization schema | Task 8 |
| WebSite schema | Task 8 |
| BlogPosting schema | Task 9 |
| BreadcrumbList schema | Task 9 |
| FAQPage schema | Task 10 |
| CookieConsent component with GA4 | Task 11 |
| CookieConsent mounted in layout + env var | Task 12 |

All spec requirements covered. ✓

### Type consistency check

- `JsonLd` component accepts `schema: Record<string, unknown>` and optional `id?: string` — used consistently in Tasks 8, 9, 10.
- `CookieConsent` is imported and used as `<CookieConsent />` in Task 12 — matches the named export in Task 11.
- `getAllPosts()` returns `BlogPost[]` with `slug` and `date` fields — used correctly in Task 3.
- `CATEGORIES` is the exported const from `FaqAccordion.tsx` — imported correctly in Task 10, used as `CATEGORIES.flatMap(...)`.
- `getPostBySlug(slug)` returns `BlogPost | null` — Task 6 handles the null case with `if (!post) return {}`.

### Placeholder scan

No TBDs, TODOs, or vague steps found. All code blocks are complete. ✓
