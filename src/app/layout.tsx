import type { Metadata } from 'next'
import { Montserrat, DM_Sans } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import './globals.css'
import { NavClient } from '@/components/nav/NavClient'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cadence — Management in rhythm.',
  description: 'Simple tools for first-time managers. Run better 1:1s, track your team, and build the habits that make you a great manager.',
  openGraph: {
    title: 'Cadence — Management in rhythm.',
    description: 'Simple tools for first-time managers. Run better 1:1s, track your team, and build the habits that make you a great manager.',
    url: 'https://cadencehq.co',
    siteName: 'Cadence',
    images: [
      {
        url: 'https://cadencehq.co/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Cadence — Management in rhythm.',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cadence — Management in rhythm.',
    description: 'Simple tools for first-time managers.',
    images: ['https://cadencehq.co/og-image.svg'],
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
    <html lang="en" className={`${montserrat.variable} ${dmSans.variable}`}>
      <body style={{ background: '#F5F0E8', overflowX: 'hidden', maxWidth: '100vw' }}>
        <NavClient />
        <main>{children}</main>

        {/* Footer */}
        <footer style={{ background: '#1C2B3A' }} className="py-14 mt-0">
          <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center sm:items-start gap-3">
              <Image
                src="/brand/cadence-horizontal-lockup-dark.svg"
                alt="Cadence"
                width={130}
                height={34}
                className="max-w-full h-auto"
                style={{ maxWidth: '130px' }}
              />
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
                © {new Date().getFullYear()} Cadence. All rights reserved.
              </p>
            </div>
            <nav className="flex flex-wrap gap-6 justify-center sm:justify-end">
              {[
                { label: 'Features', href: '/features' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Blog', href: '/blog' },
                { label: 'About', href: '/about' },
                { label: 'Privacy', href: '/privacy' },
                { label: 'Terms', href: '/terms' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="footer-link text-sm"
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
                    e.target.classList.add('visible');
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
