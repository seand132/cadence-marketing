import type { Metadata } from 'next'
import HomePage from '../page'

export const metadata: Metadata = {
  title: 'Cadence: Management in rhythm.',
  description: 'Cadence gives managers a real system. Run better 1:1s, track your team, and build the habits that make you a great manager.',
  openGraph: {
    title: 'Cadence: Management in rhythm.',
    description: 'Stop running your team from memory. Simple tools for managers who give a damn.',
    url: 'https://cadencehq.co',
    siteName: 'Cadence',
    images: [
      {
        url: 'https://cadencehq.co/og-image-v2.png',
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
    description: 'Stop running your team from memory. Simple tools for managers who give a damn.',
    images: ['https://cadencehq.co/og-image-v2.png'],
    creator: '@seand132',
  },
}

export default HomePage
