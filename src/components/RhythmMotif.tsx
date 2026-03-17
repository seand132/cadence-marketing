interface RhythmMotifProps {
  color?: string
  opacity?: number
  className?: string
  scale?: number
}

export function RhythmMotif({ color = '#C8782A', opacity = 0.12, className = '', scale = 1 }: RhythmMotifProps) {
  // Exact proportions from cadence-logomark.svg
  // Bars: short(44), tall(70), medium(56), short-medium(38)
  // All bars same width (12), gaps of 10 between
  const barW = 12 * scale
  const gap = 10 * scale
  const bars = [
    { h: 44 * scale, y: 12 * scale },   // bar 1: short
    { h: 70 * scale, y: 0 },             // bar 2: tall (tallest)
    { h: 56 * scale, y: 14 * scale },    // bar 3: medium
    { h: 38 * scale, y: 32 * scale },    // bar 4: short-medium
  ]
  const totalW = 4 * barW + 3 * gap
  const totalH = 70 * scale

  return (
    <svg
      width={totalW}
      height={totalH}
      viewBox={`0 0 ${totalW} ${totalH}`}
      className={className}
      aria-hidden
    >
      {bars.map((bar, i) => (
        <rect
          key={i}
          x={i * (barW + gap)}
          y={bar.y}
          width={barW}
          height={bar.h}
          rx={barW * 0.5}
          fill={color}
          fillOpacity={opacity}
        />
      ))}
    </svg>
  )
}
