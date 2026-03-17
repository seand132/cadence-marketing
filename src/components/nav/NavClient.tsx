'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
]

export function NavClient() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close on outside click
  useEffect(() => {
    if (!mobileOpen) return
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [mobileOpen])

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
        ref={navRef}
        className="sticky top-[5px] z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(245,240,232,0.95)' : '#F5F0E8',
          borderBottom: '1px solid #D0CAC0',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        {/* ── Main nav bar ── */}
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

          {/* Links center — desktop only */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
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

          {/* Right: CTA (desktop) + hamburger (mobile) */}
          <div className="flex items-center gap-2">
            {/* CTA — desktop only */}
            <Link
              href="https://app.cadencehq.co/login"
              className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:text-text-primary mr-2"
              style={{ color: '#6B6560', fontFamily: 'var(--font-dm-sans)', textDecoration: 'none' }}
            >
              Log in
            </Link>
            <Link
              href="https://app.cadencehq.co/signup"
              className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{
                background: '#C8782A',
                borderRadius: 4,
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 600,
              }}
            >
              Get started free
            </Link>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '6px 4px',
                display: 'flex',
                flexDirection: 'column',
                gap: 5,
                alignItems: 'center',
                justifyContent: 'center',
                width: 36,
                height: 36,
              }}
            >
              <span
                style={{
                  display: 'block',
                  width: 22,
                  height: 2,
                  background: '#2C2C2C',
                  borderRadius: 1,
                  transition: 'transform 200ms ease',
                  transform: mobileOpen ? 'translateY(7px) rotate(45deg)' : 'none',
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: 22,
                  height: 2,
                  background: '#2C2C2C',
                  borderRadius: 1,
                  transition: 'opacity 200ms ease',
                  opacity: mobileOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: 22,
                  height: 2,
                  background: '#2C2C2C',
                  borderRadius: 1,
                  transition: 'transform 200ms ease',
                  transform: mobileOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
                }}
              />
            </button>
          </div>
        </div>

        {/* ── Mobile dropdown ── */}
        {mobileOpen && (
          <div
            className="md:hidden"
            style={{ borderTop: '1px solid #D0CAC0', background: '#F5F0E8' }}
          >
            <nav className="max-w-6xl mx-auto px-6 py-2 flex flex-col">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: 'block',
                    padding: '12px 0',
                    borderBottom: '1px solid #EBE6DD',
                    fontFamily: 'var(--font-dm-sans)',
                    fontWeight: 500,
                    fontSize: 16,
                    color: '#2C2C2C',
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="https://app.cadencehq.co/signup"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block',
                  margin: '12px 0',
                  padding: '12px 0',
                  background: '#C8782A',
                  color: 'white',
                  textAlign: 'center',
                  borderRadius: 4,
                  fontFamily: 'var(--font-dm-sans)',
                  fontWeight: 600,
                  fontSize: 15,
                  textDecoration: 'none',
                }}
              >
                Get started free
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
