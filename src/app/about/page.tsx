import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Cadence — Built for the small-team manager',
  description: "Cadence was built by a real estate ops leader who got promoted to managing people and couldn't find a tool that fit. Here's the story.",
}

function RhythmDivider({ id, bg }: { id: string; bg: string }) {
  return (
    <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0, background: bg }} aria-hidden="true">
      <svg width="100%" height="40" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={id} x="0" y="0" width="192" height="40" patternUnits="userSpaceOnUse">
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
        <rect width="100%" height="40" fill={`url(#${id})`} />
      </svg>
    </div>
  )
}

export default function AboutPage() {
  return (
    <>
      <section style={{ background: '#F5F0E8' }} className="py-20">
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
            About
          </div>
          <h1
            style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 'clamp(36px, 5vw, 52px)', color: '#2C2C2C', lineHeight: 1.15 }}
          >
            Why I built this.
          </h1>
        </div>
      </section>

      <RhythmDivider id="about-div-1" bg="#F5F0E8" />

      <section style={{ background: 'white' }} className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="space-y-6 mb-16 reveal">
            {[
              "I spent years running operations for real estate portfolios. At some point, that meant managing people — first a few, then more, then a whole team.",
              "Nobody trained me. Nobody handed me a system. I bought every management book I could find. None of them fit the way I actually worked. They were either too academic, too enterprise, or built for a kind of manager I wasn't.",
              "So I started building the tool I wished existed.",
              "Cadence is for the manager who got promoted because they were good at their job — and now has to figure out a completely different job, fast, without much support.",
              "It's not a performance management platform. It's not an HR tool. It's a rhythm — a set of simple practices that help you show up for your team consistently.",
              "That's it. No enterprise contracts. No 40-feature setup. Just what you need to do the job well.",
            ].map((para, i) => (
              <p key={i} style={{ fontFamily: 'var(--font-source-sans)', fontSize: 18, color: '#9C968B', lineHeight: 1.8 }}>
                {para}
              </p>
            ))}
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 18, color: '#2C2C2C', fontWeight: 600 }}>
              — Sean Davis, Founder
            </p>
          </div>

          {/* Mission */}
          <div
            className="p-10 text-center reveal"
            style={{
              background: '#2C2C2C',
              borderRadius: 8,
            }}
          >
            <p
              className="mb-4"
              style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 24, color: 'white' }}
            >
              Management in rhythm.
            </p>
            <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: 17, color: 'rgba(255,255,255,0.70)', lineHeight: 1.75 }}>
              Cadence exists because good managers aren&rsquo;t born — they&rsquo;re made. And making them shouldn&rsquo;t require a 200-person HR team or a $50k software contract.
            </p>
          </div>

          {/* Values */}
          <div className="mt-16 reveal">
            <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 22, color: '#2C2C2C', marginBottom: 24 }}>
              What we believe
            </h2>
            <div className="space-y-4">
              {[
                {
                  strip: '#C8782A',
                  title: 'Simple beats comprehensive.',
                  body: 'The best system is the one you actually use. We built Cadence to be picked up in minutes, not deployed over months.',
                },
                {
                  strip: '#3A7D7B',
                  title: 'Rhythm beats effort.',
                  body: 'Consistency matters more than intensity. Good managers show up the same way every week — and Cadence is designed to make that easy.',
                },
                {
                  strip: '#7B8F6A',
                  title: 'Managers are people too.',
                  body: "You have a job to do and a team to lead. We're not here to add homework — we're here to clear it.",
                },
              ].map((v) => (
                <div
                  key={v.title}
                  style={{
                    borderRadius: 8,
                    border: '1px solid #D0CAC0',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                    overflow: 'hidden',
                  }}
                >
                  <div style={{ height: 4, background: v.strip }} />
                  <div className="p-6">
                    <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 16, color: '#2C2C2C', marginBottom: 6 }}>
                      {v.title}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: 15, color: '#9C968B', lineHeight: 1.7 }}>
                      {v.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RhythmDivider id="about-div-2" bg="white" />

      {/* Bottom CTA */}
      <section style={{ background: '#C8782A' }} className="py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2
            className="mb-4"
            style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 36, color: 'white' }}
          >
            Ready to find your rhythm?
          </h2>
          <p className="mb-8" style={{ fontFamily: 'var(--font-source-sans)', fontSize: 18, color: 'rgba(255,255,255,0.80)', lineHeight: 1.6 }}>
            14-day free trial. Takes 3 minutes to set up. No credit card.
          </p>
          <Link
            href="https://app.cadencehq.co/signup"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold transition-opacity hover:opacity-90"
            style={{ background: 'white', color: '#C8782A', borderRadius: 4, fontFamily: 'var(--font-dm-sans)', fontWeight: 600 }}
          >
            Get started free
          </Link>
          <p className="mt-3 text-sm" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-source-sans)' }}>
            No credit card required.
          </p>
        </div>
      </section>
    </>
  )
}
