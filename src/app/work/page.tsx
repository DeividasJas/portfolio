import type { Metadata } from 'next'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'
import { Briefcase, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Backend Developer at netzet, building production APIs with NestJS, TypeScript, and distributed systems. View professional experience and selected projects.',
}

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-12 max-w-[850px] mx-auto px-4">
      {/* Professional Experience Section */}
      <section className="mt-8">
        <div className="flex items-center gap-2 mb-6">
          <Briefcase className="w-6 h-6 text-blue-500" />
          <h1 className="text-2xl md:text-3xl font-semibold">
            Professional Experience
          </h1>
        </div>

        <div className="border-l-2 border-zinc-700 pl-6 ml-3">
          <div className="relative">
            {/* Timeline dot */}
            <div className="absolute -left-[27px] top-1 w-4 h-4 bg-blue-500 rounded-full border-4 border-zinc-900" />

            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4 text-zinc-400" />
              <span className="text-sm text-zinc-400">Mar 2025 – Present</span>
            </div>

            <h2 className="text-xl font-semibold mb-1">Backend Developer</h2>
            <p className="text-blue-500 mb-4">netzet</p>

            <div className="space-y-3 text-zinc-300">
              <p>
                Building and maintaining multiple RESTful APIs with NestJS and
                TypeScript, serving production traffic for business-critical
                applications.
              </p>
              <p>
                Designing distributed services using RabbitMQ for asynchronous
                messaging, enabling reliable communication between
                microservices.
              </p>
              <p>
                Integrating external APIs including Facebook Ads, Google Ads,
                and OpenAI, handling authentication, data transformation, and
                error recovery.
              </p>
              <p>
                Working with PostgreSQL databases, writing migrations, and
                optimizing queries for production systems.
              </p>
              <p>
                Collaborating with frontend and product teams to deliver
                features end-to-end, from API design to deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Projects Section */}
      <section>
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Personal Projects
        </h2>
        <p className="text-zinc-400 mb-6">
          Early projects built while learning web development
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </ul>
      </section>
    </div>
  )
}
