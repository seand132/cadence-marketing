import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import path from 'path'

export const alt = 'Cadence: Lead Without Losing Your Mind'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Load DM Sans from @fontsource package (Node runtime - readFileSync)
const fontBoldPath = path.join(process.cwd(), 'node_modules/@fontsource/dm-sans/files/dm-sans-latin-700-normal.woff')
const fontRegularPath = path.join(process.cwd(), 'node_modules/@fontsource/dm-sans/files/dm-sans-latin-400-normal.woff')
const fontBold = readFileSync(fontBoldPath)
const fontRegular = readFileSync(fontRegularPath)

// RhythmDivider bars (all 16 from the exact pattern)
const PATTERN_W = 192
const tiles = Math.ceil(1200 / PATTERN_W) + 1
const rhythmBars = [
  { x: 0,   y: 34, h: 6,  color: '#C2604A' },
  { x: 12,  y: 14, h: 26, color: '#C2604A' },
  { x: 24,  y: 30, h: 10, color: '#3A7D7B' },
  { x: 36,  y: 8,  h: 32, color: '#3A7D7B' },
  { x: 48,  y: 32, h: 8,  color: '#7B8F6A' },
  { x: 60,  y: 20, h: 20, color: '#7B8F6A' },
  { x: 72,  y: 34, h: 6,  color: '#C8782A' },
  { x: 84,  y: 6,  h: 34, color: '#C8782A' },
  { x: 96,  y: 30, h: 10, color: '#3A7D7B' },
  { x: 108, y: 22, h: 18, color: '#3A7D7B' },
  { x: 120, y: 34, h: 6,  color: '#7B8F6A' },
  { x: 132, y: 12, h: 28, color: '#7B8F6A' },
  { x: 144, y: 32, h: 8,  color: '#C2604A' },
  { x: 156, y: 18, h: 22, color: '#C2604A' },
  { x: 168, y: 34, h: 6,  color: '#C8782A' },
  { x: 180, y: 10, h: 30, color: '#C8782A' },
]

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: '#F5F0E8',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontFamily: 'DM Sans, sans-serif',
        }}
      >
        {/* Logo top-left - bars from cadence-horizontal-lockup.svg + wordmark text */}
        {/* SVG viewBox="0 0 330 120", rendered at 160px wide = scale 0.485 */}
        <div
          style={{
            position: 'absolute',
            top: 48,
            left: 60,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          {/* The 4 amber rhythmic bars from the SVG logomark */}
          {/* Original bars in SVG: translate(50,60) applied, then each rect */}
          {/* Scaled to fit ~40px tall: scale factor ~0.5 */}
          <svg width="36" height="58" viewBox="0 0 76 120">
            {/* x=22,y=52,w=9,h=32 | x=37,y=34,w=9,h=50 | x=52,y=44,w=9,h=40 | x=67,y=56,w=9,h=28 */}
            <rect x="0"  y="18" width="9" height="32" rx="4.5" fill="#C8782A"/>
            <rect x="15" y="0"  width="9" height="50" rx="4.5" fill="#C8782A"/>
            <rect x="30" y="10" width="9" height="40" rx="4.5" fill="#C8782A"/>
            <rect x="45" y="22" width="9" height="28" rx="4.5" fill="#C8782A"/>
          </svg>
          {/* Wordmark "cadence" - same font weight (500 in SVG, use 500/600 here) */}
          <span
            style={{
              fontSize: 28,
              fontWeight: 500,
              fontFamily: 'DM Sans',
              color: '#2C2C2C',
              letterSpacing: '0.08em',
            }}
          >
            cadence
          </span>
        </div>

        {/* Main headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 32,
          }}
        >
          <span
            style={{
              fontSize: 80,
              fontWeight: 700,
              color: '#2C2C2C',
              letterSpacing: '-2px',
              lineHeight: 1.1,
              fontFamily: 'DM Sans',
            }}
          >
            Lead Without
          </span>
          <span
            style={{
              fontSize: 80,
              fontWeight: 700,
              color: '#2C2C2C',
              letterSpacing: '-2px',
              lineHeight: 1.1,
              fontFamily: 'DM Sans',
            }}
          >
            Losing Your Mind
          </span>
        </div>

        {/* Subheadline */}
        <span
          style={{
            fontSize: 26,
            fontWeight: 400,
            color: '#3A7D7B',
            fontFamily: 'DM Sans',
          }}
        >
          Build rhythm. Build confidence.
        </span>

        {/* cadencehq.co bottom-right */}
        <span
          style={{
            position: 'absolute',
            bottom: 56,
            right: 40,
            fontSize: 16,
            fontWeight: 400,
            color: 'rgba(44,44,44,0.5)',
            fontFamily: 'DM Sans',
          }}
        >
          cadencehq.co
        </span>

        {/* RhythmDivider bottom strip - individual divs, no SVG pattern */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: 1200,
            height: 40,
            overflow: 'hidden',
            display: 'flex',
          }}
        >
          {Array.from({ length: tiles }).flatMap((_, t) =>
            rhythmBars.map((bar, i) => (
              <div
                key={`${t}-${i}`}
                style={{
                  position: 'absolute',
                  left: t * PATTERN_W + bar.x,
                  top: bar.y,
                  width: 7,
                  height: bar.h,
                  borderRadius: 3.5,
                  background: bar.color,
                }}
              />
            ))
          )}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'DM Sans', data: fontBold,    style: 'normal', weight: 700 },
        { name: 'DM Sans', data: fontRegular, style: 'normal', weight: 400 },
      ],
    }
  )
}
