import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Cadence',
  description: 'The terms and conditions for using Cadence.',
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

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="mt-4" style={{ fontFamily: 'var(--font-source-sans)', fontSize: 15, color: '#9C968B' }}>
            Last updated: March 2026
          </p>
        </div>
      </section>

      <RhythmDivider id="terms-div-1" bg="#F5F0E8" />

      <section style={{ background: 'white' }} className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="space-y-10" style={{ fontFamily: 'var(--font-source-sans)', fontSize: 16, color: '#9C968B', lineHeight: 1.8 }}>

            <div>
              <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 20, color: '#2C2C2C', marginBottom: 12 }}>
                Agreement to terms
              </h2>
              <p>
                By accessing or using Cadence (&ldquo;the Service&rdquo;), you agree to be bound by these Terms of Service. If you don&rsquo;t agree, please don&rsquo;t use the Service.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 20, color: '#2C2C2C', marginBottom: 12 }}>
                Your account
              </h2>
              <p>
                You are responsible for keeping your account credentials secure. You must be at least 18 years old to use Cadence. You may only create one account per person; accounts are not transferable.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 20, color: '#2C2C2C', marginBottom: 12 }}>
                Acceptable use
              </h2>
              <p>
                You agree not to use Cadence for anything illegal, to harass others, to attempt to reverse-engineer the service, or to use it in any way that disrupts its operation. We reserve the right to terminate accounts that violate these terms.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 20, color: '#2C2C2C', marginBottom: 12 }}>
                Payments and billing
              </h2>
              <p>
                Cadence offers a 14-day free trial with no credit card required. After the trial, access to paid features requires a subscription at $10/month per manager. Subscriptions renew automatically. You can cancel at any time from your account settings. Cancellation takes effect at the end of the current billing period.
              </p>
              <p className="mt-3">
                Refunds are available within 7 days of a charge if you decide the service isn&rsquo;t right for you. After that, we don&rsquo;t offer pro-rated refunds, but you can always cancel future charges.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 20, color: '#2C2C2C', marginBottom: 12 }}>
                Your data
              </h2>
              <p>
                You own your data. Cadence does not claim any rights to content you create. You can export or request deletion of your data at any time. See our Privacy Policy for full details on how we handle data.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 20, color: '#2C2C2C', marginBottom: 12 }}>
                Data export and deletion
              </h2>
              <p>
                When you cancel, you have 30 days to export your data. After 30 days, your data is permanently deleted.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 20, color: '#2C2C2C', marginBottom: 12 }}>
                Service availability
              </h2>
              <p>
                We aim for high availability but cannot guarantee the service will be uninterrupted. We are not liable for any downtime, data loss, or damages arising from use of the service. Cadence is provided &ldquo;as is&rdquo; without warranties of any kind.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 20, color: '#2C2C2C', marginBottom: 12 }}>
                Changes to these terms
              </h2>
              <p>
                We may update these terms from time to time. If we make material changes, we will notify you by email at least 14 days before the changes take effect. Continued use of the service after that constitutes acceptance of the new terms.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 20, color: '#2C2C2C', marginBottom: 12 }}>
                Dispute resolution
              </h2>
              <p>
                Disputes will be resolved through binding arbitration in Arkansas. We&rsquo;ll always give 30 days notice of significant service changes.
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
