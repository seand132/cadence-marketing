import type { Metadata } from 'next'
import Link from 'next/link'
import { ShareBar } from '@/components/ShareBar'

export const metadata: Metadata = {
  title: "The New Manager's Survival Guide (No Generic Advice) — Cadence Blog",
  description: "Most management advice is written for people who've been doing it for a decade. Here's what actually matters in the first 90 days.",
}

const POST_TITLE = "The New Manager's Survival Guide (No Generic Advice)"
const POST_URL = 'https://cadencehq.co/blog/new-manager-survival-guide'

export default function NewManagerSurvivalGuide() {
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
            The New Manager&rsquo;s Survival Guide (No Generic Advice)
          </h1>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-dm-sans)' }}>7 min read</p>
        </div>
      </section>

      <section style={{ background: '#F5F0E8' }} className="py-20">
        <article className="max-w-2xl mx-auto px-6 space-y-5 reveal" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 17, color: 'rgba(28,43,58,0.75)', lineHeight: 1.8 }}>
          <p>Most management advice is written for people who&rsquo;ve been doing it for a decade.</p>
          <p>You need advice for month one. The month when you&rsquo;re not sure what your job is, your team isn&rsquo;t sure how to treat you, and the thing you used to be great at isn&rsquo;t your job anymore.</p>
          <p>Here&rsquo;s what actually matters in the first 90 days.</p>

          <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 22, color: '#1C2B3A', paddingTop: 16 }}>
            Accept that you&rsquo;re a beginner again.
          </h2>
          <p>You were promoted because you were good at something. That thing is no longer the job. Your job now is to make other people good at that thing.</p>
          <p>This sounds obvious. It doesn&rsquo;t feel obvious when you&rsquo;re three weeks in and someone on your team is doing something worse than you&rsquo;d do it, and you have to let them.</p>
          <p>The shift from &ldquo;doer&rdquo; to &ldquo;enabler&rdquo; is the hardest part of becoming a manager. The sooner you accept you&rsquo;re learning a new skill from scratch, the faster you&rsquo;ll get good at it.</p>

          <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 22, color: '#1C2B3A', paddingTop: 16 }}>
            Set up a rhythm before you need one.
          </h2>
          <p>Most new managers wait until something breaks to build structure. Then they&rsquo;re reacting: a performance issue they didn&rsquo;t see coming, a team member who&rsquo;s burning out, a deadline that slipped.</p>
          <p>Rhythm means consistency before crisis. Specifically:</p>
          <ul className="space-y-3 pl-2">
            {[
              { label: 'Weekly 1:1s', rest: 'with every direct report. Standing agenda. 30 minutes.' },
              { label: 'A simple task system', rest: "to track what you've delegated and what's open." },
              { label: 'A weekly read', rest: "on the team — who's on track, who needs a conversation." },
            ].map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <span style={{ color: '#7A9E82', fontWeight: 700, marginTop: 2 }}>–</span>
                <span><strong style={{ color: '#1C2B3A' }}>{item.label}</strong> {item.rest}</span>
              </li>
            ))}
          </ul>
          <p>None of this is complicated. All of it is skipped by most first-time managers.</p>

          <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 22, color: '#1C2B3A', paddingTop: 16 }}>
            Your 1:1s are probably reactive. Fix them.
          </h2>
          <p>If your 1:1 agenda is &ldquo;so what&rsquo;s going on with you?&rdquo; — you don&rsquo;t have a 1:1. You have a check-in.</p>
          <p>A working 1:1 has a standing structure. Something like:</p>
          <ul className="space-y-3 pl-2">
            {[
              '15 min: What\'s top of mind for you? What\'s in the way?',
              '10 min: What do I need to know about the team / project / anything?',
              '5 min: What are your next actions, and what do you need from me?',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span style={{ color: '#7A9E82', fontWeight: 700, marginTop: 2 }}>–</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>Takes 20 minutes to design. Saves hours of miscommunication per month.</p>

          <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500, fontSize: 22, color: '#1C2B3A', paddingTop: 16 }}>
            Don&rsquo;t manage in your head.
          </h2>
          <p>New managers accumulate context. They remember who said what, what got delegated, who&rsquo;s struggling with what. They hold all of it in their head.</p>
          <p>This works for a few weeks. Then someone gets a surprise in their performance review, or you forget you told someone to do something, or you have no idea what the team&rsquo;s output was last quarter.</p>
          <p>Get a system — even a basic one. Somewhere you track open delegations, 1:1 notes, and team goals. It doesn&rsquo;t have to be fancy. It has to exist.</p>

          <div className="pt-4 p-6 rounded" style={{ background: 'rgba(122,158,130,0.08)', borderLeft: '3px solid #7A9E82' }}>
            <p style={{ color: '#1C2B3A', fontStyle: 'normal' }}>The first-time manager job is not that complicated. It&rsquo;s just different. Different skills, different cadence, different definition of doing well.</p>
            <p className="mt-3" style={{ color: '#1C2B3A' }}>Build a rhythm. Stay consistent. Get feedback early. Adjust.</p>
            <p className="mt-3 font-medium" style={{ color: '#1C2B3A' }}>That&rsquo;s the whole job.</p>
          </div>

          <ShareBar title="The New Manager Survival Guide" url="https://cadencehq.co/blog/new-manager-survival-guide" />

          <ShareBar title="The New Manager Survival Guide" url="https://cadencehq.co/blog/new-manager-survival-guide" />

          {/* Author block */}
          <div className="pt-8 pb-4 flex items-start gap-4" style={{ borderTop: '1px solid #D0CAC0', marginTop: 24 }}>
            <div
              className="flex-shrink-0 flex items-center justify-center rounded-full"
              style={{ width: 48, height: 48, background: '#C8782A' }}
            >
              <span style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 16, color: 'white' }}>SD</span>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 16, color: '#2C2C2C' }}>Sean Davis</div>
              <div style={{ fontFamily: 'var(--font-source-sans)', fontSize: 14, color: '#9C968B' }}>Founder at Cadence</div>
            </div>
          </div>
        </article>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: '#C8782A' }} className="py-16">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2
            className="mb-6"
            style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 28, color: 'white' }}
          >
            Running a team? Cadence can help.
          </h2>
          <Link
            href="https://app.cadencehq.co/signup"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold transition-opacity hover:opacity-90"
            style={{ background: 'white', color: '#C8782A', borderRadius: 4, fontFamily: 'var(--font-dm-sans)', fontWeight: 600, textDecoration: 'none' }}
          >
            Get started free
          </Link>
        </div>
      </section>
    </>
  )
}
