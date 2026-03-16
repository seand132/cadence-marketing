'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
}

const variantStyles = {
  primary: 'bg-[#1C2B3A] text-white hover:bg-[#2a3f57]',
  secondary: 'border border-[#1C2B3A] text-[#1C2B3A] hover:bg-[#1C2B3A] hover:text-white',
  ghost: 'text-[#1C2B3A] hover:bg-[#1C2B3A]/10',
}

const sizeStyles = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  const cls = `inline-flex items-center justify-center rounded-md font-medium transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`
  if (href) return <Link href={href} className={cls}>{children}</Link>
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  )
}
