import type { Metadata } from 'next'
import { Montserrat, DM_Sans } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import './globals.css'
import { ColorStripe } from '@/components/brand/ColorStripe'
import { Button } from '@/components/ui/Button'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cadence — Management in Rhythm',
  description: 'The operating system for new managers. Run better 1:1s, set real goals, and build habits that stick.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${dmSans.variable}`}>
      <body style={{ background: '#EEF0EC' }}>
        <ColorStripe />
        <header className="border-b border-[#1C2B3A]/10 bg-[#EEF0EC]">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/brand/cadence-logo-lockup.svg"
                alt="Cadence"
                width={140}
                height={36}
                priority
              />
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/pricing" className="text-[#1C2B3A] font-medium hover:text-[#3A7D7B] transition-colors">
                Pricing
              </Link>
              <Button href="/pricing" size="sm">Start free trial</Button>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-[#1C2B3A]/10 mt-20 py-8">
          <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#1C2B3A]/60">
            <p>© {new Date().getFullYear()} Cadence. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-[#1C2B3A] transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-[#1C2B3A] transition-colors">Terms</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
