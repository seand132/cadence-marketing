import Link from 'next/link'

export default function StarterPackThankYou() {
  return (
    <div className="max-w-xl mx-auto px-6 py-32 text-center">
      <div className="text-6xl mb-6">📦</div>
      <h1
        className="text-4xl font-bold mb-4"
        style={{ fontFamily: 'var(--font-montserrat)', color: '#1C2B3A' }}
      >
        You&apos;re all set!
      </h1>
      <p className="text-[#1C2B3A]/65 text-lg mb-6">
        Your New Manager Starter Pack is on its way to your inbox. Check for an email from Cadence in the next few minutes.
      </p>
      <p className="text-[#1C2B3A]/45 text-sm mb-10">
        Didn&apos;t get it? Check your spam folder or reply to any Cadence email and we&apos;ll sort it out.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="https://app.cadencehq.co"
          className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-white transition-colors"
          style={{ background: '#1C2B3A' }}
        >
          Try Cadence Free →
        </Link>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-colors border"
          style={{ color: '#1C2B3A', borderColor: '#1C2B3A' }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
