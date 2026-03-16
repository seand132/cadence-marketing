export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <h1
        className="text-3xl font-bold mb-4"
        style={{ fontFamily: 'var(--font-montserrat)', color: '#1C2B3A' }}
      >
        Privacy Policy
      </h1>
      <p className="text-[#1C2B3A]/65 text-lg">Full policy coming soon.</p>
      <p className="mt-4 text-[#1C2B3A]/50 text-sm">
        Questions? Email{' '}
        <a href="mailto:hello@cadencehq.co" className="underline">
          hello@cadencehq.co
        </a>
      </p>
    </div>
  )
}
