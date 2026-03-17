import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What to Track When You Manage a Small Team — Cadence Blog',
  description: "You don't need a dashboard with 40 metrics. You need about five numbers that tell you whether your team is healthy and on track.",
}

export default function WhatToTrackWhenYouManageASmallTeam() {
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
            What to Track When You Manage a Small Team
          </h1>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-dm-sans)' }}>7 min read · Cadence Team</p>
        </div>
      </section>

      <section style={{ background: '#F5F0E8' }} className="py-20">
        <article className="max-w-2xl mx-auto px-6 space-y-5 reveal" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 17, color: 'rgba(28,43,58,0.75)', lineHeight: 1.8 }}>
          <p>Most small-team managers are drowning in the wrong kind of tracking.</p>
          <p>They have project trackers, task lists, spreadsheets, dashboards their company bought, weekly status emails they skim, and quarterly reports no one reads. None of it tells them what they actually need to know: is my team healthy? Are we on track? Is anyone quietly struggling?</p>
          <p>More data isn&rsquo;t the answer. Better questions are.</p>

          <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 22, color: '#1C2B3A', paddingTop: 16 }}>
            The difference between lagging and leading indicators.
          </h2>
          <p>A lagging indicator tells you what happened. Revenue for the quarter. Tickets closed. Projects completed. These are real numbers, but they&rsquo;re rearview mirror. By the time you see them, the situation that created them is weeks old.</p>
          <p>A leading indicator tells you what&rsquo;s likely to happen. It&rsquo;s a signal, not a result. And for small-team managers, leading indicators are almost always more useful.</p>
          <p>The question to ask yourself: if I wanted to know whether next month is going to be good before next month happens — what would I look at today?</p>

          <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 22, color: '#1C2B3A', paddingTop: 16 }}>
            Five things worth actually tracking.
          </h2>
          <p>You don&rsquo;t need 40 metrics. You need about five signals that tell you whether your team is healthy and moving forward:</p>
          <ul className="space-y-3 pl-2">
            {[
              { label: 'Work in progress', rest: "What's actively being worked on right now? If the answer is \"everything,\" that's a problem. Overloaded teams finish slowly and make more mistakes." },
              { label: 'Blockers', rest: "Not \"what are people working on\" but \"what's stopping them.\" One unresolved blocker can stall a team for a week. Surfacing them early is the job." },
              { label: 'Team energy', rest: "Informal — but real. Are people showing up energized or depleted? Are 1:1s getting more guarded? Are things taking longer than they should? This isn't a metric. It's a read." },
              { label: 'Goal progress', rest: "Not just tasks, but direction. Are the things your team is doing this week connected to what you said mattered this quarter? If not, you have a prioritization problem." },
              { label: 'Output vs. busyness', rest: "People can be incredibly busy and produce very little. Tracking output — what shipped, what got resolved, what moved forward — is different from tracking activity." },
            ].map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <span style={{ color: '#7A9E82', fontWeight: 700, marginTop: 2 }}>–</span>
                <span><strong style={{ color: '#1C2B3A' }}>{item.label}:</strong> {item.rest}</span>
              </li>
            ))}
          </ul>

          <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 22, color: '#1C2B3A', paddingTop: 16 }}>
            What you can safely ignore.
          </h2>
          <p>Hours worked. Meeting attendance. Response time on Slack. These are activity metrics, and they measure the wrong thing. You want outcomes, not presence.</p>
          <p>I&rsquo;d also deprioritize any metric you&rsquo;re tracking but not acting on. If you look at a number every week and it doesn&rsquo;t change anything you do, stop tracking it. Tracking for its own sake is noise.</p>

          <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 22, color: '#1C2B3A', paddingTop: 16 }}>
            The weekly read — what it actually looks like.
          </h2>
          <p>Once a week, set aside 15 minutes and look at your team with these questions:</p>
          <ul className="space-y-3 pl-2">
            {[
              'Who had a good week? Who had a hard one?',
              'Is anything at risk of slipping that I haven\'t addressed yet?',
              'Is anyone doing too much — or too little?',
              'Are we moving toward what matters, or just putting out fires?',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span style={{ color: '#7A9E82', fontWeight: 700, marginTop: 2 }}>–</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>That review — 15 minutes, same time every week — is more valuable than any dashboard. It forces you to actually think about your team instead of reacting to whoever showed up in your inbox.</p>

          <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 22, color: '#1C2B3A', paddingTop: 16 }}>
            The trap of too much visibility.
          </h2>
          <p>There&rsquo;s a version of tracking that becomes surveillance. Where every task has a status, every status has a due date, and the whole thing becomes a system of accountability theater.</p>
          <p>People notice. They start managing the tracking instead of the work. They spend 20 minutes updating a task board so the board looks good, not because it helps them.</p>
          <p>The goal of tracking is clarity, not oversight. Clarity for you — so you know what&rsquo;s happening — and clarity for your team — so they know what matters. The moment it feels punitive, it stops working.</p>

          <div className="pt-4 p-6 rounded" style={{ background: 'rgba(122,158,130,0.08)', borderLeft: '3px solid #7A9E82' }}>
            <p style={{ color: '#1C2B3A' }}>Pick five signals. Review them weekly. Act on what you see. That&rsquo;s a management system. It doesn&rsquo;t require a sophisticated tool — just consistency and the discipline to actually look.</p>
            <p className="mt-3 font-medium" style={{ color: '#1C2B3A' }}>The managers who know their teams best aren&rsquo;t the ones with the biggest dashboards. They&rsquo;re the ones who ask better questions.</p>
          </div>
        </article>
      </section>
    </>
  )
}
