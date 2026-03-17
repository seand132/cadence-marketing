import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Building Team Culture Without the Corporate Playbook — Cadence Blog',
  description: "Culture isn't a company value on a wall. It's what happens when no one's watching — and it's built in the small, consistent moments between meetings.",
}

export default function BuildingTeamCultureWithoutTheCorporatePlaybook() {
  return (
    <>
      <section style={{ background: '#1C2B3A' }} className="py-16">
        <div className="max-w-2xl mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center gap-1 mb-8 text-sm font-medium transition-opacity hover:opacity-70" style={{ color: '#7A9E82', fontFamily: 'var(--font-dm-sans)' }}>
            ← Back to blog
          </Link>
          <h1
            className="mb-4"
            style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 300, fontSize: 'clamp(28px, 4vw, 44px)', color: 'white', lineHeight: 1.2 }}
          >
            Building Team Culture Without the Corporate Playbook
          </h1>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-dm-sans)' }}>7 min read · Cadence Team</p>
        </div>
      </section>

      <section style={{ background: '#F5F0E8' }} className="py-20">
        <article className="max-w-2xl mx-auto px-6 space-y-5 reveal" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 17, color: 'rgba(28,43,58,0.75)', lineHeight: 1.8 }}>
          <p>Culture is not the ping pong table. It&rsquo;s not the off-site. It&rsquo;s not the Slack channel where someone posts dog photos.</p>
          <p>Culture is what your team does when no one is telling them what to do. It&rsquo;s how they treat each other when things are hard. It&rsquo;s whether they flag problems early or sit on them. It&rsquo;s the invisible rules that govern everything.</p>
          <p>And here&rsquo;s the thing: you build it or you don&rsquo;t. If you don&rsquo;t build it intentionally, something fills the gap. Usually the loudest personality on the team.</p>

          <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 22, color: '#1C2B3A', paddingTop: 16 }}>
            You already have a culture. The question is whether you built it.
          </h2>
          <p>Every team has a culture within about 90 days of forming. It emerges from the patterns that get rewarded, the behaviors that go unchallenged, and the things the manager pays attention to.</p>
          <p>If you praise people for working fast over working carefully — that&rsquo;s culture. If you let someone consistently dominate meetings and no one says anything — that&rsquo;s culture. If you model how to handle a tough conversation with honesty and calm — that&rsquo;s culture too.</p>
          <p>The team is watching everything. They&rsquo;re learning what&rsquo;s real from what you do, not what you say.</p>

          <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 22, color: '#1C2B3A', paddingTop: 16 }}>
            Why one-off events don&rsquo;t build culture.
          </h2>
          <p>The team happy hour is nice. The end-of-quarter celebration is nice. But a single event — even a great one — has almost no lasting cultural impact. People leave it feeling good, and then return to the daily patterns that actually shape how they work together.</p>
          <p>Culture is built by repetition, not events. Small things done consistently. The way you open a meeting. Whether you start 1:1s on time. What you do when someone makes a mistake. Whether you acknowledge good work specifically, or just generally.</p>
          <p>One-off events are signals. Daily patterns are culture.</p>

          <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 22, color: '#1C2B3A', paddingTop: 16 }}>
            Small rituals that actually build trust.
          </h2>
          <p>A ritual is just a consistent, shared behavior that carries meaning. You don&rsquo;t need to announce it. You just do it repeatedly until it becomes part of how the team works.</p>
          <ul className="space-y-3 pl-2">
            {[
              { label: 'Starting meetings with a quick round', rest: '"What\'s one thing going well?" — This isn\'t a feel-good exercise. It trains people to see progress, not just problems. It also means the first person to speak isn\'t always the most senior one.' },
              { label: 'Explicitly naming when someone did something well', rest: '— Not "great job" but "I noticed how you handled that escalation — staying calm and not overcommitting changed the outcome." Specific recognition tells people what to repeat.' },
              { label: 'Closing the loop on decisions', rest: '— When something was discussed and a decision was made, say so. "After our conversation last week, I decided X because Y." This tells your team their input matters and that things don\'t just disappear into the void.' },
              { label: 'Protecting team time', rest: '— Saying no to external requests that would fragment your team\'s focus. This is cultural: it signals that their time matters and that you\'re in their corner.' },
            ].map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <span style={{ color: '#7A9E82', fontWeight: 700, marginTop: 2 }}>–</span>
                <span><strong style={{ color: '#1C2B3A' }}>{item.label}</strong> {item.rest}</span>
              </li>
            ))}
          </ul>

          <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 22, color: '#1C2B3A', paddingTop: 16 }}>
            What consistency does that events can&rsquo;t.
          </h2>
          <p>Trust is built by predictability. When people can count on you to show up consistently — to start meetings on time, to follow through on what you said, to respond the same way on a bad day as a good one — they feel safe.</p>
          <p>Safety isn&rsquo;t comfort. A team that feels safe will disagree, raise hard things, take risks. They won&rsquo;t burn energy managing you — worrying about your mood, calibrating what they tell you, wondering if today is a good day to bring something up.</p>
          <p>Consistency from a manager is the foundation of everything. Not the fun stuff — the boring, reliable, every-week stuff.</p>

          <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 22, color: '#1C2B3A', paddingTop: 16 }}>
            The thing no one tells you.
          </h2>
          <p>Building a good team culture as a small-team manager is actually more achievable than it sounds. You don&rsquo;t need a culture deck or an HR program. You have five to eight people, which means you can know them. Actually know them — what they care about, what makes work hard for them, what they want to be building toward.</p>
          <p>Most enterprise culture initiatives fail because you can&rsquo;t really know 300 people. You can know 6. That&rsquo;s your advantage. Use it.</p>

          <div className="pt-4 p-6 rounded" style={{ background: 'rgba(122,158,130,0.08)', borderLeft: '3px solid #7A9E82' }}>
            <p style={{ color: '#1C2B3A' }}>Culture is built in the Tuesday 1:1, not the Friday happy hour. In how you respond when something goes wrong. In whether you do what you said you&rsquo;d do.</p>
            <p className="mt-3 font-medium" style={{ color: '#1C2B3A' }}>Show up the same way, every week. That&rsquo;s the whole playbook.</p>
          </div>
        </article>
      </section>
    </>
  )
}
