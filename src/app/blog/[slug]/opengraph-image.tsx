import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import path from 'path'
import { getPostBySlug, getKicker, getAllPosts } from '@/lib/blog'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const fontBoldPath = path.join(process.cwd(), 'node_modules/@fontsource/dm-sans/files/dm-sans-latin-700-normal.woff')
const fontRegularPath = path.join(process.cwd(), 'node_modules/@fontsource/dm-sans/files/dm-sans-latin-400-normal.woff')
const fontBold = readFileSync(fontBoldPath)
const fontRegular = readFileSync(fontRegularPath)

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

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

interface Props {
  params: Promise<{ slug: string }>
}

export default async function Image({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  const title = post?.title ?? 'Cadence Blog'
  const kicker = post ? getKicker(post.kicker || post.category) : { label: 'Blog', color: '#C8782A' }

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: '#F5F0E8',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 80px',
          position: 'relative',
          fontFamily: 'DM Sans, sans-serif',
        }}
      >
        {/* Logo top-left */}
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
          <svg width="36" height="58" viewBox="0 0 76 120">
            <rect x="0"  y="18" width="9" height="32" rx="4.5" fill="#C8782A"/>
            <rect x="15" y="0"  width="9" height="50" rx="4.5" fill="#C8782A"/>
            <rect x="30" y="10" width="9" height="40" rx="4.5" fill="#C8782A"/>
            <rect x="45" y="22" width="9" height="28" rx="4.5" fill="#C8782A"/>
          </svg>
          <span
            style={{
              fontSize: 24,
              fontWeight: 500,
              fontFamily: 'DM Sans',
              color: '#2C2C2C',
              letterSpacing: '0.08em',
            }}
          >
            cadence
          </span>
        </div>

        {/* Kicker */}
        <span
          style={{
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: kicker.color,
            marginBottom: 20,
            fontFamily: 'DM Sans',
          }}
        >
          {kicker.label}
        </span>

        {/* Post title */}
        <span
          style={{
            fontSize: title.length > 60 ? 52 : 64,
            fontWeight: 700,
            color: '#2C2C2C',
            lineHeight: 1.1,
            letterSpacing: '-1px',
            fontFamily: 'DM Sans',
            maxWidth: 960,
          }}
        >
          {title}
        </span>

        {/* Domain bottom-right */}
        <span
          style={{
            position: 'absolute',
            bottom: 56,
            right: 60,
            fontSize: 16,
            fontWeight: 400,
            color: 'rgba(44,44,44,0.45)',
            fontFamily: 'DM Sans',
          }}
        >
          cadencehq.co/blog
        </span>

        {/* Rhythm strip bottom */}
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
