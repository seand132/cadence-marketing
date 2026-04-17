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
  const isAvailable = resource.status === 'available'

  return (
    <div
      style={{
        background: 'white',
        border: isAvailable ? '1.5px solid #D0CAC0' : '1.5px dashed #C0BAB0',
        borderRadius: 10,
        padding: 22,
        opacity: isAvailable ? 1 : 0.8,
        display: 'flex',
        flexDirection: 'column',
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
          color: '#7A7468',
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
          color: isAvailable ? '#2C2C2C' : '#6B6560',
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
          color: '#7A7468',
          lineHeight: 1.5,
          flexGrow: 1,
        }}
      >
        {resource.desc}
      </p>
      {isAvailable && resource.href ? (
        <a
          href={resource.href}
          download
          style={{
            marginTop: 14,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 5,
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 600,
            fontSize: 12,
            color: '#C8782A',
            textDecoration: 'none',
          }}
        >
          Download PDF
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1v7M3 5.5l3 3 3-3M1 10.5h10" stroke="#C8782A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      ) : (
        <p
          style={{
            marginTop: 12,
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 600,
            fontSize: 10,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#C0BAB0',
          }}
        >
          Coming Soon
        </p>
      )}
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
