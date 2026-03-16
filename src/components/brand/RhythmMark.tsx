interface Props { size?: number; className?: string }

export function RhythmMark({ size = 48, className }: Props) {
  const bars = [
    { height: 0.6, color: '#1C2B3A' },
    { height: 1.0, color: '#7A9E82' },
    { height: 0.75, color: '#3A7D7B' },
    { height: 0.5, color: '#C2604A' },
  ]
  const barW = size / 6
  const gap = barW / 2
  const totalW = bars.length * barW + (bars.length - 1) * gap

  return (
    <svg
      width={totalW}
      height={size}
      viewBox={`0 0 ${totalW} ${size}`}
      className={className}
      aria-hidden="true"
    >
      {bars.map((bar, i) => {
        const h = bar.height * size
        const x = i * (barW + gap)
        const y = size - h
        return <rect key={i} x={x} y={y} width={barW} height={h} fill={bar.color} rx={2} />
      })}
    </svg>
  )
}
