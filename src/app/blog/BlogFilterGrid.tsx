'use client'

import { useState } from 'react'
import Link from 'next/link'

const categories = ['All', '1:1s', 'Delegation', 'Team Culture', 'KPIs', 'Management']

const gridPosts = [
  {
    slug: 'how-to-delegate-without-losing-control',
    title: 'How to Delegate Without Losing Control',
    category: 'Delegation',
    readTime: '8 min read',
    date: 'Mar 10, 2025',
    excerpt:
      "You know you should delegate more. You don't. Here's the real reason, and a framework that actually works.",
  },
  {
    slug: 'what-to-track-when-you-manage-a-small-team',
    title: 'What to Track When You Manage a Small Team',
    category: 'KPIs',
    readTime: '7 min read',
    date: 'Mar 3, 2025',
    excerpt:
      "You're either tracking the wrong things or nothing at all. Here's what actually matters for a team of 3 to 8.",
  },
  {
    slug: 'how-to-give-feedback-your-team-will-hear',
    title: 'How to Give Feedback Your Team Will Actually Hear',
    category: 'Team Culture',
    readTime: '7 min read',
    date: 'Feb 24, 2025',
    excerpt:
      "Feedback doesn't fail because managers don't give it. It fails because they don't know how. That's fixable.",
  },
  {
    slug: 'building-team-culture-without-the-corporate-playbook',
    title: 'Building Team Culture Without the Corporate Playbook',
    category: 'Team Culture',
    readTime: '8 min read',
    date: 'Feb 17, 2025',
    excerpt:
      "Culture isn't built at off-sites. It's built in the small decisions you make every day as a manager.",
  },
  {
    slug: 'management-in-rhythm',
    title: 'What "Management in Rhythm" Actually Means',
    category: 'Management',
    readTime: '6 min read',
    date: 'Feb 10, 2025',
    excerpt: "Great teams don't happen by accident. They find their rhythm and keep it.",
  },
  {
    slug: 'new-manager-survival-guide',
    title: "The New Manager's Survival Guide (No Generic Advice)",
    category: 'Management',
    readTime: '7 min read',
    date: 'Feb 3, 2025',
    excerpt: "Nobody hands you a manual when you become a manager. This is as close as it gets.",
  },
  {
    slug: 'why-management-tools-fail-small-teams',
    title: 'Why Most Management Tools Fail Small Teams',
    category: 'Management',
    readTime: '6 min read',
    date: 'Jan 27, 2025',
    excerpt:
      "Most management tools are built for HR, not managers. Here's why that matters and what to look for instead.",
  },
]

export default function BlogFilterGrid() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredPosts =
    activeFilter === 'All' ? gridPosts : gridPosts.filter((p) => p.category === activeFilter)

  return (
    <>
      {/* Category filter */}
      <section style={{ background: 'white' }} className="pt-12 pb-6">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className="px-4 py-2 rounded-full text-sm"
                style={{
                  background: activeFilter === cat ? '#C8782A' : '#F5F0E8',
                  color: activeFilter === cat ? 'white' : '#6B6560',
                  fontFamily: 'var(--font-dm-sans)',
                  fontWeight: activeFilter === cat ? 600 : 500,
                  letterSpacing: '0.02em',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section style={{ background: 'white' }} className="pt-4 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 gap-6">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block"
                style={{
                  borderRadius: 8,
                  border: '1px solid #D0CAC0',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.07)',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  background: 'white',
                }}
              >
                <div style={{ height: 6, background: '#C8782A' }} />
                <div className="p-7">
                  <div className="mb-3">
                    <span
                      className="px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase"
                      style={{
                        background: '#FEF3E2',
                        color: '#C8782A',
                        fontFamily: 'var(--font-dm-sans)',
                        letterSpacing: '0.06em',
                      }}
                    >
                      {post.category}
                    </span>
                  </div>
                  <h2
                    className="mb-3"
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontWeight: 600,
                      fontSize: 17,
                      color: '#2C2C2C',
                      lineHeight: 1.3,
                    }}
                  >
                    {post.title}
                  </h2>
                  <p
                    className="mb-5"
                    style={{
                      fontFamily: 'var(--font-source-sans)',
                      fontSize: 15,
                      color: '#6B6560',
                      lineHeight: 1.65,
                    }}
                  >
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 13, color: '#9C968B' }}>
                      {post.readTime} · {post.date}
                    </span>
                    <span
                      className="inline-flex items-center gap-1 text-sm font-semibold"
                      style={{ color: '#C8782A', fontFamily: 'var(--font-dm-sans)' }}
                    >
                      Read
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M3 7h8M8 4l3 3-3 3"
                          stroke="#C8782A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
