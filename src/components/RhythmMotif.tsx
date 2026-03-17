interface RhythmMotifProps {
  color?: string
  opacity?: number
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function RhythmMotif({
  color = '#C8782A',
  opacity = 0.15,
  className = '',
  size = 'md',
}: RhythmMotifProps) {
  const sizes = { sm: 32, md: 48, lg: 72 }
  const w = sizes[size]
  // 4 bars: heights 60%, 100%, 80%, 45% of total — same proportions as the logomark
  const h = w * 2
  const barW = w * 0.18
  const gap = w * 0.08
  const bars = [0.60, 1.0, 0.80, 0.45]

  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      className={className}
      aria-hidden
    >
      {bars.map((ratio, i) => {
        const barH = h * ratio
        const x = i * (barW + gap)
        return (
          <rect
            key={i}
            x={x}
            y={h - barH}
            width={barW}
            height={barH}
            rx={barW * 0.3}
            fill={color}
            fillOpacity={opacity}
          />
        )
      })}
    </svg>
  )
}
