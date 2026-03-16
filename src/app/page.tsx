import { RhythmMark } from '@/components/brand/RhythmMark'
import { Button } from '@/components/ui/Button'

const features = [
  {
    title: 'Structured 1:1s',
    description: 'Never walk into a 1:1 unprepared again. Cadence gives you a proven agenda framework, auto-populated talking points, and shared notes your team actually reads.',
    icon: '🗓',
  },
  {
    title: 'Goal Alignment',
    description: 'Connect individual goals to team outcomes. Set OKRs that cascade, track progress without nagging, and celebrate wins that actually matter.',
    icon: '🎯',
  },
  {
    title: 'Team Check-ins',
    description: 'A lightweight async pulse — not a survey nobody reads. Know how your team is doing before problems surface, with zero meeting overhead.',
    icon: '📡',
  },
]

const testimonials = [
  {
    quote: 'Cadence made me feel like a real manager in my first 90 days. I stopped winging it.',
    author: 'Jordan L.',
    role: 'Engineering Manager',
  },
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
          Management in Rhythm
        </h1>
        <p className="text-xl text-[#1C2B3A]/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          The operating system for new managers. Run better 1:1s, set real goals, and build habits that stick.
        </p>
        <Button href="/pricing" size="lg">Start your free trial</Button>
        <p className="mt-4 text-sm text-[#1C2B3A]/50">14 days free. No credit card required.</p>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: 'var(--font-montserrat)', color: '#1C2B3A' }}>
          Built for managers who want to get it right
        </h2>
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

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-12" style={{ fontFamily: 'var(--font-montserrat)', color: '#1C2B3A' }}>
            What managers say
          </h2>
          <div className="grid sm:grid-cols-1 gap-8 max-w-xl mx-auto">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="bg-[#EEF0EC] rounded-xl p-8">
                <p className="text-lg text-[#1C2B3A]/80 italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                <footer className="text-sm font-semibold text-[#1C2B3A]">
                  {t.author} <span className="font-normal text-[#1C2B3A]/50">· {t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
          <p className="mt-8 text-[#1C2B3A]/40 text-sm">More testimonials coming soon.</p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: '#1C2B3A' }} className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Ready to lead with confidence?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Join managers who run better teams with Cadence.
          </p>
          <Button href="/pricing" size="lg" className="bg-[#7A9E82] hover:bg-[#6a8e72] text-white border-0">
            Start free trial
          </Button>
        </div>
      </section>
    </>
  )
}
