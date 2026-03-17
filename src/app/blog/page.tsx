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
    strip: '#C8782A',
  },
  {
    slug: 'why-management-tools-fail-small-teams',
    title: 'Why Most Management Tools Fail Small Teams',
    description: "Enterprise HR tools are designed for HR departments. If you manage 6 people, here's why that's a problem — and what to use instead.",
    readTime: '7 min read',
    strip: '#3A7D7B',
  },
  {
    slug: 'management-in-rhythm',
    title: 'What "Management in Rhythm" Actually Means',
    description: "It's not a metaphor. It's a design principle — and the antidote to reactive management.",
    readTime: '6 min read',
    strip: '#7B8F6A',
  },
]

export default function BlogIndex() {
  return (
    <>
      <section style={{ background: '#F5F0E8' }} className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <h1
            className="mb-3"
            style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 'clamp(36px, 5vw, 52px)', color: '#2C2C2C' }}
          >
            The Cadence Blog
          </h1>
          <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: 18, color: '#9C968B' }}>
            Practical guidance for managers building systems that stick.
          </p>
        </div>
      </section>

      <section style={{ background: 'white' }} className="py-20">
        <div className="max-w-2xl mx-auto px-6 space-y-4">
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
                <h2
                  className="mb-3"
                  style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 18, color: '#2C2C2C' }}
                >
                  {post.title}
                </h2>
                <p className="mb-4" style={{ fontFamily: 'var(--font-source-sans)', fontSize: 15, color: '#9C968B', lineHeight: 1.7 }}>
                  {post.description}
                </p>
                <span className="text-xs font-semibold" style={{ color: '#C8782A', fontFamily: 'var(--font-dm-sans)' }}>
                  {post.readTime}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
