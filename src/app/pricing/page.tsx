import type { Metadata } from 'next'

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
    a: 'Per manager. If you manage a team of 8, that\'s one Cadence account at $10/month. Your direct reports don\'t need accounts.',
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
    a: 'Yes. Cadence uses Supabase for data storage with row-level security — your team\'s data is only visible to you and your direct reports. Full details in the privacy policy.',
  },
  {
    q: "What's your refund policy?",
    a: "If you're charged and decide within 7 days it's not for you, we'll refund the charge. After that, we don't offer pro-rated refunds — but you can cancel anytime and won't be charged again.",
  },
]

export default function PricingPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h1
          className="text-4xl font-bold mb-4"
          style={{ fontFamily: 'var(--font-montserrat)', color: '#1C2B3A' }}
        >
          Simple pricing for small teams.
        </h1>
        <p className="text-[#1C2B3A]/65 text-lg">
          One plan. One price. Everything included.
        </p>
      </div>

      {/* Plan card */}
      <div className="bg-white rounded-2xl shadow-sm border border-[#1C2B3A]/10 p-10 mb-16">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold" style={{ color: '#1C2B3A' }}>Cadence Pro</h2>
            <p className="text-[#1C2B3A]/55 mt-1">For individual managers</p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold" style={{ color: '#1C2B3A' }}>$10</div>
            <div className="text-[#1C2B3A]/50 text-sm">/ month per manager</div>
          </div>
        </div>

        <div className="bg-[#EEF0EC] rounded-lg px-4 py-3 mb-8 text-sm font-medium" style={{ color: '#3A7D7B' }}>
          Free while in beta
        </div>

        <ul className="space-y-3 mb-8">
          {planFeatures.map((f) => (
            <li key={f} className="flex items-center gap-3 text-[#1C2B3A]/80">
              <span className="text-[#7A9E82] font-bold">✓</span>
              {f}
            </li>
          ))}
        </ul>

        <a
          href="https://app.cadencehq.co/signup"
          className="block w-full py-4 rounded-lg font-semibold text-white text-center transition-colors"
          style={{ background: '#1C2B3A' }}
        >
          Try Cadence free
        </a>

        <p className="mt-3 text-center text-sm text-[#1C2B3A]/50">
          No credit card required during beta. Pricing activates when we exit beta.
        </p>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-2xl font-bold mb-8 text-center" style={{ fontFamily: 'var(--font-montserrat)', color: '#1C2B3A' }}>
          Frequently asked questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details key={i} className="bg-white rounded-xl border border-[#1C2B3A]/8 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer font-medium text-[#1C2B3A] list-none flex items-center justify-between select-none">
                {faq.q}
                <span className="text-[#1C2B3A]/40 text-lg ml-4 shrink-0">＋</span>
              </summary>
              <div className="px-6 pb-4 text-[#1C2B3A]/65 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  )
}
