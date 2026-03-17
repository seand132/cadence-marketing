import type { Metadata } from 'next'
import Link from 'next/link'
import BlogFilterGrid from './BlogFilterGrid'

export const metadata: Metadata = {
  title: 'The Cadence Blog | Practical management for real teams',
  description: 'Practical management for real teams. 1:1s, delegation, team culture, and building systems that actually work.',
}

const featuredPost = {
  slug: 'the-11-that-actually-works',
  title: 'The 1:1 That Actually Works',
  category: '1:1s',
  kicker: 'One-on-Ones ·',
  readTime: '8 min read',
  author: 'Sean Davis',
  excerpt:
    "Most 1:1s are status updates with better lighting. Here's how to turn yours into the most valuable 30 minutes of your week.",
}

function RhythmDivider({ id, bg }: { id: string; bg: string }) {
  return (
    <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0, background: bg }} aria-hidden="true">
      <svg width="100%" height="40" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={id} x="0" y="0" width="192" height="40" patternUnits="userSpaceOnUse">
            <rect x="0"   y="34" width="7" height="6"  rx="3.5" fill="#C2604A" />
            <rect x="12"  y="14" width="7" height="26" rx="3.5" fill="#C2604A" />
            <rect x="24"  y="30" width="7" height="10" rx="3.5" fill="#3A7D7B" />
            <rect x="36"  y="8"  width="7" height="32" rx="3.5" fill="#3A7D7B" />
            <rect x="48"  y="32" width="7" height="8"  rx="3.5" fill="#7B8F6A" />
            <rect x="60"  y="20" width="7" height="20" rx="3.5" fill="#7B8F6A" />
            <rect x="72"  y="34" width="7" height="6"  rx="3.5" fill="#C8782A" />
            <rect x="84"  y="6"  width="7" height="34" rx="3.5" fill="#C8782A" />
            <rect x="96"  y="30" width="7" height="10" rx="3.5" fill="#3A7D7B" />
            <rect x="108" y="22" width="7" height="18" rx="3.5" fill="#3A7D7B" />
            <rect x="120" y="34" width="7" height="6"  rx="3.5" fill="#7B8F6A" />
            <rect x="132" y="12" width="7" height="28" rx="3.5" fill="#7B8F6A" />
            <rect x="144" y="32" width="7" height="8"  rx="3.5" fill="#C2604A" />
            <rect x="156" y="18" width="7" height="22" rx="3.5" fill="#C2604A" />
            <rect x="168" y="34" width="7" height="6"  rx="3.5" fill="#C8782A" />
            <rect x="180" y="10" width="7" height="30" rx="3.5" fill="#C8782A" />
          </pattern>
        </defs>
        <rect width="100%" height="40" fill={`url(#${id})`} />
      </svg>
    </div>
  )
}

export default function BlogIndex() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#F5F0E8' }} className="pt-20 pb-10">
        <div className="max-w-4xl mx-auto px-6">
          <h1
            className="mb-3"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 700,
              fontSize: 'clamp(40px, 5vw, 60px)',
              color: '#2C2C2C',
              lineHeight: 1.1,
            }}
          >
            The Cadence Blog
          </h1>
          <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: 20, color: '#9C968B', lineHeight: 1.6 }}>
            Practical management for real teams.
          </p>
        </div>
      </section>

      {/* Featured post — navy anchor card */}
      <section style={{ background: '#F5F0E8' }} className="pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="block group"
            style={{
              borderRadius: 12,
              overflow: 'hidden',
              textDecoration: 'none',
              background: '#1C2B3A',
            }}
          >
            <div className="p-10 md:p-12">
              {/* Kicker */}
              <p
                className="mb-3"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontWeight: 700,
                  fontSize: 11,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#7A9E82',
                }}
              >
                {featuredPost.kicker}
              </p>
              {/* Title */}
              <h2
                className="mb-4"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontWeight: 700,
                  fontSize: 'clamp(26px, 3.5vw, 38px)',
                  color: '#F5F0E8',
                  lineHeight: 1.2,
                  maxWidth: 600,
                }}
              >
                {featuredPost.title}
              </h2>
              {/* Excerpt */}
              <p
                className="mb-8"
                style={{
                  fontFamily: 'var(--font-source-sans)',
                  fontSize: 18,
                  color: 'rgba(245,240,232,0.75)',
                  lineHeight: 1.7,
                  maxWidth: 560,
                }}
              >
                {featuredPost.excerpt}
              </p>
              {/* Meta row */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  {/* Author avatar */}
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: '#C8782A',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-dm-sans)',
                      fontWeight: 700,
                      fontSize: 12,
                      color: 'white',
                      flexShrink: 0,
                    }}
                  >
                    SD
                  </div>
                  <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 14, color: 'rgba(245,240,232,0.6)' }}>
                    {featuredPost.author} · {featuredPost.readTime}
                  </span>
                </div>
                <span
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity group-hover:opacity-80"
                  style={{ color: '#C8782A', fontFamily: 'var(--font-dm-sans)' }}
                >
                  Read article
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="#C8782A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Rhythm divider */}
      <RhythmDivider id="blog-div-featured" bg="#F5F0E8" />

      {/* Category filter + Grid (client component) */}
      <BlogFilterGrid />

      {/* Newsletter */}
      <section style={{ background: '#7A9E82' }} className="py-16">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2
            className="mb-2"
            style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 26, color: 'white' }}
          >
            Get management insights monthly.
          </h2>
          <p className="mb-8" style={{ fontFamily: 'var(--font-source-sans)', fontSize: 16, color: 'rgba(255,255,255,0.8)' }}>
            No spam. Unsubscribe anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
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

      {/* Bottom CTA */}
      <section style={{ background: '#C8782A' }} className="py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
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
            Ready to try Cadence?
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
            Get started free
          </Link>
        </div>
      </section>
    </>
  )
}
