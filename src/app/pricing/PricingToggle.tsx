'use client'

import { useState } from 'react'
import Link from 'next/link'

type PlanId = 'starter' | 'growth' | 'team' | 'unlimited'


// Stripe payment links (monthly). Annual falls back to signup with plan param.
const STRIPE_LINKS: Record<PlanId, string> = {
  starter: 'https://buy.stripe.com/7sYdR98Zw937byI4Le7g401',
  growth: 'https://buy.stripe.com/00w3cv7Vs1AF9qAcdG7g402',
  team: 'https://buy.stripe.com/3cI4gza3Adjn46gelO7g403',
  unlimited: 'https://buy.stripe.com/14A7sLfnUenrdGQa5y7g404',
}

const PLANS: {
  id: PlanId
  name: string
  monthly: number
  annual: number
  seats: string
  popular?: boolean
  features: string[]
}[] = [
  {
    id: 'starter',
    name: 'Starter',
    monthly: 10,
    annual: 8,
    seats: 'Up to 5 team members',
    features: [
      '1:1 meeting templates',
      'Task management',
      'KPI tracking',
      'Team member profiles',
      'Email support',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    monthly: 25,
    annual: 20,
    seats: 'Up to 15 team members',
    popular: true,
    features: [
      'Everything in Starter',
      'Weekly digests',
      'Goal tracking',
      'Referral rewards',
      'Priority support',
    ],
  },
  {
    id: 'team',
    name: 'Team',
    monthly: 49,
    annual: 39,
    seats: 'Up to 50 team members',
    features: [
      'Everything in Growth',
      'Multiple teams',
      'Advanced reporting',
      'Admin dashboard',
      'Dedicated onboarding',
    ],
  },
  {
    id: 'unlimited',
    name: 'Unlimited',
    monthly: 79,
    annual: 63,
    seats: 'Unlimited team members',
    features: [
      'Everything in Team',
      'Unlimited team members',
      'Custom integrations',
      'SLA support',
      'Early access to new features',
    ],
  },
]

const faqs = [
  {
    q: 'Do my employees need to pay?',
    a: 'No. You pay one subscription. Your entire team gets access for free.',
  },
  {
    q: 'What counts as a team member?',
    a: 'Anyone you invite to your Cadence workspace.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. No contracts, no cancellation fees.',
  },
  {
    q: 'What happens if I exceed my seat limit?',
    a: "You'll be prompted to upgrade. Your data is always safe.",
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes, 14 days free, no credit card required.',
  },
]

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="8" cy="8" r="8" fill="#C8782A" fillOpacity="0.15" />
      <path
        d="M5 8L7 10.5L11 5.5"
        stroke="#C8782A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function PricingToggle() {
  const [annual, setAnnual] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* Annual/Monthly Toggle */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
          marginBottom: 48,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 15,
            fontWeight: annual ? 400 : 600,
            color: annual ? '#7A7468' : '#2C2C2C',
          }}
        >
          Monthly
        </span>
        <button
          onClick={() => setAnnual(!annual)}
          aria-label="Toggle billing period"
          style={{
            width: 52,
            height: 28,
            borderRadius: 14,
            background: annual ? '#C8782A' : '#D0CAC0',
            border: 'none',
            cursor: 'pointer',
            position: 'relative',
            transition: 'background 200ms ease',
            padding: 0,
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 3,
              left: annual ? 27 : 3,
              width: 22,
              height: 22,
              borderRadius: '50%',
              background: 'white',
              boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
              transition: 'left 200ms ease',
            }}
          />
        </button>
        <span
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 15,
            fontWeight: annual ? 600 : 400,
            color: annual ? '#2C2C2C' : '#7A7468',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          Annual
          <span
            style={{
              background: annual ? '#FDF6EE' : '#F5F0E8',
              color: annual ? '#C8782A' : '#7A7468',
              fontWeight: 700,
              fontSize: 11,
              padding: '2px 8px',
              borderRadius: 999,
              border: annual ? '1px solid #F0D5B8' : '1px solid #D0CAC0',
              letterSpacing: '0.04em',
            }}
          >
            SAVE 20%
          </span>
        </span>
      </div>

      {/* Plan Cards */}
      <div
        className="pricing-cards-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 20,
          marginBottom: 80,
          alignItems: 'stretch',
        }}
      >
        {PLANS.map((plan) => (
          <div
            key={plan.id}
            style={{
              position: 'relative',
              borderRadius: 8,
              border: plan.popular ? '2px solid #C8782A' : '1px solid #D0CAC0',
              boxShadow: plan.popular
                ? '0 4px 24px rgba(200,120,42,0.18)'
                : '0 2px 12px rgba(0,0,0,0.06)',
              background: 'white',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ height: 4, background: plan.popular ? '#C8782A' : '#D0CAC0' }} />

            {plan.popular && (
              <div
                style={{
                  position: 'absolute',
                  top: 16,
                  right: 14,
                  background: '#C8782A',
                  color: 'white',
                  fontFamily: 'var(--font-dm-sans)',
                  fontWeight: 700,
                  fontSize: 10,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '3px 10px',
                  borderRadius: 999,
                }}
              >
                Most Popular
              </div>
            )}

            <div
              style={{
                padding: '24px 22px 28px',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontWeight: 700,
                  fontSize: 18,
                  color: '#2C2C2C',
                  margin: '0 0 4px',
                }}
              >
                {plan.name}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-source-sans)',
                  fontSize: 13,
                  color: '#7A7468',
                  margin: '0 0 18px',
                }}
              >
                {plan.seats}
              </p>

              <div style={{ marginBottom: 4 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontWeight: 700,
                    fontSize: 38,
                    color: '#2C2C2C',
                    lineHeight: 1,
                  }}
                >
                  ${annual ? plan.annual : plan.monthly}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-source-sans)',
                    fontSize: 14,
                    color: '#7A7468',
                    marginLeft: 3,
                  }}
                >
                  /month
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-source-sans)',
                  fontSize: 12,
                  color: '#7A7468',
                  margin: '0 0 22px',
                }}
              >
                {annual ? `Billed $${plan.annual * 12}/year` : 'Billed monthly'}
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 22px', flex: 1 }}>
                {plan.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '7px 0',
                      borderBottom: '1px solid #F5F0E8',
                    }}
                  >
                    <CheckIcon />
                    <span
                      style={{
                        fontFamily: 'var(--font-source-sans)',
                        fontSize: 14,
                        color: '#2C2C2C',
                      }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={annual ? `https://app.cadencehq.co/signup?plan=${plan.id}&billing=annual` : STRIPE_LINKS[plan.id]}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '12px 0',
                  background: plan.popular ? '#C8782A' : 'transparent',
                  color: plan.popular ? 'white' : '#C8782A',
                  border: plan.popular ? 'none' : '1.5px solid #C8782A',
                  textAlign: 'center',
                  borderRadius: 4,
                  fontFamily: 'var(--font-dm-sans)',
                  fontWeight: 600,
                  fontSize: 14,
                  textDecoration: 'none',
                  boxSizing: 'border-box' as const,
                }}
              >
                Start free
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Value Callout */}
      <div
        style={{
          maxWidth: 680,
          margin: '0 auto 80px',
          background: '#FDF6EE',
          border: '1px solid #F0D5B8',
          borderRadius: 12,
          padding: '32px 36px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 700,
            fontSize: 20,
            color: '#C8782A',
            margin: '0 0 12px',
          }}
        >
          Why flat-rate pricing?
        </p>
        <p
          style={{
            fontFamily: 'var(--font-source-sans)',
            fontSize: 16,
            color: '#2C2C2C',
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          Most tools charge per seat. With 8 direct reports on a $7/user tool,
          you&rsquo;re paying $56/month before you&rsquo;ve done anything.
          Cadence charges one flat rate - your whole team is included.
        </p>
      </div>

      {/* FAQ */}
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <h2
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 700,
            fontSize: 26,
            color: '#2C2C2C',
            textAlign: 'center',
            marginBottom: 28,
          }}
        >
          Frequently asked questions
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                border: '1px solid #D0CAC0',
                borderRadius: 8,
                overflow: 'hidden',
                background: 'white',
              }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  textAlign: 'left',
                  gap: 16,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontWeight: 500,
                    fontSize: 15,
                    color: '#2C2C2C',
                  }}
                >
                  {faq.q}
                </span>
                <span
                  style={{
                    fontSize: 20,
                    color: '#7A7468',
                    lineHeight: 1,
                    transition: 'transform 200ms ease',
                    transform: openFaq === i ? 'rotate(45deg)' : 'none',
                    flexShrink: 0,
                  }}
                >
                  +
                </span>
              </button>
              {openFaq === i && (
                <div
                  style={{
                    padding: '0 20px 18px',
                    fontFamily: 'var(--font-source-sans)',
                    fontSize: 15,
                    color: '#7A7468',
                    lineHeight: 1.7,
                  }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pricing-cards-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 580px) {
          .pricing-cards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
