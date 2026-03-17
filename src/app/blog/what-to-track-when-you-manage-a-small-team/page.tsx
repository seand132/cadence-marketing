import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What to Track When You Manage a Small Team | Cadence Blog',
  description: 'Most small-team managers track the wrong things — or nothing at all. Here are the five signals that actually tell you whether your team is healthy and on track.',
}

export default function WhatToTrackWhenYouManageASmallTeam() {
  return (
    <div style={{ background: '#F5F0E8', minHeight: '100vh' }}>
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '24px 24px 0' }}>
        <Link href="/blog" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 13, color: '#9C968B', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          ← All posts
        </Link>
      </div>

      <article style={{ maxWidth: 780, margin: '0 auto', padding: '40px 24px 80px' }}>
        <div style={{ display: 'inline-block', background: '#FDF6EE', color: '#C8782A', fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 20, marginBottom: 20 }}>
          KPIs
        </div>

        <h1 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 'clamp(32px, 5vw, 44px)', color: '#2C2C2C', lineHeight: 1.15, marginBottom: 16 }}>
          What to Track When You Manage a Small Team
        </h1>

        <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: 20, color: '#6B6560', lineHeight: 1.5, marginBottom: 24 }}>
          You don&rsquo;t need 40 metrics — you need five signals that tell you whether your team is healthy, moving, and actually working on what matters.
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
            { label: 'Share on X', href: 'https://twitter.com/intent/tweet?text=What%20to%20Track%20When%20You%20Manage%20a%20Small%20Team&url=https://cadencehq.co/blog/what-to-track-when-you-manage-a-small-team' },
            { label: 'Share on LinkedIn', href: 'https://linkedin.com/sharing/share-offsite/?url=https://cadencehq.co/blog/what-to-track-when-you-manage-a-small-team' },
          ].map((btn) => (
            <a key={btn.label} href={btn.href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 12, fontWeight: 500, color: '#9C968B', border: '1px solid #D0CAC0', borderRadius: 20, padding: '6px 14px', textDecoration: 'none', background: 'white' }}>
              {btn.label}
            </a>
          ))}
        </div>

        <div style={{ fontFamily: 'var(--font-source-sans)', fontSize: 17, color: '#2C2C2C', lineHeight: 1.75 }}>

          <p>When I managed my first team, I tracked everything and understood almost none of it. I had a project board with color-coded statuses, a spreadsheet of weekly outputs, and a running log of every task I&rsquo;d assigned. I spent maybe 90 minutes a week maintaining all of it. And at the end of the quarter, I still got blindsided by a performance issue I hadn&rsquo;t seen coming, a deliverable that was three weeks behind anyone telling me, and a team member who was quietly looking for a new job.</p>

          <p>The problem wasn&rsquo;t too little data. It was the wrong data. I was tracking activity and output. I wasn&rsquo;t tracking health. I had no signal for whether people were overwhelmed, whether blockers were sitting unresolved, whether anyone felt disconnected from what we were actually trying to accomplish.</p>

          <p>Most small-team managers make the same mistake. Here&rsquo;s what I&rsquo;d do differently.</p>

          <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 24, color: '#2C2C2C', marginTop: 40, marginBottom: 16 }}>
            The trap: output metrics vs. health signals
          </h2>

          <p>There&rsquo;s a meaningful difference between tracking outputs (what your team produced) and tracking signals (what your team is experiencing). Both matter. But most managers default entirely to outputs because they&rsquo;re concrete and easy to count.</p>

          <p>The problem with output-only tracking is that it&rsquo;s a rearview mirror. By the time you see that output dropped last month, you&rsquo;re looking at a problem that was building for four weeks. The cause might be a team member who&rsquo;s been quietly overwhelmed, or a process that&rsquo;s broken, or a priority shift that nobody communicated clearly. Output numbers tell you something happened. They don&rsquo;t tell you why, and they don&rsquo;t tell you in time to do anything useful.</p>

          <p>Leading indicators — signals — are what tell you something is about to happen. And for small teams, leading indicators are almost entirely interpersonal and operational. They come from your 1:1s, your weekly reviews, and paying attention to patterns that don&rsquo;t show up in any spreadsheet.</p>

          <blockquote style={{ borderLeft: '4px solid #C8782A', paddingLeft: 24, margin: '32px 0', fontFamily: 'var(--font-dm-sans)', fontSize: 22, fontStyle: 'italic', color: '#2C2C2C', lineHeight: 1.4 }}>
            &ldquo;If you don&rsquo;t track anything, you&rsquo;re managing on vibes. That works until it doesn&rsquo;t — and when it doesn&rsquo;t, it tends to fail loudly.&rdquo;
          </blockquote>

          <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 24, color: '#2C2C2C', marginTop: 40, marginBottom: 16 }}>
            The five signals worth tracking
          </h2>

          <p>For a team of three to eight people, I&rsquo;d track these five things — and only these five. More than this and you&rsquo;re either managing the metrics instead of the work, or you&rsquo;re creating a surveillance dynamic that poisons the team culture.</p>

          <ol style={{ paddingLeft: 24, margin: '24px 0' }}>
            <li style={{ marginBottom: 20 }}>
              <strong>Work in progress per person.</strong> Not what&rsquo;s assigned — what&rsquo;s actively being worked on right now. If someone has 14 open items and nothing&rsquo;s moving, that&rsquo;s a problem. If someone has 2 items and both are stuck waiting on someone else, that&rsquo;s a different problem. Work in progress is one of the best early signals for whether someone is underwater or underutilized, and it&rsquo;s almost impossible to see if you&rsquo;re not looking. I check this weekly, informally — sometimes just by asking &ldquo;what are you actually working on right now&rdquo; in a 1:1.
            </li>
            <li style={{ marginBottom: 20 }}>
              <strong>Blockers sitting more than 48 hours.</strong> This is the metric I wish I&rsquo;d been watching earlier in my career. A blocker that&rsquo;s been unresolved for two days is usually a sign that either the person doesn&rsquo;t feel comfortable escalating, or they&rsquo;ve tried and nothing happened, or there&rsquo;s a dependency problem nobody&rsquo;s admitted yet. I ask about blockers in every 1:1, not as a box-checking exercise but specifically: &ldquo;Is there anything that&rsquo;s been in your way for more than a couple of days that you haven&rsquo;t been able to clear?&rdquo; That framing surfaces things that &ldquo;any blockers?&rdquo; doesn&rsquo;t.
            </li>
            <li style={{ marginBottom: 20 }}>
              <strong>Completion rate vs. commitments.</strong> Are people finishing what they said they&rsquo;d finish, at roughly the rate they said they&rsquo;d finish it? Not as a performance measurement — as a calibration signal. When someone consistently over-commits and under-delivers, that&rsquo;s usually a problem with estimation or priorities, not effort. When the whole team starts missing commitments at once, something has shifted in the environment: capacity, clarity, or morale. Tracking this over time lets you see the pattern before it becomes a crisis.
            </li>
            <li style={{ marginBottom: 20 }}>
              <strong>Energy and engagement.</strong> This one isn&rsquo;t a metric — it&rsquo;s a read. But it&rsquo;s one of the most important signals you have. Are your 1:1s getting shorter and more surface-level? Is someone who used to bring ideas to team meetings now just nodding along? Are questions that used to get asked in group settings now going unasked? Energy shifts usually precede disengagement by weeks, sometimes months. If you&rsquo;re paying attention, you can have the conversation early. If you&rsquo;re not, you find out when someone hands you a resignation.
            </li>
            <li style={{ marginBottom: 20 }}>
              <strong>Goal alignment — does your team know what matters this quarter?</strong> This sounds obvious. It isn&rsquo;t. I&rsquo;ve done spot checks with teams where I ask each person individually: &ldquo;What are the two or three things that matter most for us to accomplish this quarter?&rdquo; The variance in answers is often stunning. People are working hard — they&rsquo;re just not all working toward the same thing. That&rsquo;s a manager problem, not a team problem. If your team can&rsquo;t articulate the current priorities without hesitation, the priorities aren&rsquo;t clear enough.
            </li>
          </ol>

          <div style={{ background: '#FDF6EE', border: '1px solid #EBD5B8', borderTop: '3px solid #C8782A', borderRadius: 6, padding: '20px 24px', margin: '32px 0' }}>
            <div style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 13, color: '#C8782A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Try this week</div>
            <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: 16, color: '#2C2C2C', lineHeight: 1.6, margin: 0 }}>In your next round of 1:1s, ask each person: &ldquo;What&rsquo;s slowing you down right now that I probably don&rsquo;t know about?&rdquo; That phrasing is different from &ldquo;any blockers?&rdquo; — it acknowledges that you might not have visibility, which makes people more likely to actually tell you.</p>
          </div>

          <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 24, color: '#2C2C2C', marginTop: 40, marginBottom: 16 }}>
            What to stop tracking
          </h2>

          <p>Just as important as what to track is what to let go of. There are metrics that feel useful and aren&rsquo;t. Hours worked. Meeting attendance. Slack response times. Lines of code. Tasks opened. These are activity metrics — they measure presence and motion, not outcomes and health.</p>

          <p>Tracking activity at the individual level creates a surveillance dynamic, and surveillance culture poisons teams quickly. People start managing their metrics instead of their work. They spend time on things that look productive rather than things that are productive. You get compliance instead of commitment, and you spend more of your time auditing than managing.</p>

          <p>The other thing to stop tracking: anything you look at every week but never act on. If a number changes and it doesn&rsquo;t change anything you do, you&rsquo;re not tracking a signal — you&rsquo;re collecting data for its own sake. Audit your tracking quarterly. Kill what you don&rsquo;t use.</p>

          <blockquote style={{ borderLeft: '4px solid #C8782A', paddingLeft: 24, margin: '32px 0', fontFamily: 'var(--font-dm-sans)', fontSize: 22, fontStyle: 'italic', color: '#2C2C2C', lineHeight: 1.4 }}>
            &ldquo;The best signal is often the one that doesn&rsquo;t show up in any dashboard. It&rsquo;s a shift in tone, a change in how someone carries themselves in a meeting, a question that used to get asked that suddenly isn&rsquo;t.&rdquo;
          </blockquote>

          <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 24, color: '#2C2C2C', marginTop: 40, marginBottom: 16 }}>
            The 15-minute weekly review
          </h2>

          <p>Once a week — I do this Friday afternoons — I spend 15 minutes looking at my team with a specific set of questions. Not checking dashboards. Not reviewing task boards. Just thinking:</p>

          <ul style={{ paddingLeft: 24, margin: '24px 0' }}>
            <li style={{ marginBottom: 12 }}>Who had a good week? Who had a hard one?</li>
            <li style={{ marginBottom: 12 }}>Is anything at risk of slipping that I haven&rsquo;t addressed?</li>
            <li style={{ marginBottom: 12 }}>Is anyone carrying significantly more or less than the others right now?</li>
            <li style={{ marginBottom: 12 }}>Are we working on the right things, or are we busy with things that won&rsquo;t matter in three months?</li>
            <li style={{ marginBottom: 12 }}>What conversation am I avoiding that I should have next week?</li>
          </ul>

          <p>That last question is the one that produces the most value. There&rsquo;s almost always a conversation I&rsquo;ve been putting off — feedback I&rsquo;ve been softening, a concern I&rsquo;ve been watching but not naming, a priority conflict I&rsquo;ve been hoping would resolve itself. The weekly review forces me to surface it and decide: am I having this conversation next week, or am I choosing to let it sit?</p>

          <div style={{ background: '#FDF6EE', border: '1px solid #EBD5B8', borderTop: '3px solid #C8782A', borderRadius: 6, padding: '20px 24px', margin: '32px 0' }}>
            <div style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 13, color: '#C8782A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>The real question</div>
            <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: 16, color: '#2C2C2C', lineHeight: 1.6, margin: 0 }}>If you were building a dashboard for your own team from scratch — not what your company asks you to report on, but what you&rsquo;d actually want to see — what would it show? That&rsquo;s probably a better starting point than whatever tool you were handed.</p>
          </div>

          <p>I built Cadence with this in mind: a place where small-team managers can see the signals that matter without building the tracking system themselves. The goal isn&rsquo;t a comprehensive view of everything — it&rsquo;s a clear answer to &ldquo;is my team healthy right now?&rdquo; If you&rsquo;re managing a small team and still don&rsquo;t have a good answer to that question, start with five minutes of honest reflection before your next 1:1 cycle. That alone will tell you more than most dashboards will.</p>

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
          <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 24, color: 'white', marginBottom: 12 }}>Track the signals that actually matter.</h3>
          <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 24 }}>Cadence gives you team visibility, goal tracking, and 1:1 insights — without the overhead of building a system from scratch. 14-day free trial.</p>
          <a href="https://app.cadencehq.co/signup" style={{ display: 'inline-block', background: 'white', color: '#C8782A', fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 15, padding: '12px 28px', borderRadius: 4, textDecoration: 'none' }}>Get started free</a>
        </div>
      </article>
    </div>
  )
}
