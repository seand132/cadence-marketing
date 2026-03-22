import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'New Manager Starter Pack — Cadence',
  description:
    'Five practical tools for first-time managers. No corporate fluff. Just the stuff that actually helps. One-time download, $37.',
  openGraph: {
    title: 'New Manager Starter Pack — Cadence',
    description:
      'Five practical tools for first-time managers. No corporate fluff. Just the stuff that actually helps.',
    url: 'https://cadencehq.co/starter-pack',
    siteName: 'Cadence',
  },
}

const items = [
  {
    title: '30/60/90 Day Plan',
    desc: 'Map your first three months with clear focus areas, weekly prompts, and a self-assessment to keep you honest',
  },
  {
    title: '1:1 Meeting Template',
    desc: 'A recurring agenda that makes your 1:1s actually useful, with questions worth asking at every stage',
  },
  {
    title: 'Team Onboarding Checklist',
    desc: 'What to do in the first week with a new direct report, from day one through day 30',
  },
  {
    title: 'Feedback Framework (SBI)',
    desc: 'A simple, three-part model for giving feedback that lands, with real examples for every scenario',
  },
  {
    title: "Manager's Weekly Review",
    desc: 'A 15-minute Friday reflection to stay sharp, stay connected, and show up better next week',
  },
]

// TODO: Replace '#' with the Stripe payment link for the starter pack
// e.g. https://buy.stripe.com/xxxx
const STRIPE_PAYMENT_LINK = '#'

export default function StarterPackPage() {
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
            New Manager Starter Pack
          </div>
          <h1
            className="mb-5"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 700,
              fontSize: 'clamp(34px, 5vw, 52px)',
              color: '#2C2C2C',
              lineHeight: 1.15,
            }}
          >
            Everything you wish you had on day one.
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-source-sans)',
              fontSize: 19,
              color: '#9C968B',
              lineHeight: 1.6,
              marginBottom: 36,
            }}
          >
            Five practical tools for first-time managers. No corporate fluff.
            Just the stuff that actually helps.
          </p>

          {/* Price + CTA */}
          <div className="flex flex-col items-center gap-3">
            <div
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 700,
                fontSize: 'clamp(40px, 6vw, 56px)',
                color: '#2C2C2C',
                lineHeight: 1,
              }}
            >
              $37
            </div>
            <p
              style={{
                fontFamily: 'var(--font-source-sans)',
                fontSize: 14,
                color: '#9C968B',
                marginBottom: 8,
              }}
            >
              One-time. Instant download. Yours to keep, edit, and use for every
              team you ever build.
            </p>
            <Link
              href={STRIPE_PAYMENT_LINK}
              className="inline-flex items-center justify-center transition-opacity hover:opacity-90"
              style={{
                padding: '16px 40px',
                background: '#C8782A',
                color: 'white',
                borderRadius: 4,
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 600,
                fontSize: 17,
                textDecoration: 'none',
                letterSpacing: '-0.01em',
              }}
            >
              Get the pack
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section style={{ background: 'white' }} className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <h2
            className="mb-12 text-center"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 700,
              fontSize: 'clamp(24px, 3.5vw, 32px)',
              color: '#2C2C2C',
            }}
          >
            What&rsquo;s Included
          </h2>

          <div className="flex flex-col gap-6">
            {items.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: 20,
                  padding: '24px 28px',
                  background: '#F5F0E8',
                  borderRadius: 8,
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: '#C8782A',
                    color: 'white',
                    fontFamily: 'var(--font-dm-sans)',
                    fontWeight: 700,
                    fontSize: 14,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {i + 1}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontWeight: 600,
                      fontSize: 16,
                      color: '#2C2C2C',
                      marginBottom: 4,
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-source-sans)',
                      fontSize: 15,
                      color: '#9C968B',
                      lineHeight: 1.55,
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section style={{ background: '#F5F0E8' }} className="py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2
            className="mb-6"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 700,
              fontSize: 'clamp(24px, 3.5vw, 32px)',
              color: '#2C2C2C',
            }}
          >
            Who It&rsquo;s For
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-source-sans)',
              fontSize: 18,
              color: '#5A5751',
              lineHeight: 1.7,
              marginBottom: 16,
            }}
          >
            You just became a manager. You&rsquo;re figuring it out as you go.
            You&rsquo;ve got good instincts but you want a system &mdash;
            something you can actually use on Monday morning.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 600,
              fontSize: 18,
              color: '#2C2C2C',
              marginBottom: 24,
            }}
          >
            This is for you.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-source-sans)',
              fontSize: 17,
              color: '#9C968B',
              lineHeight: 1.65,
            }}
          >
            It&rsquo;s also for anyone who wants to get better at the
            fundamentals: running better 1:1s, giving clearer feedback,
            onboarding new hires the right way.
          </p>
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
              marginBottom: 12,
            }}
          >
            $37. One time. Yours forever.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-source-sans)',
              fontSize: 17,
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.6,
              marginBottom: 32,
            }}
          >
            Instant download. Keep it, edit it, use it for every team you ever
            build.
          </p>
          <Link
            href={STRIPE_PAYMENT_LINK}
            className="inline-flex items-center justify-center transition-opacity hover:opacity-90"
            style={{
              padding: '16px 40px',
              background: '#C8782A',
              color: 'white',
              borderRadius: 4,
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 600,
              fontSize: 17,
              textDecoration: 'none',
            }}
          >
            Get the pack
          </Link>
          <p
            style={{
              fontFamily: 'var(--font-source-sans)',
              fontSize: 13,
              color: 'rgba(255,255,255,0.35)',
              marginTop: 16,
            }}
          >
            Cadence helps managers lead better.{' '}
            <Link
              href="/"
              style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'underline' }}
            >
              cadencehq.co
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
