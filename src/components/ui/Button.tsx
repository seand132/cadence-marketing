'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
  style?: React.CSSProperties
}

const variantStyles: Record<string, React.CSSProperties> = {
  primary: { background: '#7A9E82', color: 'white', border: 'none' },
  secondary: { background: 'white', color: '#1C2B3A', border: '1px solid #1C2B3A' },
}

const sizeStyles: Record<string, React.CSSProperties> = {
  sm: { padding: '6px 14px', fontSize: 13 },
  md: { padding: '10px 20px', fontSize: 15 },
  lg: { padding: '14px 32px', fontSize: 17 },
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  style,
}: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    fontWeight: 500,
    fontFamily: 'var(--font-dm-sans)',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'opacity 150ms ease',
    ...variantStyles[variant],
    ...sizeStyles[size],
    ...style,
  }
  if (href) {
    return <Link href={href} className={className} style={baseStyle}>{children}</Link>
  }
  return (
    <button type={type} onClick={onClick} className={className} style={baseStyle}>
      {children}
    </button>
  )
}
