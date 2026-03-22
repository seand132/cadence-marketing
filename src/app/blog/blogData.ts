export interface BlogPost {
  slug: string
  title: string
  category: string
  readTime: string
  date: string
  excerpt: string
}

export const allPosts: BlogPost[] = [
  {
    slug: 'the-11-that-actually-works',
    title: 'The 1:1 That Actually Works',
    category: '1:1s',
    readTime: '8 min read',
    date: 'Mar 17, 2026',
    excerpt:
      "Most 1:1s are status updates with better lighting. Here's how to turn yours into the most valuable 30 minutes of your week.",
  },
  {
    slug: 'how-to-delegate-without-losing-control',
    title: 'How to Delegate Without Losing Control',
    category: 'Delegation',
    readTime: '8 min read',
    date: 'Mar 10, 2026',
    excerpt:
      "You know you should delegate more. You don't. Here's the real reason, and a framework that actually works.",
  },
  {
    slug: 'what-to-track-when-you-manage-a-small-team',
    title: 'What to Track When You Manage a Small Team',
    category: 'KPIs',
    readTime: '7 min read',
    date: 'Mar 3, 2026',
    excerpt:
      "You're either tracking the wrong things or nothing at all. Here's what actually matters for a team of 3 to 8.",
  },
  {
    slug: 'how-to-give-feedback-your-team-will-hear',
    title: 'How to Give Feedback Your Team Will Actually Hear',
    category: 'Team Culture',
    readTime: '7 min read',
    date: 'Feb 24, 2026',
    excerpt:
      "Feedback doesn't fail because managers don't give it. It fails because they don't know how. That's fixable.",
  },
  {
    slug: 'building-team-culture-without-the-corporate-playbook',
    title: 'Building Team Culture Without the Corporate Playbook',
    category: 'Team Culture',
    readTime: '8 min read',
    date: 'Feb 17, 2026',
    excerpt:
      "Culture isn't built at off-sites. It's built in the small decisions you make every day as a manager.",
  },
  {
    slug: 'management-in-rhythm',
    title: 'What "Management in Rhythm" Actually Means',
    category: 'Management',
    readTime: '6 min read',
    date: 'Feb 10, 2026',
    excerpt: "Great teams don't happen by accident. They find their rhythm and keep it.",
  },
  {
    slug: 'new-manager-survival-guide',
    title: "The New Manager's Survival Guide (No Generic Advice)",
    category: 'Management',
    readTime: '7 min read',
    date: 'Feb 3, 2026',
    excerpt: "Nobody hands you a manual when you become a manager. This is as close as it gets.",
  },
  {
    slug: 'why-management-tools-fail-small-teams',
    title: 'Why Most Management Tools Fail Small Teams',
    category: 'Management',
    readTime: '6 min read',
    date: 'Jan 27, 2026',
    excerpt:
      "Most management tools are built for HR, not managers. Here's why that matters and what to look for instead.",
  },
]

export const kickerMap: Record<string, { label: string; color: string }> = {
  '1:1s': { label: 'One-on-Ones ·', color: '#7A9E82' },
  Delegation: { label: 'Delegation ·', color: '#1C2B3A' },
  'Team Culture': { label: 'Team Culture ·', color: '#C8782A' },
  KPIs: { label: 'Performance ·', color: '#1C2B3A' },
  Management: { label: 'Framework ·', color: '#7A9E82' },
  Feedback: { label: 'Feedback ·', color: '#C8782A' },
}

export function getKicker(category: string): { label: string; color: string } {
  return kickerMap[category] ?? { label: category + ' ·', color: '#7A9E82' }
}
