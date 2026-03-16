'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function NavClient() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(245,240,232,0.92)' : '#F5F0E8',
        borderBottom: '1px solid rgba(28,43,58,0.10)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/brand/cadence-logo-lockup.svg"
            alt="Cadence"
            width={140}
            height={36}
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'Features', href: '/features' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'Blog', href: '/blog' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors"
              style={{ color: '#1C2B3A', fontFamily: 'var(--font-dm-sans)' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="https://app.cadencehq.co/signup"
          className="inline-flex items-center justify-center px-4 py-2 rounded text-sm font-medium text-white transition-colors"
          style={{ background: '#7A9E82', fontFamily: 'var(--font-dm-sans)' }}
          onMouseOver={(e) => (e.currentTarget.style.background = '#6a8e72')}
          onMouseOut={(e) => (e.currentTarget.style.background = '#7A9E82')}
        >
          Try Cadence free
        </Link>
      </div>
    </header>
  )
}
