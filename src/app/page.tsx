import type { Metadata } from 'next'
import Link from 'next/link'
import { RhythmMotif } from '@/components/RhythmMotif'

export const metadata: Metadata = {
  title: 'Cadence: Management tools for small teams',
  description: 'Cadence gives managers a real system for 1:1s, delegation, and team rhythm. 14-day free trial.',
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
              Stop running your team from memory.
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
              Cadence gives managers a real system for 1:1s, delegation, and team rhythm. Built for teams of 3 to 8.
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
              Get started free
            </Link>

            <p
              className="mt-3"
              style={{ fontFamily: 'var(--font-source-sans)', fontSize: 13, color: '#9C968B' }}
            >
              No credit card required.{' '}
              <a
                href="https://app.cadencehq.co/login"
                style={{ color: '#9C968B', textDecoration: 'underline' }}
              >
                Already using Cadence? Log in →
              </a>
            </p>
          </div>

          {/* Right - Real app screenshot in browser frame */}
          <div className="flex-1 flex justify-center lg:justify-end w-full">
            {/* Real app screenshot in browser frame */}
            <div style={{
              borderRadius: 12,
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.18)',
              border: '1px solid #D0CAC0',
              maxWidth: 540,
              width: '100%',
              animation: 'float 4s ease-in-out infinite'
            }}>
              {/* Browser chrome */}
              <div style={{ background: '#EBE6DD', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid #D0CAC0' }}>
                <div style={{ display: 'flex', gap: 5 }}>
                  {['#C2604A','#C8782A','#7B8F6A'].map((c,i) => (
                    <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.75 }} />
                  ))}
                </div>
                <div style={{ flex: 1, background: 'white', borderRadius: 4, padding: '3px 12px', fontSize: 11, color: '#9C968B', fontFamily: 'var(--font-dm-sans)' }}>
                  app.cadencehq.co/dashboard
                </div>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/screenshots/dashboard.png"
                alt="Cadence dashboard"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* ─── RHYTHM MOTIF BAND - hero to dark panel transition ── */}
      <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0, background: '#F5F0E8' }} aria-hidden="true">
        <svg width="100%" height="40" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="rhythm-hero" x="0" y="0" width="192" height="40" patternUnits="userSpaceOnUse">
              <rect x="0"   y="34" width="7" height="6"  rx="3.5" fill="#C2604A" />
              <rect x="12"  y="14" width="7" height="26" rx="3.5" fill="#C2604A" />
              <rect x="24"  y="30" width="7" height="10" rx="3.5" fill="#3A7D7B" />
              <rect x="36"  y="8"  width="7" height="32" rx="3.5" fill="#3A7D7B" />
              <rect x="48"  y="32" width="7" height="8"  rx="3.5" fill="#7B8F6A" />
              <rect x="60"  y="20" width="7" height="20" rx="3.5" fill="#7B8F6A" />
              <rect x="72"  y="34" width="7" height="6"  rx="3.5" fill="#C8782A" />
              <rect x="84"  y="6"  width="7" height="34" rx="3.5" fill="#C8782A" />
              <rect x="96"  y="30" width="7" height="10" rx="3.5" fill="#3A7D7B" />
              <rect x="108" y="22" width="7" height="18" rx="3.5" fill="#3A7D7B" />
              <rect x="120" y="34" width="7" height="6"  rx="3.5" fill="#7B8F6A" />
              <rect x="132" y="12" width="7" height="28" rx="3.5" fill="#7B8F6A" />
              <rect x="144" y="32" width="7" height="8"  rx="3.5" fill="#C2604A" />
              <rect x="156" y="18" width="7" height="22" rx="3.5" fill="#C2604A" />
              <rect x="168" y="34" width="7" height="6"  rx="3.5" fill="#C8782A" />
              <rect x="180" y="10" width="7" height="30" rx="3.5" fill="#C8782A" />
            </pattern>
          </defs>
          <rect width="100%" height="40" fill="url(#rhythm-hero)" />
        </svg>
      </div>
      {/* Cream buffer before dark section */}
      <div style={{ background: '#F5F0E8', height: 7 }} />

      {/* ─── PRODUCT SHOWCASE ─────────────────────────────────── */}
      {/* Product showcase - real screenshots */}
      <section style={{ background: '#1C1C1C', padding: '80px 0', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

          {/* Section header */}
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: '#9C968B', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12, fontFamily: 'var(--font-dm-sans)' }}>THE PLATFORM</div>
            <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 36, color: 'white', margin: '0 0 12px 0', lineHeight: 1.2 }}>
              Everything in one place.
            </h2>
            <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: 17, color: '#9C968B', margin: 0 }}>
              Built for the way managers actually work.
            </p>
          </div>

          {/* Main screenshot - full width dashboard */}
          <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 24px 80px rgba(0,0,0,0.5)', marginBottom: 16 }}>
            <div style={{ background: '#2A2A2A', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ display: 'flex', gap: 5 }}>
                {['#C2604A','#C8782A','#7B8F6A'].map((c,i) => <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.7 }} />)}
              </div>
              <div style={{ flex: 1, background: 'rgba(255,255,255,0.08)', borderRadius: 4, padding: '3px 12px', fontSize: 11, color: '#9C968B', fontFamily: 'var(--font-dm-sans)' }}>app.cadencehq.co/dashboard</div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/screenshots/dashboard.png" alt="Cadence dashboard: the manager's home base" style={{ width: '100%', display: 'block' }} />
          </div>

          {/* Caption */}
          <p style={{ textAlign: 'center', fontSize: 13, color: '#9C968B', fontFamily: 'var(--font-dm-sans)', marginBottom: 32 }}>
            Your dashboard: tasks, 1:1s, team health, and goals. All in one view.
          </p>

          {/* Four smaller screenshots */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {[
              { src: '/screenshots/tasks.png', label: 'Task Management', desc: 'See every delegation, priority, and due date across your team.' },
              { src: '/screenshots/one-on-ones.png', label: '1:1 Meetings', desc: 'Standing agendas that make every check-in count.' },
              { src: '/screenshots/team-meetings.png', label: 'Team Meetings', desc: 'Shared agendas that keep every team meeting on track.' },
              { src: '/screenshots/team.png', label: 'Team Overview', desc: 'Your full reporting structure at a glance.' },
            ].map((item, i) => (
              <div key={i}>
                <div style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)', marginBottom: 12 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.src} alt={item.label} style={{ width: '100%', display: 'block' }} />
                </div>
                <div style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 14, color: 'white', marginBottom: 4 }}>{item.label}</div>
                <div style={{ fontFamily: 'var(--font-source-sans)', fontSize: 13, color: '#9C968B', lineHeight: 1.5 }}>{item.desc}</div>
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
            Stop running your team from memory.
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                strip: '#C8782A',
                title: '1:1s that run themselves',
                body: 'A standing agenda for every direct report. Context, real talk, and next actions in 30 minutes.',
              },
              {
                strip: '#3A7D7B',
                title: 'Tasks that stay visible',
                body: "Track what you've delegated and what's actually moving. No more chasing status in Slack.",
              },
              {
                strip: '#7B8F6A',
                title: 'A team dashboard that tells you the truth',
                body: "Know who's on track, who's overloaded, and who needs a conversation before it becomes a problem.",
              },
              {
                strip: '#C2604A',
                title: 'Team meetings with an agenda',
                body: "Run every team meeting with a shared agenda. Everyone knows what's on the table before the call starts.",
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
                Built for managers who give a damn.
              </h2>
              <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: 17, color: '#9C968B', lineHeight: 1.7 }}>
                It&rsquo;s not a performance management suite. It&rsquo;s a rhythm you can actually keep.
              </p>
            </div>
            <div className="flex-1 reveal">
              <ul className="space-y-4">
                {[
                  'You have 3–8 direct reports',
                  'You manage a small team and want a real system, not a spreadsheet',
                  "You want to lead well, not just manage tasks",
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
                Get started free
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
