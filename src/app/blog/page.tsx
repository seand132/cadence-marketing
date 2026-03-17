import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cadence Blog — Management advice for managers',
  description: 'Practical guidance for managers building systems that stick. 1:1s, delegation, team rhythms, and building systems that stick.',
}

const posts = [
  {
    slug: 'new-manager-survival-guide',
    title: "The New Manager's Survival Guide (No Generic Advice)",
    description: "What actually matters in the first 90 days — not advice written for people who've been doing it for a decade.",
    readTime: '8 min read',
    category: 'Getting started',
    strip: '#C8782A',
  },
  {
    slug: 'why-management-tools-fail-small-teams',
    title: 'Why Most Management Tools Fail Small Teams',
    description: "Enterprise HR tools are designed for HR departments. If you manage 6 people, here's why that's a problem — and what to use instead.",
    readTime: '7 min read',
    category: 'Tools',
    strip: '#3A7D7B',
  },
  {
    slug: 'management-in-rhythm',
    title: 'What "Management in Rhythm" Actually Means',
    description: "It's not a metaphor. It's a design principle — and the antidote to reactive management.",
    readTime: '6 min read',
    category: 'Philosophy',
    strip: '#7B8F6A',
  },
  {
    slug: 'the-11-that-actually-works',
    title: 'The 1:1 That Actually Works',
    description: "Most 1:1s are status updates with a human face. Here's how to turn them into the most valuable 30 minutes of your week.",
    readTime: '7 min read',
    category: '1:1s',
    strip: '#C2604A',
  },
  {
    slug: 'how-to-delegate-without-losing-control',
    title: 'How to Delegate Without Losing Control',
    description: "Delegation doesn't fail because people can't do the work. It fails because the handoff was incomplete.",
    readTime: '7 min read',
    category: 'Delegation',
    strip: '#3A7D7B',
  },
  {
    slug: 'what-to-track-when-you-manage-a-small-team',
    title: 'What to Track When You Manage a Small Team',
    description: "You don't need a dashboard with 40 metrics. You need about five signals that tell you whether your team is healthy.",
    readTime: '7 min read',
    category: 'Metrics',
    strip: '#7B8F6A',
  },
  {
    slug: 'how-to-give-feedback-your-team-will-hear',
    title: 'How to Give Feedback Your Team Will Actually Hear',
    description: "Feedback fails not because it's too harsh — but because it's too rare, too vague, and too far from the moment that mattered.",
    readTime: '6 min read',
    category: 'Feedback',
    strip: '#C8782A',
  },
  {
    slug: 'building-team-culture-without-the-corporate-playbook',
    title: 'Building Team Culture Without the Corporate Playbook',
    description: "Culture isn't ping pong tables or off-sites. It's what your team does when no one is telling them what to do.",
    readTime: '7 min read',
    category: 'Culture',
    strip: '#5A7A6A',
  },
]

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

export default function BlogIndex() {
  return (
    <>
      <section style={{ background: '#F5F0E8' }} className="py-20">
        <div className="max-w-3xl mx-auto px-6">
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
            The Cadence Blog
          </div>
          <h1
            className="mb-3"
            style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 'clamp(36px, 5vw, 52px)', color: '#2C2C2C', lineHeight: 1.15 }}
          >
            Written for managers who actually manage.
          </h1>
          <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: 18, color: '#9C968B', lineHeight: 1.6 }}>
            Practical guidance for managers building systems that stick.
          </p>
        </div>
      </section>

      <RhythmDivider id="blog-div-1" bg="#F5F0E8" />

      <section style={{ background: 'white' }} className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-white feature-card reveal"
                style={{
                  borderRadius: 8,
                  border: '1px solid #D0CAC0',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                  overflow: 'hidden',
                  textDecoration: 'none',
                }}
              >
                <div style={{ height: 6, background: post.strip }} />
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="px-2 py-0.5 rounded text-xs font-semibold uppercase"
                      style={{
                        background: '#F5F0E8',
                        color: '#9C968B',
                        fontFamily: 'var(--font-dm-sans)',
                        letterSpacing: '0.06em',
                      }}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs" style={{ color: '#9C968B', fontFamily: 'var(--font-dm-sans)' }}>
                      {post.readTime}
                    </span>
                  </div>
                  <h2
                    className="mb-3"
                    style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 18, color: '#2C2C2C', lineHeight: 1.3 }}
                  >
                    {post.title}
                  </h2>
                  <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: 15, color: '#9C968B', lineHeight: 1.7 }}>
                    {post.description}
                  </p>
                  <div className="mt-5 flex items-center gap-1 text-sm font-semibold" style={{ color: '#C8782A', fontFamily: 'var(--font-dm-sans)' }}>
                    Read more
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5">
                      <path d="M3 7h8M8 4l3 3-3 3" stroke="#C8782A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}

            {/* Coming soon card */}
            <div
              className="bg-white reveal"
              style={{
                borderRadius: 8,
                border: '1px dashed #D0CAC0',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 200,
                padding: 32,
              }}
            >
              <div className="text-center">
                <div style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 14, color: '#9C968B', marginBottom: 8 }}>
                  More coming soon
                </div>
                <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: 13, color: '#9C968B', lineHeight: 1.6 }}>
                  New articles every week on 1:1s, delegation, and team rhythm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RhythmDivider id="blog-div-2" bg="white" />

      {/* CTA */}
      <section style={{ background: '#C8782A' }} className="py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2
            className="mb-4"
            style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 36, color: 'white' }}
          >
            Put the advice into practice.
          </h2>
          <p className="mb-8" style={{ fontFamily: 'var(--font-source-sans)', fontSize: 18, color: 'rgba(255,255,255,0.80)', lineHeight: 1.6 }}>
            Cadence is built around exactly these ideas. Try it free for 14 days.
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
