import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cadence Features — 1:1s, Task Tracking, Team Dashboard',
  description: 'Everything a small-team manager needs in one place. 1:1 agendas, delegation tracking, KPI goals, team dashboard. Built for teams of 3 to 8.',
}

const features = [
  {
    strip: '#C8782A',
    name: '1:1s that actually work',
    screenshot: '/screenshots/one-on-ones.png',
    screenshotAlt: 'Cadence 1:1 meeting view',
    body: [
      'Most 1:1s drift. They start with \u201cso what\u2019s going on\u201d and end 30 minutes later with nothing decided.',
      'Cadence gives every direct report a standing agenda \u2014 context, real talk, and next actions. Run every week. Never feel like homework.',
    ],
  },
  {
    strip: '#3A7D7B',
    name: 'Delegation that doesn\u2019t disappear',
    screenshot: '/screenshots/tasks.png',
    screenshotAlt: 'Cadence task tracking view',
    body: [
      'When you delegate, you\u2019re not done \u2014 you\u2019re accountable for the outcome. Cadence keeps everything you\u2019ve assigned visible and status-tracked, so you always know what\u2019s moving and what needs a nudge.',
    ],
  },
  {
    strip: '#7B8F6A',
    name: 'See the whole picture',
    screenshot: '/screenshots/team.png',
    screenshotAlt: 'Cadence team overview',
    body: [
      'A single view of your team \u2014 who\u2019s on track, who\u2019s behind, where the load isn\u2019t balanced. Not a surveillance tool. A manager\u2019s read on the room without scheduling five more meetings to get it.',
    ],
  },
  {
    strip: '#C8782A',
    name: 'Goals that don\u2019t die in a doc',
    screenshot: '/screenshots/dashboard.png',
    screenshotAlt: 'Cadence goals and KPI dashboard',
    body: [
      'Set goals for your team and keep them visible. Cadence connects individual KPIs to team outcomes so progress isn\u2019t something you have to dig for \u2014 it\u2019s just there.',
    ],
  },
  {
    strip: '#3A7D7B',
    name: 'Know how your team is built',
    screenshot: null,
    screenshotAlt: '',
    body: [
      'A live view of your reporting structure. Simple enough that you actually use it, detailed enough that it tells you something useful when your team changes.',
    ],
  },
  {
    strip: '#7B8F6A',
    name: 'No more scattered docs',
    screenshot: null,
    screenshotAlt: '',
    body: [
      'Cadence replaces the Notion doc, the spreadsheet, and the Slack thread where you track team stuff. One system. One rhythm.',
    ],
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

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#F5F0E8' }} className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
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
            Simple tools. Steady habits. Stronger teams.
          </div>
          <h1
            className="mb-5"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 700,
              fontSize: 'clamp(36px, 5vw, 52px)',
              color: '#2C2C2C',
              lineHeight: 1.15,
            }}
          >
            Everything you need to manage well.
          </h1>
          <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: 18, color: '#9C968B', lineHeight: 1.6 }}>
            Six focused features. One steady rhythm. No setup overhead.
          </p>
        </div>
      </section>

      <RhythmDivider id="feat-div-1" bg="#F5F0E8" />

      {/* Features */}
      <section style={{ background: 'white' }} className="py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          {features.map((f, i) => (
            <div
              key={f.name}
              className={`reveal flex flex-col ${f.screenshot ? (i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row') : ''} items-center gap-10`}
            >
              {/* Text card */}
              <div className={f.screenshot ? 'flex-1' : 'w-full max-w-3xl'}>
                <div
                  style={{
                    borderRadius: 8,
                    border: '1px solid #D0CAC0',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                    overflow: 'hidden',
                    background: 'white',
                  }}
                >
                  <div style={{ height: 6, background: f.strip }} />
                  <div className="p-8">
                    <h2
                      className="mb-4"
                      style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 22, color: '#2C2C2C' }}
                    >
                      {f.name}
                    </h2>
                    <div className="space-y-3">
                      {f.body.map((p, j) => (
                        <p key={j} style={{ fontFamily: 'var(--font-source-sans)', fontSize: 16, color: '#9C968B', lineHeight: 1.75 }}>
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Screenshot */}
              {f.screenshot && (
                <div className="flex-1 w-full">
                  <div style={{
                    borderRadius: 10,
                    overflow: 'hidden',
                    border: '1px solid #D0CAC0',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
                  }}>
                    <div style={{ background: '#EBE6DD', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 6, borderBottom: '1px solid #D0CAC0' }}>
                      <div style={{ display: 'flex', gap: 4 }}>
                        {['#C2604A','#C8782A','#7B8F6A'].map((c, k) => (
                          <div key={k} style={{ width: 9, height: 9, borderRadius: '50%', background: c, opacity: 0.7 }} />
                        ))}
                      </div>
                      <div style={{ flex: 1, background: 'white', borderRadius: 3, padding: '2px 10px', fontSize: 10, color: '#9C968B', fontFamily: 'var(--font-dm-sans)' }}>
                        app.cadencehq.co
                      </div>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={f.screenshot}
                      alt={f.screenshotAlt}
                      style={{ width: '100%', display: 'block' }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <RhythmDivider id="feat-div-2" bg="white" />

      {/* CTA */}
      <section style={{ background: '#C8782A' }} className="py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2
            className="mb-4"
            style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 36, color: 'white' }}
          >
            Ready to build a rhythm?
          </h2>
          <p className="mb-8" style={{ fontFamily: 'var(--font-source-sans)', fontSize: 18, color: 'rgba(255,255,255,0.80)', lineHeight: 1.6 }}>
            14-day free trial. Takes 3 minutes to set up. No credit card.
          </p>
          <Link
            href="https://app.cadencehq.co/signup"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold transition-opacity hover:opacity-90"
            style={{ background: 'white', color: '#C8782A', borderRadius: 4, fontFamily: 'var(--font-dm-sans)', fontWeight: 600 }}
          >
            Get started free
          </Link>
          <p className="mt-3 text-sm" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-source-sans)' }}>
            No credit card required.
          </p>
        </div>
      </section>
    </>
  )
}
