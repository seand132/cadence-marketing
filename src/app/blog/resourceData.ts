export type ResourceStatus = 'coming-soon' | 'available'

export interface Resource {
  icon: string
  label: string
  title: string
  desc: string
  status: ResourceStatus
  href?: string // populated when status === 'available'
}

export const resources: Resource[] = [
  {
    icon: '📋',
    label: 'Template · 1:1s',
    title: 'Weekly 1:1 Agenda Template',
    desc: 'A simple, reusable agenda that makes every 1:1 worth attending.',
    status: 'available',
    href: '/cadence-weekly-11-agenda-template.pdf',
  },
  {
    icon: '✅',
    label: 'Checklist · Delegation',
    title: 'Delegation Readiness Checklist',
    desc: 'Know when — and how — to hand off work without losing control.',
    status: 'coming-soon',
  },
  {
    icon: '💬',
    label: 'Guide · Feedback',
    title: 'SBI Feedback Framework Card',
    desc: 'A one-page reference for giving feedback that actually lands.',
    status: 'coming-soon',
  },
]
