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
    <div className="max-w-3xl mx-auto px-6 py-20">
      <div className="mb-12">
        <h1
          className="text-4xl font-bold mb-4"
          style={{ fontFamily: 'var(--font-montserrat)', color: '#1C2B3A' }}
        >
          The Cadence Blog
        </h1>
        <p className="text-lg text-[#1C2B3A]/65">
          Practical guidance for new managers navigating their first team.
        </p>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block bg-white rounded-xl p-8 border border-[#1C2B3A]/5 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-bold mb-3" style={{ color: '#1C2B3A' }}>
              {post.title}
            </h2>
            <p className="text-[#1C2B3A]/65 leading-relaxed mb-4">{post.description}</p>
            <span className="text-sm text-[#7A9E82] font-medium">{post.readTime}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
