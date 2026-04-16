# Screenshot Lightbox Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add click-to-expand behavior to all 9 product screenshots on the features page using a single reusable `ScreenshotLightbox` client component.

**Architecture:** A `'use client'` React component wraps each screenshot's browser-frame block. It renders the thumbnail as normal and, when clicked, mounts a fixed overlay with the same image at 85vw. The features page stays a server component — it just imports and renders `ScreenshotLightbox`. No third-party packages.

**Tech Stack:** Next.js 14 (App Router), React 18, TypeScript, inline styles (matching existing page conventions)

---

## File structure

| File | Change |
|---|---|
| `src/components/ScreenshotLightbox.tsx` | **Create** — client component with thumbnail + modal |
| `src/app/features/page.tsx` | **Modify** — replace 9 browser-frame blocks with `<ScreenshotLightbox>` |

---

### Task 1: Create ScreenshotLightbox component

**Files:**
- Create: `src/components/ScreenshotLightbox.tsx`

- [ ] **Step 1: Create the file**

```tsx
'use client'

import { useEffect, useState } from 'react'

const DOT_COLORS = ['#C2604A', '#C8782A', '#7B8F6A']

interface ChromeProps {
  dark: boolean
  url: string
}

function Chrome({ dark, url }: ChromeProps) {
  return (
    <div
      style={{
        background: dark ? 'rgba(0,0,0,0.3)' : '#EBE6DD',
        padding: '10px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        borderBottom: dark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #D0CAC0',
      }}
    >
      <div style={{ display: 'flex', gap: 5 }}>
        {DOT_COLORS.map((c, i) => (
          <div
            key={i}
            style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.75 }}
          />
        ))}
      </div>
      <div
        style={{
          flex: 1,
          background: dark ? 'rgba(255,255,255,0.15)' : 'white',
          borderRadius: 4,
          padding: '3px 12px',
          fontSize: 11,
          color: dark ? 'rgba(255,255,255,0.7)' : '#9C968B',
          fontFamily: 'var(--font-dm-sans)',
        }}
      >
        {url}
      </div>
    </div>
  )
}

interface ScreenshotLightboxProps {
  src: string
  alt: string
  url: string
  /** Pass marginTop or other layout overrides that differ from the default frame style */
  containerStyle?: React.CSSProperties
  /** Use dark chrome variant (navy CTA section) */
  dark?: boolean
}

export default function ScreenshotLightbox({
  src,
  alt,
  url,
  containerStyle,
  dark = false,
}: ScreenshotLightboxProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open])

  return (
    <>
      {/* ── Thumbnail ─────────────────────────────────────────── */}
      <div
        style={{
          borderRadius: 10,
          overflow: 'hidden',
          border: dark ? '1px solid rgba(255,255,255,0.25)' : '1px solid #D0CAC0',
          boxShadow: dark
            ? '0 16px 50px rgba(0,0,0,0.25)'
            : '0 12px 40px rgba(0,0,0,0.12)',
          cursor: 'pointer',
          transition: 'transform 0.15s ease, box-shadow 0.15s ease',
          ...containerStyle,
        }}
        onClick={() => setOpen(true)}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLDivElement
          el.style.transform = 'scale(1.01)'
          el.style.boxShadow = dark
            ? '0 20px 60px rgba(0,0,0,0.35)'
            : '0 16px 50px rgba(0,0,0,0.18)'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLDivElement
          el.style.transform = 'scale(1)'
          el.style.boxShadow = dark
            ? '0 16px 50px rgba(0,0,0,0.25)'
            : '0 12px 40px rgba(0,0,0,0.12)'
        }}
        role="button"
        tabIndex={0}
        aria-label={`View ${alt} larger`}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') setOpen(true)
        }}
      >
        <Chrome dark={dark} url={url} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} style={{ width: '100%', maxWidth: '100%', display: 'block' }} />
      </div>

      {/* ── Modal overlay ─────────────────────────────────────── */}
      {open && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.75)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '5vh 5vw',
            animation: 'lightboxFadeIn 0.15s ease',
          }}
          onClick={() => setOpen(false)}
        >
          <style>{`@keyframes lightboxFadeIn { from { opacity: 0 } to { opacity: 1 } }`}</style>
          <div
            style={{
              width: '85vw',
              maxHeight: '90vh',
              borderRadius: 10,
              overflow: 'hidden',
              border: '1px solid #D0CAC0',
              boxShadow: '0 24px 80px rgba(0,0,0,0.4)',
              display: 'flex',
              flexDirection: 'column',
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Chrome bar with close button */}
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <Chrome dark={false} url={url} />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                style={{
                  position: 'absolute',
                  right: 12,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#9C968B',
                  fontSize: 16,
                  lineHeight: 1,
                  padding: '4px 8px',
                  fontFamily: 'var(--font-dm-sans)',
                }}
              >
                ✕
              </button>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              style={{
                width: '100%',
                maxHeight: 'calc(90vh - 42px)',
                objectFit: 'contain',
                display: 'block',
                background: 'white',
              }}
            />
          </div>
        </div>
      )}
    </>
  )
}
```

- [ ] **Step 2: Verify the build compiles**

Run from `marketing/`:
```bash
npm run build
```
Expected: build completes with no TypeScript errors. `ScreenshotLightbox` won't be used yet so no visual change.

- [ ] **Step 3: Commit**

```bash
git add src/components/ScreenshotLightbox.tsx
git commit -m "feat: add ScreenshotLightbox client component"
```

---

### Task 2: Wire ScreenshotLightbox into all 9 screenshot instances on features page

**Files:**
- Modify: `src/app/features/page.tsx`

There are 9 browser-frame blocks. Each gets replaced by a single `<ScreenshotLightbox>` call. The component renders the browser chrome internally, so the entire outer `<div>` + chrome bar + `<img>` block is replaced.

- [ ] **Step 1: Add the import at the top of features/page.tsx**

After the existing imports (line 2), add:
```tsx
import ScreenshotLightbox from '@/components/ScreenshotLightbox'
```

The file currently starts with:
```tsx
import type { Metadata } from 'next'
import Link from 'next/link'
```

Replace with:
```tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import ScreenshotLightbox from '@/components/ScreenshotLightbox'
```

- [ ] **Step 2: Replace instance 1 — one-on-ones.png (around line 229)**

Find this entire block (the outer div starting with `borderRadius: 10, overflow: 'hidden', border: '1px solid #D0CAC0', boxShadow: '0 12px 40px rgba(0,0,0,0.12)'` containing the 1:1 list screenshot):

```tsx
              <div
                style={{
                  borderRadius: 10,
                  overflow: 'hidden',
                  border: '1px solid #D0CAC0',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
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
                      <div
                        key={i}
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          background: c,
                          opacity: 0.75,
                        }}
                      />
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
                    app.cadencehq.co/1-1s
                  </div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/screenshots/one-on-ones.png"
                  alt="Cadence 1:1 meeting agendas"
                  style={{ width: '100%', maxWidth: '100%', display: 'block' }}
                />
              </div>
```

Replace with:
```tsx
              <ScreenshotLightbox
                src="/screenshots/one-on-ones.png"
                alt="Cadence 1:1 meeting agendas"
                url="app.cadencehq.co/1-1s"
              />
```

- [ ] **Step 3: Replace instance 2 — one-on-one-detail.png (around line 283)**

Find:
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

Replace with:
```tsx
              {/* 1:1 detail view */}
              <ScreenshotLightbox
                src="/screenshots/one-on-one-detail.png"
                alt="Cadence 1:1 meeting detail with structured agenda sections"
                url="app.cadencehq.co/1-1s/devon-lewis"
                containerStyle={{ marginTop: 16 }}
              />
```

- [ ] **Step 4: Replace instance 3 — tasks.png (around line 408)**

Find:
```tsx
              <div
                style={{
                  borderRadius: 10,
                  overflow: 'hidden',
                  border: '1px solid #D0CAC0',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.10)',
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
                      <div
                        key={i}
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          background: c,
                          opacity: 0.75,
                        }}
                      />
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
                    app.cadencehq.co/tasks
                  </div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/screenshots/tasks.png"
                  alt="Cadence task delegation and tracking"
                  style={{ width: '100%', maxWidth: '100%', display: 'block' }}
                />
              </div>
```

Replace with:
```tsx
              <ScreenshotLightbox
                src="/screenshots/tasks.png"
                alt="Cadence task delegation and tracking"
                url="app.cadencehq.co/tasks"
              />
```

- [ ] **Step 5: Replace instance 4 — dashboard.png first occurrence (around line 549)**

Find:
```tsx
              <div
                style={{
                  borderRadius: 10,
                  overflow: 'hidden',
                  border: '1px solid #D0CAC0',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.10)',
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
                      <div
                        key={i}
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          background: c,
                          opacity: 0.75,
                        }}
                      />
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
                    app.cadencehq.co/dashboard
                  </div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/screenshots/dashboard.png"
                  alt="Cadence team dashboard"
                  style={{ width: '100%', maxWidth: '100%', display: 'block' }}
                />
              </div>
```

Replace with:
```tsx
              <ScreenshotLightbox
                src="/screenshots/dashboard.png"
                alt="Cadence team dashboard"
                url="app.cadencehq.co/dashboard"
              />
```

- [ ] **Step 6: Replace instance 5 — kpis.png (around line 690)**

Find the block with `src="/screenshots/kpis.png"` and `app.cadencehq.co/goals` in the URL bar. The outer div has `boxShadow: '0 12px 40px rgba(0,0,0,0.10)'` and no marginTop. Replace the entire outer div + chrome + img:

```tsx
              <div
                style={{
                  borderRadius: 10,
                  overflow: 'hidden',
                  border: '1px solid #D0CAC0',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.10)',
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
                      <div
                        key={i}
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          background: c,
                          opacity: 0.75,
                        }}
                      />
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
                  src="/screenshots/kpis.png"
                  alt="Cadence KPI goals and tracking"
                  style={{ width: '100%', maxWidth: '100%', display: 'block' }}
                />
              </div>
```

Replace with:
```tsx
              <ScreenshotLightbox
                src="/screenshots/kpis.png"
                alt="Cadence KPI goals and tracking"
                url="app.cadencehq.co/goals"
              />
```

- [ ] **Step 7: Replace instance 6 — goals.png (around line 744)**

Find the block immediately after instance 5 that has `src="/screenshots/goals.png"` and `marginTop: 16`:

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

Replace with:
```tsx
              {/* Goals tab */}
              <ScreenshotLightbox
                src="/screenshots/goals.png"
                alt="Cadence team goals with subtasks and progress tracking"
                url="app.cadencehq.co/goals"
                containerStyle={{ marginTop: 16 }}
              />
```

- [ ] **Step 8: Replace instance 7 — team.png (around line 891)**

Find the block with `src="/screenshots/team.png"` and `app.cadencehq.co/org`:

```tsx
              <div
                style={{
                  borderRadius: 10,
                  overflow: 'hidden',
                  border: '1px solid #D0CAC0',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.10)',
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
                      <div
                        key={i}
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          background: c,
                          opacity: 0.75,
                        }}
                      />
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
                    app.cadencehq.co/org
                  </div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/screenshots/team.png"
                  alt="Cadence org chart and team structure"
                  style={{ width: '100%', maxWidth: '100%', display: 'block' }}
                />
              </div>
```

Replace with:
```tsx
              <ScreenshotLightbox
                src="/screenshots/team.png"
                alt="Cadence org chart and team structure"
                url="app.cadencehq.co/org"
              />
```

- [ ] **Step 9: Replace instance 8 — team-meetings.png (around line 1019)**

Find the block with `src="/screenshots/team-meetings.png"` and `app.cadencehq.co/team-meetings`:

```tsx
              <div
                style={{
                  borderRadius: 10,
                  overflow: 'hidden',
                  border: '1px solid #D0CAC0',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.10)',
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
                      <div
                        key={i}
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          background: c,
                          opacity: 0.75,
                        }}
                      />
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
                    app.cadencehq.co/team-meetings
                  </div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/screenshots/team-meetings.png"
                  alt="Cadence team meetings with shared agendas"
                  style={{ width: '100%', maxWidth: '100%', display: 'block' }}
                />
              </div>
```

Replace with:
```tsx
              <ScreenshotLightbox
                src="/screenshots/team-meetings.png"
                alt="Cadence team meetings with shared agendas"
                url="app.cadencehq.co/team-meetings"
              />
```

- [ ] **Step 10: Replace instance 9 — dashboard.png dark variant (around line 1383)**

This is in the navy CTA section at the bottom. The outer div has a dark chrome bar and `opacity: 0.92`. Find:

```tsx
              <div
                style={{
                  borderRadius: 10,
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.25)',
                  boxShadow: '0 16px 50px rgba(0,0,0,0.25)',
                  opacity: 0.92,
                }}
              >
                <div
                  style={{
                    background: 'rgba(0,0,0,0.3)',
                    padding: '10px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <div style={{ display: 'flex', gap: 5 }}>
                    {['#C2604A', '#C8782A', '#7B8F6A'].map((c, i) => (
                      <div
                        key={i}
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          background: c,
                          opacity: 0.75,
                        }}
                      />
                    ))}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      background: 'rgba(255,255,255,0.15)',
                      borderRadius: 4,
                      padding: '3px 12px',
                      fontSize: 11,
                      color: 'rgba(255,255,255,0.7)',
                      fontFamily: 'var(--font-dm-sans)',
                    }}
                  >
                    app.cadencehq.co/dashboard
                  </div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/screenshots/dashboard.png"
                  alt="Cadence dashboard"
                  style={{ width: '100%', maxWidth: '100%', display: 'block' }}
                />
              </div>
```

Replace with:
```tsx
              <ScreenshotLightbox
                src="/screenshots/dashboard.png"
                alt="Cadence dashboard"
                url="app.cadencehq.co/dashboard"
                dark
                containerStyle={{ opacity: 0.92 }}
              />
```

- [ ] **Step 11: Verify the build passes**

Run from `marketing/`:
```bash
npm run build
```
Expected: build completes successfully. The output should show no TypeScript errors. Page route `/features` should appear in the output.

- [ ] **Step 12: Commit**

```bash
git add src/app/features/page.tsx
git commit -m "feat: wire ScreenshotLightbox into all 9 feature page screenshots"
```

---

## Self-review

**Spec coverage:**
- Click any screenshot → opens larger: covered (thumbnail onClick in Task 1)
- Escape to close: covered (useEffect keydown listener)
- Click overlay to close: covered (onClick on overlay div)
- Click × to close: covered (button in modal chrome)
- Smooth fade-in: covered (`lightboxFadeIn` animation)
- Cursor pointer + hover effect: covered (onMouseEnter/Leave + cursor style)
- Browser chrome preserved in modal: covered (Chrome component reused)
- Dark variant: covered (`dark` prop)
- All 9 instances: covered (Steps 2–10)

**Placeholder scan:** None found.

**Type consistency:** `Chrome` component defined in Task 1, used in Task 1. `ScreenshotLightbox` props defined in Task 1, all 9 usages in Task 2 match those props exactly (`src`, `alt`, `url`, `containerStyle?`, `dark?`).
