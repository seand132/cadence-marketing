import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cadence Features — 1:1s, Task Tracking, Team Dashboard',
  description: 'Everything a small-team manager needs in one place. 1:1 agendas, delegation tracking, KPI goals, team dashboard. Built for 3–8 direct reports.',
}

const features = [
  {
    strip: '#C8782A',
    name: '1:1s that actually work',
    body: [
      'Most 1:1s drift. They start with \u201cso what\u2019s going on\u201d and end 30 minutes later with nothing decided.',
      'Cadence gives every direct report a standing agenda \u2014 three questions, fifteen minutes each. One for them, one for context, one for next actions. Run every week. Never feel like homework.',
    ],
  },
  {
    strip: '#3A7D7B',
    name: "Delegation that doesn\u2019t disappear",
    body: [
      "When you delegate, you\u2019re not done \u2014 you\u2019re accountable for the outcome. Cadence keeps everything you\u2019ve assigned visible and status-tracked, so you always know what\u2019s moving and what needs a nudge.",
    ],
  },
  {
    strip: '#7B8F6A',
    name: 'See the whole picture',
    body: [
      "A single view of your team \u2014 who\u2019s on track, who\u2019s behind, where the load isn\u2019t balanced. Not a surveillance tool. A manager\u2019s read on the room without scheduling five more meetings to get it.",
    ],
  },
  {
    strip: '#C8782A',
    name: "Goals that don\u2019t die in a doc",
    body: [
      "Set goals for your team and keep them visible. Cadence connects individual KPIs to team outcomes so progress isn\u2019t something you have to dig for \u2014 it\u2019s just there.",
    ],
  },
  {
    strip: '#3A7D7B',
    name: 'Know how your team is built',
    body: [
      "A live view of your reporting structure. Simple enough that you actually use it, detailed enough that it tells you something useful when your team changes.",
    ],
  },
  {
    strip: '#7B8F6A',
    name: 'No more scattered docs',
    body: [
      "Cadence replaces the Notion doc, the spreadsheet, and the Slack thread where you track team stuff. One system. One rhythm.",
    ],
  },
]

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#F5F0E8' }} className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
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
            Everything your team needs.<br />Nothing you don&rsquo;t.
          </h1>
          <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: 18, color: '#9C968B' }}>
            Six features. One rhythm. No setup overhead.
          </p>
        </div>
      </section>

      {/* Features */}
      <section style={{ background: 'white' }} className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          {features.map((f) => (
            <div
              key={f.name}
              className="feature-card bg-white reveal"
              style={{
                borderRadius: 8,
                border: '1px solid #D0CAC0',
                boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                overflow: 'hidden',
              }}
            >
              <div style={{ height: 6, background: f.strip }} />
              <div className="p-8">
                <h2
                  className="mb-4"
                  style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 20, color: '#2C2C2C' }}
                >
                  {f.name}
                </h2>
                <div className="space-y-3">
                  {f.body.map((p, i) => (
                    <p key={i} style={{ fontFamily: 'var(--font-source-sans)', fontSize: 16, color: '#9C968B', lineHeight: 1.75 }}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: '#C8782A' }} className="py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2
            className="mb-4"
            style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 36, color: 'white' }}
          >
            Ready to build a rhythm?
          </h2>
          <p className="mb-8 text-lg" style={{ color: 'rgba(255,255,255,0.80)', fontFamily: 'var(--font-source-sans)' }}>
            14-day free trial. Takes 3 minutes to set up.
          </p>
          <Link
            href="https://app.cadencehq.co/signup"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold transition-opacity hover:opacity-90"
            style={{ background: 'white', color: '#C8782A', borderRadius: 4, fontFamily: 'var(--font-dm-sans)', fontWeight: 600 }}
          >
            Start free — 14 days
          </Link>
        </div>
      </section>
    </>
  )
}
