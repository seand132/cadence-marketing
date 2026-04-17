'use client'

import { useState } from 'react'
import Script from 'next/script'

const CONSENT_KEY = 'cadence_cookie_consent'
const CONSENT_DATE_KEY = 'cadence_cookie_consent_date'
const GA_ID = process.env.NEXT_PUBLIC_GA_ID

type ConsentState = 'loading' | 'unseen' | 'granted' | 'denied'

function isConsentExpired(dateStr: string): boolean {
  const consentDate = new Date(dateStr)
  const twelveMonthsAgo = new Date()
  twelveMonthsAgo.setFullYear(twelveMonthsAgo.getFullYear() - 1)
  return consentDate < twelveMonthsAgo
}

function readStoredConsent(): ConsentState {
  if (typeof window === 'undefined') return 'loading'
  const stored = localStorage.getItem(CONSENT_KEY) as 'granted' | 'denied' | null
  const storedDate = localStorage.getItem(CONSENT_DATE_KEY)
  if (stored && storedDate && !isConsentExpired(storedDate)) return stored
  return 'unseen'
}

export function CookieConsent() {
  const [consent, setConsent] = useState<ConsentState>(readStoredConsent)

  function handleAccept() {
    localStorage.setItem(CONSENT_KEY, 'granted')
    localStorage.setItem(CONSENT_DATE_KEY, new Date().toISOString())
    setConsent('granted')
  }

  function handleDecline() {
    localStorage.setItem(CONSENT_KEY, 'denied')
    localStorage.setItem(CONSENT_DATE_KEY, new Date().toISOString())
    setConsent('denied')
  }

  return (
    <>
      {/* GA4 — only loads when consent is granted */}
      {consent === 'granted' && GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {/* Consent banner */}
      {consent === 'unseen' && (
        <div
          role="dialog"
          aria-label="Cookie consent"
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
            background: '#2C2C2C',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 24,
            flexWrap: 'wrap',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 14,
              color: '#7A7468',
              margin: 0,
              lineHeight: 1.5,
              flex: 1,
              minWidth: 0,
            }}
          >
            We use cookies to understand how Cadence is used. It helps us make it better.
          </p>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexShrink: 0 }}>
            <button
              onClick={handleDecline}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 14,
                color: '#7A7468',
                padding: '8px 4px',
                textDecoration: 'underline',
              }}
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              style={{
                background: '#C8782A',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 600,
                fontSize: 14,
                color: 'white',
                padding: '8px 20px',
                borderRadius: 4,
                transition: 'background 150ms ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#D08835' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#C8782A' }}
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  )
}
