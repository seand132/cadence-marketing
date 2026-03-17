import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Give Feedback Your Team Will Actually Hear | Cadence Blog',
  description: 'Feedback doesn\'t fail because managers are too blunt or too soft — it fails because it\'s too rare, too vague, and delivered too far from the moment that mattered.',
}

export default function HowToGiveFeedbackYourTeamWillHear() {
  return (
    <div style={{ background: '#F5F0E8', minHeight: '100vh' }}>
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '24px 24px 0' }}>
        <Link href="/blog" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 13, color: '#9C968B', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          ← All posts
        </Link>
      </div>

      <article style={{ maxWidth: 780, margin: '0 auto', padding: '40px 24px 80px' }}>
        <div style={{ display: 'inline-block', background: '#FDF6EE', color: '#C8782A', fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 20, marginBottom: 20 }}>
          Management
        </div>

        <h1 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 'clamp(32px, 5vw, 44px)', color: '#2C2C2C', lineHeight: 1.15, marginBottom: 16 }}>
          How to Give Feedback Your Team Will Actually Hear
        </h1>

        <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: 20, color: '#6B6560', lineHeight: 1.5, marginBottom: 24 }}>
          Most feedback fails not because managers lack courage, but because the timing is wrong, the framing is vague, and the ask is missing entirely.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 40, paddingBottom: 24, borderBottom: '1px solid #D0CAC0' }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#C8782A', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 14, flexShrink: 0 }}>SD</div>
          <div>
            <div style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 14, color: '#2C2C2C' }}>Sean Davis</div>
            <div style={{ fontFamily: 'var(--font-source-sans)', fontSize: 13, color: '#9C968B' }}>Founder at Cadence · March 17, 2026 · 8 min read</div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 8, marginBottom: 40 }}>
          {[
            { label: 'Share on X', href: 'https://twitter.com/intent/tweet?text=How%20to%20Give%20Feedback%20Your%20Team%20Will%20Actually%20Hear&url=https://cadencehq.co/blog/how-to-give-feedback-your-team-will-hear' },
            { label: 'Share on LinkedIn', href: 'https://linkedin.com/sharing/share-offsite/?url=https://cadencehq.co/blog/how-to-give-feedback-your-team-will-hear' },
          ].map((btn) => (
            <a key={btn.label} href={btn.href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 12, fontWeight: 500, color: '#9C968B', border: '1px solid #D0CAC0', borderRadius: 20, padding: '6px 14px', textDecoration: 'none', background: 'white' }}>
              {btn.label}
            </a>
          ))}
        </div>

        <div style={{ fontFamily: 'var(--font-source-sans)', fontSize: 17, color: '#2C2C2C', lineHeight: 1.75 }}>

          <p>Let me describe a pattern I&rsquo;ve seen play out dozens of times. A manager notices something — a behavior, a pattern, a moment in a meeting where something didn&rsquo;t land right. They think &ldquo;I should say something.&rdquo; Then they don&rsquo;t, because it feels uncomfortable, or the moment passed, or they tell themselves they&rsquo;ll bring it up in the annual review. Months go by. The behavior continues. The manager&rsquo;s frustration builds. Eventually they say something — either too late, too bluntly, or buried under so much hedging that the person doesn&rsquo;t realize they just received critical feedback.</p>

          <p>Meanwhile, the person on the receiving end had no idea any of this was building. They thought things were going fine. The review feels like an ambush. Trust drops. Both people leave the conversation feeling worse than before.</p>

          <p>This is how most feedback fails. Not because the manager was cruel or incompetent — but because they waited too long, said too little, and didn&rsquo;t give the other person anything concrete to act on.</p>

          <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 24, color: '#2C2C2C', marginTop: 40, marginBottom: 16 }}>
            Why the annual review is nearly useless for real feedback
          </h2>

          <p>The annual performance review is one of the most persistently bad ideas in management, and it&rsquo;s survived because HR needs a process and managers need an excuse to defer hard conversations. I&rsquo;ve been in organizations where people received feedback once a year, formally, in a structured document, about things that happened months ago. Nobody grew from that feedback. Nobody could. The context was too old, the details were too thin, and the whole thing felt more like documentation than development.</p>

          <p>Feedback has a half-life. The closer it is to the event, the more useful it is — not because people are more defensive later, but because the specifics are still alive. Both people can remember what actually happened. The person can feel their way back to the moment, understand the impact, and connect the feedback to something real. By the time two months have passed, the feedback becomes an abstraction. You can nod along with it, but you can&rsquo;t learn from it the same way.</p>

          <p>The goal is same-week feedback for anything that matters. Not in the moment if emotions are running high — give it 24 hours. But the target is within 48 hours of the event, while you can both still say &ldquo;remember Tuesday?&rdquo; and actually remember Tuesday.</p>

          <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 24, color: '#2C2C2C', marginTop: 40, marginBottom: 16 }}>
            The observation-impact-ask framework
          </h2>

          <p>There are dozens of feedback frameworks. Most of them work. What matters isn&rsquo;t which framework you use — it&rsquo;s that you use something that forces you to be specific and that ends with a clear ask. Here&rsquo;s the version I&rsquo;ve used and taught the most:</p>

          <ol style={{ paddingLeft: 24, margin: '24px 0' }}>
            <li style={{ marginBottom: 20 }}>
              <strong>Observation — what you saw, specifically.</strong> Not an interpretation, not a judgment — just what happened. &ldquo;In the client call on Wednesday, you cut Alex off twice before they finished their point.&rdquo; Not &ldquo;you were dismissive&rdquo; — that&rsquo;s an interpretation. The specific behavior, in a specific context. This matters because it&rsquo;s harder to argue with and easier to understand. &ldquo;You were dismissive&rdquo; is debatable. &ldquo;You cut them off twice&rdquo; is a fact.
            </li>
            <li style={{ marginBottom: 20 }}>
              <strong>Impact — what it did.</strong> This is the part that makes feedback land differently. Not &ldquo;that wasn&rsquo;t great&rdquo; — but &ldquo;Alex stopped contributing for the rest of the meeting, and I noticed the client started directing their questions away from them.&rdquo; When people understand the actual impact of their behavior — not a judgment about them, but an effect on the world — the feedback hits differently. Most people don&rsquo;t intend to have the impact they have. Naming it creates the opening for change.
            </li>
            <li style={{ marginBottom: 20 }}>
              <strong>Ask — what you want instead.</strong> This is the step most managers skip. They deliver the observation and the impact, and then trail off. The person knows what they did wrong — but not what to do differently. That&rsquo;s not feedback. That&rsquo;s a complaint. The ask closes the loop: &ldquo;I&rsquo;d like you to be more deliberate about letting people finish. Can we talk about what makes that hard for you in client settings?&rdquo; That last question matters — it opens dialogue instead of closing it.
            </li>
          </ol>

          <blockquote style={{ borderLeft: '4px solid #C8782A', paddingLeft: 24, margin: '32px 0', fontFamily: 'var(--font-dm-sans)', fontSize: 22, fontStyle: 'italic', color: '#2C2C2C', lineHeight: 1.4 }}>
            &ldquo;Specificity is the difference between feedback that changes behavior and feedback that gets forgotten. &lsquo;Great job on that presentation&rsquo; does nothing. &lsquo;The way you framed risk before the solution changed how the room responded&rsquo; — that they&rsquo;ll remember.&rdquo;
          </blockquote>

          <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 24, color: '#2C2C2C', marginTop: 40, marginBottom: 16 }}>
            Positive feedback is also feedback
          </h2>

          <p>I want to spend a minute on this because most managers dramatically underinvest in specific positive feedback, and the consequences are real. It&rsquo;s not just about morale — it&rsquo;s about helping people understand what to repeat.</p>

          <p>&ldquo;Great job on that presentation&rdquo; is not feedback. It&rsquo;s appreciation. That&rsquo;s fine, but it doesn&rsquo;t help someone know what specifically was great and therefore what to do again next time. Compare it to: &ldquo;The way you framed the risk section — leading with the business case before listing the problems — kept the stakeholders from getting defensive. They stayed engaged instead of going into protect mode. That was the right call and it changed the dynamic in the room. Do that again.&rdquo;</p>

          <p>Now they know exactly what they did. They can repeat it intentionally. They can teach it to someone else. The specificity is what transforms appreciation into something that actually changes how someone works.</p>

          <p>Aim for a rough 3:1 ratio of positive to developmental feedback — not because you need to pad the criticism, but because most managers are running at about 0.2:1 and wonder why their teams feel unappreciated. Notice good work specifically and name it quickly. It takes 90 seconds and it compounds over time in a way that almost nothing else does.</p>

          <div style={{ background: '#FDF6EE', border: '1px solid #EBD5B8', borderTop: '3px solid #C8782A', borderRadius: 6, padding: '20px 24px', margin: '32px 0' }}>
            <div style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 13, color: '#C8782A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Common mistake</div>
            <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: 16, color: '#2C2C2C', lineHeight: 1.6, margin: 0 }}>Sandwiching criticism between compliments. The classic &ldquo;feedback sandwich&rdquo; — positive, then developmental, then positive — was well-intentioned but it teaches people to distrust the compliments. They learn to wait for the &ldquo;but.&rdquo; Give positive feedback on its own terms. Give developmental feedback on its own terms. Don&rsquo;t mix them into a single delivery.</p>
          </div>

          <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 24, color: '#2C2C2C', marginTop: 40, marginBottom: 16 }}>
            How a consistent cadence makes this easier
          </h2>

          <p>One reason feedback is hard: it feels like it requires a special conversation. You have to set up a meeting, signal that something serious is coming, and the other person walks in already bracing themselves. That framing makes feedback feel heavy for both people, and it&rsquo;s one of the main reasons managers avoid it.</p>

          <p>Regular 1:1s change this entirely. When there&rsquo;s a standing conversation every week, feedback doesn&rsquo;t have to be scheduled separately. It&rsquo;s just part of the ongoing conversation between you and that person. &ldquo;Hey, I wanted to mention something from the team meeting on Wednesday&rdquo; — and then you&rsquo;re into it. No drama, no special setup, no signal that something serious is coming. Just a manager who noticed something and said it.</p>

          <p>The teams that give and receive the most feedback are the ones with the most consistent meeting rhythm. Not because their managers are braver — but because the cadence makes feedback normal, expected, and low-stakes. You can say a hard thing in a 1:1 because there&rsquo;s another one next week to follow up. The relationship has enough surface area to hold it.</p>

          <blockquote style={{ borderLeft: '4px solid #C8782A', paddingLeft: 24, margin: '32px 0', fontFamily: 'var(--font-dm-sans)', fontSize: 22, fontStyle: 'italic', color: '#2C2C2C', lineHeight: 1.4 }}>
            &ldquo;When you make feedback a regular part of your rhythm instead of a special event, people stop dreading it. They start expecting it. And then they start asking for it.&rdquo;
          </blockquote>

          <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 24, color: '#2C2C2C', marginTop: 40, marginBottom: 16 }}>
            Ask for feedback yourself
          </h2>

          <p>This is the part most managers skip, and it&rsquo;s the part that changes the dynamic the most. If you want your team to receive feedback well, you need to model receiving it yourself — openly, without defensiveness, and with visible appreciation for the honesty.</p>

          <p>I ask my direct reports for feedback in 1:1s every month or so: &ldquo;What&rsquo;s one thing I could do differently as your manager that would make your work easier or better?&rdquo; When they answer — and they will answer if they trust you — I listen without explaining or defending. I say thank you. I write it down. And I follow up on it the next week: &ldquo;I&rsquo;ve been thinking about what you said last week, and here&rsquo;s what I&rsquo;m going to do differently.&rdquo;</p>

          <p>That loop — asking, receiving, acting, reporting back — does more for psychological safety than any declared commitment to open communication. It shows, in actual behavior, that feedback flows both directions on this team. That changes what people are willing to say to you, and eventually, what they&rsquo;re willing to hear from you.</p>

          <div style={{ background: '#FDF6EE', border: '1px solid #EBD5B8', borderTop: '3px solid #C8782A', borderRadius: 6, padding: '20px 24px', margin: '32px 0' }}>
            <div style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 13, color: '#C8782A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Try this week</div>
            <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: 16, color: '#2C2C2C', lineHeight: 1.6, margin: 0 }}>Think about a piece of feedback you&rsquo;ve been sitting on — something you noticed but haven&rsquo;t said. Pick the right setting (not in a group, not right after the event if emotions are still high), and say it this week using the observation-impact-ask structure. Notice how differently it lands when it&rsquo;s specific and comes with a clear ask.</p>
          </div>

          <p>Feedback is the job. Not the uncomfortable part of the job — the actual job. The managers who are honest early and specifically, who make feedback a regular part of the week rather than a formal event, who model receiving it as gracefully as they give it — those managers build teams that grow. The people on those teams know where they stand, which means they don&rsquo;t waste energy trying to figure it out. They use that energy to get better.</p>

        </div>

        <div style={{ marginTop: 64, padding: 24, background: 'white', border: '1px solid #D0CAC0', borderRadius: 8, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
          <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#C8782A', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 18, flexShrink: 0 }}>SD</div>
          <div>
            <div style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 16, color: '#2C2C2C', marginBottom: 4 }}>Sean Davis</div>
            <div style={{ fontFamily: 'var(--font-source-sans)', fontSize: 13, color: '#C8782A', marginBottom: 8 }}>Founder at Cadence</div>
            <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: 14, color: '#6B6560', lineHeight: 1.6, margin: 0 }}>Sean has spent years in operations leadership and built Cadence because the management tools he needed didn&rsquo;t exist. He writes about practical management for real teams.</p>
          </div>
        </div>

        <div style={{ marginTop: 48, padding: '40px 32px', background: '#C8782A', borderRadius: 8, textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 24, color: 'white', marginBottom: 12 }}>Make feedback part of your weekly rhythm.</h3>
          <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 24 }}>Cadence gives you the 1:1 structure and note-taking system to turn feedback from a special event into a normal part of how you manage. 14-day free trial.</p>
          <a href="https://app.cadencehq.co/signup" style={{ display: 'inline-block', background: 'white', color: '#C8782A', fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 15, padding: '12px 28px', borderRadius: 4, textDecoration: 'none' }}>Get started free</a>
        </div>
      </article>
    </div>
  )
}
