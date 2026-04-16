'use client'

import { useEffect, useState } from 'react'

const DOT_COLORS = ['#C2604A', '#C8782A', '#7B8F6A']

interface ChromeProps {
  dark: boolean
  url: string
}

function Chrome({ dark, url }: ChromeProps) {
  return (
    <div
      style={{
        background: dark ? 'rgba(0,0,0,0.3)' : '#EBE6DD',
        padding: '10px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        borderBottom: dark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #D0CAC0',
      }}
    >
      <div style={{ display: 'flex', gap: 5 }}>
        {DOT_COLORS.map((c, i) => (
          <div
            key={i}
            style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.75 }}
          />
        ))}
      </div>
      <div
        style={{
          flex: 1,
          background: dark ? 'rgba(255,255,255,0.15)' : 'white',
          borderRadius: 4,
          padding: '3px 12px',
          fontSize: 11,
          color: dark ? 'rgba(255,255,255,0.7)' : '#9C968B',
          fontFamily: 'var(--font-dm-sans)',
        }}
      >
        {url}
      </div>
    </div>
  )
}

interface ScreenshotLightboxProps {
  src: string
  alt: string
  url: string
  /** Pass marginTop or other layout overrides that differ from the default frame style */
  containerStyle?: React.CSSProperties
  /** Use dark chrome variant (navy CTA section) */
  dark?: boolean
}

export default function ScreenshotLightbox({
  src,
  alt,
  url,
  containerStyle,
  dark = false,
}: ScreenshotLightboxProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open])

  return (
    <>
      {/* ── Thumbnail ─────────────────────────────────────────── */}
      <div
        style={{
          borderRadius: 10,
          overflow: 'hidden',
          border: dark ? '1px solid rgba(255,255,255,0.25)' : '1px solid #D0CAC0',
          boxShadow: dark
            ? '0 16px 50px rgba(0,0,0,0.25)'
            : '0 12px 40px rgba(0,0,0,0.12)',
          cursor: 'pointer',
          transition: 'transform 0.15s ease, box-shadow 0.15s ease',
          ...containerStyle,
        }}
        onClick={() => setOpen(true)}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLDivElement
          el.style.transform = 'scale(1.01)'
          el.style.boxShadow = dark
            ? '0 20px 60px rgba(0,0,0,0.35)'
            : '0 16px 50px rgba(0,0,0,0.18)'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLDivElement
          el.style.transform = 'scale(1)'
          el.style.boxShadow = dark
            ? '0 16px 50px rgba(0,0,0,0.25)'
            : '0 12px 40px rgba(0,0,0,0.12)'
        }}
        role="button"
        tabIndex={0}
        aria-label={`View ${alt} larger`}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setOpen(true)
          }
        }}
      >
        <Chrome dark={dark} url={url} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} style={{ width: '100%', maxWidth: '100%', display: 'block' }} />
      </div>

      {/* ── Modal overlay ─────────────────────────────────────── */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.75)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '5vh 5vw',
            animation: 'lightboxFadeIn 0.15s ease',
          }}
          onClick={() => setOpen(false)}
        >
          <style>{`@keyframes lightboxFadeIn { from { opacity: 0 } to { opacity: 1 } }`}</style>
          <div
            style={{
              width: '85vw',
              maxHeight: '90vh',
              borderRadius: 10,
              overflow: 'hidden',
              border: '1px solid #D0CAC0',
              boxShadow: '0 24px 80px rgba(0,0,0,0.4)',
              display: 'flex',
              flexDirection: 'column',
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Chrome bar with close button */}
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <Chrome dark={false} url={url} />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                style={{
                  position: 'absolute',
                  right: 12,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#9C968B',
                  fontSize: 16,
                  lineHeight: 1,
                  padding: '4px 8px',
                  fontFamily: 'var(--font-dm-sans)',
                }}
              >
                ✕
              </button>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              style={{
                width: '100%',
                maxHeight: 'calc(90vh - 42px)',
                objectFit: 'contain',
                display: 'block',
                background: 'white',
              }}
            />
          </div>
        </div>
      )}
    </>
  )
}
