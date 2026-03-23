import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'content/blog')

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

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(CONTENT_DIR)) return []

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.mdx'))

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '')
    const filePath = path.join(CONTENT_DIR, filename)
    const raw = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(raw)

    return {
      slug: data.slug || slug,
      title: data.title || '',
      date: data.date || '',
      excerpt: data.excerpt || '',
      category: data.category || '',
      kicker: data.kicker || data.category || '',
      readTime: data.readTime || '',
      author: data.author || 'Sean Davis',
      coverImage: data.coverImage || '',
      draft: data.draft === true,
      publishDate: data.publishDate || data.date || '',
      metaTitle: data.metaTitle,
      metaDescription: data.metaDescription,
      ctaHeading: data.ctaHeading,
      ctaBody: data.ctaBody,
      shareTitle: data.shareTitle,
      shareUrl: data.shareUrl,
      content,
    } as BlogPost
  })

  // Filter out drafts and posts scheduled for the future
  const now = new Date()
  const published = posts.filter(p => {
    if (p.draft) return false
    const pubDate = new Date(p.publishDate || p.date)
    return pubDate <= now
  })

  return published.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  // Quick frontmatter check for draft/future before full parse
  const rawCheck = fs.readFileSync(filePath, 'utf-8')
  const { data: meta } = matter(rawCheck)
  if (meta.draft === true) return null
  const pubDate = new Date(meta.publishDate || meta.date || '')
  if (pubDate > new Date()) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  return {
    slug: data.slug || slug,
    title: data.title || '',
    date: data.date || '',
    excerpt: data.excerpt || '',
    category: data.category || '',
    kicker: data.kicker || data.category || '',
    readTime: data.readTime || '',
    author: data.author || 'Sean Davis',
    coverImage: data.coverImage || '',
    draft: data.draft === true,
    publishDate: data.publishDate || data.date || '',
    metaTitle: data.metaTitle,
    metaDescription: data.metaDescription,
    ctaHeading: data.ctaHeading,
    ctaBody: data.ctaBody,
    shareTitle: data.shareTitle,
    shareUrl: data.shareUrl,
    content,
  }
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

export function getKicker(kicker: string): { label: string; color: string } {
  return KICKER_MAP[kicker] ?? { label: kicker + ' ·', color: '#7A9E82' }
}
