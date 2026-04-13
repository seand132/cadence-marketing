import type { Metadata, Viewport } from 'next'
import { DM_Sans, Source_Sans_3 } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import './globals.css'
import { NavClient } from '@/components/nav/NavClient'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
  weight: ['400', '600'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://cadencehq.co'),
  robots: { index: true, follow: true },
  title: 'Cadence: Management in rhythm.',
  description: 'Cadence gives managers a real system. Run better 1:1s, track your team, and build the habits that make you a great manager.',
  openGraph: {
    title: 'Cadence: Management in rhythm.',
    description: 'Cadence gives managers a real system. Run better 1:1s, track your team, and build the habits that make you a great manager.',
    url: 'https://cadencehq.co',
    siteName: 'Cadence',
    images: [
      {
        url: `https://cadencehq.co/og-image.png?v=${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || 'dev'}`,
        width: 1200,
        height: 630,
        alt: 'Cadence: Management in rhythm.',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cadence: Management in rhythm.',
    description: 'Simple tools for managers.',
    images: [`https://cadencehq.co/og-image.png?v=${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || 'dev'}`],
    creator: '@seand132',
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${sourceSans3.variable}`}>
      <body style={{ background: '#2C2C2C', overflowX: 'hidden', maxWidth: '100vw' }}>
        <NavClient />
        <main style={{ paddingBottom: 80 }}>{children}</main>

        {/* Footer */}
        <footer style={{ background: '#2C2C2C' }} className="py-12">
          <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center sm:items-start gap-3" style={{ minWidth: 0, overflow: "visible" }}>
              <Image
                src="/brand/cadence-horizontal-lockup-dark.svg"
                alt="Cadence"
                width={160}
                height={42}
                className="h-auto"
                style={{ maxWidth: '160px', width: '100%', display: 'block', overflow: 'visible' }}
              />
              <p
                className="text-sm"
                style={{ color: '#9C968B', fontFamily: 'var(--font-source-sans)' }}
              >
                © {new Date().getFullYear()} Cadence. All rights reserved.
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-6 justify-center sm:justify-end">
              {[
                { label: 'Features', href: '/features' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Blog', href: '/blog' },
                { label: 'About', href: '/about' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Privacy', href: '/privacy' },
                { label: 'Terms', href: '/terms' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: '#9C968B', fontFamily: 'var(--font-dm-sans)' }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </footer>

        {/* Scroll reveal script */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var els = document.querySelectorAll('.reveal');
              var io = new IntersectionObserver(function(entries) {
                entries.forEach(function(e) {
                  if (e.isIntersecting) {
                    e.target.classList.add('animate-in');
                    io.unobserve(e.target);
                  }
                });
              }, { threshold: 0.12 });
              els.forEach(function(el) { io.observe(el); });
            })();
          `
        }} />
      </body>
    </html>
  )
}
