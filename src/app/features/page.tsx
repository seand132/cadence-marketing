import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cadence Features — 1:1s, Task Delegation, Team Dashboard, KPI Goals',
  description: 'Six focused tools for small-team managers. 1:1 meeting agendas, task delegation, team dashboard, KPI goals, org chart. Built for teams of 3 to 8.',
}

export default function FeaturesPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section style={{ background: '#F5F0E8' }} className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
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
            What You Get
          </div>
          <h1
            className="mb-5"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 700,
              fontSize: 'clamp(36px, 5vw, 52px)',
              color: '#2C2C2C',
              lineHeight: 1.15,
            }}
          >
            Six tools. One rhythm. Zero overhead.
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-source-sans)',
              fontSize: 19,
              color: '#9C968B',
              lineHeight: 1.6,
            }}
          >
            Everything a manager needs to run a tight team. 1:1s, delegation, goals, and visibility. Nothing they don&rsquo;t.
          </p>
        </div>
      </section>

      {/* ─── RHYTHM DIVIDER 1 ─────────────────────────────────── */}
      <div style={{ background: '#F5F0E8', paddingBottom: 12 }} />
      <div style={{ width:'100%', overflow:'hidden', lineHeight:0, background:'#F5F0E8' }} aria-hidden="true">
        <svg width="100%" height="40" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="features-div-1" x="0" y="0" width="192" height="40" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="40" fill="url(#features-div-1)" />
        </svg>
      </div>

      {/* ─── FEATURE NAV TABS ─────────────────────────────────── */}
      <style>{`
        html { scroll-behavior: smooth; }
        section[id] { scroll-margin-top: 110px; }
      `}</style>
      <div
        style={{
          background: 'white',
          borderBottom: '1px solid #D0CAC0',
          position: 'sticky',
          top: '53px',
          zIndex: 40,
        }}
      >
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center gap-2 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
          {[
            { label: '1:1 Meetings', href: '#one-on-ones' },
            { label: 'Task Delegation', href: '#delegation' },
            { label: 'Team Dashboard', href: '#team-dashboard' },
            { label: 'KPI Goals', href: '#kpi-goals' },
            { label: 'Org Chart', href: '#org-chart' },
            { label: 'One System', href: '#one-system' },
          ].map((tab) => (
            <a
              key={tab.href}
              href={tab.href}
              className="flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors hover:bg-[#FDF6EE] hover:text-[#C8782A]"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                color: '#9C968B',
                textDecoration: 'none',
              }}
            >
              {tab.label}
            </a>
          ))}
        </div>
      </div>

      {/* ─── FEATURE 1: 1:1 MEETINGS ─────────────────────────── */}
      <section id="one-on-ones" style={{ background: '#F5F0E8' }} className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text left */}
            <div className="flex-1 max-w-xl">
              <div
                style={{
                  borderLeft: '4px solid #C8782A',
                  paddingLeft: 20,
                  marginBottom: 24,
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontWeight: 600,
                    fontSize: 11,
                    color: '#C8782A',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: 12,
                  }}
                >
                  1:1 Meetings
                </p>
                <h2
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontWeight: 700,
                    fontSize: 'clamp(26px, 3vw, 36px)',
                    color: '#2C2C2C',
                    lineHeight: 1.2,
                    marginBottom: 16,
                  }}
                >
                  1:1s that actually run themselves.
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-source-sans)',
                    fontSize: 'clamp(15px, 4vw, 17px)',
                    color: '#9C968B',
                    lineHeight: 1.75,
                  }}
                >
                  Give every direct report a standing agenda. Real talk, context, and next actions every week, without starting from scratch. Cadence remembers what you covered last time so you don&rsquo;t have to.
                </p>
              </div>
              {/* Stat callout */}
              <div
                style={{
                  background: 'white',
                  border: '1px solid #D0CAC0',
                  borderRadius: 8,
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 4,
                    minHeight: 40,
                    background: '#C8782A',
                    borderRadius: 2,
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                />
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: 14,
                    color: '#2C2C2C',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Teams with consistent 1:1s see significantly higher retention and faster problem resolution. Cadence makes consistency the default.
                </p>
              </div>
            </div>
            {/* Screenshot right */}
            <div className="flex-1 w-full">
              <div
                style={{
                  borderRadius: 10,
                  overflow: 'hidden',
                  border: '1px solid #D0CAC0',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                }}
              >
                <div
                  style={{
                    background: '#EBE6DD',
                    padding: '10px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    borderBottom: '1px solid #D0CAC0',
                  }}
                >
                  <div style={{ display: 'flex', gap: 5 }}>
                    {['#C2604A', '#C8782A', '#7B8F6A'].map((c, i) => (
                      <div
                        key={i}
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          background: c,
                          opacity: 0.75,
                        }}
                      />
                    ))}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      background: 'white',
                      borderRadius: 4,
                      padding: '3px 12px',
                      fontSize: 11,
                      color: '#9C968B',
                      fontFamily: 'var(--font-dm-sans)',
                    }}
                  >
                    app.cadencehq.co/1-1s
                  </div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/screenshots/one-on-ones.png"
                  alt="Cadence 1:1 meeting agendas"
                  style={{ width: '100%', maxWidth: '100%', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURE 2: TASK DELEGATION ─────────────────────── */}
      <section id="delegation" style={{ background: 'white' }} className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            {/* Text right (reversed) */}
            <div className="flex-1 max-w-xl">
              <div
                style={{
                  borderLeft: '4px solid #3A7D7B',
                  paddingLeft: 20,
                  marginBottom: 24,
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontWeight: 600,
                    fontSize: 11,
                    color: '#3A7D7B',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: 12,
                  }}
                >
                  Task Delegation
                </p>
                <h2
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontWeight: 700,
                    fontSize: 'clamp(26px, 3vw, 36px)',
                    color: '#2C2C2C',
                    lineHeight: 1.2,
                    marginBottom: 16,
                  }}
                >
                  Delegate once. See it through.
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-source-sans)',
                    fontSize: 'clamp(15px, 4vw, 17px)',
                    color: '#9C968B',
                    lineHeight: 1.75,
                  }}
                >
                  When you hand something off, you&rsquo;re still accountable for the outcome. Cadence keeps everything you&rsquo;ve delegated visible: status, priority, due date. You always know what&rsquo;s moving and what needs a nudge.
                </p>
              </div>
              {/* Pull quote */}
              <div
                style={{
                  background: '#F5F0E8',
                  border: '1px solid #D0CAC0',
                  borderRadius: 8,
                  padding: '16px 20px',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontWeight: 600,
                    fontSize: 15,
                    color: '#2C2C2C',
                    lineHeight: 1.5,
                    margin: 0,
                    fontStyle: 'italic',
                  }}
                >
                  &ldquo;No more &lsquo;what&rsquo;s the status on that?&rsquo; in Slack.&rdquo;
                </p>
              </div>
            </div>
            {/* Screenshot left (reversed) */}
            <div className="flex-1 w-full">
              <div
                style={{
                  borderRadius: 10,
                  overflow: 'hidden',
                  border: '1px solid #D0CAC0',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.10)',
                }}
              >
                <div
                  style={{
                    background: '#EBE6DD',
                    padding: '10px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    borderBottom: '1px solid #D0CAC0',
                  }}
                >
                  <div style={{ display: 'flex', gap: 5 }}>
                    {['#C2604A', '#C8782A', '#7B8F6A'].map((c, i) => (
                      <div
                        key={i}
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          background: c,
                          opacity: 0.75,
                        }}
                      />
                    ))}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      background: 'white',
                      borderRadius: 4,
                      padding: '3px 12px',
                      fontSize: 11,
                      color: '#9C968B',
                      fontFamily: 'var(--font-dm-sans)',
                    }}
                  >
                    app.cadencehq.co/tasks
                  </div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/screenshots/tasks.png"
                  alt="Cadence task delegation and tracking"
                  style={{ width: '100%', maxWidth: '100%', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURE 3: TEAM DASHBOARD ──────────────────────── */}
      <section id="team-dashboard" style={{ background: '#EBE6DD' }} className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text left */}
            <div className="flex-1 max-w-xl">
              <div
                style={{
                  borderLeft: '4px solid #7B8F6A',
                  paddingLeft: 20,
                  marginBottom: 24,
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontWeight: 600,
                    fontSize: 11,
                    color: '#7B8F6A',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: 12,
                  }}
                >
                  Team Dashboard
                </p>
                <h2
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontWeight: 700,
                    fontSize: 'clamp(26px, 3vw, 36px)',
                    color: '#2C2C2C',
                    lineHeight: 1.2,
                    marginBottom: 16,
                  }}
                >
                  Your team at a glance. Not in five meetings.
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-source-sans)',
                    fontSize: 'clamp(15px, 4vw, 17px)',
                    color: '#9C968B',
                    lineHeight: 1.75,
                  }}
                >
                  One view of who&rsquo;s on track, who&rsquo;s overloaded, and who&rsquo;s gone quiet. Not a surveillance tool. A manager&rsquo;s honest read on the room, updated in real time.
                </p>
              </div>
              {/* Callout card */}
              <div
                style={{
                  background: '#2C2C2C',
                  borderRadius: 8,
                  padding: '18px 22px',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontWeight: 600,
                    fontSize: 15,
                    color: 'white',
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  Spot problems before they become incidents.
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-source-sans)',
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.6)',
                    margin: '6px 0 0 0',
                  }}
                >
                  Real-time visibility without scheduling another status meeting.
                </p>
              </div>
            </div>
            {/* Screenshot right */}
            <div className="flex-1 w-full">
              <div
                style={{
                  borderRadius: 10,
                  overflow: 'hidden',
                  border: '1px solid #D0CAC0',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.10)',
                }}
              >
                <div
                  style={{
                    background: '#EBE6DD',
                    padding: '10px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    borderBottom: '1px solid #D0CAC0',
                  }}
                >
                  <div style={{ display: 'flex', gap: 5 }}>
                    {['#C2604A', '#C8782A', '#7B8F6A'].map((c, i) => (
                      <div
                        key={i}
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          background: c,
                          opacity: 0.75,
                        }}
                      />
                    ))}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      background: 'white',
                      borderRadius: 4,
                      padding: '3px 12px',
                      fontSize: 11,
                      color: '#9C968B',
                      fontFamily: 'var(--font-dm-sans)',
                    }}
                  >
                    app.cadencehq.co/dashboard
                  </div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/screenshots/dashboard.png"
                  alt="Cadence team dashboard"
                  style={{ width: '100%', maxWidth: '100%', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURE 4: KPI GOALS ───────────────────────────── */}
      <section id="kpi-goals" style={{ background: 'white' }} className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            {/* Text right (reversed) */}
            <div className="flex-1 max-w-xl">
              <div
                style={{
                  borderLeft: '4px solid #C8782A',
                  paddingLeft: 20,
                  marginBottom: 24,
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontWeight: 600,
                    fontSize: 11,
                    color: '#C8782A',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: 12,
                  }}
                >
                  KPI Goals
                </p>
                <h2
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontWeight: 700,
                    fontSize: 'clamp(26px, 3vw, 36px)',
                    color: '#2C2C2C',
                    lineHeight: 1.2,
                    marginBottom: 16,
                  }}
                >
                  Goals that don&rsquo;t die in a doc.
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-source-sans)',
                    fontSize: 'clamp(15px, 4vw, 17px)',
                    color: '#9C968B',
                    lineHeight: 1.75,
                  }}
                >
                  Set KPIs for your team and track them in real time. Each goal has an owner, a target, a current value, and a visual progress bar. You always know where you stand — no digging, no spreadsheets.
                </p>
              </div>
              {/* Stat pill */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: '#FDF6EE',
                  border: '1px solid #F0D5B8',
                  borderRadius: 999,
                  padding: '10px 18px',
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#C8782A',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontWeight: 600,
                    fontSize: 14,
                    color: '#C8782A',
                  }}
                >
                  3 KPIs on track
                </span>
              </div>
            </div>
            {/* Screenshot left (reversed) */}
            <div className="flex-1 w-full">
              <div
                style={{
                  borderRadius: 10,
                  overflow: 'hidden',
                  border: '1px solid #D0CAC0',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.10)',
                }}
              >
                <div
                  style={{
                    background: '#EBE6DD',
                    padding: '10px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    borderBottom: '1px solid #D0CAC0',
                  }}
                >
                  <div style={{ display: 'flex', gap: 5 }}>
                    {['#C2604A', '#C8782A', '#7B8F6A'].map((c, i) => (
                      <div
                        key={i}
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          background: c,
                          opacity: 0.75,
                        }}
                      />
                    ))}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      background: 'white',
                      borderRadius: 4,
                      padding: '3px 12px',
                      fontSize: 11,
                      color: '#9C968B',
                      fontFamily: 'var(--font-dm-sans)',
                    }}
                  >
                    app.cadencehq.co/goals
                  </div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/screenshots/kpis.png"
                  alt="Cadence KPI goals and tracking"
                  style={{ width: '100%', maxWidth: '100%', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURE 5: ORG CHART ───────────────────────────── */}
      <section id="org-chart" style={{ background: '#EBE6DD' }} className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text left */}
            <div className="flex-1 max-w-xl">
              <div
                style={{
                  borderLeft: '4px solid #C2604A',
                  paddingLeft: 20,
                  marginBottom: 24,
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontWeight: 600,
                    fontSize: 11,
                    color: '#C2604A',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: 12,
                  }}
                >
                  Org Chart
                </p>
                <h2
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontWeight: 700,
                    fontSize: 'clamp(26px, 3vw, 36px)',
                    color: '#2C2C2C',
                    lineHeight: 1.2,
                    marginBottom: 16,
                  }}
                >
                  Know exactly how your team is built.
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-source-sans)',
                    fontSize: 'clamp(15px, 4vw, 17px)',
                    color: '#9C968B',
                    lineHeight: 1.75,
                  }}
                >
                  A live org chart that shows your reporting structure at a glance. Edit hierarchy by dragging cards. Invite new members. Know exactly who reports to who and how many people each person manages.
                </p>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 12,
                }}
              >
                {[
                  { n: '6', label: 'Team members tracked' },
                  { n: '100%', label: 'Reporting clarity' },
                ].map((s) => (
                  <div
                    key={s.label}
                    style={{
                      background: 'white',
                      borderRadius: 8,
                      border: '1px solid #D0CAC0',
                      padding: '14px 18px',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontWeight: 700,
                        fontSize: 28,
                        color: '#C2604A',
                        lineHeight: 1,
                      }}
                    >
                      {s.n}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-source-sans)',
                        fontSize: 12,
                        color: '#9C968B',
                        marginTop: 4,
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Screenshot right */}
            <div className="flex-1 w-full">
              <div
                style={{
                  borderRadius: 10,
                  overflow: 'hidden',
                  border: '1px solid #D0CAC0',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.10)',
                }}
              >
                <div
                  style={{
                    background: '#EBE6DD',
                    padding: '10px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    borderBottom: '1px solid #D0CAC0',
                  }}
                >
                  <div style={{ display: 'flex', gap: 5 }}>
                    {['#C2604A', '#C8782A', '#7B8F6A'].map((c, i) => (
                      <div
                        key={i}
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          background: c,
                          opacity: 0.75,
                        }}
                      />
                    ))}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      background: 'white',
                      borderRadius: 4,
                      padding: '3px 12px',
                      fontSize: 11,
                      color: '#9C968B',
                      fontFamily: 'var(--font-dm-sans)',
                    }}
                  >
                    app.cadencehq.co/org
                  </div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/screenshots/team.png"
                  alt="Cadence org chart and team structure"
                  style={{ width: '100%', maxWidth: '100%', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURE 6: ONE SYSTEM (dark panel) ─────────────── */}
      <section id="one-system" style={{ background: '#2C2C2C' }} className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 600,
              fontSize: 11,
              color: '#9C968B',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}
          >
            One System
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 700,
              fontSize: 'clamp(28px, 4vw, 44px)',
              color: 'white',
              lineHeight: 1.2,
              marginBottom: 20,
            }}
          >
            Replace the doc. Kill the spreadsheet. Close the Slack thread.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-source-sans)',
              fontSize: 18,
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.7,
              maxWidth: 620,
              margin: '0 auto 48px',
            }}
          >
            Cadence is where your team management actually lives. Not Notion, not a Google Doc, not a running thread you&rsquo;ve lost track of. One system. One rhythm.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 16,
              marginBottom: 48,
              width: '100%',
              maxWidth: 900,
              margin: '0 auto 48px',
            }}
          >
            {[
              {
                label: '1:1 Agendas',
                desc: 'Structured check-ins that actually build trust',
                svg: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8782A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
              },
              {
                label: 'Task Delegation',
                desc: 'Assign, track, and follow up without the chaos',
                svg: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8782A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>,
              },
              {
                label: 'Team Dashboard',
                desc: 'See how your team is doing at a glance',
                svg: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8782A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
              },
              {
                label: 'KPI Tracking',
                desc: 'Set goals, track progress, stay aligned',
                svg: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8782A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
              },
              {
                label: 'Org Chart',
                desc: 'Visualize your team structure instantly',
                svg: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8782A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="2" width="8" height="4" rx="1"/><rect x="1" y="14" width="6" height="4" rx="1"/><rect x="9" y="14" width="6" height="4" rx="1"/><rect x="17" y="14" width="6" height="4" rx="1"/><path d="M4 14V9h16v5"/><line x1="12" y1="6" x2="12" y2="9"/></svg>,
              },
              {
                label: 'Email Digests',
                desc: 'Weekly rhythms keeping everyone in sync',
                svg: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8782A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: 12,
                  padding: '24px',
                  borderRadius: 10,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 10,
                    background: 'rgba(200,120,42,0.15)',
                    border: '1px solid rgba(200,120,42,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {item.svg}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 15, fontWeight: 600, color: 'white', marginBottom: 4 }}>
                    {item.label}
                  </div>
                  <div style={{ fontFamily: 'var(--font-source-sans)', fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="https://app.cadencehq.co/signup"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold transition-opacity hover:opacity-90"
            style={{
              background: '#C8782A',
              color: 'white',
              borderRadius: 4,
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Get started free
          </Link>
        </div>
      </section>

      {/* ─── HOW THEY WORK TOGETHER ────────────────────────── */}
      <section style={{ background: '#2C2C2C' }} className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 600,
              fontSize: 11,
              color: '#9C968B',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: 16,
              textAlign: 'center',
            }}
          >
            How they work together
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 700,
              fontSize: 'clamp(28px, 4vw, 40px)',
              color: '#F5F0E8',
              lineHeight: 1.2,
              marginBottom: 48,
              textAlign: 'center',
            }}
          >
            A week in Cadence.
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 24,
            }}
          >
            {[
              {
                num: '1',
                day: 'Monday',
                desc: "Open your dashboard. See who's on track, who needs a nudge, what's due.",
              },
              {
                num: '2',
                day: 'Tuesday–Thursday',
                desc: 'Run your 1:1s. Standing agenda, no prep required. Notes carry forward.',
              },
              {
                num: '3',
                day: 'Friday',
                desc: "Check delegated tasks. Close the week knowing what moved and what didn't.",
              },
            ].map((step) => (
              <div
                key={step.num}
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 8,
                  padding: '28px 24px',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontWeight: 700,
                    fontSize: 36,
                    color: '#C8782A',
                    lineHeight: 1,
                    marginBottom: 12,
                  }}
                >
                  {step.num}
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontWeight: 600,
                    fontSize: 16,
                    color: '#F5F0E8',
                    marginBottom: 8,
                  }}
                >
                  {step.day}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-source-sans)',
                    fontSize: 15,
                    color: 'rgba(245,240,232,0.78)',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WORKS WITH YOUR TOOLS ──────────────────────────── */}
      <div style={{ background: '#F5F0E8', padding: '20px 24px', textAlign: 'center' }}>
        <p
          style={{
            fontFamily: 'var(--font-source-sans)',
            fontSize: 14,
            color: '#9C968B',
            margin: 0,
          }}
        >
          Cadence works alongside Slack, Google Calendar, Zoom, and your existing tools. No migration required.
        </p>
      </div>

      {/* ─── RHYTHM DIVIDER 2 ─────────────────────────────────── */}
      <div style={{ background: '#EBE6DD', paddingTop: 48 }} />
      <div style={{ width:'100%', overflow:'hidden', lineHeight:0, background:'#EBE6DD' }} aria-hidden="true">
        <svg width="100%" height="40" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="features-div-2" x="0" y="0" width="192" height="40" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="40" fill="url(#features-div-2)" />
        </svg>
      </div>
      {/* Cream buffer so motif doesn't sit flush against orange */}
      <div style={{ background: '#EBE6DD', height: 24 }} />

      {/* ─── BOTTOM CTA ─────────────────────────────────────── */}
      <section style={{ background: '#C8782A' }} className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h2
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontWeight: 700,
                  fontSize: 'clamp(28px, 4vw, 42px)',
                  color: 'white',
                  lineHeight: 1.2,
                  marginBottom: 16,
                }}
              >
                See it in action.
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-source-sans)',
                  fontSize: 18,
                  color: 'rgba(255,255,255,0.80)',
                  lineHeight: 1.6,
                  marginBottom: 28,
                }}
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
                  textDecoration: 'none',
                }}
              >
                Get started free
              </Link>
            </div>
            {/* Screenshot thumbnail */}
            <div className="flex-1 w-full max-w-md">
              <div
                style={{
                  borderRadius: 10,
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.25)',
                  boxShadow: '0 16px 50px rgba(0,0,0,0.25)',
                  opacity: 0.92,
                }}
              >
                <div
                  style={{
                    background: 'rgba(0,0,0,0.3)',
                    padding: '10px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <div style={{ display: 'flex', gap: 5 }}>
                    {['#C2604A', '#C8782A', '#7B8F6A'].map((c, i) => (
                      <div
                        key={i}
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          background: c,
                          opacity: 0.75,
                        }}
                      />
                    ))}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      background: 'rgba(255,255,255,0.15)',
                      borderRadius: 4,
                      padding: '3px 12px',
                      fontSize: 11,
                      color: 'rgba(255,255,255,0.7)',
                      fontFamily: 'var(--font-dm-sans)',
                    }}
                  >
                    app.cadencehq.co/dashboard
                  </div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/screenshots/dashboard.png"
                  alt="Cadence dashboard"
                  style={{ width: '100%', maxWidth: '100%', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
