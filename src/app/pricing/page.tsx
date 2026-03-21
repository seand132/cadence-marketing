import type { Metadata } from 'next'
import Link from 'next/link'
import { PricingToggle } from './PricingToggle'

export const metadata: Metadata = {
  title: 'Cadence Pricing — Simple pricing. No per-seat surprises.',
  description:
    'One flat monthly rate covers your whole team. Most management tools charge per person — Cadence does not. Starter from $10/month.',
}

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#F5F0E8' }} className="py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div
            className="inline-flex mb-6 px-3 py-1 rounded-full uppercase"
            style={{
              background: '#FDF6EE',
              color: '#C8782A',
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 600,
              fontSize: 11,
              letterSpacing: '0.1em',
            }}
          >
            Pricing
          </div>
          <h1
            className="mb-5"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 700,
              fontSize: 'clamp(36px, 5vw, 52px)',
              color: '#2C2C2C',
              lineHeight: 1.15,
            }}
          >
            Simple pricing. No per-seat surprises.
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-source-sans)',
              fontSize: 19,
              color: '#9C968B',
              lineHeight: 1.6,
              marginBottom: 24,
            }}
          >
            One flat monthly rate covers your whole team. Most management tools
            charge per person &mdash; we don&rsquo;t.
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 8,
              flexWrap: 'wrap',
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 13,
              color: '#9C968B',
              fontWeight: 500,
            }}
          >
            <span>14-day free trial</span>
            <span style={{ color: '#D0CAC0' }}>·</span>
            <span>No credit card</span>
            <span style={{ color: '#D0CAC0' }}>·</span>
            <span>Cancel anytime</span>
          </div>
        </div>
      </section>

      {/* Plans + FAQ */}
      <section style={{ background: 'white' }} className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <PricingToggle />
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: '#2C2C2C' }} className="py-24">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 700,
              fontSize: 'clamp(28px, 4vw, 40px)',
              color: 'white',
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            Ready to manage in rhythm?
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-source-sans)',
              fontSize: 18,
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.6,
              marginBottom: 32,
            }}
          >
            14 days free. Full access. No credit card required.
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 16,
              flexWrap: 'wrap',
            }}
          >
            <Link
              href="https://app.cadencehq.co/signup"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '14px 32px',
                background: '#C8782A',
                color: 'white',
                borderRadius: 4,
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 600,
                fontSize: 15,
                textDecoration: 'none',
              }}
            >
              Get started free
            </Link>
            <Link
              href="/features"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '14px 32px',
                background: 'transparent',
                color: 'rgba(255,255,255,0.75)',
                border: '1px solid rgba(255,255,255,0.25)',
                borderRadius: 4,
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 500,
                fontSize: 15,
                textDecoration: 'none',
              }}
            >
              See how it works &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
