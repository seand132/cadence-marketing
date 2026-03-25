import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Cadence',
  description: 'How Cadence collects, uses, and protects your data.',
}

function RhythmDivider({ id, bg }: { id: string; bg: string }) {
  return (
    <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0, background: bg }} aria-hidden="true">
      <svg width="100%" height="40" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={id} x="0" y="0" width="192" height="40" patternUnits="userSpaceOnUse">
            <rect x="0"   y="34" width="7" height="6"  rx="3.5" fill="#C2604A" />
            <rect x="12"  y="14" width="7" height="26" rx="3.5" fill="#C2604A" />
            <rect x="24"  y="30" width="7" height="10" rx="3.5" fill="#3A7D7B" />
            <rect x="36"  y="8"  width="7" height="32" rx="3.5" fill="#3A7D7B" />
            <rect x="48"  y="32" width="7" height="8"  rx="3.5" fill="#7B8F6A" />
            <rect x="60"  y="20" width="7" height="20" rx="3.5" fill="#7B8F6A" />
            <rect x="72"  y="34" width="7" height="6"  rx="3.5" fill="#C8782A" />
            <rect x="84"  y="6"  width="7" height="34" rx="3.5" fill="#C8782A" />
            <rect x="96"  y="30" width="7" height="10" rx="3.5" fill="#3A7D7B" />
            <rect x="108" y="22" width="7" height="18" rx="3.5" fill="#3A7D7B" />
            <rect x="120" y="34" width="7" height="6"  rx="3.5" fill="#7B8F6A" />
            <rect x="132" y="12" width="7" height="28" rx="3.5" fill="#7B8F6A" />
            <rect x="144" y="32" width="7" height="8"  rx="3.5" fill="#C2604A" />
            <rect x="156" y="18" width="7" height="22" rx="3.5" fill="#C2604A" />
            <rect x="168" y="34" width="7" height="6"  rx="3.5" fill="#C8782A" />
            <rect x="180" y="10" width="7" height="30" rx="3.5" fill="#C8782A" />
          </pattern>
        </defs>
        <rect width="100%" height="40" fill={`url(#${id})`} />
      </svg>
    </div>
  )
}

export default function PrivacyPage() {
  return (
    <>
      <section style={{ background: '#F5F0E8' }} className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div
            className="inline-flex mb-6 px-3 py-1 rounded-full uppercase"
            style={{
              background: '#FDF6EE',
              color: '#C8782A',
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 600,
              fontSize: 11,
              letterSpacing: '0.1em',
            }}
          >
            Legal
          </div>
          <h1
            style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 44px)', color: '#2C2C2C', lineHeight: 1.2 }}
          >
            Privacy Policy
          </h1>
          <p className="mt-4" style={{ fontFamily: 'var(--font-source-sans)', fontSize: 15, color: '#9C968B' }}>
            Last updated: March 2026 &middot; Effective: March 18, 2026
          </p>
        </div>
      </section>

      <RhythmDivider id="privacy-div-1" bg="#F5F0E8" />

      <section style={{ background: 'white' }} className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="space-y-10" style={{ fontFamily: 'var(--font-source-sans)', fontSize: 16, color: '#9C968B', lineHeight: 1.8 }}>

            <div>
              <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 20, color: '#2C2C2C', marginBottom: 12 }}>
                What we collect
              </h2>
              <p>
                Cadence collects information you provide directly: your email address when you sign up, and the data you create inside the app (1:1 notes, tasks, goals, team structure). We do not sell your data to anyone.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 20, color: '#2C2C2C', marginBottom: 12 }}>
                How we use it
              </h2>
              <p>
                We use your information to provide and improve the Cadence service, to communicate with you about your account, and to process payments. We do not use your data to train AI models or for advertising purposes.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 20, color: '#2C2C2C', marginBottom: 12 }}>
                Data storage and security
              </h2>
              <p>
                Your data is stored in Supabase with row-level security enabled. This means your team data is only accessible to you and the accounts you explicitly grant access to. We use encrypted connections (HTTPS) for all data in transit.
              </p>
              <p className="mt-3">
                Data is encrypted in transit (HTTPS/TLS) and at rest (AES-256 via Supabase). Stripe handles all payment data - we never store credit card numbers.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 20, color: '#2C2C2C', marginBottom: 12 }}>
                Third-party services
              </h2>
              <p>
                Cadence uses the following third-party services to operate: Supabase (database), Stripe (payments), and Vercel (hosting). Each has its own privacy policy governing how they handle data.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 20, color: '#2C2C2C', marginBottom: 12 }}>
                Cookies
              </h2>
              <p>
                We use cookies to keep you signed in and to remember your preferences. We do not use tracking cookies for advertising.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 20, color: '#2C2C2C', marginBottom: 12 }}>
                Your rights
              </h2>
              <p>
                You can request a copy of your data, ask us to delete your account and associated data, or correct any inaccuracies at any time. Email us at{' '}
                <a href="mailto:hello@cadencehq.co" style={{ color: '#C8782A', textDecoration: 'underline' }}>
                  hello@cadencehq.co
                </a>{' '}
                and we will respond within 5 business days.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 20, color: '#2C2C2C', marginBottom: 12 }}>
                Data retention
              </h2>
              <p>
                <strong style={{ color: '#2C2C2C' }}>DATA RETENTION</strong> - When you cancel your account, we delete your workspace data within 30 days. Backups are purged within 60 days. You can request immediate deletion at{' '}
                <a href="mailto:privacy@cadencehq.co" style={{ color: '#C8782A', textDecoration: 'underline' }}>
                  privacy@cadencehq.co
                </a>
                .
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 20, color: '#2C2C2C', marginBottom: 12 }}>
                EU users (GDPR)
              </h2>
              <p>
                <strong style={{ color: '#2C2C2C' }}>EU USERS</strong> - If you&rsquo;re in the European Economic Area, you have rights under GDPR including access, correction, erasure, and data portability. Contact{' '}
                <a href="mailto:privacy@cadencehq.co" style={{ color: '#C8782A', textDecoration: 'underline' }}>
                  privacy@cadencehq.co
                </a>{' '}
                to exercise these rights.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 20, color: '#2C2C2C', marginBottom: 12 }}>
                California users (CCPA)
              </h2>
              <p>
                <strong style={{ color: '#2C2C2C' }}>CALIFORNIA USERS</strong> - Under CCPA, you have the right to know what personal data we collect and to request deletion. We do not sell personal information. Contact{' '}
                <a href="mailto:privacy@cadencehq.co" style={{ color: '#C8782A', textDecoration: 'underline' }}>
                  privacy@cadencehq.co
                </a>
                .
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 20, color: '#2C2C2C', marginBottom: 12 }}>
                Changes to this policy
              </h2>
              <p>
                If we make material changes to this policy, we will notify you by email and update the date at the top of this page.
              </p>
            </div>

            <div
              style={{
                borderRadius: 8,
                border: '1px solid #D0CAC0',
                padding: '24px 28px',
                background: '#F5F0E8',
              }}
            >
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 15, color: '#2C2C2C', marginBottom: 6 }}>
                Questions?
              </p>
              <p>
                Email us at{' '}
                <a href="mailto:hello@cadencehq.co" style={{ color: '#C8782A', textDecoration: 'underline' }}>
                  hello@cadencehq.co
                </a>
                . We read every message.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
