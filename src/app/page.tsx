import type { Metadata } from 'next'
import { RhythmMark } from '@/components/brand/RhythmMark'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Cadence — Management tool for first-time managers',
  description: 'Cadence helps new managers run better 1:1s, track delegation, and keep their team in rhythm. Simple. For teams of 3–8. Free while in beta.',
}

const features = [
  {
    title: '1:1s that run themselves',
    description: 'A standing agenda for every direct report. Context, real talk, next actions — in 30 minutes.',
    icon: '🗓',
  },
  {
    title: 'Tasks that stay visible',
    description: "Track what you've delegated and what's actually moving. No more chasing status in Slack.",
    icon: '✅',
  },
  {
    title: 'A team dashboard that tells you the truth',
    description: "Know who's on track, who's overloaded, and who needs a conversation — before it becomes a problem.",
    icon: '📊',
  },
]

const whoItIsFor = [
  'You have 3–8 direct reports',
  'You were promoted from IC in the last year or two',
  "You're still figuring out what the job actually requires",
  "You want a system that fits the way you work, not an HR platform that fits Fortune 500",
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-24 text-center">
        <div className="flex justify-center mb-6">
          <RhythmMark size={64} />
        </div>
        <h1
          className="text-5xl sm:text-6xl font-bold tracking-tight mb-6"
          style={{ fontFamily: 'var(--font-montserrat)', color: '#1C2B3A' }}
        >
          Management in rhythm.
        </h1>
        <p className="text-xl text-[#1C2B3A]/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          For first-time managers who want a real system — not another meeting, doc, or guess.
        </p>
        <Button href="/pricing" size="lg">Try Cadence — free while in beta</Button>
        <p className="mt-4 text-sm text-[#1C2B3A]/50">No credit card required. No commitment.</p>
      </section>

      {/* Problem Statement */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-3xl font-bold mb-8"
            style={{ fontFamily: 'var(--font-montserrat)', color: '#1C2B3A' }}
          >
            The promotion nobody prepares you for.
          </h2>
          <div className="text-lg text-[#1C2B3A]/70 leading-relaxed space-y-4 text-left max-w-2xl mx-auto">
            <p>
              You were great at the job. So they made you manage the people who do your old job.
            </p>
            <p>
              Nobody handed you a system. Nobody told you what &ldquo;being a manager&rdquo; actually means in practice. You&rsquo;re running things in your head, in a doc that&rsquo;s a mess, or in too many Slack threads to count.
            </p>
            <p>
              That&rsquo;s the job right now. Cadence is built to help you do it better.
            </p>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid sm:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-xl p-8 shadow-sm border border-[#1C2B3A]/5">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#1C2B3A' }}>{f.title}</h3>
              <p className="text-[#1C2B3A]/65 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2
            className="text-3xl font-bold mb-8 text-center"
            style={{ fontFamily: 'var(--font-montserrat)', color: '#1C2B3A' }}
          >
            Built for one kind of manager.
          </h2>
          <p className="text-lg text-[#1C2B3A]/70 mb-6 text-center">Cadence is for you if:</p>
          <ul className="space-y-4 mb-8">
            {whoItIsFor.map((item) => (
              <li key={item} className="flex items-start gap-3 text-lg text-[#1C2B3A]/80">
                <span className="text-[#7A9E82] font-bold mt-0.5">–</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[#1C2B3A]/65 text-lg text-center leading-relaxed">
            This isn&rsquo;t Lattice. It&rsquo;s not a performance management suite. It&rsquo;s a rhythm you can actually keep.
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section style={{ background: '#1C2B3A' }} className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Give it a try.
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Free while in beta. Takes 3 minutes to set up. No credit card.
          </p>
          <Button href="/pricing" size="lg" className="bg-[#7A9E82] hover:bg-[#6a8e72] text-white border-0">
            Try Cadence free
          </Button>
        </div>
      </section>
    </>
  )
}
