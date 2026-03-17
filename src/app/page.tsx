import type { Metadata } from 'next'
import Link from 'next/link'
import { RhythmMotif } from '@/components/RhythmMotif'

export const metadata: Metadata = {
  title: 'Cadence — Management tool for first-time managers',
  description: 'Cadence helps new managers run better 1:1s, track delegation, and keep their team in rhythm. Simple. For teams of 3–8. 14-day free trial.',
}

const PEOPLE = {
  sarah: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=96&h=96&q=80',
  marcus: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=96&h=96&q=80',
  kim: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=96&h=96&q=80',
  diego: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=96&h=96&q=80',
  aisha: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=96&h=96&q=80',
}

export default function Home() {
  return (
    <>
      {/* ─── SECTION 1: HERO ──────────────────────────────────── */}
      <section style={{ background: '#F5F0E8', position: 'relative', overflow: 'hidden' }} className="py-24">
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `}</style>

        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16" style={{ position: 'relative', zIndex: 1 }}>

          {/* Left */}
          <div className="flex-1 max-w-xl">
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

          {/* Right — Full browser mockup matching real Cadence dashboard */}
          <div className="flex-1 flex justify-center lg:justify-end w-full">
            {/* Browser chrome */}
            <div style={{
              borderRadius: 12,
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
              border: '1px solid #D0CAC0',
              maxWidth: 520,
              width: '100%',
              animation: 'float 4s ease-in-out infinite'
            }}>
              {/* Browser bar */}
              <div style={{ background: '#EBE6DD', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid #D0CAC0' }}>
                <div style={{ display: 'flex', gap: 6 }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#C2604A', opacity: 0.7 }}/>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#C8782A', opacity: 0.7 }}/>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#7B8F6A', opacity: 0.7 }}/>
                </div>
                <div style={{ flex: 1, background: 'white', borderRadius: 4, padding: '3px 10px', fontSize: 11, color: '#9C968B', fontFamily: 'var(--font-dm-sans)' }}>app.cadencehq.co</div>
              </div>

              {/* App chrome */}
              <div style={{ display: 'flex', background: '#F5F0E8', height: 360 }}>

                {/* Sidebar */}
                <div style={{ width: 52, background: '#F5F0E8', borderRight: '1px solid #D0CAC0', padding: '16px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
                  {/* Logo mark */}
                  <img src="/brand/cadence-mark.svg" width="20" height="20" alt="" />
                  {/* Dashboard — active */}
                  <svg width="18" height="18" fill="none" stroke="#C8782A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="18" rx="4"/><polyline points="5,13 7.5,13 9.5,8 12,17 14.5,7 16.5,13 19,13"/></svg>
                  {/* Tasks */}
                  <svg width="18" height="18" fill="none" stroke="#9C968B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="3"/><path d="M8.5 9.5l2 2 4-4.5"/><line x1="8.5" y1="15" x2="15.5" y2="15"/></svg>
                  {/* 1:1s */}
                  <svg width="18" height="18" fill="none" stroke="#9C968B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="8" cy="6.5" r="3"/><circle cx="16" cy="6.5" r="3"/><path d="M3 21c0-3.5 2-6.5 5-6.5h8c3 0 5 3 5 6.5"/></svg>
                  {/* KPIs */}
                  <svg width="18" height="18" fill="none" stroke="#9C968B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 16.5A8.5 8.5 0 0119 16.5"/><line x1="12" y1="16.5" x2="15.5" y2="10.5"/><circle cx="12" cy="16.5" r="1.5" fill="#9C968B" stroke="none"/><line x1="3" y1="20" x2="21" y2="20"/></svg>
                  {/* Team */}
                  <svg width="18" height="18" fill="none" stroke="#9C968B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="5" r="3"/><line x1="12" y1="8" x2="12" y2="11"/><line x1="6" y1="11" x2="18" y2="11"/><line x1="6" y1="11" x2="6" y2="14"/><line x1="18" y1="11" x2="18" y2="14"/><circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/></svg>
                </div>

                {/* Main content */}
                <div style={{ flex: 1, overflowY: 'hidden', padding: 0 }}>

                  {/* Greeting header — amber with wave motif (variant 1 from real app) */}
                  <div style={{ background: '#C8782A', padding: '14px 16px', position: 'relative', overflow: 'hidden' }}>
                    <svg style={{ position: 'absolute', right: 0, top: 0, height: '100%', width: '50%', opacity: 0.3 }} viewBox="0 0 300 80" preserveAspectRatio="none" fill="none">
                      <path d="M0 14 Q37 2 75 14 Q112 26 150 14 Q187 2 225 14 Q262 26 300 14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                      <path d="M0 32 Q37 20 75 32 Q112 44 150 32 Q187 20 225 32 Q262 44 300 32" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                      <path d="M0 50 Q37 38 75 50 Q112 62 150 50 Q187 38 225 50 Q262 62 300 50" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.7)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'var(--font-dm-sans)' }}>Good morning</div>
                        <div style={{ fontSize: 15, fontWeight: 700, color: 'white', fontFamily: 'var(--font-dm-sans)' }}>Sarah <span style={{ color: 'rgba(255,255,255,0.5)' }}>✦</span></div>
                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-source-sans)' }}>3 upcoming 1:1s this week.</div>
                      </div>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={PEOPLE.sarah} width="32" height="32" style={{ borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.4)', flexShrink: 0 }} alt="Sarah" />
                    </div>
                  </div>

                  <div style={{ padding: '12px 14px', overflowY: 'auto', maxHeight: 290 }}>

                    {/* Stat cards — 2x2 grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 12 }}>
                      {/* Active Tasks - amber */}
                      <div style={{ background: '#FDF6EE', borderRadius: 10, padding: '8px 10px', position: 'relative', overflow: 'hidden' }}>
                        <svg style={{ position: 'absolute', bottom: 0, right: 0 }} width="36" height="30" viewBox="0 0 56 48" fill="#FAE8D0">
                          <rect x="0" y="32" width="7" height="16" rx="2"/><rect x="11" y="22" width="7" height="26" rx="2"/><rect x="22" y="13" width="7" height="35" rx="2"/><rect x="33" y="5" width="7" height="43" rx="2"/><rect x="44" y="0" width="7" height="48" rx="2"/>
                        </svg>
                        <div style={{ width: 20, height: 20, borderRadius: 6, background: '#FAE8D0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 4 }}>
                          <svg width="11" height="11" fill="none" stroke="#C8782A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                        </div>
                        <div style={{ fontSize: 18, fontWeight: 700, color: '#A86022', lineHeight: 1, fontFamily: 'var(--font-dm-sans)' }}>12</div>
                        <div style={{ fontSize: 9, color: '#9C968B', fontWeight: 500, fontFamily: 'var(--font-dm-sans)' }}>Active Tasks</div>
                      </div>
                      {/* Overdue - terracotta */}
                      <div style={{ background: '#FAEAE7', borderRadius: 10, padding: '8px 10px' }}>
                        <div style={{ width: 20, height: 20, borderRadius: 6, background: '#F5D5CF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 4 }}>
                          <svg width="11" height="11" fill="none" stroke="#C2604A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                        </div>
                        <div style={{ fontSize: 18, fontWeight: 700, color: '#C2604A', lineHeight: 1, fontFamily: 'var(--font-dm-sans)' }}>2</div>
                        <div style={{ fontSize: 9, color: '#9C968B', fontWeight: 500, fontFamily: 'var(--font-dm-sans)' }}>Overdue</div>
                      </div>
                      {/* Due This Week - surface */}
                      <div style={{ background: '#EBE6DD', borderRadius: 10, padding: '8px 10px' }}>
                        <div style={{ width: 20, height: 20, borderRadius: 6, background: '#DDD8CF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 4 }}>
                          <svg width="11" height="11" fill="none" stroke="#9C968B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                        </div>
                        <div style={{ fontSize: 18, fontWeight: 700, color: '#2C2C2C', lineHeight: 1, fontFamily: 'var(--font-dm-sans)' }}>5</div>
                        <div style={{ fontSize: 9, color: '#9C968B', fontWeight: 500, fontFamily: 'var(--font-dm-sans)' }}>Due This Week</div>
                      </div>
                      {/* Team Members - with avatar stack */}
                      <div style={{ background: '#EBE6DD', borderRadius: 10, padding: '8px 10px' }}>
                        <div style={{ width: 20, height: 20, borderRadius: 6, background: '#DDD8CF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 4 }}>
                          <svg width="11" height="11" fill="none" stroke="#9C968B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                        </div>
                        <div style={{ fontSize: 18, fontWeight: 700, color: '#2C2C2C', lineHeight: 1, fontFamily: 'var(--font-dm-sans)' }}>4</div>
                        <div style={{ fontSize: 9, color: '#9C968B', fontWeight: 500, fontFamily: 'var(--font-dm-sans)', marginBottom: 4 }}>Team Members</div>
                        {/* Mini avatar stack */}
                        <div style={{ display: 'flex' }}>
                          {[PEOPLE.marcus, PEOPLE.kim, PEOPLE.diego, PEOPLE.aisha].map((src, i) => (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img key={i} src={src} width="16" height="16" style={{ borderRadius: '50%', objectFit: 'cover', border: '1.5px solid #EBE6DD', marginLeft: i === 0 ? 0 : -5 }} alt="" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* My Work task list */}
                    <div style={{ marginBottom: 10 }}>
                      <div style={{ fontSize: 10, fontWeight: 700, color: '#2C2C2C', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6, fontFamily: 'var(--font-dm-sans)' }}>My Work</div>
                      {[
                        { text: 'Q2 goals review with Jordan', priority: '#C8782A', statusColor: '#A86022', statusBg: '#FAE8D0', due: 'Today', avatar: PEOPLE.diego },
                        { text: 'Share onboarding doc → Marcus', priority: '#7B8F6A', statusColor: '#5A7A4A', statusBg: '#EDF2EA', due: 'Tomorrow', avatar: PEOPLE.marcus },
                        { text: "Tyler's project proposal feedback", priority: '#C2604A', statusColor: '#C2604A', statusBg: '#FAEAE7', due: '2d ago', avatar: PEOPLE.kim },
                      ].map((task, i) => (
                        <div key={i} style={{
                          display: 'flex', alignItems: 'center', gap: 6,
                          padding: '5px 8px',
                          background: 'white',
                          borderRadius: '0 6px 6px 0',
                          marginBottom: 3,
                          border: '1px solid #E8E4DF',
                          borderLeft: `2.5px solid ${task.priority}`
                        }}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={task.avatar} width="18" height="18" style={{ borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} alt="" />
                          <span style={{ flex: 1, fontSize: 10, color: '#2C2C2C', fontFamily: 'var(--font-source-sans)', lineHeight: 1.3 }}>{task.text}</span>
                          <span style={{ fontSize: 8, fontWeight: 600, color: task.statusColor, background: task.statusBg, padding: '1px 5px', borderRadius: 8, whiteSpace: 'nowrap', fontFamily: 'var(--font-dm-sans)' }}>{task.due}</span>
                        </div>
                      ))}
                    </div>

                    {/* Next 1:1 */}
                    <div style={{ background: 'white', borderRadius: 8, border: '1px solid #D0CAC0', padding: '8px 10px', display: 'flex', alignItems: 'center', gap: 8 }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={PEOPLE.marcus} width="28" height="28" style={{ borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} alt="Marcus" />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 11, fontWeight: 600, color: '#2C2C2C', fontFamily: 'var(--font-dm-sans)' }}>Marcus Johnson · 1:1</div>
                        <div style={{ fontSize: 10, color: '#9C968B', fontFamily: 'var(--font-source-sans)' }}>Tomorrow · 10:00 AM</div>
                      </div>
                      <div style={{ fontSize: 9, background: '#EDF2EA', color: '#7B8F6A', padding: '2px 6px', borderRadius: 10, fontWeight: 600, fontFamily: 'var(--font-dm-sans)' }}>Scheduled</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
          <RhythmMotif key={i} scale={0.5} color={color} opacity={0.12} />
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

      {/* ─── TESTIMONIALS ─────────────────────────────────────── */}
      <section style={{ background: 'white', padding: '60px 0', borderTop: '1px solid #D0CAC0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#9C968B', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'var(--font-dm-sans)', marginBottom: 8 }}>Managers finding their rhythm</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              {
                quote: "I used to dread 1:1s. Now I actually look forward to them — Cadence gives me a structure that works.",
                name: "Sarah R.", role: "Engineering Manager", img: PEOPLE.sarah
              },
              {
                quote: "The task delegation view alone is worth it. I always know what's moving and what needs a nudge.",
                name: "Marcus J.", role: "Operations Lead", img: PEOPLE.marcus
              },
              {
                quote: "Finally a management tool that doesn't feel like it was built for an HR department.",
                name: "Aisha N.", role: "Product Manager", img: PEOPLE.aisha
              }
            ].map((t, i) => (
              <div key={i} style={{ background: '#F5F0E8', borderRadius: 10, padding: '24px', border: '1px solid #D0CAC0', borderLeft: '3px solid #C8782A' }}>
                {/* 5-star rating */}
                <div style={{ marginBottom: 10, fontSize: 14, color: '#D97706', letterSpacing: 2 }}>★★★★★</div>
                <div style={{ fontSize: 15, color: '#2C2C2C', fontFamily: 'var(--font-source-sans)', lineHeight: 1.65, marginBottom: 20, fontStyle: 'italic' }}>&ldquo;{t.quote}&rdquo;</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.img} width="48" height="48" style={{ borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} alt={t.name} />
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#2C2C2C', fontFamily: 'var(--font-dm-sans)' }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: '#9C968B', fontFamily: 'var(--font-source-sans)' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RHYTHM DIVIDER ───────────────────────────────────── */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 12, padding: '8px 0', background: '#EBE6DD' }}>
        {['#C8782A', '#7B8F6A', '#3A7D7B', '#C8782A', '#7B8F6A', '#3A7D7B'].map((color, i) => (
          <RhythmMotif key={i} scale={0.5} color={color} opacity={0.12} />
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
        <div style={{ position: 'absolute', right: 60, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', opacity: 0.6 }}>
          <RhythmMotif scale={0.7} color="#C8782A" opacity={0.08} />
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
