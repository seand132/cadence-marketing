import type { Metadata } from 'next'
import Link from 'next/link'
import { RhythmMotif } from '@/components/RhythmMotif'

export const metadata: Metadata = {
  title: 'Cadence — Management tool for first-time managers',
  description: 'Cadence helps new managers run better 1:1s, track delegation, and keep their team in rhythm. Simple. For teams of 3–8. 14-day free trial.',
}

export default function Home() {
  return (
    <>
      {/* ─── SECTION 1: HERO ──────────────────────────────────── */}
      <section style={{ background: '#F5F0E8', position: 'relative', overflow: 'hidden' }} className="py-24">
        {/* Rhythm motif decorative background — right edge */}
        <div style={{ position: 'absolute', right: 40, top: '50%', transform: 'translateY(-50%)', display: 'flex', gap: 16, pointerEvents: 'none', zIndex: 0 }}>
          <RhythmMotif size="lg" opacity={0.08} color="#C8782A" />
          <div style={{ marginTop: 48 }}><RhythmMotif size="lg" opacity={0.06} color="#3A7D7B" /></div>
          <RhythmMotif size="lg" opacity={0.05} color="#7B8F6A" />
        </div>

        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16" style={{ position: 'relative', zIndex: 1 }}>

          {/* Left */}
          <div className="flex-1 max-w-xl">
            {/* Badge */}
            <div
              className="inline-flex mb-6 px-3 py-1 rounded-full uppercase"
              style={{
                background: '#FDF6EE',
                color: '#C8782A',
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 600,
                fontSize: 11,
                letterSpacing: '0.1em',
              }}
            >
              Management in Rhythm
            </div>

            <h1
              className="mb-5 leading-tight"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 700,
                fontSize: 52,
                color: '#2C2C2C',
              }}
            >
              The promotion nobody prepares you for.
            </h1>

            <p
              className="mb-8"
              style={{
                fontFamily: 'var(--font-source-sans)',
                fontSize: 19,
                color: '#9C968B',
                lineHeight: 1.6,
              }}
            >
              Cadence gives first-time managers a real system — not another meeting, doc, or guess.
            </p>

            <Link
              href="https://app.cadencehq.co/signup"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90"
              style={{
                background: '#C8782A',
                borderRadius: 4,
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 600,
              }}
            >
              Start free — 14 days
            </Link>

            <p
              className="mt-3"
              style={{ fontFamily: 'var(--font-source-sans)', fontSize: 13, color: '#9C968B' }}
            >
              No credit card required.
            </p>
          </div>

          {/* Right — Enhanced Product Mockup */}
          <div className="flex-1 flex justify-center lg:justify-end w-full">
            <div
              style={{
                background: 'white',
                borderRadius: 8,
                border: '1px solid #D0CAC0',
                boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
                maxWidth: 400,
                width: '100%',
                animation: 'float 4s ease-in-out infinite',
                overflow: 'hidden',
              }}
            >
              {/* Amber accent strip */}
              <div style={{ height: 6, background: '#C8782A' }} />

              {/* App chrome — mini sidebar + content */}
              <div style={{ display: 'flex', height: 260 }}>
                {/* Mini sidebar */}
                <div style={{ width: 48, background: '#F5F0E8', borderRight: '1px solid #D0CAC0', padding: '12px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
                  {/* Dashboard icon - active (amber) */}
                  <svg width="18" height="18" fill="none" stroke="#C8782A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="18" rx="4"/>
                    <polyline points="5,13 7.5,13 9.5,8 12,17 14.5,7 16.5,13 19,13"/>
                  </svg>
                  {/* Tasks icon - inactive */}
                  <svg width="18" height="18" fill="none" stroke="#9C968B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="4" y="2" width="16" height="20" rx="3"/>
                    <path d="M8.5 9.5l2 2 4-4.5"/>
                    <line x1="8.5" y1="15" x2="15.5" y2="15"/>
                    <line x1="8.5" y1="18.5" x2="13" y2="18.5"/>
                  </svg>
                  {/* 1:1 icon */}
                  <svg width="18" height="18" fill="none" stroke="#9C968B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <circle cx="8" cy="6.5" r="3"/>
                    <circle cx="16" cy="6.5" r="3"/>
                    <path d="M3 21c0-3.5 2-6.5 5-6.5h8c3 0 5 3 5 6.5"/>
                  </svg>
                  {/* KPIs icon */}
                  <svg width="18" height="18" fill="none" stroke="#9C968B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M5 16.5A8.5 8.5 0 0119 16.5"/>
                    <line x1="12" y1="16.5" x2="15.5" y2="10.5"/>
                    <circle cx="12" cy="16.5" r="1.5" fill="#9C968B" stroke="none"/>
                    <line x1="3" y1="20" x2="21" y2="20"/>
                  </svg>
                </div>

                {/* Main content area */}
                <div style={{ flex: 1, padding: '12px 14px', overflowY: 'hidden' }}>
                  {/* Page title */}
                  <div style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 13, color: '#2C2C2C', marginBottom: 10 }}>Dashboard</div>

                  {/* Stat cards row */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 10 }}>
                    {[
                      { label: 'Active Tasks', value: '12', color: '#C8782A' },
                      { label: 'Upcoming 1:1s', value: '3', color: '#3A7D7B' },
                    ].map(stat => (
                      <div key={stat.label} style={{ background: '#F5F0E8', borderRadius: 6, border: '1px solid #D0CAC0', padding: '6px 8px' }}>
                        <div style={{ fontSize: 16, fontWeight: 700, color: stat.color, fontFamily: 'var(--font-dm-sans)' }}>{stat.value}</div>
                        <div style={{ fontSize: 9, color: '#9C968B', fontFamily: 'var(--font-dm-sans)', fontWeight: 500 }}>{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Recent 1:1 */}
                  <div style={{ background: 'white', borderRadius: 6, border: '1px solid #D0CAC0', padding: '8px 10px', marginBottom: 6 }}>
                    <div style={{ fontSize: 9, fontWeight: 600, color: '#9C968B', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-dm-sans)', marginBottom: 4 }}>NEXT 1:1</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#FDF6EE', color: '#C8782A', fontSize: 9, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-dm-sans)', flexShrink: 0 }}>AC</div>
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 600, color: '#2C2C2C', fontFamily: 'var(--font-dm-sans)' }}>Alex Chen</div>
                        <div style={{ fontSize: 9, color: '#9C968B', fontFamily: 'var(--font-source-sans)' }}>Tomorrow · 10:00 AM</div>
                      </div>
                      <div style={{ marginLeft: 'auto', fontSize: 9, fontWeight: 600, color: '#3A7D7B', fontFamily: 'var(--font-dm-sans)', background: '#EDF2EA', padding: '2px 6px', borderRadius: 10 }}>Scheduled</div>
                    </div>
                  </div>

                  {/* Task list */}
                  <div>
                    {[
                      { text: 'Review Q2 goals with Jordan', done: true },
                      { text: 'Share onboarding doc → Marcus', done: false },
                      { text: 'Tyler project proposal feedback', done: false },
                    ].map((task, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '4px 0', borderBottom: i < 2 ? '1px solid #F0EDE8' : 'none' }}>
                        <div style={{ width: 13, height: 13, borderRadius: 3, border: `1.5px solid ${task.done ? '#C8782A' : '#D0CAC0'}`, background: task.done ? '#C8782A' : 'white', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {task.done && <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                        </div>
                        <span style={{ fontSize: 10, color: task.done ? '#9C968B' : '#2C2C2C', textDecoration: task.done ? 'line-through' : 'none', fontFamily: 'var(--font-source-sans)' }}>{task.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── SOCIAL PROOF STRIP ──────────────────────────────── */}
      <section style={{ background: 'white', borderTop: '1px solid #D0CAC0', borderBottom: '1px solid #D0CAC0', padding: '20px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
          <span style={{ fontSize: 13, color: '#9C968B', fontFamily: 'var(--font-dm-sans)', fontWeight: 500 }}>Managers keeping their teams in rhythm</span>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            {[
              { initials: 'SR', name: 'Sarah R.', bg: '#FDF6EE', color: '#C8782A' },
              { initials: 'MJ', name: 'Marcus J.', bg: '#EDF2EA', color: '#7B8F6A' },
              { initials: 'KL', name: 'Kim L.', bg: '#E8F4F3', color: '#3A7D7B' },
              { initials: 'DP', name: 'Diego P.', bg: '#FDF6EE', color: '#C8782A' },
              { initials: 'AN', name: 'Aisha N.', bg: '#EDF2EA', color: '#7B8F6A' },
            ].map(p => (
              <div
                key={p.initials}
                title={p.name}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: p.bg,
                  color: p.color,
                  fontSize: 12,
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-dm-sans)',
                  border: '2px solid white',
                  boxShadow: '0 0 0 1px #D0CAC0',
                  marginLeft: -8,
                  cursor: 'default',
                }}
              >
                {p.initials}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: PROBLEM ───────────────────────────────── */}
      <section style={{ background: 'white' }} className="py-20">
        <div className="max-w-2xl mx-auto px-6 text-center reveal">
          <div
            className="mb-4 uppercase"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 600,
              fontSize: 11,
              color: '#C8782A',
              letterSpacing: '0.1em',
            }}
          >
            Sound Familiar?
          </div>
          <h2
            className="mb-6"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 700,
              fontSize: 40,
              color: '#2C2C2C',
              lineHeight: 1.2,
            }}
          >
            The promotion nobody prepares you for.
          </h2>
          <div
            className="space-y-4"
            style={{ fontFamily: 'var(--font-source-sans)', fontSize: 17, color: '#9C968B', lineHeight: 1.7 }}
          >
            <p>
              You were great at the job. So they made you manage the people who do your old job.
            </p>
            <p>
              Nobody handed you a system. Nobody told you what &ldquo;being a manager&rdquo; actually means in practice.
              You&rsquo;re running things in your head, in a doc that&rsquo;s a mess, or in too many Slack threads to count.
            </p>
            <p>
              That&rsquo;s the job right now. Cadence is built to help you do it better.
            </p>
          </div>
        </div>
      </section>

      {/* ─── RHYTHM DIVIDER ───────────────────────────────────── */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 12, padding: '8px 0', background: 'white' }}>
        {['#3A7D7B', '#C8782A', '#7B8F6A', '#3A7D7B', '#C8782A', '#7B8F6A'].map((color, i) => (
          <RhythmMotif key={i} size="sm" color={color} opacity={0.12} />
        ))}
      </div>

      {/* ─── SECTION 3: FEATURES ──────────────────────────────── */}
      <section style={{ background: '#F5F0E8' }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-center mb-12 reveal"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 700,
              fontSize: 36,
              color: '#2C2C2C',
            }}
          >
            Simple tools. Steady habits. Stronger teams.
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                strip: '#C8782A',
                title: '1:1s that run themselves',
                body: 'A standing agenda for every direct report. Context, real talk, next actions — in 30 minutes.',
              },
              {
                strip: '#3A7D7B',
                title: 'Tasks that stay visible',
                body: "Track what you've delegated and what's actually moving. No more chasing status in Slack.",
              },
              {
                strip: '#7B8F6A',
                title: 'A team dashboard that tells you the truth',
                body: "Know who's on track, who's overloaded, and who needs a conversation — before it becomes a problem.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="feature-card bg-white reveal"
                style={{
                  borderRadius: 8,
                  border: '1px solid #D0CAC0',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                  overflow: 'hidden',
                }}
              >
                {/* Colored top strip */}
                <div style={{ height: 6, background: f.strip }} />
                <div className="p-6">
                  <h3
                    className="mb-2"
                    style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 16, color: '#2C2C2C' }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-source-sans)',
                      fontSize: 15,
                      color: '#9C968B',
                      lineHeight: 1.6,
                    }}
                  >
                    {f.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RHYTHM DIVIDER ───────────────────────────────────── */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 12, padding: '8px 0', background: '#EBE6DD' }}>
        {['#C8782A', '#7B8F6A', '#3A7D7B', '#C8782A', '#7B8F6A', '#3A7D7B'].map((color, i) => (
          <RhythmMotif key={i} size="sm" color={color} opacity={0.12} />
        ))}
      </div>

      {/* ─── SECTION 4: WHO IT'S FOR ──────────────────────────── */}
      <section style={{ background: '#EBE6DD' }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 reveal">
              <h2
                className="mb-4"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontWeight: 700,
                  fontSize: 36,
                  color: '#2C2C2C',
                  lineHeight: 1.2,
                }}
              >
                Built for one kind of manager.
              </h2>
              <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: 17, color: '#9C968B', lineHeight: 1.7 }}>
                This isn&rsquo;t Lattice. It&rsquo;s not a performance management suite. It&rsquo;s a rhythm you can actually keep.
              </p>
            </div>
            <div className="flex-1 reveal">
              <ul className="space-y-4">
                {[
                  'You have 3–8 direct reports',
                  'You were promoted from IC in the last year or two',
                  "You're still figuring out what the job actually requires",
                  'You want a system that fits the way you work, not an HR platform built for Fortune 500',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="flex-shrink-0 mt-1" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <circle cx="9" cy="9" r="9" fill="#C8782A" fillOpacity="0.15" />
                      <path d="M5.5 9L7.8 11.5L12.5 6.5" stroke="#C8782A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ fontFamily: 'var(--font-source-sans)', fontSize: 16, color: '#2C2C2C', lineHeight: 1.6 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: PRICING TEASER ────────────────────────── */}
      <section style={{ background: '#F5F0E8', position: 'relative', overflow: 'hidden' }} className="py-20">
        {/* Background motif */}
        <div style={{ position: 'absolute', right: 60, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', opacity: 0.6 }}>
          <RhythmMotif size="md" color="#C8782A" opacity={0.08} />
        </div>
        <div className="max-w-sm mx-auto px-6 reveal" style={{ position: 'relative', zIndex: 1 }}>
          <div
            className="bg-white text-center"
            style={{
              borderRadius: 8,
              border: '1px solid #D0CAC0',
              boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
              overflow: 'hidden',
            }}
          >
            {/* Amber top strip */}
            <div style={{ height: 6, background: '#C8782A' }} />
            <div className="p-8">
              <div
                className="mb-1"
                style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 40, color: '#2C2C2C', lineHeight: 1 }}
              >
                $10 / month
              </div>
              <div
                className="inline-flex items-center px-3 py-1 rounded-full mb-6"
                style={{
                  background: '#FDF6EE',
                  color: '#C8782A',
                  fontFamily: 'var(--font-dm-sans)',
                  fontWeight: 600,
                  fontSize: 12,
                }}
              >
                14-day free trial
              </div>
              <Link
                href="https://app.cadencehq.co/signup"
                className="block w-full py-3 text-sm font-semibold text-white text-center transition-opacity hover:opacity-90"
                style={{
                  background: '#C8782A',
                  borderRadius: 4,
                  fontFamily: 'var(--font-dm-sans)',
                  fontWeight: 600,
                }}
              >
                Start free — 14 days
              </Link>
              <p
                className="mt-3 text-xs"
                style={{ color: '#9C968B', fontFamily: 'var(--font-source-sans)' }}
              >
                No credit card required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: CLOSING CTA ───────────────────────────── */}
      <section style={{ background: '#C8782A' }} className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center reveal">
          <h2
            className="mb-4"
            style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 40, color: 'white', lineHeight: 1.2 }}
          >
            Give it a try.
          </h2>
          <p
            className="mb-10"
            style={{ fontFamily: 'var(--font-source-sans)', fontSize: 18, color: 'rgba(255,255,255,0.80)' }}
          >
            14-day free trial. Takes 3 minutes to set up. No credit card.
          </p>
          <Link
            href="https://app.cadencehq.co/signup"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold transition-opacity hover:opacity-90"
            style={{
              background: 'white',
              color: '#C8782A',
              borderRadius: 4,
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 600,
            }}
          >
            Try Cadence free
          </Link>
        </div>
      </section>
    </>
  )
}
