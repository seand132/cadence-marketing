import Link from 'next/link'

export default function ThankYouPage() {
  return (
    <div className="max-w-xl mx-auto px-6 py-32 text-center">
      <div className="text-6xl mb-6">🎉</div>
      <h1
        className="text-4xl font-bold mb-4"
        style={{ fontFamily: 'var(--font-montserrat)', color: '#1C2B3A' }}
      >
        You&apos;re in! Welcome to Cadence
      </h1>
      <p className="text-[#1C2B3A]/65 text-lg mb-10">
        Check your inbox for next steps. Your 14-day trial starts now.
      </p>
      <Link
        href="https://app.cadencehq.co"
        className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-white transition-colors"
        style={{ background: '#1C2B3A' }}
      >
        Open Cadence →
      </Link>
    </div>
  )
}
