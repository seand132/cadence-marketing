import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "The New Manager's Survival Guide (No Generic Advice) — Cadence Blog",
  description: "Most management advice is written for people who've been doing it for a decade. Here's what actually matters in the first 90 days.",
}

export default function NewManagerSurvivalGuide() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-20">
      <Link href="/blog" className="text-[#7A9E82] font-medium text-sm mb-8 inline-block hover:underline">
        ← Back to blog
      </Link>

      <h1
        className="text-4xl font-bold mb-6"
        style={{ fontFamily: 'var(--font-montserrat)', color: '#1C2B3A' }}
      >
        The New Manager's Survival Guide (No Generic Advice)
      </h1>

      <p className="text-sm text-[#1C2B3A]/50 mb-12">8 min read</p>

      <div className="prose prose-lg max-w-none text-[#1C2B3A]/75 leading-relaxed space-y-6">
        <p>
          Most management advice is written for people who've been doing it for a decade.
        </p>
        <p>
          You need advice for month one. The month when you're not sure what your job is, your team isn't sure how to treat you, and the thing you used to be great at isn't your job anymore.
        </p>
        <p>
          Here's what actually matters in the first 90 days.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#1C2B3A' }}>
          Accept that you're a beginner again.
        </h2>
        <p>
          You were promoted because you were good at something. That thing is no longer the job. Your job now is to make other people good at that thing.
        </p>
        <p>
          This sounds obvious. It doesn't feel obvious when you're three weeks in and someone on your team is doing something worse than you'd do it, and you have to let them.
        </p>
        <p>
          The shift from "doer" to "enabler" is the hardest part of becoming a manager. The sooner you accept you're learning a new skill from scratch, the faster you'll get good at it.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#1C2B3A' }}>
          Set up a rhythm before you need one.
        </h2>
        <p>
          Most new managers wait until something breaks to build structure. Then they're reacting: a performance issue they didn't see coming, a team member who's burning out, a deadline that slipped.
        </p>
        <p>Rhythm means consistency before crisis. Specifically:</p>
        <ul className="space-y-3 my-4 pl-4">
          <li className="flex items-start gap-3">
            <span className="text-[#7A9E82] font-bold mt-0.5">–</span>
            <span><strong>Weekly 1:1s</strong> with every direct report. Standing agenda. 30 minutes.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#7A9E82] font-bold mt-0.5">–</span>
            <span><strong>A simple task system</strong> to track what you've delegated and what's open.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#7A9E82] font-bold mt-0.5">–</span>
            <span><strong>A weekly read</strong> on the team — who's on track, who needs a conversation.</span>
          </li>
        </ul>
        <p>
          None of this is complicated. All of it is skipped by most first-time managers.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#1C2B3A' }}>
          Your 1:1s are probably reactive. Fix them.
        </h2>
        <p>
          If your 1:1 agenda is "so what's going on with you?" — you don't have a 1:1. You have a check-in.
        </p>
        <p>A working 1:1 has a standing structure. Something like:</p>
        <ul className="space-y-3 my-4 pl-4">
          <li className="flex items-start gap-3">
            <span className="text-[#7A9E82] font-bold mt-0.5">–</span>
            <span><strong>15 min:</strong> What's top of mind for you? What's in the way?</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#7A9E82] font-bold mt-0.5">–</span>
            <span><strong>10 min:</strong> What do I need to know about the team / project / anything?</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#7A9E82] font-bold mt-0.5">–</span>
            <span><strong>5 min:</strong> What are your next actions, and what do you need from me?</span>
          </li>
        </ul>
        <p>Takes 20 minutes to design. Saves hours of miscommunication per month.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#1C2B3A' }}>
          Don't manage in your head.
        </h2>
        <p>
          New managers accumulate context. They remember who said what, what got delegated, who's struggling with what. They hold all of it in their head.
        </p>
        <p>
          This works for a few weeks. Then someone gets a surprise in their performance review, or you forget you told someone to do something, or you have no idea what the team's output was last quarter.
        </p>
        <p>
          Get a system — even a basic one. Somewhere you track open delegations, 1:1 notes, and team goals. It doesn't have to be fancy. It has to exist.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#1C2B3A' }}>
          That's the whole job.
        </h2>
        <p>
          The first-time manager job is not that complicated. It's just different. Different skills, different cadence, different definition of doing well.
        </p>
        <p>
          Build a rhythm. Stay consistent. Get feedback early. Adjust.
        </p>
        <p>That's the whole job.</p>
      </div>

      <div className="mt-16 p-8 rounded-2xl text-center" style={{ background: '#1C2B3A' }}>
        <p className="text-white font-semibold text-lg mb-3">Want a system that does this for you?</p>
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
