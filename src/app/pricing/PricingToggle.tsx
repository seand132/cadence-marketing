'use client'

import { useState } from 'react'
import Link from 'next/link'

const planFeaturesAll = [
  'Unlimited 1:1 meeting agendas (context carries forward automatically)',
  'Task delegation and real-time tracking',
  'Team dashboard with on-track/off-track status',
  'KPI and goal tracking',
  'Org chart and reporting structure',
  'Customizable weekly dashboard',
  'Up to 15 direct reports included',
  '14-day free trial, full access',
  'Cancel anytime, no contracts',
  'Email support',
]

const faqs = [
  {
    q: 'Is there a free trial?',
    a: 'Yes. 14 days, full access from day one. No credit card required.',
  },
  {
    q: 'What happens after the trial?',
    a: "You'll be prompted to subscribe at $10/mo. If you don't, your account moves to read-only. No data is lost.",
  },
  {
    q: 'Is the $10 per person on my team, or just for me?',
    a: 'Just for you as the manager. Your team members have their own accounts included at no extra cost.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. No contracts, no cancellation fees. Cancel from settings in 30 seconds.',
  },
  {
    q: 'What if my team grows past 15 people?',
    a: "Reach out and we'll find a plan that works.",
  },
  {
    q: 'Is my data safe if I cancel?',
    a: 'Yes. You have 30 days after cancellation to export everything.',
  },
]

export function PricingToggle() {
  const [annual, setAnnual] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const price = annual ? 8 : 10
  const billed = annual ? 'Billed as $96/year — save $24' : 'Billed monthly'

  return (
    <>
      {/* ── Annual/Monthly Toggle ─────────────────────────── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
          marginBottom: 40,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 15,
            fontWeight: annual ? 400 : 600,
            color: annual ? '#9C968B' : '#2C2C2C',
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
            color: annual ? '#2C2C2C' : '#9C968B',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          Annual
          {annual && (
            <span
              style={{
                background: '#FDF6EE',
                color: '#C8782A',
                fontWeight: 700,
                fontSize: 11,
                padding: '2px 8px',
                borderRadius: 999,
                border: '1px solid #F0D5B8',
                letterSpacing: '0.04em',
              }}
            >
              SAVE 20%
            </span>
          )}
        </span>
      </div>

      {/* ── Pricing Card ──────────────────────────────────── */}
      <div
        className="mx-auto"
        style={{
          maxWidth: 480,
          borderRadius: 8,
          border: '1px solid #D0CAC0',
          boxShadow: '0 4px 24px rgba(0,0,0,0.09)',
          overflow: 'hidden',
          background: 'white',
          marginBottom: 80,
        }}
      >
        <div style={{ height: 6, background: '#C8782A' }} />
        <div style={{ padding: '36px 40px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: 8,
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontWeight: 700,
                  fontSize: 22,
                  color: '#2C2C2C',
                  margin: 0,
                }}
              >
                Cadence
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-source-sans)',
                  fontSize: 14,
                  color: '#9C968B',
                  marginTop: 4,
                  marginBottom: 0,
                }}
              >
                Per manager. Your whole team included.
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontWeight: 700,
                  fontSize: 44,
                  color: '#2C2C2C',
                  lineHeight: 1,
                }}
              >
                ${price}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-source-sans)',
                  fontSize: 12,
                  color: '#9C968B',
                  marginTop: 4,
                }}
              >
                /mo
              </div>
            </div>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-source-sans)',
              fontSize: 13,
              color: '#9C968B',
              marginBottom: 24,
            }}
          >
            {billed}
          </p>

          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0' }}>
            {planFeaturesAll.map((f) => (
              <li
                key={f}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '8px 0',
                  borderBottom: '1px solid #F5F0E8',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="8" cy="8" r="8" fill="#C8782A" fillOpacity="0.15" />
                  <path d="M5 8L7 10.5L11 5.5" stroke="#C8782A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span
                  style={{
                    fontFamily: 'var(--font-source-sans)',
                    fontSize: 15,
                    color: '#2C2C2C',
                  }}
                >
                  {f}
                </span>
              </li>
            ))}
          </ul>

          <Link
            href={annual ? "https://app.cadencehq.co/signup?billing=annual" : "https://app.cadencehq.co/signup"}
            style={{
              display: 'block',
              width: '100%',
              padding: '14px 0',
              background: '#C8782A',
              color: 'white',
              textAlign: 'center',
              borderRadius: 4,
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 600,
              fontSize: 15,
              textDecoration: 'none',
            }}
          >
            Get started free
          </Link>
          <p
            style={{
              textAlign: 'center',
              fontSize: 12,
              color: '#9C968B',
              fontFamily: 'var(--font-source-sans)',
              marginTop: 12,
              marginBottom: 0,
            }}
          >
            14-day free trial included. No credit card required.
          </p>
        </div>
      </div>

      {/* ── What $10 Gets You ─────────────────────────────── */}
      <div style={{ maxWidth: 900, margin: '0 auto', marginBottom: 80 }}>
        <h2
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 700,
            fontSize: 26,
            color: '#2C2C2C',
            textAlign: 'center',
            marginBottom: 32,
          }}
        >
          What $10 gets you
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }}
        >
          {/* Before */}
          <div
            style={{
              background: 'white',
              border: '1px solid #D0CAC0',
              borderRadius: 8,
              overflow: 'hidden',
            }}
          >
            <div style={{ height: 4, background: '#D0CAC0' }} />
            <div style={{ padding: '24px 24px 28px' }}>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontWeight: 700,
                  fontSize: 14,
                  color: '#9C968B',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: 12,
                }}
              >
                Before Cadence
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px' }}>
                {['Notion doc that nobody updates', 'Spreadsheet from 2 managers ago', 'Slack threads nobody can find', 'Calendar with zero context', '3+ hours/week of overhead'].map(
                  (item) => (
                    <li
                      key={item}
                      style={{
                        fontFamily: 'var(--font-source-sans)',
                        fontSize: 14,
                        color: '#9C968B',
                        padding: '6px 0',
                        borderBottom: '1px solid #F5F0E8',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                      }}
                    >
                      <span style={{ color: '#D0CAC0', fontSize: 16, flexShrink: 0 }}>&#x2212;</span>
                      {item}
                    </li>
                  )
                )}
              </ul>
              <div
                style={{
                  background: '#F5F0E8',
                  borderRadius: 6,
                  padding: '10px 14px',
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 13,
                  color: '#9C968B',
                }}
              >
                $0/mo but 3+ hrs/week of wasted time
              </div>
            </div>
          </div>

          {/* Cadence */}
          <div
            style={{
              background: 'white',
              border: '2px solid #C8782A',
              borderRadius: 8,
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(200,120,42,0.15)',
            }}
          >
            <div style={{ height: 4, background: '#C8782A' }} />
            <div style={{ padding: '24px 24px 28px' }}>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontWeight: 700,
                  fontSize: 14,
                  color: '#C8782A',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: 12,
                }}
              >
                Cadence
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px' }}>
                {['One place for everything', '1:1 agendas that run themselves', 'Task delegation you can actually see', 'KPIs visible every week', '30 min/week of focused management'].map(
                  (item) => (
                    <li
                      key={item}
                      style={{
                        fontFamily: 'var(--font-source-sans)',
                        fontSize: 14,
                        color: '#2C2C2C',
                        padding: '6px 0',
                        borderBottom: '1px solid #F5F0E8',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
                        <circle cx="7" cy="7" r="7" fill="#C8782A" fillOpacity="0.15" />
                        <path d="M4 7L6 9.5L10 4.5" stroke="#C8782A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </li>
                  )
                )}
              </ul>
              <div
                style={{
                  background: '#FDF6EE',
                  borderRadius: 6,
                  padding: '10px 14px',
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#C8782A',
                }}
              >
                $10/mo. That&rsquo;s two coffees.
              </div>
            </div>
          </div>

          {/* Enterprise */}
          <div
            style={{
              background: 'white',
              border: '1px solid #D0CAC0',
              borderRadius: 8,
              overflow: 'hidden',
            }}
          >
            <div style={{ height: 4, background: '#D0CAC0' }} />
            <div style={{ padding: '24px 24px 28px' }}>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontWeight: 700,
                  fontSize: 14,
                  color: '#9C968B',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: 12,
                }}
              >
                Enterprise tools
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px' }}>
                {['Enterprise HR platforms', 'Built for HR, not managers', '$15-25/user/month', 'Months to implement', 'Requires IT department'].map(
                  (item) => (
                    <li
                      key={item}
                      style={{
                        fontFamily: 'var(--font-source-sans)',
                        fontSize: 14,
                        color: '#9C968B',
                        padding: '6px 0',
                        borderBottom: '1px solid #F5F0E8',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                      }}
                    >
                      <span style={{ color: '#D0CAC0', fontSize: 16, flexShrink: 0 }}>&#x2212;</span>
                      {item}
                    </li>
                  )
                )}
              </ul>
              <div
                style={{
                  background: '#F5F0E8',
                  borderRadius: 6,
                  padding: '10px 14px',
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 13,
                  color: '#9C968B',
                }}
              >
                $15-25/user/mo — built for HR teams, not managers.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mid-page CTA ──────────────────────────────────── */}
      <div style={{ textAlign: 'center', marginBottom: 80 }}>
        <p
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 18,
            fontWeight: 500,
            color: '#2C2C2C',
            marginBottom: 16,
          }}
        >
          Convinced?
        </p>
        <Link
          href={annual ? "https://app.cadencehq.co/signup?billing=annual" : "https://app.cadencehq.co/signup"}
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
      </div>

      {/* ── FAQ Accordion ─────────────────────────────────── */}
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
                onClick={() => {
                  setOpenFaq(openFaq === i ? null : i)
                }}
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
                    color: '#9C968B',
                    lineHeight: 1,
                    transition: 'transform 200ms ease',
                    transform: openFaq === i ? 'rotate(45deg)' : 'none',
                    flexShrink: 0,
                  }}
                >
                  +
                </span>
              </button>
              {(openFaq === i) && (
                <div
                  style={{
                    padding: '0 20px 18px',
                    fontFamily: 'var(--font-source-sans)',
                    fontSize: 15,
                    color: '#9C968B',
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
    </>
  )
}
