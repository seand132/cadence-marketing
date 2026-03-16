import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Why Most Management Tools Fail Small Teams — Cadence Blog',
  description: 'Enterprise HR tools are designed for HR departments. If you manage 6 people, here\'s why that\'s a problem — and what the right tool looks like.',
}

export default function WhyManagementToolsFail() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-20">
      <Link href="/blog" className="text-[#7A9E82] font-medium text-sm mb-8 inline-block hover:underline">
        ← Back to blog
      </Link>

      <h1
        className="text-4xl font-bold mb-6"
        style={{ fontFamily: 'var(--font-montserrat)', color: '#1C2B3A' }}
      >
        Why Most Management Tools Fail Small Teams
      </h1>

      <p className="text-sm text-[#1C2B3A]/50 mb-12">7 min read</p>

      <div className="prose prose-lg max-w-none text-[#1C2B3A]/75 leading-relaxed space-y-6">
        <p>
          If you manage 6 people and you try to use Lattice, here's what happens.
        </p>
        <p>
          You sign up. You get a 47-step onboarding flow. Someone from sales emails you. There's a module for "compensation management," one for "succession planning," and one for "workforce analytics."
        </p>
        <p>
          None of that is your job. You're trying to run a good 1:1 with your five direct reports and make sure the right things get done this week.
        </p>
        <p>
          Most management tools are built for HR departments managing hundreds of employees. They just happen to be sold to individual managers too.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#1C2B3A' }}>
          The mismatch is structural.
        </h2>
        <p>
          Enterprise HR tools are designed around compliance, reporting, and top-down visibility. The data flows to HR, to leadership, to the org. The manager is the input, not the beneficiary.
        </p>
        <p>
          A tool built for the first-time manager does the opposite. It surfaces information to the manager, helps them show up consistently, and stays out of the way. The outputs are better 1:1s, cleaner delegation, and a team that knows what's expected.
        </p>
        <p>
          Those are different product goals. Most tools don't serve both.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#1C2B3A' }}>
          Complexity is a bug, not a feature.
        </h2>
        <p>
          When a tool has 40 features, you don't use any of them well.
        </p>
        <p>
          The best systems for small teams are simple by design. Not because the problem is simple — managing 6 people is genuinely hard — but because the system needs to be consistent. A 40-feature tool gets used for 2 weeks, then abandoned. A 5-feature tool that you actually open every week changes how you manage.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#1C2B3A' }}>
          The right tool for the right manager.
        </h2>
        <p>
          If you're an HR leader managing a 500-person organization — Lattice, 15Five, and Workday exist for you. They're good tools for that problem.
        </p>
        <p>
          If you're a manager with 3–8 direct reports who got promoted from IC and wants a system that fits your actual workday — most of those tools are overkill.
        </p>
        <p>
          That's the gap Cadence fills. Not a better enterprise tool. A tool for the manager the enterprise tools ignore.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#1C2B3A' }}>
          The right tool isn't the most powerful one.
        </h2>
        <p>
          The right tool is the one you'll actually use.
        </p>
        <p>
          If you've tried and abandoned a management platform in the last year, the problem probably wasn't you.
        </p>
      </div>

      <div className="mt-16 p-8 rounded-2xl text-center" style={{ background: '#1C2B3A' }}>
        <p className="text-white font-semibold text-lg mb-3">Built for the manager the enterprise tools ignore.</p>
        <a
          href="https://app.cadencehq.co/signup"
          className="inline-block px-6 py-3 rounded-lg font-semibold text-white transition-colors"
          style={{ background: '#7A9E82' }}
        >
          Try Cadence free
        </a>
      </div>
    </article>
  )
}
