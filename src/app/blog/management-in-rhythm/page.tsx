import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What "Management in Rhythm" Actually Means — Cadence Blog',
  description: "It's not a metaphor. It's a design principle — and the antidote to reactive management.",
}

const POST_TITLE = 'What %22Management in Rhythm%22 Actually Means'
const POST_URL = 'https%3A%2F%2Fcadencehq.co%2Fblog%2Fmanagement-in-rhythm'

export default function ManagementInRhythm() {
  return (
    <>
      <section style={{ background: '#1C2B3A' }} className="py-16">
        <div className="max-w-2xl mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center gap-1 mb-8 text-sm font-medium transition-opacity hover:opacity-70" style={{ color: '#7A9E82', fontFamily: 'var(--font-dm-sans)' }}>
            ← Back to blog
          </Link>
          <h1
            className="mb-4"
            style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 300, fontSize: 'clamp(28px, 4vw, 44px)', color: 'white', lineHeight: 1.2 }}
          >
            What &ldquo;Management in Rhythm&rdquo; Actually Means
          </h1>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-dm-sans)' }}>6 min read</p>
        </div>
      </section>

      <section style={{ background: '#F5F0E8' }} className="py-20">
        <article className="max-w-2xl mx-auto px-6 space-y-5 reveal" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 17, color: 'rgba(28,43,58,0.75)', lineHeight: 1.8 }}>
          <p>When we say &ldquo;management in rhythm,&rdquo; we&rsquo;re not talking about music or metaphors.</p>
          <p>We&rsquo;re talking about consistency. Specifically: the kind of consistent, repeatable structure that makes managing people something you do well, instead of something you scramble to keep up with.</p>

          <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 22, color: '#1C2B3A', paddingTop: 16 }}>
            Rhythm is the antidote to reactive management.
          </h2>
          <p>Most managers operate reactively. They&rsquo;re responsive to whoever needs them most, whatever problem surfaced today, whatever message came in last.</p>
          <p>That&rsquo;s not management. That&rsquo;s firefighting.</p>
          <p>Rhythm means you have a pattern — weekly 1:1s, a consistent way of tracking team progress, a regular moment where you look at the whole picture. The pattern doesn&rsquo;t eliminate the fires. It means you&rsquo;re not discovering them in your email at 5pm on Friday.</p>

          <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 22, color: '#1C2B3A', paddingTop: 16 }}>
            What a rhythm actually looks like.
          </h2>
          <p>A basic management rhythm for a team of 5–8 looks like this:</p>
          <ul className="space-y-3 pl-2">
            {[
              { day: 'Monday', rest: "Quick team pulse — what's in progress, what's blocked?" },
              { day: 'Tuesday–Thursday', rest: '1:1s with direct reports on a rotating schedule.' },
              { day: 'Friday', rest: "Review what shipped, what's open, what needs next week's attention." },
            ].map((item) => (
              <li key={item.day} className="flex items-start gap-3">
                <span style={{ color: '#7A9E82', fontWeight: 700, marginTop: 2 }}>–</span>
                <span><strong style={{ color: '#1C2B3A' }}>{item.day}:</strong> {item.rest}</span>
              </li>
            ))}
          </ul>
          <p>That&rsquo;s it. 3–4 hours per week of structured, intentional management time. The rest is the actual work of managing — coaching, unblocking, and being available.</p>

          <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 22, color: '#1C2B3A', paddingTop: 16 }}>
            Why it&rsquo;s hard to maintain.
          </h2>
          <p>Rhythm breaks because:</p>
          <ul className="space-y-3 pl-2">
            {[
              "The tool you use to track 1:1s is too clunky to open every week",
              "Your task tracking is in a different place than your team goals",
              "You don't have a dashboard that tells you how the team is doing at a glance",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span style={{ color: '#7A9E82', fontWeight: 700, marginTop: 2 }}>–</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>When the friction is high enough, the rhythm breaks. Then you&rsquo;re reactive again.</p>

          <div className="pt-4 p-6 rounded" style={{ background: 'rgba(122,158,130,0.08)', borderLeft: '3px solid #7A9E82' }}>
            <p style={{ color: '#1C2B3A' }}>Cadence exists because the rhythm is the product. Every feature is in service of the weekly pattern that makes managing consistent — not a feature you use once and forget.</p>
            <p className="mt-3 font-medium" style={{ color: '#1C2B3A' }}>Management in rhythm isn&rsquo;t a brand line. It&rsquo;s the design principle.</p>
          </div>

          {/* Share buttons */}
          <div className="pt-8 flex items-center gap-4 flex-wrap">
            <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 13, fontWeight: 600, color: '#9C968B', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Share</span>
            <a
              href={`https://twitter.com/intent/tweet?text=${POST_TITLE}&url=${POST_URL}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ background: '#000', color: 'white', fontFamily: 'var(--font-dm-sans)', textDecoration: 'none' }}
            >
              𝕏 Post
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${POST_URL}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ background: '#0A66C2', color: 'white', fontFamily: 'var(--font-dm-sans)', textDecoration: 'none' }}
            >
              LinkedIn
            </a>
            <a
              href={`mailto:?subject=What "Management in Rhythm" Actually Means&body=https://cadencehq.co/blog/management-in-rhythm`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ background: '#F5F0E8', color: '#2C2C2C', fontFamily: 'var(--font-dm-sans)', textDecoration: 'none', border: '1px solid #D0CAC0' }}
            >
              Email
            </a>
          </div>

          {/* Author block */}
          <div className="pt-8 pb-4 flex items-start gap-4" style={{ borderTop: '1px solid #D0CAC0', marginTop: 24 }}>
            <div
              className="flex-shrink-0 flex items-center justify-center rounded-full"
              style={{ width: 48, height: 48, background: '#C8782A' }}
            >
              <span style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 16, color: 'white' }}>SD</span>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 16, color: '#2C2C2C' }}>Sean Davis</div>
              <div style={{ fontFamily: 'var(--font-source-sans)', fontSize: 14, color: '#9C968B' }}>Founder at Cadence</div>
            </div>
          </div>
        </article>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: '#C8782A' }} className="py-16">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2
            className="mb-6"
            style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 28, color: 'white' }}
          >
            Running a team? Cadence can help.
          </h2>
          <Link
            href="https://app.cadencehq.co/signup"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold transition-opacity hover:opacity-90"
            style={{ background: 'white', color: '#C8782A', borderRadius: 4, fontFamily: 'var(--font-dm-sans)', fontWeight: 600, textDecoration: 'none' }}
          >
            Get started free
          </Link>
        </div>
      </section>
    </>
  )
}
