import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cadence — Management tool for first-time managers',
  description: 'Cadence helps new managers run better 1:1s, track delegation, and keep their team in rhythm. Simple. For teams of 3–8. 14-day free trial.',
}

export default function Home() {
  return (
    <>
      {/* ─── SECTION 1: HERO ──────────────────────────────────── */}
      <section style={{ background: '#F5F0E8' }} className="py-24">
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">

          {/* Left */}
          <div className="flex-1 max-w-xl">
            {/* Badge */}
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
              Management in Rhythm
            </div>

            <h1
              className="mb-5 leading-tight"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 700,
                fontSize: 52,
                color: '#2C2C2C',
              }}
            >
              The promotion nobody prepares you for.
            </h1>

            <p
              className="mb-8"
              style={{
                fontFamily: 'var(--font-source-sans)',
                fontSize: 19,
                color: '#9C968B',
                lineHeight: 1.6,
              }}
            >
              Cadence gives first-time managers a real system — not another meeting, doc, or guess.
            </p>

            <Link
              href="https://app.cadencehq.co/signup"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90"
              style={{
                background: '#C8782A',
                borderRadius: 4,
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 600,
              }}
            >
              Start free — 14 days
            </Link>

            <p
              className="mt-3"
              style={{ fontFamily: 'var(--font-source-sans)', fontSize: 13, color: '#9C968B' }}
            >
              No credit card required.
            </p>
          </div>

          {/* Right — Product mockup */}
          <div className="flex-1 flex justify-center lg:justify-end w-full">
            <div
              className="w-full p-5"
              style={{
                background: 'white',
                borderRadius: 8,
                border: '1px solid #D0CAC0',
                boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                maxWidth: '384px',
                animation: 'float 4s ease-in-out infinite',
              }}
            >
              {/* Amber top strip */}
              <div
                style={{
                  height: 6,
                  background: '#C8782A',
                  borderRadius: '8px 8px 0 0',
                  margin: '-20px -20px 16px -20px',
                }}
              />

              {/* Next 1:1 label */}
              <div className="mb-3">
                <div
                  className="mb-1 uppercase"
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontWeight: 600,
                    fontSize: 10,
                    color: '#9C968B',
                    letterSpacing: '0.1em',
                  }}
                >
                  Next 1:1
                </div>
                <div
                  style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 14, color: '#2C2C2C' }}
                >
                  Alex Chen · Tomorrow 10am
                </div>
              </div>

              {/* Divider */}
              <div style={{ borderTop: '1px solid #D0CAC0', margin: '12px 0' }} />

              {/* Tasks */}
              <div className="mb-3">
                <div
                  className="mb-2 uppercase"
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontWeight: 600,
                    fontSize: 10,
                    color: '#9C968B',
                    letterSpacing: '0.1em',
                  }}
                >
                  Tasks
                </div>
                <div className="space-y-2">
                  {[
                    { label: 'Q2 goal review with Jordan', done: true },
                    { label: 'Share onboarding doc with Marcus', done: false },
                    { label: "Review Tyler's project proposal", done: false },
                  ].map((task) => (
                    <div key={task.label} className="flex items-center gap-2">
                      <div
                        className="flex-shrink-0 flex items-center justify-center"
                        style={{
                          width: 16,
                          height: 16,
                          borderRadius: 3,
                          border: '1.5px solid #C8782A',
                          background: task.done ? '#C8782A' : 'white',
                        }}
                      >
                        {task.done && (
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                      <span
                        style={{
                          fontFamily: 'var(--font-source-sans)',
                          fontSize: 14,
                          color: task.done ? '#9C968B' : '#2C2C2C',
                          textDecoration: task.done ? 'line-through' : 'none',
                        }}
                      >
                        {task.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div style={{ borderTop: '1px solid #D0CAC0', margin: '12px 0' }} />

              {/* Your Team */}
              <div>
                <div
                  className="mb-2 uppercase"
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontWeight: 600,
                    fontSize: 10,
                    color: '#9C968B',
                    letterSpacing: '0.1em',
                  }}
                >
                  Your Team
                </div>
                <div className="flex items-center gap-2">
                  {['AC', 'JR', 'MT', 'TL'].map((initials) => (
                    <div
                      key={initials}
                      className="flex items-center justify-center rounded-full flex-shrink-0"
                      style={{
                        width: 32,
                        height: 32,
                        background: '#FDF6EE',
                        color: '#C8782A',
                        fontFamily: 'var(--font-dm-sans)',
                        fontWeight: 600,
                        fontSize: 12,
                      }}
                    >
                      {initials}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── SECTION 2: PROBLEM ───────────────────────────────── */}
      <section style={{ background: 'white' }} className="py-20">
        <div className="max-w-2xl mx-auto px-6 text-center reveal">
          <div
            className="mb-4 uppercase"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 600,
              fontSize: 11,
              color: '#C8782A',
              letterSpacing: '0.1em',
            }}
          >
            Sound Familiar?
          </div>
          <h2
            className="mb-6"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 700,
              fontSize: 40,
              color: '#2C2C2C',
              lineHeight: 1.2,
            }}
          >
            The promotion nobody prepares you for.
          </h2>
          <div
            className="space-y-4"
            style={{ fontFamily: 'var(--font-source-sans)', fontSize: 17, color: '#9C968B', lineHeight: 1.7 }}
          >
            <p>
              You were great at the job. So they made you manage the people who do your old job.
            </p>
            <p>
              Nobody handed you a system. Nobody told you what &ldquo;being a manager&rdquo; actually means in practice.
              You&rsquo;re running things in your head, in a doc that&rsquo;s a mess, or in too many Slack threads to count.
            </p>
            <p>
              That&rsquo;s the job right now. Cadence is built to help you do it better.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: FEATURES ──────────────────────────────── */}
      <section style={{ background: '#F5F0E8' }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-center mb-12 reveal"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 700,
              fontSize: 36,
              color: '#2C2C2C',
            }}
          >
            Simple tools. Steady habits. Stronger teams.
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                strip: '#C8782A',
                title: '1:1s that run themselves',
                body: 'A standing agenda for every direct report. Context, real talk, next actions — in 30 minutes.',
              },
              {
                strip: '#3A7D7B',
                title: 'Tasks that stay visible',
                body: "Track what you've delegated and what's actually moving. No more chasing status in Slack.",
              },
              {
                strip: '#7B8F6A',
                title: 'A team dashboard that tells you the truth',
                body: "Know who's on track, who's overloaded, and who needs a conversation — before it becomes a problem.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="feature-card bg-white reveal"
                style={{
                  borderRadius: 8,
                  border: '1px solid #D0CAC0',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                  overflow: 'hidden',
                }}
              >
                {/* Colored top strip */}
                <div style={{ height: 6, background: f.strip }} />
                <div className="p-6">
                  <h3
                    className="mb-2"
                    style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 16, color: '#2C2C2C' }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-source-sans)',
                      fontSize: 15,
                      color: '#9C968B',
                      lineHeight: 1.6,
                    }}
                  >
                    {f.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: WHO IT'S FOR ──────────────────────────── */}
      <section style={{ background: '#EBE6DD' }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 reveal">
              <h2
                className="mb-4"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontWeight: 700,
                  fontSize: 36,
                  color: '#2C2C2C',
                  lineHeight: 1.2,
                }}
              >
                Built for one kind of manager.
              </h2>
              <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: 17, color: '#9C968B', lineHeight: 1.7 }}>
                This isn&rsquo;t Lattice. It&rsquo;s not a performance management suite. It&rsquo;s a rhythm you can actually keep.
              </p>
            </div>
            <div className="flex-1 reveal">
              <ul className="space-y-4">
                {[
                  'You have 3–8 direct reports',
                  'You were promoted from IC in the last year or two',
                  "You're still figuring out what the job actually requires",
                  'You want a system that fits the way you work, not an HR platform built for Fortune 500',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="flex-shrink-0 mt-1" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <circle cx="9" cy="9" r="9" fill="#C8782A" fillOpacity="0.15" />
                      <path d="M5.5 9L7.8 11.5L12.5 6.5" stroke="#C8782A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ fontFamily: 'var(--font-source-sans)', fontSize: 16, color: '#2C2C2C', lineHeight: 1.6 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: PRICING TEASER ────────────────────────── */}
      <section style={{ background: '#F5F0E8' }} className="py-20">
        <div className="max-w-sm mx-auto px-6 reveal">
          <div
            className="bg-white text-center"
            style={{
              borderRadius: 8,
              border: '1px solid #D0CAC0',
              boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
              overflow: 'hidden',
            }}
          >
            {/* Amber top strip */}
            <div style={{ height: 6, background: '#C8782A' }} />
            <div className="p-8">
              <div
                className="mb-1"
                style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 40, color: '#2C2C2C', lineHeight: 1 }}
              >
                $10 / month
              </div>
              <div
                className="inline-flex items-center px-3 py-1 rounded-full mb-6"
                style={{
                  background: '#FDF6EE',
                  color: '#C8782A',
                  fontFamily: 'var(--font-dm-sans)',
                  fontWeight: 600,
                  fontSize: 12,
                }}
              >
                14-day free trial
              </div>
              <Link
                href="https://app.cadencehq.co/signup"
                className="block w-full py-3 text-sm font-semibold text-white text-center transition-opacity hover:opacity-90"
                style={{
                  background: '#C8782A',
                  borderRadius: 4,
                  fontFamily: 'var(--font-dm-sans)',
                  fontWeight: 600,
                }}
              >
                Start free — 14 days
              </Link>
              <p
                className="mt-3 text-xs"
                style={{ color: '#9C968B', fontFamily: 'var(--font-source-sans)' }}
              >
                No credit card required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: CLOSING CTA ───────────────────────────── */}
      <section style={{ background: '#C8782A' }} className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center reveal">
          <h2
            className="mb-4"
            style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 40, color: 'white', lineHeight: 1.2 }}
          >
            Give it a try.
          </h2>
          <p
            className="mb-10"
            style={{ fontFamily: 'var(--font-source-sans)', fontSize: 18, color: 'rgba(255,255,255,0.80)' }}
          >
            14-day free trial. Takes 3 minutes to set up. No credit card.
          </p>
          <Link
            href="https://app.cadencehq.co/signup"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold transition-opacity hover:opacity-90"
            style={{
              background: 'white',
              color: '#C8782A',
              borderRadius: 4,
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 600,
            }}
          >
            Try Cadence free
          </Link>
        </div>
      </section>
    </>
  )
}
