// Timeline origin: January 2023
// Each unit = 1 month
const ORIGIN_YEAR = 2023

function monthOffset(year: number, month: number): number {
  return (year - ORIGIN_YEAR) * 12 + (month - 1)
}

const now = new Date()
const CURRENT_MONTH = monthOffset(now.getFullYear(), now.getMonth() + 1)

export type TimelineItem = {
  type: 'education' | 'work'
  label: string
  title: string
  organization: string
  description?: string
  startMonth: number
  endMonth: number
  color: string
  solo?: boolean
}

export const timelineItems: TimelineItem[] = [
  {
    type: 'education',
    label: 'Education',
    title: 'Information Technology',
    organization: 'Vilniaus technologijų ir inžinerijos mokymo centras',
    description: 'Studied programming fundamentals, databases, and software engineering.',
    startMonth: monthOffset(2023, 1),
    endMonth: monthOffset(2024, 6),
    color: '#10b981'
  },
  {
    type: 'work',
    label: 'Fametonic',
    title: 'Junior Backend Developer → Full-Stack Developer',
    organization: 'Netzet',
    description: 'Own the backend for Fametonic (45K+ users) — AI chatbot, image generation, account analysis with BullMQ job queues.',
    startMonth: monthOffset(2024, 6),
    endMonth: CURRENT_MONTH,
    color: '#3b82f6'
  },
  {
    type: 'work',
    label: 'Parenting Leader',
    title: 'Backend Developer',
    organization: 'Netzet',
    description: 'API development, database design, and third-party integrations.',
    startMonth: monthOffset(2024, 6),
    endMonth: monthOffset(2025, 3),
    color: '#a855f7'
  },
  {
    type: 'work',
    label: 'Flirtist.ai',
    title: 'Backend Developer',
    organization: 'Netzet',
    description: 'API development, database design, and third-party integrations.',
    startMonth: monthOffset(2024, 6),
    endMonth: monthOffset(2025, 1),
    color: '#f43f5e'
  },
  {
    type: 'work',
    label: 'BasketJoin',
    title: 'Full-Stack Developer',
    organization: 'Solo project',
    description: 'Built a pickup basketball organizer from scratch — auth, scheduling engine, admin panel, payments.',
    startMonth: monthOffset(2024, 10),
    endMonth: monthOffset(2026, 1),
    color: '#06b6d4',
    solo: true
  },
  {
    type: 'work',
    label: 'SweetSecrets',
    title: 'Full-Stack Developer',
    organization: 'Netzet',
    description: 'Built end to end — AI story generation through Claude, coin store, branching onboarding funnels, and CI/CD pipeline.',
    startMonth: monthOffset(2025, 1),
    endMonth: CURRENT_MONTH,
    color: '#f59e0b'
  }
]

export const timelineYears = [2023, 2024, 2025, 2026]
