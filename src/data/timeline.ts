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
    description: 'Built responsive web interfaces with React and Tailwind CSS for client projects.'
  },
  {
    type: 'work',
    title: 'Full-Stack Developer',
    organization: 'Fametonic',
    startDate: '2025',
    endDate: 'Present',
    description: 'Developed backend services with NestJS, TypeORM, and RabbitMQ.'
  }
  // {
  //   type: 'work',
  //   title: 'Full-Stack Developer',
  //   organization: 'Freelance',
  //   startDate: '2024',
  //   endDate: 'Present',
  //   description: 'Building full-stack applications with Next.js, Supabase, and AI integrations.'
  // }
]
