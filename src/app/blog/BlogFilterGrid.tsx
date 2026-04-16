'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { BlogPost } from '@/lib/blogTypes'
import { AUTHOR_AVATAR } from '@/lib/author'

const CATEGORIES = ['All', '1:1s', 'Delegation', 'Team Culture', 'KPIs', 'Management', 'Feedback']

const CATEGORY_DISPLAY: Record<string, { label: string; color: string }> = {
  '1:1s':         { label: '1:1s ·',         color: '#7A9E82' },
  'Delegation':   { label: 'Delegation ·',    color: '#1C2B3A' },
  'Team Culture': { label: 'Team Culture ·',  color: '#C8782A' },
  'KPIs':         { label: 'KPIs ·',          color: '#1C2B3A' },
  'Management':   { label: 'Management ·',    color: '#7A9E82' },
  'Feedback':     { label: 'Feedback ·',      color: '#C8782A' },
}

interface Props {
  posts: BlogPost[]
}

function getKickerDisplay(post: BlogPost): { label: string; color: string } {
  return CATEGORY_DISPLAY[post.category] ?? { label: post.category + ' ·', color: '#7A9E82' }
}

function countByCategory(posts: BlogPost[], category: string): number {
  if (category === 'All') return posts.length
  return posts.filter((p) => p.category === category).length
}

export default function BlogFilterGrid({ posts }: Props) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = useMemo(() => {
    let result = posts
    if (activeCategory !== 'All') {
      result = result.filter((p) => p.category === activeCategory)
    }
    const q = searchQuery.trim().toLowerCase()
    if (q) {
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.kicker.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
    }
    return result
  }, [posts, activeCategory, searchQuery])

  function getMetaLabel(): string {
    const q = searchQuery.trim()
    if (q) {
      return filteredPosts.length === 0
        ? `No results for "${q}"`
        : `${filteredPosts.length} result${filteredPosts.length !== 1 ? 's' : ''} for "${q}"`
    }
    if (activeCategory !== 'All') {
      return `${filteredPosts.length} article${filteredPosts.length !== 1 ? 's' : ''} in ${activeCategory}`
    }
    return `${filteredPosts.length} article${filteredPosts.length !== 1 ? 's' : ''}`
  }

  return (
    <>
      {/* ── Navy header with search ── */}
      <section
        style={{ background: '#1C2B3A' }}
        className="pt-14 pb-12 px-6 text-center"
      >
        <p
          className="mb-3"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 700,
            fontSize: 11,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(245,240,232,0.45)',
          }}
        >
          The Cadence Blog
        </p>
        <h1
          className="mb-3"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 700,
            fontSize: 'clamp(32px, 5vw, 52px)',
            color: '#F5F0E8',
            lineHeight: 1.15,
          }}
        >
          Everything you need<br />to manage better.
        </h1>
        <p
          className="mb-8"
          style={{
            fontFamily: 'var(--font-source-sans)',
            fontSize: 16,
            color: 'rgba(245,240,232,0.6)',
            lineHeight: 1.5,
          }}
        >
          Practical guides, frameworks, and resources for frontline managers.
        </p>
        <div className="relative max-w-xl mx-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder='Search — try "delegation" or "1:1"'
            style={{
              width: '100%',
              padding: '14px 48px 14px 18px',
              fontSize: 15,
              borderRadius: 8,
              border: '2px solid rgba(245,240,232,0.15)',
              background: 'rgba(255,255,255,0.08)',
              color: '#F5F0E8',
              outline: 'none',
              fontFamily: 'var(--font-source-sans)',
              transition: 'border-color 0.15s, background 0.15s',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'rgba(245,240,232,0.4)'
              e.currentTarget.style.background = 'rgba(255,255,255,0.12)'
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'rgba(245,240,232,0.15)'
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
            }}
          />
          <span
            className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
            aria-hidden="true"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="6.5" cy="6.5" r="4.5" stroke="rgba(245,240,232,0.4)" strokeWidth="1.5" />
              <path d="M10.5 10.5L14 14" stroke="rgba(245,240,232,0.4)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
        </div>

        {/* ── Cover image strip ── */}
        <div className="relative mt-10 -mb-8" style={{ overflow: 'hidden' }}>
          {/* Left fade */}
          <div
            className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
            style={{ width: 120, background: 'linear-gradient(to right, #1C2B3A, transparent)' }}
          />
          {/* Right fade */}
          <div
            className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
            style={{ width: 120, background: 'linear-gradient(to left, #1C2B3A, transparent)' }}
          />
          {/* Bottom fade into filter bar */}
          <div
            className="absolute left-0 right-0 bottom-0 z-10 pointer-events-none"
            style={{ height: 40, background: 'linear-gradient(to bottom, transparent, #1C2B3A)' }}
          />
          <div className="flex gap-3 justify-center">
            {posts.map((post) => (
              <div
                key={post.slug}
                style={{
                  flexShrink: 0,
                  width: 160,
                  height: 90,
                  borderRadius: 6,
                  overflow: 'hidden',
                  opacity: 0.75,
                  border: '1px solid rgba(245,240,232,0.12)',
                }}
              >
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  width={160}
                  height={90}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category filter bar ── */}
      <div
        style={{
          background: '#F5F0E8',
          borderBottom: '1px solid #DDD8CE',
          padding: '16px 24px',
        }}
      >
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = cat === activeCategory
            const count = countByCategory(posts, cat)
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '6px 14px',
                  borderRadius: 6,
                  fontSize: 13,
                  fontWeight: isActive ? 600 : 500,
                  fontFamily: 'var(--font-dm-sans)',
                  background: isActive ? '#1C2B3A' : 'white',
                  color: isActive ? 'white' : '#6B6560',
                  border: isActive ? '1px solid #1C2B3A' : '1px solid #D0CAC0',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.12s',
                }}
              >
                {cat}
                <span style={{ fontSize: 11, opacity: 0.65, marginLeft: 3 }}>({count})</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* ── Article grid ── */}
      <section style={{ background: 'white' }} className="pt-10 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Results meta */}
          <p
            className="mb-6"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 13,
              color: '#9C968B',
              fontWeight: 500,
            }}
          >
            {getMetaLabel()}
          </p>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 18,
                  fontWeight: 600,
                  color: '#6B6560',
                  marginBottom: 8,
                }}
              >
                No articles found
              </p>
              <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: 14, color: '#9C968B' }}>
                Try a different search term or browse all categories.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => {
                const kicker = getKickerDisplay(post)
                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col"
                    style={{
                      borderRadius: 10,
                      border: '1px solid #D0CAC0',
                      background: '#FAFAF8',
                      overflow: 'hidden',
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'border-color 0.15s, box-shadow 0.15s',
                    }}
                  >
                    {/* Cover image or placeholder */}
                    {post.coverImage ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        style={{ width: '100%', height: 160, objectFit: 'cover', display: 'block' }}
                      />
                    ) : (
                      <div
                        style={{
                          width: '100%',
                          height: 160,
                          background: 'linear-gradient(135deg, #E8E0D4 0%, #D0CAC0 100%)',
                        }}
                      />
                    )}

                    <div className="flex flex-col flex-1 p-6">
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
                        className="mb-2 flex-1"
                        style={{
                          fontFamily: 'var(--font-dm-sans)',
                          fontWeight: 600,
                          fontSize: 16,
                          color: '#2C2C2C',
                          lineHeight: 1.35,
                        }}
                      >
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p
                        className="mb-4"
                        style={
                          {
                            fontFamily: 'var(--font-source-sans)',
                            fontSize: 13,
                            color: '#6B6560',
                            lineHeight: 1.6,
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                          } as React.CSSProperties
                        }
                      >
                        {post.excerpt}
                      </p>

                      {/* Footer */}
                      <div
                        className="flex items-center justify-between pt-4"
                        style={{ borderTop: '1px solid #EBE6DE' }}
                      >
                        <div className="flex items-center gap-2">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={AUTHOR_AVATAR}
                            alt="Sean Davis"
                            style={{
                              width: 24,
                              height: 24,
                              borderRadius: '50%',
                              objectFit: 'cover',
                              border: '1.5px solid #D0CAC0',
                              flexShrink: 0,
                            }}
                          />
                          <span
                            style={{
                              fontFamily: 'var(--font-dm-sans)',
                              fontSize: 12,
                              color: '#9C968B',
                            }}
                          >
                            Sean Davis · {post.readTime}
                          </span>
                        </div>
                        <span
                          className="inline-flex items-center gap-1 text-xs font-semibold"
                          style={{ color: '#C8782A', fontFamily: 'var(--font-dm-sans)' }}
                        >
                          Read
                          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                            <path
                              d="M2.5 6.5h8M7.5 4l3 2.5-3 2.5"
                              stroke="#C8782A"
                              strokeWidth="1.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
