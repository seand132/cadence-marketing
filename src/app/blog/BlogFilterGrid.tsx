'use client'

import { useState } from 'react'
import Link from 'next/link'

const categories = ['All', '1:1s', 'Delegation', 'Team Culture', 'KPIs', 'Management']

// Category → kicker label + color
const KICKER_MAP: Record<string, { label: string; color: string }> = {
  '1:1s':         { label: 'One-on-Ones ·',  color: '#7A9E82' },
  'Delegation':   { label: 'Delegation ·',   color: '#1C2B3A' },
  'Team Culture': { label: 'Team Culture ·', color: '#C8782A' },
  'KPIs':         { label: 'Performance ·',  color: '#1C2B3A' },
  'Management':   { label: 'Framework ·',    color: '#7A9E82' },
  'Feedback':     { label: 'Feedback ·',     color: '#C8782A' },
}

const gridPosts = [
  {
    slug: 'the-11-that-actually-works',
    title: 'The 1:1 That Actually Works',
    category: '1:1s',
    readTime: '8 min read',
    date: 'Mar 17, 2026',
    excerpt: "Most 1:1s are status updates with better lighting. Here's how to turn yours into the most valuable 30 minutes of your week.",
  },
  {
    slug: 'how-to-delegate-without-losing-control',
    title: 'How to Delegate Without Losing Control',
    category: 'Delegation',
    readTime: '8 min read',
    date: 'Mar 10, 2025',
    excerpt: "You know you should delegate more. You don't. Here's the real reason, and a framework that actually works.",
  },
  {
    slug: 'what-to-track-when-you-manage-a-small-team',
    title: 'What to Track When You Manage a Small Team',
    category: 'KPIs',
    readTime: '7 min read',
    date: 'Mar 3, 2025',
    excerpt: "You're either tracking the wrong things or nothing at all. Here's what actually matters for a team of 3 to 8.",
  },
  {
    slug: 'how-to-give-feedback-your-team-will-hear',
    title: 'How to Give Feedback Your Team Will Actually Hear',
    category: 'Team Culture',
    readTime: '7 min read',
    date: 'Feb 24, 2025',
    excerpt: "Feedback doesn't fail because managers don't give it. It fails because they don't know how. That's fixable.",
  },
  {
    slug: 'building-team-culture-without-the-corporate-playbook',
    title: 'Building Team Culture Without the Corporate Playbook',
    category: 'Team Culture',
    readTime: '8 min read',
    date: 'Feb 17, 2025',
    excerpt: "Culture isn't built at off-sites. It's built in the small decisions you make every day as a manager.",
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
    excerpt: "Most management tools are built for HR, not managers. Here's why that matters and what to look for instead.",
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
                className="px-4 py-2 rounded-full text-sm transition-all"
                style={{
                  background: activeFilter === cat ? '#1C2B3A' : '#F5F0E8',
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
            {filteredPosts.map((post, idx) => {
              const kicker = KICKER_MAP[post.category] ?? { label: 'Article ·', color: '#7A9E82' }
              const isOrphan = filteredPosts.length % 2 !== 0 && idx === filteredPosts.length - 1
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block group"
                  style={{
                    borderRadius: 10,
                    border: '1px solid #D0CAC0',
                    overflow: 'hidden',
                    textDecoration: 'none',
                    background: '#FAFAF8',
                    transition: 'border-color 0.15s, box-shadow 0.15s',
                    ...(isOrphan ? { gridColumn: '1 / -1', maxWidth: '50%', margin: '0 auto', width: '100%' } : {}),
                  }}
                >
                  <div className="p-7">
                    {/* Kicker */}
                    <p
                      className="mb-2"
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontWeight: 700,
                        fontSize: 10,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: kicker.color,
                      }}
                    >
                      {kicker.label}
                    </p>
                    {/* Title */}
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
                    {/* Excerpt */}
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
                    {/* Footer row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {/* Author avatar */}
                        <img src="https://whzwyvjerrsyqjmktxcg.supabase.co/storage/v1/object/public/avatars/06d4938c-f40d-46dd-b24c-3a2596e0c8a1/avatar.jpg?t=1773037991750" alt="Sean Davis" style={{ width: 24, height: 24, borderRadius: '50%', objectFit: 'cover', flexShrink: 0, border: '1.5px solid #D0CAC0' }} />
                        <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 12, color: '#9C968B' }}>
                          Sean Davis · {post.readTime}
                        </span>
                      </div>
                      <span
                        className="inline-flex items-center gap-1 text-xs font-semibold"
                        style={{ color: '#C8782A', fontFamily: 'var(--font-dm-sans)' }}
                      >
                        Read
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                          <path d="M2.5 6.5h8M7.5 4l3 2.5-3 2.5" stroke="#C8782A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
