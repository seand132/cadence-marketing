import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cadence Blog — Management advice for first-time managers',
  description: 'Practical guidance for new managers navigating their first team. 1:1s, delegation, team rhythms, and building systems that stick.',
}

const posts = [
  {
    slug: 'new-manager-survival-guide',
    title: "The New Manager's Survival Guide (No Generic Advice)",
    description: "What actually matters in the first 90 days — not advice written for people who've been doing it for a decade.",
    readTime: '8 min read',
  },
  {
    slug: 'why-management-tools-fail-small-teams',
    title: 'Why Most Management Tools Fail Small Teams',
    description: "Enterprise HR tools are designed for HR departments. If you manage 6 people, here's why that's a problem — and what to use instead.",
    readTime: '7 min read',
  },
  {
    slug: 'management-in-rhythm',
    title: 'What "Management in Rhythm" Actually Means',
    description: "It's not a metaphor. It's a design principle — and the antidote to reactive management.",
    readTime: '6 min read',
  },
]

export default function BlogIndex() {
  return (
    <>
      <section style={{ background: '#1C2B3A' }} className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <h1
            className="mb-3"
            style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 300, fontSize: 'clamp(36px, 5vw, 52px)', color: 'white' }}
          >
            The Cadence Blog
          </h1>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 18, color: 'rgba(255,255,255,0.65)' }}>
            Practical guidance for new managers navigating their first team.
          </p>
        </div>
      </section>

      <section style={{ background: '#F5F0E8' }} className="py-24">
        <div className="max-w-2xl mx-auto px-6 space-y-4">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`block bg-white p-8 reveal reveal-delay-${i + 1} transition-transform hover:-translate-y-1`}
              style={{ border: '1px solid #E0DDD8', borderRadius: 2, borderLeft: '3px solid #7A9E82' }}
            >
              <h2
                className="mb-3"
                style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 18, color: '#1C2B3A' }}
              >
                {post.title}
              </h2>
              <p className="mb-4" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 15, color: '#8A96A0', lineHeight: 1.7 }}>
                {post.description}
              </p>
              <span className="text-xs font-medium" style={{ color: '#7A9E82', fontFamily: 'var(--font-dm-sans)' }}>
                {post.readTime}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
