import type { Metadata } from 'next'
import Link from 'next/link'
import { ShareBar } from '@/components/ShareBar'

export const metadata: Metadata = {
  title: 'How to Delegate Without Losing Control | Cadence Blog',
  description: 'You know you should delegate more. The reason you don\'t isn\'t about trust. It\'s about accountability. Here\'s how to fix the handoff.',
}

export default function HowToDelegateWithoutLosingControl() {
  return (
    <div style={{ background: '#F5F0E8', minHeight: '100vh' }}>
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '24px 24px 0' }}>
        <Link href="/blog" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 13, color: '#9C968B', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          ← All posts
        </Link>
      </div>

      <article style={{ maxWidth: 780, margin: '0 auto', padding: '40px 24px 80px' }}>
        <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1C2B3A', marginBottom: 16 }}>
          Delegation ·
        </p>

        <h1 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 'clamp(32px, 5vw, 44px)', color: '#2C2C2C', lineHeight: 1.15, marginBottom: 16 }}>
          How to Delegate Without Losing Control
        </h1>

        <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: 20, color: '#6B6560', lineHeight: 1.5, marginBottom: 24 }}>
          The reason most managers don&rsquo;t delegate isn&rsquo;t about trust. It&rsquo;s about accountability. The fix starts with a 10-minute conversation most managers skip.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 40, paddingBottom: 24, borderBottom: '1px solid #D0CAC0' }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#C8782A', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 14, flexShrink: 0 }}>SD</div>
          <div>
            <div style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 14, color: '#2C2C2C' }}>Sean Davis</div>
            <div style={{ fontFamily: 'var(--font-source-sans)', fontSize: 13, color: '#9C968B' }}>Founder at Cadence · March 17, 2026 · 9 min read</div>
          </div>
        </div>


        <div style={{ fontFamily: 'var(--font-source-sans)', fontSize: 17, color: '#2C2C2C', lineHeight: 1.75 }}>

          <p>I have a theory about why managers don&rsquo;t delegate: it&rsquo;s not that they don&rsquo;t trust their people. Most managers do trust their people. The real issue is that delegation creates a specific kind of anxiety that doesn&rsquo;t have a name. It&rsquo;s the feeling of being accountable for an outcome you can no longer see. You handed off the work, and now it&rsquo;s happening somewhere you can&rsquo;t observe, and you still own the result if it goes sideways.</p>

          <p>That anxiety is completely rational. The fix, though, isn&rsquo;t to stop delegating. The fix is to build a system that gives you visibility without requiring you to hover. Most managers never build that system. Instead they either hold on to everything, or they hand things off and then quietly worry all week while ping-checking for updates.</p>

          <p>Neither of those works. Here&rsquo;s what does.</p>

          <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 24, color: '#2C2C2C', marginTop: 40, marginBottom: 16 }}>
            The four categories worth delegating
          </h2>

          <p>Not everything should be delegated. I&rsquo;ve seen managers try to hand off things they shouldn&rsquo;t: decisions that require their authority, conversations that need their specific relationship, anything where the delegation itself would send the wrong signal. The goal is to be deliberate about what leaves your plate, not to just reduce your workload.</p>

          <p>Here are the four categories I think about:</p>

          <ol style={{ paddingLeft: 24, margin: '24px 0' }}>
            <li style={{ marginBottom: 16 }}>
              <strong>Routine tasks you keep doing out of habit.</strong> These are things you&rsquo;ve done so many times they feel automatic. You&rsquo;re not learning from them, you&rsquo;re not uniquely positioned to do them, and they&rsquo;re eating time you could spend on decisions only you can make. If you&rsquo;ve done something more than three times and it&rsquo;s the same each time, it&rsquo;s a candidate for delegation.
            </li>
            <li style={{ marginBottom: 16 }}>
              <strong>Growth assignments for your team.</strong> These are tasks that would stretch someone on your team, things a little above where they&rsquo;re comfortable, that require them to figure something out. Delegation here isn&rsquo;t about offloading; it&rsquo;s about intentional development. The cost is that it&rsquo;ll take longer and might be messier than if you did it yourself. That&rsquo;s the point.
            </li>
            <li style={{ marginBottom: 16 }}>
              <strong>Things others can do better than you.</strong> This one stings a little. There are people on your team who are better at certain things than you are. If you&rsquo;re still holding those things because letting go feels like admitting something, that&rsquo;s ego, not management. Hand it off.
            </li>
            <li style={{ marginBottom: 16 }}>
              <strong>Things that free you for strategy.</strong> Every hour you spend on execution is an hour you&rsquo;re not spending on the decisions, conversations, and planning that only you can do. If you&rsquo;re a manager who&rsquo;s still buried in individual-contributor work, you&rsquo;re probably the bottleneck on your own team&rsquo;s progress.
            </li>
          </ol>

          <blockquote style={{ borderLeft: '4px solid #C8782A', paddingLeft: 24, margin: '32px 0', fontFamily: 'var(--font-dm-sans)', fontSize: 22, fontStyle: 'italic', color: '#2C2C2C', lineHeight: 1.4 }}>
            &ldquo;Delegation isn&rsquo;t giving something away. It&rsquo;s choosing who owns the outcome, then building the system that makes that ownership real.&rdquo;
          </blockquote>

          <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 24, color: '#2C2C2C', marginTop: 40, marginBottom: 16 }}>
            The handoff conversation most managers skip
          </h2>

          <p>This is where almost every delegation failure starts. Most managers hand off work like this: &ldquo;Hey, can you take care of X? Let me know if you have questions.&rdquo; Then they walk away and wonder why it didn&rsquo;t go the way they expected.</p>

          <p>The problem is not the person they handed it to. The problem is an incomplete handoff. There&rsquo;s a 10-minute conversation that should happen every time you delegate something meaningful. Not a long meeting, just a real conversation that covers the things most managers assume are obvious but aren&rsquo;t.</p>

          <p>Here&rsquo;s the five-step handoff conversation I use:</p>

          <ol style={{ paddingLeft: 24, margin: '24px 0' }}>
            <li style={{ marginBottom: 16 }}>
              <strong>Define what done looks like.</strong> Not &ldquo;I need this handled.&rdquo; An actual description of the end state. What will be true when this is complete? What quality standard are you expecting? &ldquo;Good job&rdquo; is not a success metric. Be specific enough that they could know, without asking you, whether they&rsquo;ve hit it.
            </li>
            <li style={{ marginBottom: 16 }}>
              <strong>Clarify decision boundaries.</strong> What can they decide on their own? What needs to come back to you? This is the part that trips people up the most. If you haven&rsquo;t explicitly said &ldquo;you don&rsquo;t need to check with me on vendor selection, but anything over $2k needs my sign-off,&rdquo; you&rsquo;ll either get too many check-ins (because they&rsquo;re being cautious) or too few (because they assumed autonomy you didn&rsquo;t intend to give).
            </li>
            <li style={{ marginBottom: 16 }}>
              <strong>Set up the check-in structure.</strong> How often do you want updates? Is it a weekly Slack note? A quick line in your 1:1? Exception-only (only surface it if something&rsquo;s blocking)? Get explicit. If you don&rsquo;t, people default to whatever feels right to them, which may not match what you need.
            </li>
            <li style={{ marginBottom: 16 }}>
              <strong>Surface the likely hard part.</strong> Ask: &ldquo;What&rsquo;s the thing most likely to make this harder than expected?&rdquo; Sometimes they&rsquo;ll tell you something you didn&rsquo;t know. Sometimes this question surfaces a constraint you both overlooked. And it shows you&rsquo;re not just dumping work. You&rsquo;re thinking about what they&rsquo;re walking into.
            </li>
            <li style={{ marginBottom: 16 }}>
              <strong>Make it safe to come back early.</strong> Say explicitly: &ldquo;If something&rsquo;s not going the way we expected, I want to know early, not late. Coming to me with a problem before it&rsquo;s critical is the right call.&rdquo; This changes how people think about escalation. Most employees default to not flagging problems because they&rsquo;re worried it looks like failure. Giving them explicit permission to come back early changes that.
            </li>
          </ol>

          <div style={{ background: '#FDF6EE', border: '1px solid #EBD5B8', borderTop: '3px solid #C8782A', borderRadius: 6, padding: '20px 24px', margin: '32px 0' }}>
            <div style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 13, color: '#C8782A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Common mistake</div>
            <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: 16, color: '#2C2C2C', lineHeight: 1.6, margin: 0 }}>Delegating the task but keeping the worry. You hand it off, then spend the rest of the week checking Slack for updates, drafting the version you would have done, and quietly second-guessing every decision they make. That&rsquo;s not delegation. It&rsquo;s doing the work twice. If you can&rsquo;t let go of the anxiety, the fix is better visibility, not more checking in.</p>
          </div>

          <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 24, color: '#2C2C2C', marginTop: 40, marginBottom: 16 }}>
            How to check in without micromanaging
          </h2>

          <p>Here&rsquo;s the honest truth about micromanagement: it almost always comes from missing visibility, not from a character flaw. When you can&rsquo;t see what&rsquo;s happening, you fill the gap with check-ins. Then more check-ins. Then you&rsquo;re that manager, not because you wanted to be, but because you didn&rsquo;t build an alternative.</p>

          <p>The alternative is simple: a visible, low-friction status system. It doesn&rsquo;t have to be sophisticated. You just need answers to three questions at any moment:</p>

          <ul style={{ paddingLeft: 24, margin: '24px 0' }}>
            <li style={{ marginBottom: 12 }}>What did I delegate, and to whom?</li>
            <li style={{ marginBottom: 12 }}>What&rsquo;s the current status: on track, needs attention, or stuck?</li>
            <li style={{ marginBottom: 12 }}>Is there anything that requires my input before the next check-in?</li>
          </ul>

          <p>If your team updates that list once a week, even just a quick line, you don&rsquo;t need to ask. You already know. The check-in becomes unnecessary, and the micromanagement anxiety goes away because you have actual information instead of silence.</p>

          <blockquote style={{ borderLeft: '4px solid #C8782A', paddingLeft: 24, margin: '32px 0', fontFamily: 'var(--font-dm-sans)', fontSize: 22, fontStyle: 'italic', color: '#2C2C2C', lineHeight: 1.4 }}>
            &ldquo;Micromanagement is almost always a symptom of missing visibility. Build the system that makes the check-in unnecessary, and the behavior fixes itself.&rdquo;
          </blockquote>

          <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 24, color: '#2C2C2C', marginTop: 40, marginBottom: 16 }}>
            What to keep on your own plate
          </h2>

          <p>Some things shouldn&rsquo;t be delegated. Not because you can&rsquo;t trust people, but because some decisions carry organizational weight or relational consequences that require your specific authority and context. Here&rsquo;s what I generally keep:</p>

          <ul style={{ paddingLeft: 24, margin: '24px 0' }}>
            <li style={{ marginBottom: 12 }}><strong>Performance conversations.</strong> These need to come from you. Delegating a difficult feedback conversation sends the message that you don&rsquo;t have the courage for it yourself.</li>
            <li style={{ marginBottom: 12 }}><strong>Hiring decisions.</strong> You can involve your team in interviews, but the decision to bring someone in or not is yours.</li>
            <li style={{ marginBottom: 12 }}><strong>Decisions that set precedent.</strong> If something will affect how the whole team works, or signals something about values and expectations, it usually needs to come from you.</li>
            <li style={{ marginBottom: 12 }}><strong>Things that require your specific relationships.</strong> If a conversation needs to happen because of your relationship with a stakeholder, a peer, or someone senior, hand-off dilutes it.</li>
          </ul>

          <div style={{ background: '#FDF6EE', border: '1px solid #EBD5B8', borderTop: '3px solid #C8782A', borderRadius: 6, padding: '20px 24px', margin: '32px 0' }}>
            <div style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 13, color: '#C8782A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>The real question</div>
            <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: 16, color: '#2C2C2C', lineHeight: 1.6, margin: 0 }}>If you stayed home sick tomorrow, which things on your plate would genuinely stop or slow without you, and which ones would just continue? Everything in the second category is a delegation candidate. Everything in the first is where your time should actually be.</p>
          </div>

          <p>Delegation done right isn&rsquo;t about letting go of accountability. It&rsquo;s about expanding how much your team can move without requiring you to be the bottleneck. The manager who&rsquo;s figured this out isn&rsquo;t less in control. They&rsquo;re more in control, because what they can see and influence just got bigger. That&rsquo;s what I was trying to build when I built Cadence: a way to delegate confidently because you can see the status without asking, and your team knows exactly what done looks like.</p>

        </div>

        <ShareBar title="How to Delegate Without Losing Control" url="https://cadencehq.co/blog/how-to-delegate-without-losing-control" />
        <div style={{ marginTop: 64, padding: 24, background: 'white', border: '1px solid #D0CAC0', borderRadius: 8, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
          <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#C8782A', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 18, flexShrink: 0 }}>SD</div>
          <div>
            <div style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 16, color: '#2C2C2C', marginBottom: 4 }}>Sean Davis</div>
            <div style={{ fontFamily: 'var(--font-source-sans)', fontSize: 13, color: '#C8782A', marginBottom: 8 }}>Founder at Cadence</div>
            <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: 14, color: '#6B6560', lineHeight: 1.6, margin: 0 }}>Sean has spent years in operations leadership and built Cadence because the management tools he needed didn&rsquo;t exist. He writes about practical management for real teams.</p>
          </div>
        </div>

        <div style={{ marginTop: 48, padding: '40px 32px', background: '#C8782A', borderRadius: 8, textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 24, color: 'white', marginBottom: 12 }}>Make delegation trackable.</h3>
          <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 24 }}>Cadence lets you track what you&rsquo;ve delegated, see status at a glance, and stop second-guessing what&rsquo;s happening on your team. 14-day free trial.</p>
          <a href="https://app.cadencehq.co/signup" style={{ display: 'inline-block', background: 'white', color: '#C8782A', fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 15, padding: '12px 28px', borderRadius: 4, textDecoration: 'none' }}>Get started free</a>
        </div>
      </article>
    </div>
  )
}
