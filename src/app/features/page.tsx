import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cadence Features — 1:1s, Task Tracking, Team Dashboard',
  description: 'Everything a first-time manager needs in one place. 1:1 agendas, delegation tracking, KPI goals, team dashboard. Built for 3–8 direct reports.',
}

const features = [
  {
    name: '1:1s that actually work',
    paragraphs: [
      "Most 1:1s drift. They start with \u201cso what\u2019s going on\u201d and end 30 minutes later with nothing decided.",
      "Cadence gives every direct report a standing agenda \u2014 three questions, fifteen minutes each. One for them, one for context, one for next actions. Run every week. Never feel like homework.",
    ],
    icon: '🗓',
  },
  {
    name: "Delegation that doesn\u2019t disappear",
    paragraphs: [
      "When you delegate, you\u2019re not done \u2014 you\u2019re accountable for the outcome. Cadence keeps everything you\u2019ve assigned visible and status-tracked, so you always know what\u2019s moving and what needs a nudge.",
    ],
    icon: '✅',
  },
  {
    name: 'See the whole picture',
    paragraphs: [
      "A single view of your team \u2014 who\u2019s on track, who\u2019s behind, where the load isn\u2019t balanced. Not a surveillance tool. A manager\u2019s read on the room without scheduling five more meetings to get it.",
    ],
    icon: '📊',
  },
  {
    name: "Goals that don\u2019t die in a doc",
    paragraphs: [
      "Set goals for your team and keep them visible. Cadence connects individual KPIs to team outcomes so progress isn\u2019t something you have to dig for \u2014 it\u2019s just there.",
    ],
    icon: '🎯',
  },
  {
    name: 'Know how your team is built',
    paragraphs: [
      "A live view of your reporting structure. Simple enough that you actually use it, detailed enough that it tells you something useful when your team changes.",
    ],
    icon: '🏗',
  },
  {
    name: 'No more scattered docs',
    paragraphs: [
      "Cadence replaces the Notion doc, the spreadsheet, and the Slack thread where you track team stuff. One system. One rhythm.",
    ],
    icon: '📁',
  },
]

export default function FeaturesPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1
          className="text-4xl font-bold mb-4"
          style={{ fontFamily: 'var(--font-montserrat)', color: '#1C2B3A' }}
        >
          Everything a first-time manager needs. Nothing they don&rsquo;t.
        </h1>
      </div>

      <div className="space-y-16">
        {features.map((feature, i) => (
          <div
            key={feature.name}
            className={`flex flex-col sm:flex-row gap-8 items-start ${i % 2 === 1 ? 'sm:flex-row-reverse' : ''}`}
          >
            <div className="flex-shrink-0 w-16 h-16 bg-white rounded-2xl shadow-sm border border-[#1C2B3A]/5 flex items-center justify-center text-3xl">
              {feature.icon}
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1C2B3A' }}>
                {feature.name}
              </h2>
              <div className="space-y-3">
                {feature.paragraphs.map((para, j) => (
                  <p key={j} className="text-lg text-[#1C2B3A]/70 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-20 text-center bg-white rounded-2xl p-12 border border-[#1C2B3A]/5 shadow-sm">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-montserrat)', color: '#1C2B3A' }}>
          Ready to build a rhythm?
        </h2>
        <p className="text-[#1C2B3A]/65 mb-8">Free while in beta. No credit card required.</p>
        <a
          href="https://app.cadencehq.co/signup"
          className="inline-block px-8 py-4 rounded-lg font-semibold text-white transition-colors"
          style={{ background: '#1C2B3A' }}
        >
          Try Cadence free
        </a>
      </div>
    </div>
  )
}
