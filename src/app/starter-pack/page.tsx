import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'New Manager Starter Pack | Cadence',
  description:
    'Five practical tools for first-time managers. No corporate fluff. Just the stuff that actually helps. One-time download, $37.',
  openGraph: {
    title: 'New Manager Starter Pack | Cadence',
    description:
      'Five practical tools for first-time managers. No corporate fluff. Just the stuff that actually helps.',
    url: 'https://cadencehq.co/starter-pack',
    siteName: 'Cadence',
  },
}

const items = [
  {
    title: '30/60/90 Day Plan',
    desc: 'Map your first three months with clear focus areas, weekly prompts, and a self-assessment to keep you honest.',
    detail: 'Most new managers wing the first 90 days. This gives you a framework before the noise starts.',
  },
  {
    title: '1:1 Meeting Template',
    desc: 'A standing agenda that makes your 1:1s worth 30 minutes of everyone\'s week.',
    detail: 'Includes the questions worth rotating in (the ones that actually surface what\'s going on.',
  },
  {
    title: 'Team Onboarding Checklist',
    desc: 'What to do in the first week with a new direct report, from before day one through week four.',
    detail: 'Most managers nail day one then disappear. This keeps the momentum going.',
  },
  {
    title: 'Feedback Framework (SBI)',
    desc: 'Situation. Behavior. Impact. The simplest model for giving feedback that lands.',
    detail: 'Includes worked examples for both positive and constructive feedback, so you know exactly what to say.',
  },
  {
    title: "Manager's Weekly Review",
    desc: 'A 15-minute Friday reflection that keeps you sharp, connected, and ahead of problems.',
    detail: 'The one habit that separates managers who stay reactive from managers who don\'t.',
  },
]

// Buy button is intentionally disabled pending content approval and research.
// Replace '#' with Stripe payment link once Sean approves.
const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/cNi00j3Fc7Z30U47Xq7g405'

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

export default function StarterPackPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#F5F0E8' }} className="pt-20 pb-16">
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
            Digital Download
          </div>
          <h1
            className="mb-5"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 700,
              fontSize: 'clamp(36px, 5vw, 56px)',
              color: '#2C2C2C',
              lineHeight: 1.1,
            }}
          >
            Everything you wish you had on day one.
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-source-sans)',
              fontSize: 20,
              color: '#9C968B',
              lineHeight: 1.65,
              marginBottom: 36,
              maxWidth: 520,
              margin: '0 auto 36px',
            }}
          >
            Five practical tools for first-time managers. No corporate fluff.
            Just the stuff that actually helps, starting Monday.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
            <Link
              href={STRIPE_PAYMENT_LINK}
              className="inline-flex items-center justify-center transition-opacity hover:opacity-90"
              style={{
                padding: '15px 40px',
                background: '#C8782A',
                color: 'white',
                borderRadius: 4,
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 600,
                fontSize: 16,
                textDecoration: 'none',
              }}
            >
              Get the pack: $37
            </Link>
            <span
              style={{
                fontFamily: 'var(--font-source-sans)',
                fontSize: 14,
                color: '#9C968B',
              }}
            >
              One-time · Instant download
            </span>
          </div>
        </div>
      </section>

      {/* Rhythm divider */}
      <RhythmDivider id="sp-div-hero" bg="#F5F0E8" />

      {/* What's Included */}
      <section style={{ background: 'white' }} className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#C8782A',
              textAlign: 'center',
              marginBottom: 12,
            }}
          >
            What&rsquo;s Included
          </p>
          <h2
            className="mb-14 text-center"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 700,
              fontSize: 'clamp(26px, 3.5vw, 34px)',
              color: '#2C2C2C',
            }}
          >
            Five tools. Built for real use.
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {items.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '48px 1fr',
                  gap: '0 24px',
                  padding: '28px 32px',
                  background: i % 2 === 0 ? '#FAFAF8' : 'white',
                  borderRadius: 8,
                  border: '1px solid #EBE6DD',
                  alignItems: 'start',
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: '#FDF6EE',
                    border: '1.5px solid #F0D5B8',
                    color: '#C8782A',
                    fontFamily: 'var(--font-dm-sans)',
                    fontWeight: 700,
                    fontSize: 15,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  {i + 1}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontWeight: 700,
                      fontSize: 17,
                      color: '#2C2C2C',
                      marginBottom: 6,
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-source-sans)',
                      fontSize: 15,
                      color: '#5A5751',
                      lineHeight: 1.6,
                      marginBottom: 8,
                    }}
                  >
                    {item.desc}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-source-sans)',
                      fontSize: 14,
                      color: '#9C968B',
                      lineHeight: 1.55,
                      fontStyle: 'italic',
                    }}
                  >
                    {item.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pullquote */}
      <section style={{ background: '#1C2B3A' }} className="py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 700,
              fontSize: 'clamp(22px, 3vw, 30px)',
              color: '#F5F0E8',
              lineHeight: 1.4,
              marginBottom: 24,
            }}
          >
            &ldquo;The first-time manager job isn&rsquo;t that complicated.
            It&rsquo;s just different. Build a rhythm. Stay consistent. Get
            feedback early. That&rsquo;s the whole job.&rdquo;
          </p>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 600,
              fontSize: 13,
              color: '#C8782A',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            Sean Davis &mdash; Cadence
          </p>
        </div>
      </section>

      {/* Who It's For */}
      <section style={{ background: '#F5F0E8' }} className="py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#C8782A',
              marginBottom: 12,
            }}
          >
            Who It&rsquo;s For
          </p>
          <h2
            className="mb-6"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 700,
              fontSize: 'clamp(24px, 3.5vw, 32px)',
              color: '#2C2C2C',
            }}
          >
            You just became a manager.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-source-sans)',
              fontSize: 18,
              color: '#5A5751',
              lineHeight: 1.7,
              marginBottom: 12,
            }}
          >
            You&rsquo;re figuring it out as you go. You&rsquo;ve got good
            instincts but you want a system &mdash; something you can actually
            open on Monday morning and use.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-source-sans)',
              fontSize: 16,
              color: '#9C968B',
              lineHeight: 1.65,
            }}
          >
            It&rsquo;s also for any manager who wants to get sharper at the
            fundamentals: 1:1s, feedback, onboarding, and staying ahead of
            problems before they surface.
          </p>
        </div>
      </section>

      {/* Price + CTA */}
      <section style={{ background: '#C8782A' }} className="py-24">
        <div className="max-w-xl mx-auto px-6 text-center">
          <div
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 700,
              fontSize: 'clamp(48px, 7vw, 72px)',
              color: 'white',
              lineHeight: 1,
              marginBottom: 8,
            }}
          >
            $37
          </div>
          <p
            style={{
              fontFamily: 'var(--font-source-sans)',
              fontSize: 17,
              color: 'rgba(255,255,255,0.75)',
              marginBottom: 32,
              lineHeight: 1.6,
            }}
          >
            One-time. Instant download. Yours to keep, edit, and use
            for every team you ever build.
          </p>
          <Link
            href={STRIPE_PAYMENT_LINK}
            className="inline-flex items-center justify-center transition-opacity hover:opacity-90"
            style={{
              padding: '16px 48px',
              background: 'white',
              color: '#C8782A',
              borderRadius: 4,
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 700,
              fontSize: 17,
              textDecoration: 'none',
              marginBottom: 20,
              display: 'inline-flex',
            }}
          >
            Get the pack
          </Link>
          <p
            style={{
              fontFamily: 'var(--font-source-sans)',
              fontSize: 13,
              color: 'rgba(255,255,255,0.55)',
            }}
          >
            From the team at{' '}
            <Link href="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'underline' }}>
              Cadence
            </Link>
            {' '}&mdash; built for managers of real teams.
          </p>
        </div>
      </section>
    </>
  )
}
