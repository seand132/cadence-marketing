import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cadence Pricing — $10/month, 14-day free trial',
  description: 'One plan, one price. $10/month per manager. Start free for 14 days. Built for managers with 3 to 8 direct reports.',
}

const planFeatures = [
  'Unlimited 1:1 agendas',
  'Task tracking for your full team',
  'Team dashboard',
  'KPI and goal tracking',
  'Org chart',
  'Up to 10 direct reports',
]

const faqs = [
  {
    q: 'Is there a free trial?',
    a: 'Yes — 14 days free, no credit card required.',
  },
  {
    q: 'What happens after the trial?',
    a: "You can cancel or subscribe at $10/month. No pressure, no lock-in.",
  },
  {
    q: 'Is Cadence only for small teams?',
    a: "It's built for managers with 3–8 direct reports, but it works for any manager who wants a simple, consistent system.",
  },
  {
    q: 'Can I invite my team?',
    a: 'Yes — your direct reports can have accounts too.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. No contracts, no cancellation fees.',
  },
]

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

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section style={{ background: '#F5F0E8' }} className="py-20">
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
            className="mb-4"
            style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 'clamp(36px, 5vw, 52px)', color: '#2C2C2C', lineHeight: 1.15 }}
          >
            Simple pricing for small teams.
          </h1>
          <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: 18, color: '#9C968B', lineHeight: 1.6 }}>
            One plan. One price. Everything included.
          </p>
        </div>
      </section>

      <RhythmDivider id="pricing-div-1" bg="#F5F0E8" />

      {/* Plan + FAQ */}
      <section style={{ background: 'white' }} className="py-20">
        <div className="max-w-xl mx-auto px-6">

          {/* Plan card */}
          <div
            className="bg-white mb-16 reveal"
            style={{
              borderRadius: 8,
              border: '1px solid #D0CAC0',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              overflow: 'hidden',
            }}
          >
            <div style={{ height: 6, background: '#C8782A' }} />
            <div className="p-10">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 22, color: '#2C2C2C' }}>
                    Cadence Starter
                  </h2>
                  <p className="mt-1 text-sm" style={{ color: '#9C968B', fontFamily: 'var(--font-source-sans)' }}>
                    For individual managers
                  </p>
                </div>
                <div className="text-right">
                  <div style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 40, color: '#2C2C2C', lineHeight: 1 }}>$10</div>
                  <div className="text-xs mt-1" style={{ color: '#9C968B', fontFamily: 'var(--font-source-sans)' }}>/ month per manager</div>
                </div>
              </div>

              <div
                className="mb-8 mt-4 px-4 py-1.5 text-sm font-semibold rounded-full inline-block"
                style={{ background: '#FDF6EE', color: '#C8782A', fontFamily: 'var(--font-dm-sans)' }}
              >
                Most popular
              </div>

              <ul className="space-y-3 mb-8">
                {planFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                      <circle cx="8" cy="8" r="8" fill="#C8782A" fillOpacity="0.15" />
                      <path d="M5 8L7 10.5L11 5.5" stroke="#C8782A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ fontFamily: 'var(--font-source-sans)', fontSize: 15, color: '#2C2C2C' }}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="https://app.cadencehq.co/signup"
                className="block w-full py-3.5 text-sm font-semibold text-white text-center transition-opacity hover:opacity-90"
                style={{ background: '#C8782A', borderRadius: 4, fontFamily: 'var(--font-dm-sans)', fontWeight: 600 }}
              >
                Get started free
              </Link>

              <p className="mt-3 text-center text-xs" style={{ color: '#9C968B', fontFamily: 'var(--font-source-sans)' }}>
                14-day free trial. No credit card required. Cancel anytime.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="reveal">
            <h2
              className="mb-8 text-center"
              style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 24, color: '#2C2C2C' }}
            >
              Frequently asked questions
            </h2>
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="bg-white overflow-hidden"
                  style={{ border: '1px solid #D0CAC0', borderRadius: 8 }}
                >
                  <summary
                    className="px-6 py-4 cursor-pointer flex items-center justify-between select-none list-none"
                    style={{ color: '#2C2C2C', fontFamily: 'var(--font-dm-sans)', fontWeight: 500, fontSize: 15 }}
                  >
                    {faq.q}
                    <span className="ml-4 flex-shrink-0 text-lg" style={{ color: '#9C968B' }}>+</span>
                  </summary>
                  <div
                    className="px-6 pb-5 text-sm leading-relaxed"
                    style={{ color: '#9C968B', fontFamily: 'var(--font-source-sans)', lineHeight: 1.7 }}
                  >
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RhythmDivider id="pricing-div-2" bg="white" />

      {/* CTA */}
      <section style={{ background: '#C8782A' }} className="py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2
            className="mb-4"
            style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 36, color: 'white' }}
          >
            Try it free for 14 days.
          </h2>
          <p className="mb-8" style={{ fontFamily: 'var(--font-source-sans)', fontSize: 18, color: 'rgba(255,255,255,0.80)', lineHeight: 1.6 }}>
            No credit card. 3 minutes to set up. Cancel anytime.
          </p>
          <Link
            href="https://app.cadencehq.co/signup"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold transition-opacity hover:opacity-90"
            style={{ background: 'white', color: '#C8782A', borderRadius: 4, fontFamily: 'var(--font-dm-sans)', fontWeight: 600 }}
          >
            Get started free
          </Link>
        </div>
      </section>
    </>
  )
}
