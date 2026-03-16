import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cadence Pricing — Free in beta, $10/month when live',
  description: 'Free while in beta. One plan, one price when pricing goes live. Built for managers with 3–8 direct reports.',
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
    q: 'Is Cadence really free right now?',
    a: "Yes — free while we're in beta. When pricing goes live, we'll give you plenty of notice before anything changes. No surprises.",
  },
  {
    q: 'Is this per manager or per user?',
    a: "Per manager. If you manage a team of 8, that's one Cadence account at $10/month. Your direct reports don't need accounts.",
  },
  {
    q: 'What if my team grows beyond 10 people?',
    a: "We're working on expanded plans for larger teams. For now, reach out and we'll figure something out.",
  },
  {
    q: 'I manage a small team at a larger company. Is Cadence right for me?',
    a: "Yes — that's exactly who it's for. Cadence is built for the individual manager, not for IT or HR to configure and roll out. You can get started in 3 minutes without involving anyone else.",
  },
  {
    q: "Can I use Cadence if I'm not a first-time manager?",
    a: "Of course. The features are useful for any manager who wants more structure. We just built it specifically for people early in their management career — that's the problem we know best.",
  },
  {
    q: 'Is my data secure?',
    a: "Yes. Cadence uses Supabase for data storage with row-level security — your team's data is only visible to you and your direct reports. Full details in the privacy policy.",
  },
  {
    q: "What's your refund policy?",
    a: "If you're charged and decide within 7 days it's not for you, we'll refund the charge. After that, we don't offer pro-rated refunds — but you can cancel anytime and won't be charged again.",
  },
]

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section style={{ background: '#1C2B3A' }} className="py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h1
            className="mb-4"
            style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 300, fontSize: 'clamp(36px, 5vw, 56px)', color: 'white' }}
          >
            Simple pricing for small teams.
          </h1>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 18, color: 'rgba(255,255,255,0.65)' }}>
            One plan. One price. Everything included.
          </p>
        </div>
      </section>

      <section style={{ background: '#F5F0E8' }} className="py-24">
        <div className="max-w-xl mx-auto px-6">

          {/* Plan card */}
          <div className="bg-white p-10 mb-12 reveal" style={{ border: '1px solid #E0DDD8', borderRadius: 2 }}>
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 22, color: '#1C2B3A' }}>
                  Cadence Pro
                </h2>
                <p className="mt-1 text-sm" style={{ color: '#8A96A0', fontFamily: 'var(--font-dm-sans)' }}>
                  For individual managers
                </p>
              </div>
              <div className="text-right">
                <div style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 42, color: '#1C2B3A', lineHeight: 1 }}>$10</div>
                <div className="text-xs mt-1" style={{ color: '#8A96A0', fontFamily: 'var(--font-dm-sans)' }}>/ month per manager</div>
              </div>
            </div>

            <div
              className="mb-8 px-4 py-2.5 text-sm font-medium rounded"
              style={{ background: 'rgba(122,158,130,0.10)', color: '#7A9E82', fontFamily: 'var(--font-dm-sans)' }}
            >
              Free while in beta
            </div>

            <ul className="space-y-3 mb-8">
              {planFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                    <circle cx="8" cy="8" r="8" fill="#7A9E82" fillOpacity="0.15" />
                    <path d="M5 8L7 10.5L11 5.5" stroke="#7A9E82" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 15, color: '#1C2B3A' }}>{f}</span>
                </li>
              ))}
            </ul>

            <Link
              href="https://app.cadencehq.co/signup"
              className="btn-sage block w-full py-3.5 rounded text-sm font-medium text-center"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Try Cadence free
            </Link>

            <p className="mt-3 text-center text-xs" style={{ color: '#8A96A0', fontFamily: 'var(--font-dm-sans)' }}>
              No credit card required during beta. Pricing activates when we exit beta.
            </p>
          </div>

          {/* FAQ */}
          <div className="reveal">
            <h2
              className="mb-8 text-center"
              style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 24, color: '#1C2B3A' }}
            >
              Frequently asked questions
            </h2>
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="bg-white overflow-hidden group"
                  style={{ border: '1px solid #E0DDD8', borderRadius: 2 }}
                >
                  <summary
                    className="px-6 py-4 cursor-pointer font-medium flex items-center justify-between select-none list-none"
                    style={{ color: '#1C2B3A', fontFamily: 'var(--font-dm-sans)', fontSize: 15 }}
                  >
                    {faq.q}
                    <span className="faq-arrow ml-4 flex-shrink-0 text-lg" style={{ color: '#8A96A0' }}>+</span>
                  </summary>
                  <div className="px-6 pb-5 text-sm leading-relaxed" style={{ color: '#8A96A0', fontFamily: 'var(--font-dm-sans)' }}>
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
