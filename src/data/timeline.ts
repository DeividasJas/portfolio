export type TimelineEntry = {
  type: 'education' | 'work'
  title: string
  organization: string
  startDate: string
  endDate: string
  description?: string
}

export const timelineEntries: TimelineEntry[] = [
  {
    type: 'education',
    title: 'Information Technology',
    organization: 'Vilniaus technologijų ir inžinerijos mokymo centras',
    startDate: '2023',
    endDate: '2024',
    description: 'Studied programming fundamentals, databases, and software engineering.'
  },
  {
    type: 'work',
    title: 'Junior Backend Developer',
    organization: 'Netzet',
    startDate: '2024',
    endDate: '2024',
    description: 'Built backend services for Fametonic, Parenting Leader, and Flirtist.ai — API development, database design, and third-party integrations.'
  },
  {
    type: 'work',
    title: 'Full-Stack Developer',
    organization: 'Netzet',
    startDate: '2025',
    endDate: 'Present',
    description: 'Own the backend for Fametonic (45K+ users) and built SweetSecrets end to end — AI story generation, payment systems, and CI/CD pipelines.'
  }
]
