import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Delegate Without Losing Control — Cadence Blog',
  description: "Delegation isn't about letting go. It's about building the system that lets you stay informed without doing everything yourself.",
}

export default function HowToDelegateWithoutLosingControl() {
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
            How to Delegate Without Losing Control
          </h1>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-dm-sans)' }}>7 min read · Cadence Team</p>
        </div>
      </section>

      <section style={{ background: '#F5F0E8' }} className="py-20">
        <article className="max-w-2xl mx-auto px-6 space-y-5 reveal" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 17, color: 'rgba(28,43,58,0.75)', lineHeight: 1.8 }}>
          <p>Most managers know they should delegate more. Very few actually do it.</p>
          <p>The reason isn&rsquo;t laziness. It&rsquo;s fear. Not the fear of failure — the fear of losing sight. Of something going sideways and not knowing until it&rsquo;s too late. Of being held accountable for work you didn&rsquo;t touch.</p>
          <p>So they hold on. They stay in the details. They tell themselves they&rsquo;re &ldquo;staying close to the work.&rdquo;</p>
          <p>What they&rsquo;re actually doing is creating a bottleneck with their own hands.</p>

          <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 22, color: '#1C2B3A', paddingTop: 16 }}>
            The real reason delegation fails.
          </h2>
          <p>Delegation doesn&rsquo;t fail because people can&rsquo;t do the work. It fails because the handoff was incomplete.</p>
          <p>You handed off a task, but not the context. You gave someone ownership, but not the decision-making authority. You delegated the work, then kept checking on it every 24 hours because you had no other way to know the status.</p>
          <p>The problem isn&rsquo;t that you delegated. It&rsquo;s that you delegated without a system for staying informed.</p>

          <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 22, color: '#1C2B3A', paddingTop: 16 }}>
            What to delegate and what to keep.
          </h2>
          <p>Not everything should be delegated. The frame I find most useful: delegate execution, keep judgment.</p>
          <ul className="space-y-3 pl-2">
            {[
              { label: 'Delegate', rest: 'recurring tasks, defined processes, work that someone on your team can learn from, work that doesn\'t require your specific authority.' },
              { label: 'Keep', rest: 'hiring decisions, performance conversations, anything that sets precedent for the team, work that needs organizational context only you have.' },
            ].map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <span style={{ color: '#7A9E82', fontWeight: 700, marginTop: 2 }}>–</span>
                <span><strong style={{ color: '#1C2B3A' }}>{item.label}:</strong> {item.rest}</span>
              </li>
            ))}
          </ul>
          <p>If you&rsquo;re doing something for the third time, that&rsquo;s a signal. Either build a process for it or hand it off. Probably both.</p>

          <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 22, color: '#1C2B3A', paddingTop: 16 }}>
            The delegation conversation most managers skip.
          </h2>
          <p>When you hand something off, have a real handoff conversation. Not just &ldquo;can you handle this?&rdquo; — but a 10-minute conversation that covers:</p>
          <ul className="space-y-3 pl-2">
            {[
              'What does done look like? (Be specific. "Good job" is not a success metric.)',
              'What decisions can they make on their own? What needs your sign-off?',
              'What does check-in look like? Weekly update? Exception-only?',
              'What would make this task harder than expected — and what should they do if that happens?',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span style={{ color: '#7A9E82', fontWeight: 700, marginTop: 2 }}>–</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>Most miscommunication in delegated work comes from skipping this conversation. The work gets done, but not the right work. Or it gets done right, but the person was checking in too much or too little. A 10-minute conversation prevents most of that.</p>

          <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 22, color: '#1C2B3A', paddingTop: 16 }}>
            How to track without micromanaging.
          </h2>
          <p>Here&rsquo;s the honest truth about micromanagement: it&rsquo;s almost always a symptom of missing visibility, not a personality flaw.</p>
          <p>When you can&rsquo;t see what&rsquo;s happening, you fill the gap with check-ins. Then more check-ins. And suddenly you&rsquo;re that manager — not because you wanted to be, but because you didn&rsquo;t build an alternative.</p>
          <p>The alternative is a simple, visible status system. You don&rsquo;t need a sophisticated project manager. You need answers to:</p>
          <ul className="space-y-3 pl-2">
            {[
              'What did I delegate, and to whom?',
              'What\'s the current status — on track, needs attention, or done?',
              'Is there anything that requires my input before the next check-in?',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span style={{ color: '#7A9E82', fontWeight: 700, marginTop: 2 }}>–</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>If your team updates that list weekly — or even just flags things that change — you don&rsquo;t need to ask. You already know. The check-in becomes unnecessary.</p>

          <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 22, color: '#1C2B3A', paddingTop: 16 }}>
            Build tolerance for &ldquo;good enough.&rdquo;
          </h2>
          <p>The other thing that kills delegation is perfectionism. Not perfectionism in a grand sense — just the quiet assumption that it won&rsquo;t be done the way you&rsquo;d do it.</p>
          <p>It won&rsquo;t. That&rsquo;s fine. Unless quality is meaningfully worse than your standard — or the outcome is wrong — the fact that someone did it differently is not a problem. It&rsquo;s actually the point. They&rsquo;re developing judgment. You&rsquo;re scaling yourself.</p>
          <p>Correct outcomes, not methods. And only correct methods when methods actually matter.</p>

          <div className="pt-4 p-6 rounded" style={{ background: 'rgba(122,158,130,0.08)', borderLeft: '3px solid #7A9E82' }}>
            <p style={{ color: '#1C2B3A' }}>Delegation isn&rsquo;t about trusting people blindly. It&rsquo;s about building the system that makes trust possible — clear outcomes, visible status, good handoffs.</p>
            <p className="mt-3 font-medium" style={{ color: '#1C2B3A' }}>When the system is in place, you stop needing to hover. That&rsquo;s not losing control. That&rsquo;s what control actually looks like.</p>
          </div>
        </article>
      </section>
    </>
  )
}
