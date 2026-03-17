import type { Metadata } from 'next'
import Link from 'next/link'
import { PricingToggle } from './PricingToggle'

export const metadata: Metadata = {
  title: 'Cadence Pricing — $10/month. One plan. Everything included.',
  description: 'One plan, one price. $10/month per manager. Start free for 14 days. Not per seat. Not per feature. Just $10.',
}

export default function PricingPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
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
            One plan. Everything included.
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
            $10 per manager, per month. Not per seat. Not per feature. Not per user.
          </p>
          {/* Trust strip */}
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

      {/* ─── RHYTHM DIVIDER ───────────────────────────────────── */}
      <div style={{ width:'100%', overflow:'hidden', lineHeight:0, background:'#F5F0E8' }} aria-hidden="true">
        <svg width="100%" height="40" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pricing-div-1" x="0" y="0" width="192" height="40" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="40" fill="url(#pricing-div-1)" />
        </svg>
      </div>

      {/* ─── MAIN CONTENT (client toggle + card + comparison + FAQ) ── */}
      <section style={{ background: 'white' }} className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <PricingToggle />
        </div>
      </section>

      {/* ─── RHYTHM DIVIDER 2 ─────────────────────────────────── */}
      <div style={{ width:'100%', overflow:'hidden', lineHeight:0, background:'white' }} aria-hidden="true">
        <svg width="100%" height="40" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pricing-div-2" x="0" y="0" width="192" height="40" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="40" fill="url(#pricing-div-2)" />
        </svg>
      </div>

      {/* ─── BOTTOM CTA ─────────────────────────────────────────── */}
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
            Start your free trial today.
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
            14 days. Full access. No credit card required.
          </p>
          <Link
            href="https://app.cadencehq.co/signup"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold transition-opacity hover:opacity-90"
            style={{
              background: '#C8782A',
              color: 'white',
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
