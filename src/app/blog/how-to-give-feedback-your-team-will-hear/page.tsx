import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Give Feedback Your Team Will Actually Hear — Cadence Blog',
  description: "Feedback fails not because it's too harsh or too soft — but because it's too rare, too vague, and too disconnected from the moment that mattered.",
}

export default function HowToGiveFeedbackYourTeamWillHear() {
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
            How to Give Feedback Your Team Will Actually Hear
          </h1>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-dm-sans)' }}>6 min read · Cadence Team</p>
        </div>
      </section>

      <section style={{ background: '#F5F0E8' }} className="py-20">
        <article className="max-w-2xl mx-auto px-6 space-y-5 reveal" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 17, color: 'rgba(28,43,58,0.75)', lineHeight: 1.8 }}>
          <p>Feedback doesn&rsquo;t fail because managers are too blunt or too soft.</p>
          <p>It fails because it&rsquo;s too rare, too vague, and delivered too far from the moment that mattered.</p>
          <p>By the time most managers say something, the person has already repeated the behavior six more times. Or the feedback is so hedged — &ldquo;just something to think about&rdquo; — that the other person didn&rsquo;t realize it was feedback at all.</p>

          <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 22, color: '#1C2B3A', paddingTop: 16 }}>
            Why the timing matters more than the words.
          </h2>
          <p>Feedback has a half-life. The closer it is to the event, the more useful it is. Not because people are more defensive later — but because the details are still alive. The context is shared. Both people remember what actually happened.</p>
          <p>Feedback given two weeks after the fact is a historical record, not a coaching conversation. The person can&rsquo;t feel their way back into that situation. They can only nod and try to remember.</p>
          <p>When you notice something — say it soon. Not in the moment if emotions are high, but within a few days. When you can still say &ldquo;remember Tuesday?&rdquo; and both of you can.</p>

          <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 22, color: '#1C2B3A', paddingTop: 16 }}>
            The structure that actually works.
          </h2>
          <p>There are a dozen feedback frameworks floating around. Most of them work. What matters isn&rsquo;t which one you use — it&rsquo;s that you use something consistent. Here&rsquo;s a simple version:</p>
          <ul className="space-y-3 pl-2">
            {[
              { label: 'Observation', rest: 'What you saw, specifically. "In the client meeting on Thursday, you interrupted Alex twice before they finished their point."' },
              { label: 'Impact', rest: 'What it did. "It made Alex stop contributing for the rest of the meeting, and I think it changed how the client read the room."' },
              { label: 'Ask', rest: 'What you want instead. "I\'d like you to be more deliberate about letting people finish. Can we talk about what gets in the way of that for you?"' },
            ].map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <span style={{ color: '#7A9E82', fontWeight: 700, marginTop: 2 }}>–</span>
                <span><strong style={{ color: '#1C2B3A' }}>{item.label}:</strong> {item.rest}</span>
              </li>
            ))}
          </ul>
          <p>The &ldquo;ask&rdquo; step is the one most managers skip. They deliver the observation and the impact, then trail off. The person knows what they did wrong but not what to do differently. That&rsquo;s not feedback. That&rsquo;s a complaint.</p>

          <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 22, color: '#1C2B3A', paddingTop: 16 }}>
            Positive feedback is also feedback.
          </h2>
          <p>The same principles apply. &ldquo;Great job on that presentation&rdquo; is not feedback. It&rsquo;s appreciation, and that&rsquo;s fine — but it doesn&rsquo;t help someone know what to repeat.</p>
          <p>Specific positive feedback: &ldquo;The way you framed the risk section — leading with the business case before the problems — changed the dynamic in the room. The stakeholders stayed engaged instead of getting defensive. That was exactly right.&rdquo;</p>
          <p>Now they know what they did. They can do it again.</p>

          <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 22, color: '#1C2B3A', paddingTop: 16 }}>
            Cadence makes feedback easier.
          </h2>
          <p>One of the quiet reasons feedback is hard: it&rsquo;s uncomfortable to bring something up after the relationship has already moved on from it. It feels like reopening something closed.</p>
          <p>Regular 1:1s fix this. When there&rsquo;s a standing conversation every week, feedback doesn&rsquo;t have to be A Whole Thing. It&rsquo;s just part of the conversation. &ldquo;Hey, I wanted to mention something from the team meeting...&rdquo;</p>
          <p>No drama. No special scheduling. Just a manager who noticed something and said it.</p>
          <p>The teams that get the most feedback are the ones with the most consistent rhythm. Not because their managers are braver — but because the cadence makes it normal.</p>

          <div className="pt-4 p-6 rounded" style={{ background: 'rgba(122,158,130,0.08)', borderLeft: '3px solid #7A9E82' }}>
            <p style={{ color: '#1C2B3A' }}>Feedback is the job. Not the uncomfortable part of the job — the job. The teams that grow fastest are the ones where something gets said, soon, specifically, and without drama.</p>
            <p className="mt-3 font-medium" style={{ color: '#1C2B3A' }}>Build the rhythm. Say the thing. That&rsquo;s the whole move.</p>
          </div>
        </article>
      </section>
    </>
  )
}
