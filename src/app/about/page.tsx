import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Cadence — Built for the first-time manager',
  description: 'Cadence was built by a real estate ops leader who got promoted to managing people and couldn\'t find a tool that fit. Here\'s the story.',
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1
        className="text-4xl font-bold mb-12"
        style={{ fontFamily: 'var(--font-montserrat)', color: '#1C2B3A' }}
      >
        Why I built this.
      </h1>

      <div className="space-y-5 text-lg text-[#1C2B3A]/75 leading-relaxed mb-12">
        <p>
          I spent years running operations for real estate portfolios. At some point, that meant managing people — first a few, then more, then a whole team.
        </p>
        <p>
          Nobody trained me. Nobody handed me a system. I bought every management book I could find. None of them fit the way I actually worked. They were either too academic, too enterprise, or built for a kind of manager I wasn't.
        </p>
        <p>
          So I started building the tool I wished existed.
        </p>
        <p>
          Cadence is for the manager who got promoted because they were good at their job — and now has to figure out a completely different job, fast, without much support.
        </p>
        <p>
          It's not a performance management platform. It's not an HR tool. It's a rhythm — a set of simple practices that help you show up for your team consistently.
        </p>
        <p>
          That's it. No enterprise contracts. No 40-feature setup. Just what you need to do the job well.
        </p>
        <p className="font-semibold text-[#1C2B3A]">
          — Sean Davis, Founder
        </p>
      </div>

      {/* Mission Statement */}
      <div
        className="rounded-2xl p-10 text-center"
        style={{ background: '#1C2B3A' }}
      >
        <p className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
          Management in rhythm.
        </p>
        <p className="text-white/70 text-lg leading-relaxed">
          Cadence exists because good managers aren't born — they're made. And making them shouldn't require a 200-person HR team or a $50k software contract.
        </p>
      </div>
    </div>
  )
}
