import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Cadence: Built by a manager who needed this.',
  description: "Cadence exists because the tools that existed weren't built for small-team managers. Here's the story, and what we believe.",
}

export default function AboutPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section style={{ background: '#F5F0E8' }} className="py-24">
        <div className="max-w-2xl mx-auto px-6">
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
            Our Story
          </div>
          {/* Founder avatar */}
          <img src="https://whzwyvjerrsyqjmktxcg.supabase.co/storage/v1/object/public/avatars/06d4938c-f40d-46dd-b24c-3a2596e0c8a1/avatar.jpg?t=1773037991750" alt="Sean Davis" style={{ width: 96, height: 96, borderRadius: "50%", objectFit: "cover", marginBottom: 24, border: "3px solid #D0CAC0" }} />
          <h1
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 700,
              fontSize: 'clamp(36px, 5vw, 52px)',
              color: '#2C2C2C',
              lineHeight: 1.15,
              marginBottom: 16,
            }}
          >
            Built by a manager who needed this.
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-source-sans)',
              fontSize: 19,
              color: '#9C968B',
              lineHeight: 1.6,
            }}
          >
            Cadence exists because the tools that existed weren&rsquo;t built for us.
          </p>
        </div>
      </section>

      {/* ─── RHYTHM DIVIDER ───────────────────────────────────── */}
      <div style={{ width:'100%', overflow:'hidden', lineHeight:0, background:'#F5F0E8' }} aria-hidden="true">
        <svg width="100%" height="40" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="about-div-1" x="0" y="0" width="192" height="40" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="40" fill="url(#about-div-1)" />
        </svg>
      </div>

      {/* ─── FOUNDER LETTER ───────────────────────────────────── */}
      <section style={{ background: 'white' }} className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div
            className="space-y-6"
            style={{
              fontFamily: 'var(--font-source-sans)',
              fontSize: 18,
              color: '#9C968B',
              lineHeight: 1.8,
              maxWidth: 680,
            }}
          >
            <p>
              I spent years running operations for multifamily and commercial real estate portfolios. Good at it. Got promoted. Suddenly I was managing the people who do the job I used to do.
            </p>
            <p>
              Nobody trained me. Nobody handed me a system. I bought every management book I could find. None of them fit. They were either too academic, too enterprise, or built for a kind of manager I wasn&rsquo;t.
            </p>
            <p>
              So I started building the tool I wished existed.
            </p>
            <p>
              I needed something that would help me run consistent 1:1s without spending an hour prepping for each one. Something that kept delegation visible without a second spreadsheet. Something that told me how my team was doing without requiring five meetings to find out.
            </p>
            <p>
              What I didn&rsquo;t need was an enterprise performance management suite built for HR departments. I manage 6 people. I needed a rhythm, not a platform.
            </p>
            <p>
              Cadence is for the manager who got promoted because they were good at their job and now has to figure out a completely different job, fast, without much support. It&rsquo;s not a tool. It&rsquo;s a system you can actually keep.
            </p>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 17,
              fontWeight: 600,
              color: '#2C2C2C',
              marginTop: 28,
            }}
          >
            Sean Davis, Founder
          </p>
        </div>
      </section>

      {/* ─── BUSINESS MODEL ──────────────────────────────────── */}
      <section style={{ background: '#FDF6EE' }} className="py-12">
        <div className="max-w-2xl mx-auto px-6">
          <p
            style={{
              fontFamily: 'var(--font-source-sans)',
              fontSize: 17,
              color: '#9C968B',
              lineHeight: 1.8,
              borderLeft: '4px solid #C8782A',
              paddingLeft: 20,
              margin: 0,
            }}
          >
            Cadence is bootstrapped and independent. We charge $10/month because that&rsquo;s what keeps us focused - not on growth rounds, not on enterprise upsells, but on building the right tools for managers who just want a system that works.
          </p>
        </div>
      </section>

      {/* ─── MISSION BLOCK ────────────────────────────────────── */}
      <section style={{ background: '#2C2C2C' }} className="py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 700,
              fontSize: 'clamp(30px, 4vw, 44px)',
              color: 'white',
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            Management in rhythm.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-source-sans)',
              fontSize: 18,
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.7,
            }}
          >
            Simple tools. Steady habits. Stronger teams.
          </p>
        </div>
      </section>

      {/* ─── WHAT WE BELIEVE ──────────────────────────────────── */}
      <section style={{ background: '#F5F0E8' }} className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 700,
              fontSize: 28,
              color: '#2C2C2C',
              marginBottom: 28,
            }}
          >
            What we believe
          </h2>
          <div className="space-y-4">
            {[
              {
                accent: '#C8782A',
                title: 'Warm, not soft.',
                body: 'Good management is caring about your team enough to be honest with them. It&rsquo;s not cheerleading. It&rsquo;s showing up with consistency and clarity.',
              },
              {
                accent: '#3A7D7B',
                title: 'Clear, not simple.',
                body: 'Managing people is complex work. The tools shouldn&rsquo;t be. Cadence makes the complex parts easier without pretending they&rsquo;re easy.',
              },
              {
                accent: '#7B8F6A',
                title: 'Rhythmic, not rigid.',
                body: 'A weekly 1:1 isn&rsquo;t a bureaucratic requirement. It&rsquo;s a commitment to your team. The best systems flex when life happens, but they come back to the same beat.',
              },
            ].map((v) => (
              <div
                key={v.title}
                style={{
                  background: 'white',
                  border: '1px solid #D0CAC0',
                  borderRadius: 8,
                  overflow: 'hidden',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                }}
              >
                <div style={{ height: 5, background: v.accent }} />
                <div style={{ padding: '20px 24px' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontWeight: 700,
                      fontSize: 17,
                      color: '#2C2C2C',
                      marginBottom: 8,
                    }}
                  >
                    {v.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-source-sans)',
                      fontSize: 15,
                      color: '#9C968B',
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                    dangerouslySetInnerHTML={{ __html: v.body }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT'S COMING ────────────────────────────────────── */}
      <section style={{ background: '#2C2C2C' }} className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 700,
              fontSize: 28,
              color: '#F5F0E8',
              textAlign: 'center',
              marginBottom: 8,
            }}
          >
            What&rsquo;s coming
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-source-sans)',
              fontSize: 16,
              color: 'rgba(245,240,232,0.6)',
              textAlign: 'center',
              marginBottom: 40,
            }}
          >
            The product is alive. Here&rsquo;s what&rsquo;s on the roadmap.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 20,
            }}
          >
            {[
              {
                accent: '#C8782A',
                title: '1:1 templates',
                body: 'Pre-built agendas for new hire check-ins, performance conversations, and more. Coming Q2 2026.',
              },
              {
                accent: '#3A7D7B',
                title: 'Slack integration',
                body: 'Nudges and task updates where your team already is. Coming Q3 2026.',
              },
              {
                accent: '#7B8F6A',
                title: 'Team sentiment',
                body: 'Lightweight weekly pulse to surface how your team is actually feeling. Coming Q3 2026.',
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 8,
                  overflow: 'hidden',
                }}
              >
                <div style={{ height: 4, background: item.accent }} />
                <div style={{ padding: '24px 24px 28px' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontWeight: 700,
                      fontSize: 16,
                      color: '#F5F0E8',
                      marginBottom: 10,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-source-sans)',
                      fontSize: 15,
                      color: 'rgba(245,240,232,0.82)',
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BUILT IN PUBLIC ─────────────────────────────────── */}
      <section style={{ background: 'white' }} className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 700,
              fontSize: 28,
              color: '#2C2C2C',
              textAlign: 'center',
              marginBottom: 12,
            }}
          >
            Built in public. Improving every week.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-source-sans)',
              fontSize: 17,
              color: '#9C968B',
              textAlign: 'center',
              marginBottom: 40,
            }}
          >
            Launched March 2026. We ship weekly and share what we&rsquo;re working on.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 20,
            }}
          >
            <a
              href="https://x.com/seand132"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                background: '#F5F0E8',
                border: '1px solid #D0CAC0',
                borderRadius: 8,
                padding: '28px 24px',
                textDecoration: 'none',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontWeight: 700,
                  fontSize: 16,
                  color: '#2C2C2C',
                  marginBottom: 8,
                }}
              >
                Follow along on X @seand132
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-source-sans)',
                  fontSize: 14,
                  color: '#9C968B',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Building Cadence in the open. Progress, mistakes, and everything in between.
              </p>
            </a>
            <a
              href="https://app.cadencehq.co/signup"
              style={{
                display: 'block',
                background: '#F5F0E8',
                border: '1px solid #D0CAC0',
                borderRadius: 8,
                padding: '28px 24px',
                textDecoration: 'none',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontWeight: 700,
                  fontSize: 16,
                  color: '#2C2C2C',
                  marginBottom: 8,
                }}
              >
                Try it and tell us what&rsquo;s broken
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-source-sans)',
                  fontSize: 14,
                  color: '#9C968B',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                14-day free trial. Real feedback makes Cadence better for everyone.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* ─── RHYTHM DIVIDER 2 ─────────────────────────────────── */}
      <div style={{ width:'100%', overflow:'hidden', lineHeight:0, background:'white' }} aria-hidden="true">
        <svg width="100%" height="40" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="about-div-2" x="0" y="0" width="192" height="40" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="40" fill="url(#about-div-2)" />
        </svg>
      </div>

      {/* ─── BOTTOM CTA ─────────────────────────────────────────── */}
      <section style={{ background: '#C8782A' }} className="py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 700,
              fontSize: 'clamp(26px, 4vw, 36px)',
              color: 'white',
              marginBottom: 14,
            }}
          >
            Ready to find your rhythm?
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
          <p
            style={{
              marginTop: 12,
              fontSize: 13,
              color: 'rgba(255,255,255,0.65)',
              fontFamily: 'var(--font-source-sans)',
            }}
          >
            No credit card required.
          </p>
        </div>
      </section>
    </>
  )
}
