import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cadence — Management tool for first-time managers',
  description: 'Cadence helps new managers run better 1:1s, track delegation, and keep their team in rhythm. Simple. For teams of 3–8. Free while in beta.',
}

export default function Home() {
  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────── */}
      <section
        className="hero-dots relative overflow-hidden"
        style={{ background: '#1C2B3A', minHeight: '88vh' }}
      >
        <div className="max-w-6xl mx-auto px-6 py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left */}
          <div className="flex-1 max-w-xl">
            {/* Beta pill */}
            <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border text-xs font-medium"
              style={{ borderColor: 'rgba(122,158,130,0.5)', color: '#7A9E82', background: 'rgba(122,158,130,0.08)' }}>
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#7A9E82' }} />
              Now in beta
            </div>

            <h1
              className="mb-6 leading-tight"
              style={{
                fontFamily: 'var(--font-montserrat)',
                fontWeight: 300,
                fontSize: 'clamp(52px, 6vw, 72px)',
                color: 'white',
                letterSpacing: '-0.02em',
              }}
            >
              Management<br />in rhythm.
            </h1>

            <p className="mb-10 leading-relaxed" style={{ fontSize: 20, color: 'rgba(255,255,255,0.70)', fontFamily: 'var(--font-dm-sans)' }}>
              For first-time managers who want a real system — not another meeting, doc, or guess.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="https://app.cadencehq.co/signup"
                className="btn-sage inline-flex items-center justify-center px-7 py-3.5 rounded text-base font-medium"
                style={{ fontFamily: 'var(--font-dm-sans)' }}
              >
                Try Cadence free — no credit card
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center gap-1.5 py-3.5 text-base font-medium transition-opacity hover:opacity-70"
                style={{ color: '#7A9E82', fontFamily: 'var(--font-dm-sans)' }}
              >
                See how it works →
              </Link>
            </div>

            <p className="mt-4 text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-dm-sans)' }}>
              No credit card required. No commitment.
            </p>
          </div>

          {/* Right — Product mockup */}
          <div className="flex-1 flex justify-center lg:justify-end w-full max-w-md">
            <div
              className="w-full rounded-xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                animation: 'float 4s ease-in-out infinite',
                maxWidth: 400,
              }}
            >
              {/* Browser chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3" style={{ background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.2)' }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.2)' }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.2)' }} />
              </div>

              {/* App content */}
              <div className="p-5 space-y-4" style={{ background: '#F5F0E8' }}>

                {/* 1:1 card */}
                <div className="bg-white rounded p-4" style={{ border: '1px solid #E0DDD8', borderLeft: '3px solid #7A9E82' }}>
                  <div className="text-xs font-medium mb-1" style={{ color: '#8A96A0', fontFamily: 'var(--font-dm-sans)' }}>NEXT 1:1</div>
                  <div className="font-medium text-sm" style={{ color: '#1C2B3A', fontFamily: 'var(--font-montserrat)' }}>Alex Chen</div>
                  <div className="text-xs mt-0.5" style={{ color: '#8A96A0', fontFamily: 'var(--font-dm-sans)' }}>Tomorrow · 10:00 AM</div>
                </div>

                {/* Task items */}
                <div className="bg-white rounded p-4 space-y-3" style={{ border: '1px solid #E0DDD8' }}>
                  <div className="text-xs font-medium mb-2" style={{ color: '#8A96A0', fontFamily: 'var(--font-dm-sans)' }}>OPEN TASKS</div>
                  {[
                    { label: 'Q2 goal review with Jordan', done: true },
                    { label: 'Share onboarding doc with Marcus', done: false },
                    { label: "Review Tyler's project proposal", done: false },
                  ].map((task) => (
                    <div key={task.label} className="flex items-center gap-2.5">
                      <div
                        className="w-4 h-4 rounded flex-shrink-0 flex items-center justify-center"
                        style={{
                          border: task.done ? 'none' : '1.5px solid #E0DDD8',
                          background: task.done ? '#7A9E82' : 'white',
                        }}
                      >
                        {task.done && (
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                      <span
                        className="text-xs"
                        style={{
                          color: task.done ? '#8A96A0' : '#1C2B3A',
                          textDecoration: task.done ? 'line-through' : 'none',
                          fontFamily: 'var(--font-dm-sans)',
                        }}
                      >
                        {task.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Team avatars */}
                <div className="bg-white rounded p-4" style={{ border: '1px solid #E0DDD8' }}>
                  <div className="text-xs font-medium mb-3" style={{ color: '#8A96A0', fontFamily: 'var(--font-dm-sans)' }}>YOUR TEAM</div>
                  <div className="flex items-center gap-2">
                    {[
                      { initials: 'AC', bg: '#7A9E82' },
                      { initials: 'JR', bg: '#8A96A0' },
                      { initials: 'MT', bg: '#1C2B3A' },
                      { initials: 'TL', bg: '#C2604A' },
                    ].map((member) => (
                      <div
                        key={member.initials}
                        className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium text-white flex-shrink-0"
                        style={{ background: member.bg, fontFamily: 'var(--font-dm-sans)' }}
                      >
                        {member.initials}
                      </div>
                    ))}
                    <span className="text-xs ml-1" style={{ color: '#8A96A0', fontFamily: 'var(--font-dm-sans)' }}>4 direct reports</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROBLEM ──────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-2xl mx-auto px-6 text-center reveal">
          <div className="text-xs font-semibold tracking-widest mb-6 uppercase" style={{ color: '#7A9E82', fontFamily: 'var(--font-dm-sans)' }}>
            Sound familiar?
          </div>
          <h2
            className="mb-8"
            style={{
              fontFamily: 'var(--font-montserrat)',
              fontWeight: 500,
              fontSize: 'clamp(32px, 4vw, 48px)',
              color: '#1C2B3A',
              lineHeight: 1.2,
            }}
          >
            The promotion nobody prepares you for.
          </h2>
          <div className="space-y-4 text-left" style={{ color: '#1C2B3A', opacity: 0.7, fontSize: 18, lineHeight: 1.75, fontFamily: 'var(--font-dm-sans)' }}>
            <p>You were great at the job. So they made you manage the people who do your old job.</p>
            <p>Nobody handed you a system. Nobody told you what &ldquo;being a manager&rdquo; actually means in practice. You&rsquo;re running things in your head, in a doc that&rsquo;s a mess, or in too many Slack threads to count.</p>
            <p>That&rsquo;s the job right now. Cadence is built to help you do it better.</p>
          </div>
        </div>
      </section>

      {/* ─── FEATURES STRIP ───────────────────────────────── */}
      <section style={{ background: '#F5F0E8' }} className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-center mb-14 reveal"
            style={{
              fontFamily: 'var(--font-montserrat)',
              fontWeight: 500,
              fontSize: 'clamp(26px, 3vw, 36px)',
              color: '#1C2B3A',
            }}
          >
            Everything you need. Nothing you don&rsquo;t.
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                name: '1:1s that run themselves',
                desc: 'A standing agenda for every direct report. Context, real talk, next actions — in 30 minutes.',
              },
              {
                name: 'Tasks that stay visible',
                desc: "Track what you've delegated and what's actually moving. No more chasing status in Slack.",
              },
              {
                name: 'A team dashboard that tells you the truth',
                desc: "Know who's on track, who's overloaded, and who needs a conversation — before it becomes a problem.",
              },
            ].map((f, i) => (
              <div
                key={f.name}
                className={`feature-card bg-white p-8 reveal reveal-delay-${i + 1}`}
                style={{
                  border: '1px solid #E0DDD8',
                  borderRadius: 2,
                  borderLeft: '3px solid #7A9E82',
                }}
              >
                <h3
                  className="mb-3"
                  style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 17, color: '#1C2B3A' }}
                >
                  {f.name}
                </h3>
                <p style={{ fontFamily: 'var(--font-dm-sans)', color: '#8A96A0', fontSize: 15, lineHeight: 1.7 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO IT'S FOR ─────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left */}
            <div className="flex-1 reveal">
              <h2
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-montserrat)',
                  fontWeight: 500,
                  fontSize: 'clamp(28px, 3.5vw, 42px)',
                  color: '#1C2B3A',
                  lineHeight: 1.2,
                }}
              >
                Built for one kind of manager.
              </h2>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 17, color: 'rgba(28,43,58,0.7)', lineHeight: 1.75 }}>
                This isn&rsquo;t Lattice. It&rsquo;s not a performance management suite. It&rsquo;s a rhythm you can actually keep.
              </p>
            </div>
            {/* Right */}
            <div className="flex-1 reveal reveal-delay-1">
              <ul className="space-y-4">
                {[
                  'You have 3–8 direct reports',
                  'You were promoted from IC in the last year or two',
                  "You're still figuring out what the job actually requires",
                  'You want a system that fits the way you work, not an HR platform built for Fortune 500',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="flex-shrink-0 mt-1" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <circle cx="9" cy="9" r="9" fill="#7A9E82" fillOpacity="0.15" />
                      <path d="M5.5 9L7.8 11.5L12.5 6.5" stroke="#7A9E82" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 16, color: '#1C2B3A', lineHeight: 1.6 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRICING TEASER ───────────────────────────────── */}
      <section style={{ background: '#1C2B3A' }} className="py-24">
        <div className="max-w-md mx-auto px-6 reveal">
          <div className="bg-white p-10 rounded-sm text-center" style={{ border: '1px solid #E0DDD8', borderRadius: 2 }}>
            <div
              className="inline-block mb-5 px-3 py-1 text-xs font-semibold rounded-full"
              style={{ background: 'rgba(122,158,130,0.12)', color: '#7A9E82', fontFamily: 'var(--font-dm-sans)' }}
            >
              Free while in beta
            </div>
            <div
              className="mb-1"
              style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 48, color: '#1C2B3A', lineHeight: 1 }}
            >
              $10
            </div>
            <div className="mb-8 text-sm" style={{ color: '#8A96A0', fontFamily: 'var(--font-dm-sans)' }}>
              per manager / month when billing goes live
            </div>
            <Link
              href="https://app.cadencehq.co/signup"
              className="btn-sage block w-full py-3.5 rounded text-sm font-medium text-center"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Try Cadence free
            </Link>
            <p className="mt-3 text-xs" style={{ color: '#8A96A0', fontFamily: 'var(--font-dm-sans)' }}>
              No credit card required during beta.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CLOSING CTA ──────────────────────────────────── */}
      <section style={{ background: '#7A9E82' }} className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center reveal">
          <h2
            className="mb-4"
            style={{
              fontFamily: 'var(--font-montserrat)',
              fontWeight: 500,
              fontSize: 'clamp(28px, 3.5vw, 42px)',
              color: 'white',
              lineHeight: 1.2,
            }}
          >
            Give it a try.
          </h2>
          <p className="mb-10 text-lg" style={{ color: 'rgba(255,255,255,0.80)', fontFamily: 'var(--font-dm-sans)' }}>
            Free while in beta. Takes 3 minutes to set up. No credit card.
          </p>
          <Link
            href="https://app.cadencehq.co/signup"
            className="btn-white-navy inline-flex items-center justify-center px-8 py-4 rounded text-base font-medium"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            Try Cadence free
          </Link>
        </div>
      </section>
    </>
  )
}
