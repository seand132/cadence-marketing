import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Cadence — Built for the small-team manager',
  description: "Cadence was built by a real estate ops leader who got promoted to managing people and couldn't find a tool that fit. Here's the story.",
}

export default function AboutPage() {
  return (
    <>
      <section style={{ background: '#F5F0E8' }} className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <h1
            style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 'clamp(36px, 5vw, 52px)', color: '#2C2C2C' }}
          >
            Why I built this.
          </h1>
        </div>
      </section>

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
              border: '1px solid #D0CAC0',
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

          {/* CTA */}
          <div className="mt-16 text-center reveal">
            <Link
              href="https://app.cadencehq.co/signup"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90"
              style={{
                background: '#C8782A',
                borderRadius: 4,
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 600,
              }}
            >
              Start free — 14 days
            </Link>
            <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: 14, color: '#9C968B', marginTop: 12 }}>
              No credit card required.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
