// Shared blog types and constants — safe for both server and client components

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  category: string
  kicker: string
  readTime: string
  author: string
  coverImage: string
  metaTitle?: string
  metaDescription?: string
  ctaHeading?: string
  ctaBody?: string
  shareTitle?: string
  shareUrl?: string
  content: string
  draft?: boolean
  publishDate?: string
}

export const KICKER_MAP: Record<string, { label: string; color: string }> = {
  'One-on-Ones': { label: 'One-on-Ones ·', color: '#7A9E82' },
  '1:1s':        { label: 'One-on-Ones ·', color: '#7A9E82' },
  Delegation:    { label: 'Delegation ·',  color: '#1C2B3A' },
  'Team Culture':{ label: 'Team Culture ·',color: '#C8782A' },
  Performance:   { label: 'Performance ·', color: '#1C2B3A' },
  KPIs:          { label: 'Performance ·', color: '#1C2B3A' },
  Framework:     { label: 'Framework ·',   color: '#7A9E82' },
  Management:    { label: 'Framework ·',   color: '#7A9E82' },
  Feedback:      { label: 'Feedback ·',    color: '#C8782A' },
}
