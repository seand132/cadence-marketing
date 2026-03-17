import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The 1:1 That Actually Works — Cadence Blog',
  description: "Most 1:1s are status updates in disguise. Here's how to turn them into the most valuable 30 minutes of your week.",
}

export default function TheOneOnOneThatActuallyWorks() {
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
            The 1:1 That Actually Works
          </h1>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-dm-sans)' }}>7 min read · Cadence Team</p>
        </div>
      </section>

      <section style={{ background: '#F5F0E8' }} className="py-20">
        <article className="max-w-2xl mx-auto px-6 space-y-5 reveal" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 17, color: 'rgba(28,43,58,0.75)', lineHeight: 1.8 }}>
          <p>Most 1:1s are status updates with a human face on them.</p>
          <p>You ask what&rsquo;s going on. They tell you what&rsquo;s going on. You nod. You both go back to work.</p>
          <p>That&rsquo;s not a 1:1. That&rsquo;s a check-in. And the difference matters more than most managers realize.</p>

          <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 22, color: '#1C2B3A', paddingTop: 16 }}>
            Why most 1:1s fail.
          </h2>
          <p>The problem usually isn&rsquo;t scheduling. It&rsquo;s that the meeting has no design.</p>
          <p>When there&rsquo;s no structure, both people default to what&rsquo;s safest: recent events. What shipped, what&rsquo;s blocked, what came up. It feels productive because words are being said. But nothing about the conversation requires a 1:1. You could have sent a Slack message.</p>
          <p>The real purpose of a 1:1 is harder to get to: trust, growth, alignment, and the kind of honesty that doesn&rsquo;t happen in group settings. You only get there if the meeting is designed for it.</p>

          <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 22, color: '#1C2B3A', paddingTop: 16 }}>
            Start with what they care about — not what you need.
          </h2>
          <p>Most managers open 1:1s with their own agenda. A project update they&rsquo;re tracking. A thing they wanted to follow up on. That&rsquo;s fine — but it signals that the meeting is for you.</p>
          <p>Flip it. Start with: <em>&ldquo;What&rsquo;s on your mind this week?&rdquo;</em> Then shut up.</p>
          <p>That question does something powerful. It hands the meeting to them first. And people — when they actually feel heard — will tell you things they wouldn&rsquo;t volunteer in response to a status question. They&rsquo;ll tell you they&rsquo;re confused about a priority. That they&rsquo;re not getting along with a colleague. That a project feels heavier than they expected.</p>
          <p>That&rsquo;s the information you can&rsquo;t manage without.</p>

          <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 22, color: '#1C2B3A', paddingTop: 16 }}>
            A standing agenda that doesn&rsquo;t feel like a form.
          </h2>
          <p>Structure doesn&rsquo;t mean rigid. It means consistent. A good 1:1 agenda gives both people a shared map of where the conversation is going:</p>
          <ul className="space-y-3 pl-2">
            {[
              { label: 'First 10 minutes', rest: "What's on their mind. No steering, no fixing — just listening." },
              { label: 'Middle 10 minutes', rest: "What do they need from you? Unblock, clarify, or support." },
              { label: 'Last 10 minutes', rest: "Look ahead. What are they working toward? What do they want to develop?" },
            ].map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <span style={{ color: '#7A9E82', fontWeight: 700, marginTop: 2 }}>–</span>
                <span><strong style={{ color: '#1C2B3A' }}>{item.label}:</strong> {item.rest}</span>
              </li>
            ))}
          </ul>
          <p>Notice what&rsquo;s missing: project status. That lives in your project tracker. The 1:1 is for the person, not the project.</p>

          <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 22, color: '#1C2B3A', paddingTop: 16 }}>
            The questions that actually open people up.
          </h2>
          <p>You don&rsquo;t need a list of 50 questions. You need a handful that work. These are the ones that consistently surface something real:</p>
          <ul className="space-y-3 pl-2">
            {[
              '"What\'s the most frustrating part of your work right now?"',
              '"Is there anything you\'re not getting enough support on?"',
              '"If you could change one thing about how we work, what would it be?"',
              '"What do you want to be better at six months from now?"',
            ].map((q) => (
              <li key={q} className="flex items-start gap-3">
                <span style={{ color: '#7A9E82', fontWeight: 700, marginTop: 2 }}>–</span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
          <p>You don&rsquo;t ask all of these every week. You rotate them. Pick one. Give it space. Let silence do some work.</p>

          <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 22, color: '#1C2B3A', paddingTop: 16 }}>
            Psychological safety isn&rsquo;t a goal — it&rsquo;s an outcome.
          </h2>
          <p>You can&rsquo;t declare a safe environment. You build one over time, through behavior. Specifically: by not punishing honesty.</p>
          <p>If someone tells you something in a 1:1 and it gets used against them — even accidentally — trust is gone. And it rarely comes back.</p>
          <p>The simplest way to build psychological safety in a 1:1: when someone tells you something hard, your first move is to thank them for saying it. Not fix it. Not respond. Just acknowledge it.</p>
          <p>&ldquo;Thanks for telling me that. I want to think about it before I respond.&rdquo;</p>
          <p>Eight words that change everything.</p>

          <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 22, color: '#1C2B3A', paddingTop: 16 }}>
            Take notes. Actually use them.
          </h2>
          <p>The easiest way to make your 1:1s feel meaningful is to remember what was said in the last one. It tells the other person: I was paying attention. You matter enough to track.</p>
          <p>You don&rsquo;t need a perfect system. You need a doc, a note, something. Write down what they said they were working on. Write down the thing they were worried about. Open it at the start of the next meeting and say, &ldquo;Last week you mentioned X — how did that go?&rdquo;</p>
          <p>That one habit — referencing previous conversations — does more for trust than almost anything else.</p>

          <div className="pt-4 p-6 rounded" style={{ background: 'rgba(122,158,130,0.08)', borderLeft: '3px solid #7A9E82' }}>
            <p style={{ color: '#1C2B3A' }}>A good 1:1 is 30 minutes. Done consistently, every week. It&rsquo;s not a big commitment. But it compounds. The manager who shows up every week, listens well, and remembers what was said? Their team doesn&rsquo;t leave. They don&rsquo;t go quiet. They tell you things before they become problems.</p>
            <p className="mt-3 font-medium" style={{ color: '#1C2B3A' }}>That&rsquo;s the whole point.</p>
          </div>
        </article>
      </section>
    </>
  )
}
