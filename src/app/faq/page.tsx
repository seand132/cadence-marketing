'use client'

import { useState } from 'react'

type FaqItem = { q: string; a: string }
type Category = { id: string; label: string; items: FaqItem[] }

const CATEGORIES: Category[] = [
  {
    id: 'getting-started',
    label: 'GETTING STARTED',
    items: [
      {
        q: 'What is Cadence?',
        a: 'Cadence is a management tool built for managers of small teams — 3 to 15 direct reports. It gives you a system for running 1:1s, tracking delegation, setting team goals, and staying connected to your team without needing enterprise software. Takes 3 minutes to set up.',
      },
      {
        q: 'How do I get started?',
        a: 'Sign up at app.cadencehq.co/signup. Create your workspace, add your team members, and run your first 1:1. Most managers have their team set up and their first 1:1 scheduled within 15 minutes.',
      },
      {
        q: 'Do I need to install anything?',
        a: 'No. Cadence runs entirely in your browser. No app to download, no IT department required.',
      },
      {
        q: 'Can I invite my team?',
        a: 'Yes. Once you create your workspace, you can invite your direct reports. They get their own accounts and can see their assigned tasks, 1:1 agendas, and goals. You control what they see.',
      },
      {
        q: 'What if I manage a team of less than 3 people?',
        a: "Cadence works for any team size. We describe it as built for 3–15 because that's the sweet spot where the operating rhythm features add the most value — but if you have 1 or 2 direct reports and want a system, it works just as well.",
      },
    ],
  },
  {
    id: 'pricing-billing',
    label: 'PRICING & BILLING',
    items: [
      {
        q: 'How much does Cadence cost?',
        a: '$10 per month for the manager. That covers you and your whole team — your direct reports get accounts included at no extra cost. You can also choose annual billing at $96/year (saves $24).',
      },
      {
        q: 'Is there a free trial?',
        a: 'Yes. 14 days, full access from day one. No credit card required to start.',
      },
      {
        q: 'What happens when the trial ends?',
        a: "You'll be prompted to subscribe. If you don't, your account moves to read-only — your data stays safe, nothing is deleted. You can subscribe at any time to reactivate.",
      },
      {
        q: 'Can I cancel anytime?',
        a: 'Yes. No contracts, no cancellation fees. Cancel from your account settings in 30 seconds. If you cancel, you have 30 days to export your data.',
      },
      {
        q: 'Is the $10 per person on my team?',
        a: "No. It's $10 per manager — that's you. Your team members are included at no extra cost. If you're a manager of managers, each manager needs their own account.",
      },
      {
        q: 'Do you offer discounts?',
        a: "Annual billing saves 20% ($96/year vs $120/year). We don't currently offer additional discounts, but reach out to hello@cadencehq.co if you have a specific situation.",
      },
    ],
  },
  {
    id: 'the-product',
    label: 'THE PRODUCT',
    items: [
      {
        q: "What's a 1:1 in Cadence?",
        a: 'A 1:1 is a recurring check-in between you and each of your direct reports. In Cadence, each 1:1 has a standing agenda — a consistent structure that carries context forward from week to week. No more starting from scratch every time.',
      },
      {
        q: 'How does task delegation work?',
        a: "You create tasks in Cadence and assign them to team members. Each task has a title, due date, priority, and status. You see all delegated tasks in one view — so nothing disappears into a Slack thread or a doc nobody checks.",
      },
      {
        q: 'What are KPIs in Cadence?',
        a: 'KPIs are goals you track for your team. You set a target, assign an owner, and mark progress over time. You can track by percentage, number, or task count. Cadence shows you which KPIs are on track and which need attention.',
      },
      {
        q: "Can my team members see each other's data?",
        a: "No. Each team member sees their own tasks, their own 1:1 agenda, and their own goals. Only the manager has a full view of the team.",
      },
      {
        q: 'Does Cadence integrate with Slack or Google Calendar?',
        a: "Not yet. It's on our roadmap. Right now Cadence works best as a standalone system — you run your 1:1s inside Cadence and use your calendar just to block the time.",
      },
      {
        q: 'Can I use Cadence on my phone?',
        a: 'Cadence works in mobile browsers. A dedicated iOS and Android app is on the roadmap.',
      },
    ],
  },
  {
    id: 'privacy-security',
    label: 'PRIVACY & SECURITY',
    items: [
      {
        q: 'Who can see my data?',
        a: 'Only you and your team members (limited to their own data). We do not sell your data, share it with third parties, or use it to train AI models.',
      },
      {
        q: 'Where is my data stored?',
        a: 'In Supabase, encrypted at rest (AES-256) and in transit (HTTPS/TLS). Payments are handled by Stripe — we never store credit card numbers.',
      },
      {
        q: 'What happens to my data if I cancel?',
        a: "Your data stays in your account for 30 days after cancellation. You can export everything during that window. After 30 days, it's permanently deleted.",
      },
      {
        q: 'Is Cadence GDPR compliant?',
        a: 'Yes. EU users have rights under GDPR including access, correction, erasure, and data portability. Email privacy@cadencehq.co to exercise these rights.',
      },
      {
        q: 'Is Cadence CCPA compliant?',
        a: 'Yes. California users have rights under CCPA. We do not sell personal information. Email privacy@cadencehq.co for requests.',
      },
    ],
  },
  {
    id: 'account-support',
    label: 'ACCOUNT & SUPPORT',
    items: [
      {
        q: 'How do I change my email or password?',
        a: 'Go to Settings inside your Cadence account. You can update your email, password, and profile information there.',
      },
      {
        q: 'How do I delete my account?',
        a: 'Go to Settings and look for the account deletion option. Your data will be retained for 30 days in case you change your mind, then permanently deleted.',
      },
      {
        q: 'What if I have a question not answered here?',
        a: 'Email us at hello@cadencehq.co. We read every message and typically respond within one business day.',
      },
      {
        q: 'How do I report a bug?',
        a: 'Email hello@cadencehq.co with a description of what happened. Screenshots or a quick screen recording are helpful. We fix reported bugs fast.',
      },
      {
        q: 'Is there a changelog or roadmap?',
        a: "Yes. Once you're inside the app, check the Changelog link in the footer. We ship updates regularly and document what changes.",
      },
    ],
  },
]

function AccordionSection({ category }: { category: Category }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div style={{ marginBottom: 48 }}>
      <h2
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontWeight: 600,
          fontSize: 20,
          color: '#2C2C2C',
          borderLeft: '3px solid #C8782A',
          paddingLeft: 14,
          marginBottom: 20,
          letterSpacing: '0.04em',
        }}
      >
        {category.label}
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {category.items.map((item, i) => (
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
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
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
                {item.q}
              </span>
              <span
                style={{
                  fontSize: 20,
                  color: '#9C968B',
                  lineHeight: 1,
                  transition: 'transform 200ms ease',
                  transform: openIndex === i ? 'rotate(45deg)' : 'none',
                  flexShrink: 0,
                }}
              >
                +
              </span>
            </button>
            {openIndex === i && (
              <div
                style={{
                  padding: '0 20px 18px',
                  fontFamily: 'var(--font-source-sans)',
                  fontSize: 15,
                  color: '#9C968B',
                  lineHeight: 1.7,
                }}
              >
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    {/* ─── RHYTHM MOTIF — above footer ─────────────────── */}
      <div style={{ background: '#F5F0E8', paddingTop: 32 }} />
      <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0, background: '#F5F0E8' }} aria-hidden="true">
        <svg width="100%" height="40" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="faq-divider" x="0" y="0" width="192" height="40" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="40" fill="url(#faq-divider)" />
        </svg>
      </div>
      <div style={{ background: '#F5F0E8', paddingBottom: 16 }} />
    </div>
  )
}

export default function FaqPage() {
  return (
    <div style={{ background: '#F5F0E8', minHeight: '100vh' }}>

      {/* ─── HERO ─────────────────────────────────────────── */}
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
            Questions? We&apos;ve got answers.
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
            Everything you need to know about Cadence.
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
          {CATEGORIES.map((cat) => (
            <AccordionSection key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      {/* ─── CONTACT CTA ──────────────────────────────────── */}
      <section style={{ background: '#F5F0E8', paddingTop: 48, paddingBottom: 32 }}>
        <div className="max-w-2xl mx-auto px-6">
          <div
            style={{
              background: '#FFFBF5',
              border: '1.5px solid #E8C99A',
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
                color: '#2C2C2C',
                marginBottom: 10,
              }}
            >
              Still have questions?
            </p>
            <p
              style={{
                fontFamily: 'var(--font-source-sans)',
                fontSize: 15,
                color: '#6B6560',
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
              — we read every message.
            </p>
          </div>
        </div>
      </section>

    {/* ─── RHYTHM MOTIF — above footer ─────────────────── */}
      <div style={{ background: '#F5F0E8', paddingTop: 32 }} />
      <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0, background: '#F5F0E8' }} aria-hidden="true">
        <svg width="100%" height="40" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="faq-divider" x="0" y="0" width="192" height="40" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="40" fill="url(#faq-divider)" />
        </svg>
      </div>
      <div style={{ background: '#F5F0E8', paddingBottom: 16 }} />
    </div>
  )
}
