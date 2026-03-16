import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What "Management in Rhythm" Actually Means — Cadence Blog',
  description: "It's not a metaphor. It's a design principle — and the antidote to reactive management.",
}

export default function ManagementInRhythm() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-20">
      <Link href="/blog" className="text-[#7A9E82] font-medium text-sm mb-8 inline-block hover:underline">
        ← Back to blog
      </Link>

      <h1
        className="text-4xl font-bold mb-6"
        style={{ fontFamily: 'var(--font-montserrat)', color: '#1C2B3A' }}
      >
        What "Management in Rhythm" Actually Means
      </h1>

      <p className="text-sm text-[#1C2B3A]/50 mb-12">6 min read</p>

      <div className="prose prose-lg max-w-none text-[#1C2B3A]/75 leading-relaxed space-y-6">
        <p>
          When we say "management in rhythm," we're not talking about music or metaphors.
        </p>
        <p>
          We're talking about consistency. Specifically: the kind of consistent, repeatable structure that makes managing people something you do well, instead of something you scramble to keep up with.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#1C2B3A' }}>
          Rhythm is the antidote to reactive management.
        </h2>
        <p>
          Most managers operate reactively. They're responsive to whoever needs them most, whatever problem surfaced today, whatever message came in last.
        </p>
        <p>
          That's not management. That's firefighting.
        </p>
        <p>
          Rhythm means you have a pattern — weekly 1:1s, a consistent way of tracking team progress, a regular moment where you look at the whole picture. The pattern doesn't eliminate the fires. It means you're not discovering them in your email at 5pm on Friday.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#1C2B3A' }}>
          What a rhythm actually looks like.
        </h2>
        <p>A basic management rhythm for a team of 5–8 looks like this:</p>
        <ul className="space-y-3 my-4 pl-4">
          <li className="flex items-start gap-3">
            <span className="text-[#7A9E82] font-bold mt-0.5">–</span>
            <span><strong>Monday:</strong> Quick team pulse — what's in progress, what's blocked?</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#7A9E82] font-bold mt-0.5">–</span>
            <span><strong>Tuesday–Thursday:</strong> 1:1s with direct reports on a rotating schedule</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#7A9E82] font-bold mt-0.5">–</span>
            <span><strong>Friday:</strong> Review what shipped, what's open, what needs next week's attention</span>
          </li>
        </ul>
        <p>
          That's it. 3–4 hours per week of structured, intentional management time. The rest is the actual work of managing — coaching, unblocking, and being available.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#1C2B3A' }}>
          Why it's hard to maintain.
        </h2>
        <p>Rhythm breaks because:</p>
        <ul className="space-y-3 my-4 pl-4">
          <li className="flex items-start gap-3">
            <span className="text-[#7A9E82] font-bold mt-0.5">–</span>
            <span>The tool you use to track 1:1s is too clunky to open every week</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#7A9E82] font-bold mt-0.5">–</span>
            <span>Your task tracking is in a different place than your team goals</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#7A9E82] font-bold mt-0.5">–</span>
            <span>You don't have a dashboard that tells you how the team is doing at a glance</span>
          </li>
        </ul>
        <p>
          When the friction is high enough, the rhythm breaks. Then you're reactive again.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#1C2B3A' }}>
          The rhythm is the product.
        </h2>
        <p>
          Cadence exists because the rhythm is the product. Every feature is in service of the weekly pattern that makes managing consistent — not a feature you use once and forget.
        </p>
        <p>
          Management in rhythm isn't a brand line. It's the design principle.
        </p>
      </div>

      <div className="mt-16 p-8 rounded-2xl text-center" style={{ background: '#1C2B3A' }}>
        <p className="text-white font-semibold text-lg mb-3">Build your management rhythm.</p>
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
