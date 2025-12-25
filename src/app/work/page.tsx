import type { Metadata } from 'next'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Portfolio of web development projects including basketball registration apps, city tour guides, and more. Built with Next.js, React, and TypeScript.',
}

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-4 ">
      <h1 className="mt-8 text-xl text-center md:text-3xl">Work</h1>
      <h3 className="text-lg text-center md:text-xl">
        Select the work I've taken in the past
      </h3>

      <ul
        className={`grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 place-items-center md:mx-4 ${
          projects.length >= 4 && 'xl:grid-cols-4'
        }`}
      >
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />
        })}
      </ul>
    </div>
  )
}
