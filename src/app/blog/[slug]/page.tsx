import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { ShareBar } from '@/components/ShareBar'
import { getAllPosts, getPostBySlug, getKicker } from '@/lib/blog'

const AUTHOR_AVATAR = 'https://whzwyvjerrsyqjmktxcg.supabase.co/storage/v1/object/public/avatars/06d4938c-f40d-46dd-b24c-3a2596e0c8a1/avatar.jpg?t=1773037991750'

// MDX component overrides - style markdown elements to match the brand
const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      style={{
        fontFamily: 'var(--font-dm-sans)',
        fontWeight: 700,
        fontSize: 24,
        color: '#2C2C2C',
        marginTop: 40,
        marginBottom: 16,
      }}
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p style={{ marginBottom: 20 }} {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul style={{ paddingLeft: 24, margin: '24px 0' }} {...props} />
  ),
  ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol style={{ paddingLeft: 24, margin: '24px 0' }} {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li style={{ marginBottom: 12 }} {...props} />
  ),
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLElement>) => (
    <blockquote
      style={{
        borderLeft: '4px solid #C8782A',
        paddingLeft: 24,
        margin: '32px 0',
        fontFamily: 'var(--font-dm-sans)',
        fontSize: 22,
        fontStyle: 'italic',
        color: '#2C2C2C',
        lineHeight: 1.4,
      }}
      {...props}
    />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong style={{ fontWeight: 700 }} {...props} />
  ),
  hr: () => (
    <hr style={{ border: 'none', borderTop: '1px solid #D0CAC0', margin: '32px 0' }} />
  ),
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  const title = post.metaTitle || `${post.title} | Cadence Blog`
  const description = post.metaDescription || post.excerpt
  const ogImageUrl = `https://cadencehq.co/blog/${post.slug}/opengraph-image`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://cadencehq.co/blog/${post.slug}`,
      siteName: 'Cadence',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'Sean Davis'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageUrl],
      creator: '@seand132',
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const kicker = getKicker(post.kicker || post.category)

  // Format date nicely
  const dateObj = new Date(post.date)
  const formattedDate = dateObj.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <div style={{ background: '#F5F0E8', minHeight: '100vh' }}>
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '24px 24px 0' }}>
        <Link
          href="/blog"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 13,
            color: '#9C968B',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          ← All posts
        </Link>
      </div>

      <article style={{ maxWidth: 780, margin: '0 auto', padding: '40px 24px 80px' }}>
        {/* Kicker */}
        <p
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 700,
            fontSize: 11,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: kicker.color,
            marginBottom: 16,
          }}
        >
          {kicker.label}
        </p>

        {/* Title */}
        <h1
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 700,
            fontSize: 'clamp(32px, 5vw, 44px)',
            color: '#2C2C2C',
            lineHeight: 1.15,
            marginBottom: 16,
          }}
        >
          {post.title}
        </h1>

        {/* Excerpt */}
        <p
          style={{
            fontFamily: 'var(--font-source-sans)',
            fontSize: 20,
            color: '#6B6560',
            lineHeight: 1.5,
            marginBottom: 24,
          }}
        >
          {post.excerpt}
        </p>

        {/* Cover image */}
        {post.coverImage && (
          <div style={{ marginBottom: 32, borderRadius: 8, overflow: 'hidden' }}>
            <Image
              src={post.coverImage}
              alt={post.title}
              width={1200}
              height={630}
              style={{ width: '100%', height: 'auto', display: 'block' }}
              priority
            />
          </div>
        )}

        {/* Author meta */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: 40,
            paddingBottom: 24,
            borderBottom: '1px solid #D0CAC0',
          }}
        >
          <Image
            src={AUTHOR_AVATAR}
            alt="Sean Davis"
            width={40}
            height={40}
            style={{
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid #D0CAC0',
              flexShrink: 0,
            }}
          />
          <div>
            <div
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 600,
                fontSize: 14,
                color: '#2C2C2C',
              }}
            >
              {post.author}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-source-sans)',
                fontSize: 13,
                color: '#9C968B',
              }}
            >
              Founder at Cadence · {formattedDate} · {post.readTime}
            </div>
          </div>
        </div>

        {/* MDX Content */}
        <div
          style={{
            fontFamily: 'var(--font-source-sans)',
            fontSize: 17,
            color: '#2C2C2C',
            lineHeight: 1.75,
          }}
        >
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>

        {/* ShareBar */}
        <ShareBar
          title={post.shareTitle || post.title}
          url={post.shareUrl || `https://cadencehq.co/blog/${post.slug}`}
        />

        {/* Author block */}
        <div
          style={{
            marginTop: 64,
            padding: 24,
            background: 'white',
            border: '1px solid #D0CAC0',
            borderRadius: 8,
            display: 'flex',
            gap: 16,
            alignItems: 'flex-start',
          }}
        >
          <Image
            src={AUTHOR_AVATAR}
            alt="Sean Davis"
            width={56}
            height={56}
            style={{
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid #D0CAC0',
              flexShrink: 0,
            }}
          />
          <div>
            <div
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 700,
                fontSize: 16,
                color: '#2C2C2C',
                marginBottom: 4,
              }}
            >
              Sean Davis
            </div>
            <div
              style={{
                fontFamily: 'var(--font-source-sans)',
                fontSize: 13,
                color: '#C8782A',
                marginBottom: 8,
              }}
            >
              Founder at Cadence
            </div>
            <p
              style={{
                fontFamily: 'var(--font-source-sans)',
                fontSize: 14,
                color: '#6B6560',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Sean Davis leads operations across multifamily, commercial, and mixed-use real estate portfolios. After years managing teams without the right tools, he built Cadence. He writes about clarity, accountability, and what it actually takes to lead well.
            </p>
          </div>
        </div>

        {/* CTA block */}
        <div
          style={{
            marginTop: 48,
            padding: '40px 32px',
            background: '#C8782A',
            borderRadius: 8,
            textAlign: 'center',
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 700,
              fontSize: 24,
              color: 'white',
              marginBottom: 12,
            }}
          >
            {post.ctaHeading || 'Ready to try Cadence?'}
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-source-sans)',
              fontSize: 16,
              color: 'rgba(255,255,255,0.85)',
              marginBottom: 24,
            }}
          >
            {post.ctaBody ||
              'Structured 1:1s, goal tracking, and team visibility. 14-day free trial.'}
          </p>
          <a
            href="https://app.cadencehq.co/signup"
            style={{
              display: 'inline-block',
              background: 'white',
              color: '#C8782A',
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 600,
              fontSize: 15,
              padding: '12px 28px',
              borderRadius: 4,
              textDecoration: 'none',
            }}
          >
            Start free
          </a>
        </div>
      </article>
    </div>
  )
}
