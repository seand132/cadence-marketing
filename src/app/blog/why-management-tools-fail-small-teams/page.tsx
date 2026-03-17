import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Why Most Management Tools Fail Small Teams — Cadence Blog',
  description: "Enterprise HR tools are designed for HR departments. If you manage 6 people, here's why that's a problem.",
}

export default function WhyToolsFail() {
  return (
    <>
      <section style={{ background: '#1C2B3A' }} className="py-16">
        <div className="max-w-2xl mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center gap-1 mb-8 text-sm font-medium transition-opacity hover:opacity-70" style={{ color: '#7A9E82', fontFamily: 'var(--font-dm-sans)' }}>
            ← Back to blog
          </Link>
          <h1
            className="mb-4"
            style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 300, fontSize: 'clamp(28px, 4vw, 44px)', color: 'white', lineHeight: 1.2 }}
          >
            Why Most Management Tools Fail Small Teams
          </h1>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-dm-sans)' }}>7 min read</p>
        </div>
      </section>

      <section style={{ background: '#F5F0E8' }} className="py-20">
        <article className="max-w-2xl mx-auto px-6 space-y-5 reveal" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 17, color: 'rgba(28,43,58,0.75)', lineHeight: 1.8 }}>
          <p>If you manage 6 people and you try to use an enterprise management platform, here&rsquo;s what happens.</p>
          <p>You sign up. You get a 47-step onboarding flow. Someone from sales emails you. There&rsquo;s a module for &ldquo;compensation management,&rdquo; one for &ldquo;succession planning,&rdquo; and one for &ldquo;workforce analytics.&rdquo;</p>
          <p>None of that is your job. You&rsquo;re trying to run a good 1:1 with your five direct reports and make sure the right things get done this week.</p>
          <p>Most management tools are built for HR departments managing hundreds of employees. They just happen to be sold to individual managers too.</p>

          <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 22, color: '#1C2B3A', paddingTop: 16 }}>
            The mismatch is structural.
          </h2>
          <p>Enterprise HR tools are designed around compliance, reporting, and top-down visibility. The data flows to HR, to leadership, to the org. The manager is the input, not the beneficiary.</p>
          <p>A tool built for the first-time manager does the opposite. It surfaces information to the manager, helps them show up consistently, and stays out of the way. The outputs are better 1:1s, cleaner delegation, and a team that knows what&rsquo;s expected.</p>
          <p>Those are different product goals. Most tools don&rsquo;t serve both.</p>

          <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 22, color: '#1C2B3A', paddingTop: 16 }}>
            Complexity is a bug, not a feature.
          </h2>
          <p>When a tool has 40 features, you don&rsquo;t use any of them well.</p>
          <p>The best systems for small teams are simple by design. Not because the problem is simple — managing 6 people is genuinely hard — but because the system needs to be consistent. A 40-feature tool gets used for 2 weeks, then abandoned. A 5-feature tool that you actually open every week changes how you manage.</p>

          <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 22, color: '#1C2B3A', paddingTop: 16 }}>
            The right tool for the right manager.
          </h2>
          <p>If you&rsquo;re an HR leader managing a 500-person organization — enterprise platforms exist for you. They&rsquo;re good tools for that problem.</p>
          <p>If you&rsquo;re a manager with 3–8 direct reports who got promoted from IC and wants a system that fits your actual workday — most of those tools are overkill.</p>
          <p>That&rsquo;s the gap Cadence fills. Not a better enterprise tool. A tool for the manager the enterprise tools ignore.</p>

          <div className="pt-4 p-6 rounded" style={{ background: 'rgba(122,158,130,0.08)', borderLeft: '3px solid #7A9E82' }}>
            <p style={{ color: '#1C2B3A' }}>The right tool isn&rsquo;t the most powerful one. It&rsquo;s the one you&rsquo;ll actually use.</p>
            <p className="mt-3" style={{ color: '#1C2B3A' }}>If you&rsquo;ve tried and abandoned a management platform in the last year, the problem probably wasn&rsquo;t you.</p>
          </div>
        </article>
      </section>
    </>
  )
}
