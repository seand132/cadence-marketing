'use client'

import { useState } from 'react'
import { CATEGORIES, type Category } from './faq-data'

function AccordionSection({ category }: { category: Category }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div style={{ marginBottom: 48 }}>
      <h2
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontWeight: 600,
          fontSize: 20,
          color: '#F5F0E8',
          borderLeft: '3px solid #C8782A',
          paddingLeft: 14,
          marginBottom: 20,
          letterSpacing: '0.04em',
        }}
      >
        {category.label}
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {category.items.map((item, i) => (
          <div
            key={i}
            style={{
              border: '1px solid #D0CAC0',
              borderRadius: 8,
              overflow: 'hidden',
              background: 'white',
            }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              style={{
                width: '100%',
                padding: '16px 20px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                textAlign: 'left',
                gap: 16,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontWeight: 500,
                  fontSize: 15,
                  color: '#2C2C2C',
                }}
              >
                {item.q}
              </span>
              <span
                style={{
                  fontSize: 20,
                  color: '#9C968B',
                  lineHeight: 1,
                  transition: 'transform 200ms ease',
                  transform: openIndex === i ? 'rotate(45deg)' : 'none',
                  flexShrink: 0,
                }}
              >
                +
              </span>
            </button>
            {openIndex === i && (
              <div
                style={{
                  padding: '0 20px 18px',
                  fontFamily: 'var(--font-source-sans)',
                  fontSize: 15,
                  color: '#9C968B',
                  lineHeight: 1.7,
                }}
              >
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function FaqAccordion() {
  return (
    <>
      {CATEGORIES.map((cat) => (
        <AccordionSection key={cat.id} category={cat} />
      ))}
    </>
  )
}
