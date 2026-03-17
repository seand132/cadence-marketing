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
    <>
    {/* ── 4-color accent bar — matches app login ── */}
    <div className="flex h-[5px] w-full shrink-0" style={{ position: 'sticky', top: 0, zIndex: 51 }}>
      <div className="flex-1" style={{ backgroundColor: '#C8782A' }} />
      <div className="flex-1" style={{ backgroundColor: '#3A7D7B' }} />
      <div className="flex-1" style={{ backgroundColor: '#7B8F6A' }} />
      <div className="flex-1" style={{ backgroundColor: '#C2604A' }} />
    </div>
    <header
      className="sticky top-[5px] z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(245,240,232,0.95)' : '#F5F0E8',
        borderBottom: '1px solid #D0CAC0',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo left */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/brand/cadence-horizontal-lockup.svg"
            alt="Cadence"
            width={180}
            height={46}
            priority
          />
        </Link>

        {/* Links center */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'Features', href: '/features' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'Blog', href: '/blog' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm transition-colors hover:text-[#2C2C2C]"
              style={{ color: '#9C968B', fontFamily: 'var(--font-dm-sans)', fontWeight: 500 }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA right */}
        <Link
          href="https://app.cadencehq.co/signup"
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{
            background: '#C8782A',
            borderRadius: 4,
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 600,
          }}
        >
          Get started free
        </Link>
      </div>
    </header>
    </>
  )
}
