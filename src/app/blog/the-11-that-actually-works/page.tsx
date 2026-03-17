import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The 1:1 That Actually Works | Cadence Blog',
  description: 'Most 1:1s are status updates with a calendar invite. Here is the structure, the questions, and the habits that make them worth 30 minutes of everyone\'s week.',
}

export default function TheOneOnOneThatActuallyWorks() {
  return (
    <div style={{ background: '#F5F0E8', minHeight: '100vh' }}>
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '24px 24px 0' }}>
        <Link href="/blog" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 13, color: '#9C968B', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          ← All posts
        </Link>
      </div>

      <article style={{ maxWidth: 780, margin: '0 auto', padding: '40px 24px 80px' }}>
        <div style={{ display: 'inline-block', background: '#FDF6EE', color: '#C8782A', fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 20, marginBottom: 20 }}>
          1:1s
        </div>

        <h1 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 'clamp(32px, 5vw, 44px)', color: '#2C2C2C', lineHeight: 1.15, marginBottom: 16 }}>
          The 1:1 That Actually Works
        </h1>

        <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: 20, color: '#6B6560', lineHeight: 1.5, marginBottom: 24 }}>
          Most 1:1s are status updates with a calendar invite — here&rsquo;s the structure, the questions, and the habits that make them worth 30 minutes of everyone&rsquo;s week.
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
            { label: 'Share on X', href: 'https://twitter.com/intent/tweet?text=The%201%3A1%20That%20Actually%20Works&url=https://cadencehq.co/blog/the-11-that-actually-works' },
            { label: 'Share on LinkedIn', href: 'https://linkedin.com/sharing/share-offsite/?url=https://cadencehq.co/blog/the-11-that-actually-works' },
          ].map((btn) => (
            <a key={btn.label} href={btn.href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 12, fontWeight: 500, color: '#9C968B', border: '1px solid #D0CAC0', borderRadius: 20, padding: '6px 14px', textDecoration: 'none', background: 'white' }}>
              {btn.label}
            </a>
          ))}
        </div>

        <div style={{ fontFamily: 'var(--font-source-sans)', fontSize: 17, color: '#2C2C2C', lineHeight: 1.75 }}>

          <p>I used to run terrible 1:1s. Not because I didn&rsquo;t care — I did — but because I had no structure for them. I&rsquo;d open the meeting, ask how things were going, get a summary of whatever was on my report&rsquo;s plate that week, nod along, maybe flag one thing I needed from them, and we&rsquo;d both leave 25 minutes later feeling vaguely okay about the interaction. But nothing had actually happened. No trust built. No growth conversation. No real honesty.</p>

          <p>I was running what I now call a &ldquo;check-in disguised as a 1:1.&rdquo; It happened every week, took up 30 minutes on both our calendars, and produced almost nothing that couldn&rsquo;t have been handled in a two-sentence Slack message. I kept doing it because it felt like managing. It wasn&rsquo;t.</p>

          <p>Here&rsquo;s what I&rsquo;ve learned since then: a 1:1 either has a purpose and a structure, or it slowly becomes a status meeting. There&rsquo;s no neutral ground. And once it becomes a status meeting, you&rsquo;ve lost the only dedicated time you have to build a real relationship with each person on your team.</p>

          <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 24, color: '#2C2C2C', marginTop: 40, marginBottom: 16 }}>
            What a 1:1 is actually for
          </h2>

          <p>The purpose of a 1:1 is not status. Status has a hundred other channels: project boards, Slack threads, team standups. If you&rsquo;re using your 1:1 to get project updates, you&rsquo;re wasting both people&rsquo;s time and quietly signaling that your meetings are about what you need, not what your report needs.</p>

          <p>The real purpose of a 1:1 is to have a conversation that can&rsquo;t happen anywhere else. It&rsquo;s where someone can tell you they&rsquo;re overwhelmed without announcing it to the team. It&rsquo;s where you can give targeted feedback without making it a performance. It&rsquo;s where growth happens — slowly, over dozens of conversations — because someone feels safe enough to say what&rsquo;s actually going on. You cannot build that in a group setting. You build it in this 30 minutes, every single week.</p>

          <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 24, color: '#2C2C2C', marginTop: 40, marginBottom: 16 }}>
            The four-part agenda that works
          </h2>

          <p>I run every 1:1 with the same four sections. Not because I&rsquo;m rigid, but because consistency creates safety. When someone knows what to expect from a meeting, they can prepare for it. They come in with things on their mind instead of having to improvise on the spot.</p>

          <p>Here&rsquo;s the structure I use:</p>

          <ol style={{ paddingLeft: 24, margin: '24px 0' }}>
            <li style={{ marginBottom: 16 }}>
              <strong>Personal check-in (5 minutes).</strong> Not &ldquo;how are you&rdquo; in passing — an actual pause. &ldquo;How are you doing this week, genuinely?&rdquo; Some people need this. Some will wave it off. But the fact that you ask — every week, without skipping — tells them you see them as a person, not just a function. Over time, this is where you learn that someone&rsquo;s going through something hard, or burned out, or more energized than usual. You can&rsquo;t manage well without that information.
            </li>
            <li style={{ marginBottom: 16 }}>
              <strong>Their agenda (15 minutes).</strong> This is the most important section, and it should come second, not last. Ask: &ldquo;What&rsquo;s on your mind? What do you want to make sure we cover today?&rdquo; Then stop talking. The instinct to fill silence is strong — resist it. What surfaces in this space — after a few seconds of thinking — is almost always more important than whatever you were planning to bring up. This is where you hear about the thing that&rsquo;s been frustrating them for two weeks, the decision they&rsquo;re not sure about, the dynamic with a colleague that&rsquo;s been sitting unresolved.
            </li>
            <li style={{ marginBottom: 16 }}>
              <strong>Your agenda (5 minutes).</strong> Now it&rsquo;s your turn. Keep it focused. One or two things you genuinely need from them — not a status check, but a real ask or a piece of feedback or a context you want to share. If you&rsquo;ve been doing this right, most of what you needed to cover probably got covered in their agenda. That&rsquo;s a good sign.
            </li>
            <li style={{ marginBottom: 16 }}>
              <strong>Growth (5 minutes).</strong> Not every week needs a deep career conversation. But every few weeks, I ask something forward-looking: &ldquo;What do you want to be getting better at?&rdquo; or &ldquo;Is there something you&rsquo;re not learning right now that you wish you were?&rdquo; or &ldquo;How do you want your role to look different in six months?&rdquo; These conversations compound. One of them, every month or so, is how you stop people from quietly disengaging while appearing fine.
            </li>
          </ol>

          <blockquote style={{ borderLeft: '4px solid #C8782A', paddingLeft: 24, margin: '32px 0', fontFamily: 'var(--font-dm-sans)', fontSize: 22, fontStyle: 'italic', color: '#2C2C2C', lineHeight: 1.4 }}>
            &ldquo;The best question I ever added to my 1:1 agenda: &lsquo;What&rsquo;s one thing I could do differently as your manager?&rsquo; The first time I asked it, three people had an answer ready. They&rsquo;d been waiting for permission to say it.&rdquo;
          </blockquote>

          <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 24, color: '#2C2C2C', marginTop: 40, marginBottom: 16 }}>
            The questions that actually open things up
          </h2>

          <p>Most managers ask questions that invite short answers. &ldquo;How&rsquo;s the project going?&rdquo; gives you a status update. &ldquo;Anything blocking you?&rdquo; gets a yes or no. These questions feel efficient. They produce very little of value.</p>

          <p>The questions that surface real information are the ones that require reflection. I rotate through these depending on what feels relevant:</p>

          <ul style={{ paddingLeft: 24, margin: '24px 0' }}>
            <li style={{ marginBottom: 12 }}>&ldquo;What&rsquo;s the most frustrating part of your work right now?&rdquo;</li>
            <li style={{ marginBottom: 12 }}>&ldquo;Is there anything you feel like you&rsquo;re not getting enough support on?&rdquo;</li>
            <li style={{ marginBottom: 12 }}>&ldquo;What&rsquo;s something you wish I knew about but might not?&rdquo;</li>
            <li style={{ marginBottom: 12 }}>&ldquo;If you could change one thing about how we work as a team, what would it be?&rdquo;</li>
            <li style={{ marginBottom: 12 }}>&ldquo;What&rsquo;s one thing I could do differently as your manager?&rdquo;</li>
          </ul>

          <p>You don&rsquo;t ask all of these every week. You pick one, ask it, and then give it real space. The goal isn&rsquo;t to collect answers — it&rsquo;s to have the kind of conversation where someone actually says something honest. When that happens, resist the urge to immediately fix or explain. Just say: &ldquo;Thanks for telling me that. I want to think about it before I respond.&rdquo; That single sentence does more for psychological safety than most managers realize.</p>

          <div style={{ background: '#FDF6EE', border: '1px solid #EBD5B8', borderTop: '3px solid #C8782A', borderRadius: 6, padding: '20px 24px', margin: '32px 0' }}>
            <div style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 13, color: '#C8782A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Try this week</div>
            <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: 16, color: '#2C2C2C', lineHeight: 1.6, margin: 0 }}>At the start of your next 1:1, ask each person: &ldquo;What do you actually want to get out of our 1:1s? What would make them more useful for you?&rdquo; You might be surprised how many people have never been asked — and have had a clear answer for months.</p>
          </div>

          <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 24, color: '#2C2C2C', marginTop: 40, marginBottom: 16 }}>
            Why consistency beats perfection
          </h2>

          <p>I&rsquo;ve had great 1:1s and I&rsquo;ve had flat ones. Some weeks there&rsquo;s not much to say. Sometimes the conversation goes somewhere unexpected and runs long. Sometimes you ask a growth question and get a shrug. That&rsquo;s all fine.</p>

          <p>What matters far more than any individual 1:1 is whether they happen every week. Consistency is the foundation. When your team knows the meeting will happen — not sometimes, not when things are calm, but every week regardless — they start treating it differently. They save things for it. They think about what they want to bring up. The 1:1 becomes a container, and they start to trust it.</p>

          <p>I&rsquo;ve seen managers have transformative conversations with their reports simply because they kept showing up. No special techniques. No elaborate frameworks. Just the same 30-minute meeting, every week, where the person knew they&rsquo;d have undivided attention and no judgment. That reliability is rarer than you think.</p>

          <blockquote style={{ borderLeft: '4px solid #C8782A', paddingLeft: 24, margin: '32px 0', fontFamily: 'var(--font-dm-sans)', fontSize: 22, fontStyle: 'italic', color: '#2C2C2C', lineHeight: 1.4 }}>
            &ldquo;Frequency matters more than perfection. A flat 1:1 that happened is worth more than a brilliant one you keep postponing.&rdquo;
          </blockquote>

          <div style={{ background: '#FDF6EE', border: '1px solid #EBD5B8', borderTop: '3px solid #C8782A', borderRadius: 6, padding: '20px 24px', margin: '32px 0' }}>
            <div style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 13, color: '#C8782A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Common mistake</div>
            <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: 16, color: '#2C2C2C', lineHeight: 1.6, margin: 0 }}>Skipping 1:1s when things get busy. I understand the impulse — you&rsquo;re underwater, the meeting feels optional, you can catch up later. But the weeks when you&rsquo;re most overwhelmed are exactly the weeks your team most needs the check-in. They&rsquo;re probably just as underwater, and the cancelled 1:1 is the signal that says &ldquo;we don&rsquo;t have time for each other right now.&rdquo; That signal compounds.</p>
          </div>

          <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 24, color: '#2C2C2C', marginTop: 40, marginBottom: 16 }}>
            Actually use your notes
          </h2>

          <p>The single easiest way to make your 1:1s feel meaningful is to reference the last one. Open the meeting and say: &ldquo;Last week you mentioned you were worried about the rollout timeline — how did that land?&rdquo; or &ldquo;You said you wanted to take a bigger role in client calls. Did you get a chance to do that?&rdquo;</p>

          <p>This tells people something simple and powerful: I was paying attention. You matter enough that I wrote it down and came back to it. Most managers don&rsquo;t do this. The ones who do build a different kind of loyalty — not because they&rsquo;re particularly brilliant, but because they consistently treat conversations as something worth remembering.</p>

          <p>You don&rsquo;t need a perfect notes system. A Google Doc per person, a Notion page, a section in Cadence — whatever you&rsquo;ll actually open before the next meeting. The tool is not the point. The habit is.</p>

          <blockquote style={{ borderLeft: '4px solid #C8782A', paddingLeft: 24, margin: '32px 0', fontFamily: 'var(--font-dm-sans)', fontSize: 22, fontStyle: 'italic', color: '#2C2C2C', lineHeight: 1.4 }}>
            &ldquo;The manager who shows up every week, listens well, and remembers what was said — that&rsquo;s the manager people don&rsquo;t leave. Not because the job is great, but because they feel genuinely seen.&rdquo;
          </blockquote>

          <p>I built Cadence partly because I kept losing this — my 1:1 notes were scattered across five different places, I had no easy way to see patterns across conversations, and the prep work before each meeting took longer than it should. I wanted a system where the rhythm was easy enough to sustain without thinking about it. If you&rsquo;re managing a team right now, start there: pick a system, any system, and commit to it for 90 days. See what changes.</p>

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
          <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 24, color: 'white', marginBottom: 12 }}>Want 1:1s that actually work?</h3>
          <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 24 }}>Cadence gives you structured 1:1 templates, a place to track notes and follow-ups, and the weekly rhythm to make it stick. 14-day free trial.</p>
          <a href="https://app.cadencehq.co/signup" style={{ display: 'inline-block', background: 'white', color: '#C8782A', fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 15, padding: '12px 28px', borderRadius: 4, textDecoration: 'none' }}>Get started free</a>
        </div>
      </article>
    </div>
  )
}
