import type { Metadata } from 'next'
import FaqAccordion from './FaqAccordion'
import { JsonLd } from '@/components/JsonLd'
import { CATEGORIES } from './faq-data'

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
      <section style={{ background: '#F5F0E8', paddingTop: 72, paddingBottom: 56 }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div
            style={{
              display: 'inline-block',
              background: '#FDF6EE',
              border: '1px solid #E8C99A',
              borderRadius: 99,
              padding: '4px 14px',
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 600,
              fontSize: 12,
              color: '#C8782A',
              letterSpacing: '0.08em',
              marginBottom: 20,
            }}
          >
            HELP CENTER
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 700,
              fontSize: 'clamp(32px, 5vw, 52px)',
              color: '#2C2C2C',
              lineHeight: 1.15,
              marginBottom: 16,
            }}
          >
            Common questions, plain answers.
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-source-sans)',
              fontSize: 18,
              color: '#6B6560',
              lineHeight: 1.6,
              marginBottom: 12,
            }}
          >
            Most managers are up and running in 15 minutes.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-source-sans)',
              fontSize: 15,
              color: '#9C968B',
              lineHeight: 1.6,
            }}
          >
            Browse by category below or email us at{' '}
            <a
              href="mailto:hello@cadencehq.co"
              style={{ color: '#C8782A', textDecoration: 'none' }}
            >
              hello@cadencehq.co
            </a>
          </p>
        </div>
      </section>

      {/* ─── CATEGORIES ───────────────────────────────────── */}
      <section style={{ paddingTop: 16, paddingBottom: 40 }}>
        <div className="max-w-3xl mx-auto px-6">
          <FaqAccordion />
        </div>
      </section>

      {/* ─── CONTACT CTA ──────────────────────────────────── */}
      <section style={{ background: '#2C2C2C', paddingTop: 32, paddingBottom: 32 }}>
        <div className="max-w-2xl mx-auto px-6">
          <div
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(200,120,42,0.35)',
              borderRadius: 12,
              padding: '36px 40px',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 600,
                fontSize: 18,
                color: '#F5F0E8',
                marginBottom: 10,
              }}
            >
              Still have questions?
            </p>
            <p
              style={{
                fontFamily: 'var(--font-source-sans)',
                fontSize: 15,
                color: 'rgba(245,240,232,0.8)',
                lineHeight: 1.7,
              }}
            >
              Email us at{' '}
              <a
                href="mailto:hello@cadencehq.co"
                style={{
                  color: '#C8782A',
                  textDecoration: 'none',
                  fontWeight: 600,
                }}
              >
                hello@cadencehq.co
              </a>{' '}
              We read every message.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
