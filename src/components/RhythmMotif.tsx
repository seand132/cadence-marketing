interface RhythmMotifProps {
  color?: string
  opacity?: number
  className?: string
  scale?: number
}

export function RhythmMotif({ color = '#C8782A', opacity = 0.12, className = '', scale = 1 }: RhythmMotifProps) {
  // Exact heights from cadence-logomark.svg — the brand rhythm
  const BAR_W = 12 * scale
  const GAP   = 10 * scale
  const HEIGHTS = [44 * scale, 70 * scale, 56 * scale, 38 * scale]
  const maxH  = 70 * scale
  const totalW = 4 * BAR_W + 3 * GAP

  return (
    <svg
      width={totalW}
      height={maxH}
      viewBox={`0 0 ${totalW} ${maxH}`}
      className={className}
      aria-hidden
    >
      {HEIGHTS.map((h, i) => (
        <rect
          key={i}
          x={i * (BAR_W + GAP)}
          y={maxH - h}
          width={BAR_W}
          height={h}
          rx={BAR_W * 0.5}
          fill={color}
          fillOpacity={opacity}
        />
      ))}
    </svg>
  )
}
