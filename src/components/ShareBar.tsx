'use client'

import { useState } from 'react'

interface ShareBarProps {
  title: string
  url: string
}

export function ShareBar({ title, url }: ShareBarProps) {
  const [copied, setCopied] = useState(false)

  const encoded = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const share = {
    x: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encoded}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encoded}`,
    bluesky: `https://bsky.app/intent/compose?text=${encodedTitle}%20${encoded}`,
    imessage: `sms:?body=${encodedTitle}%20${encoded}`,
    email: `mailto:?subject=${encodedTitle}&body=Thought you might find this useful:%0A%0A${encoded}`,
  }

  function copyLink() {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const btnStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '8px 14px',
    border: '1px solid #D0CAC0',
    borderRadius: 6,
    background: 'white',
    color: '#2C2C2C',
    fontFamily: 'var(--font-dm-sans)',
    fontSize: 13,
    fontWeight: 500,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'background 150ms ease, border-color 150ms ease',
  } as const

  return (
    <div style={{ marginBottom: 40 }}>
      <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 11, fontWeight: 600, color: '#7A7468', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>
        Share this
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>

        {/* X */}
        <a href={share.x} target="_blank" rel="noopener noreferrer" style={btnStyle}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          Post on X
        </a>

        {/* LinkedIn */}
        <a href={share.linkedin} target="_blank" rel="noopener noreferrer" style={btnStyle}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LinkedIn
        </a>

        {/* WhatsApp */}
        <a href={share.whatsapp} target="_blank" rel="noopener noreferrer" style={btnStyle}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          WhatsApp
        </a>

        {/* Bluesky */}
        <a href={share.bluesky} target="_blank" rel="noopener noreferrer" style={btnStyle}>
          <svg width="15" height="15" viewBox="0 0 360 320" fill="currentColor">
            <path d="M180 142c-16.3-31.7-60.7-90.8-102-120C38.5-8 0 5.5 0 59c0 30 6.8 69.5 36 82.5C-2 148 0 178 24 196c-14 6-22.5 25-22.5 43C1.5 290 45 320 90 320c49.3 0 70.5-24.7 90-49.3 19.5 24.6 40.7 49.3 90 49.3 45 0 88.5-30 88.5-80.5 0-18-8.5-37-22.5-43 24-18 26-48-12-54.5C362 94.5 360 55 360 59c0-53.5-38.5-67-78-38C240.8 51.2 196.3 110.3 180 142z"/>
          </svg>
          Bluesky
        </a>

        {/* iMessage */}
        <a href={share.imessage} style={btnStyle}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
          </svg>
          iMessage
        </a>

        {/* Email */}
        <a href={share.email} style={btnStyle}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
          Email
        </a>

        {/* Copy link */}
        <button onClick={copyLink} style={{ ...btnStyle, border: copied ? '1px solid #C8782A' : '1px solid #D0CAC0', color: copied ? '#C8782A' : '#2C2C2C' }}>
          {copied ? (
            <>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
              </svg>
              Copy link
            </>
          )}
        </button>

      </div>
    </div>
  )
}
