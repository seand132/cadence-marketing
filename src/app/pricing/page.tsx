'use client'

import { useState } from 'react'

const features = [
  'Unlimited 1:1 meetings',
  'Goal tracking & OKRs',
  'Async team check-ins',
  'Manager insights dashboard',
  'Slack & calendar integrations',
  'Priority support',
]

const faqs = [
  {
    q: 'What happens after the 14-day trial?',
    a: "Your card won't be charged until the trial ends. You can cancel anytime before then and owe nothing.",
  },
  {
    q: 'Can I add multiple team members?',
    a: 'The Starter plan covers one manager and up to 10 direct reports. Team plans are coming soon.',
  },
  {
    q: 'Is my data secure?',
    a: 'Yes. All data is encrypted at rest and in transit. We never sell your data or share it with third parties.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Absolutely. Cancel from your account settings with one click. No hoops, no phone calls.',
  },
  {
    q: 'Do you offer discounts?',
    a: 'We offer discounts for nonprofits and early-stage startups. Email hello@cadencehq.co to ask.',
  },
]

export default function PricingPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleCheckout() {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/stripe/create-checkout', { method: 'POST' })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h1
          className="text-4xl font-bold mb-4"
          style={{ fontFamily: 'var(--font-montserrat)', color: '#1C2B3A' }}
        >
          Simple, honest pricing
        </h1>
        <p className="text-[#1C2B3A]/65 text-lg">
          One plan. Everything you need to manage well.
        </p>
      </div>

      {/* Plan card */}
      <div className="bg-white rounded-2xl shadow-sm border border-[#1C2B3A]/10 p-10 mb-16">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold" style={{ color: '#1C2B3A' }}>Starter</h2>
            <p className="text-[#1C2B3A]/55 mt-1">For individual managers</p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold" style={{ color: '#1C2B3A' }}>$10</div>
            <div className="text-[#1C2B3A]/50 text-sm">per month</div>
          </div>
        </div>

        <div className="bg-[#EEF0EC] rounded-lg px-4 py-3 mb-8 text-sm font-medium" style={{ color: '#3A7D7B' }}>
          14-day free trial — no credit card required upfront
        </div>

        <ul className="space-y-3 mb-8">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-3 text-[#1C2B3A]/80">
              <span className="text-[#7A9E82] font-bold">✓</span>
              {f}
            </li>
          ))}
        </ul>

        <button
          onClick={handleCheckout}
          disabled={loading}
          className="w-full py-4 rounded-lg font-semibold text-white transition-colors disabled:opacity-60"
          style={{ background: loading ? '#2a3f57' : '#1C2B3A' }}
        >
          {loading ? 'Redirecting…' : 'Start free trial'}
        </button>

        {error && <p className="mt-3 text-center text-sm text-red-600">{error}</p>}
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
