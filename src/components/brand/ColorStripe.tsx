interface Props { height?: number; className?: string }

export function ColorStripe({ height = 4, className }: Props) {
  return (
    <div className={`flex w-full ${className ?? ''}`} style={{ height }}>
      <div className="flex-1" style={{ background: '#3A7D7B' }} />
      <div className="flex-1" style={{ background: '#7A9E82' }} />
      <div className="flex-1" style={{ background: '#C2604A' }} />
    </div>
  )
}
