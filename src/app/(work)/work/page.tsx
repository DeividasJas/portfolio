import type { Metadata } from 'next'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'
import WorkHeroCarousel from '@/components/WorkHeroCarousel'
import { ChevronDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Portfolio of web development projects including basketball registration apps, city tour guides, and more. Built with Next.js, React, and TypeScript.'
}

const publishedProjects = projects.filter((p) => p.published)

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center gap-8 pb-6 pt-8 md:pt-12">
        <div className="text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">Portfolio</p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-5xl">Selected Work</h1>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-400 md:text-base">
            Projects I&apos;ve designed and developed — from concept to deployment
          </p>
        </div>

        <div className="w-full">
          <WorkHeroCarousel projects={publishedProjects} />
        </div>

        <a
          href="#projects"
          className="group flex cursor-pointer items-center gap-2 rounded-full border border-slate-700/60 bg-slate-800/40 px-7 py-3 text-sm font-medium text-slate-300 backdrop-blur-sm transition-all duration-300 hover:border-slate-500 hover:bg-slate-800/60 hover:text-white"
        >
          View All Projects
          <ChevronDown className="h-4 w-4" />
        </a>
      </section>

      {/* Divider */}
      <div className="mx-auto h-px w-2/3 max-w-2xl bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

      {/* Projects Grid */}
      <section id="projects" className="scroll-mt-12 px-6 pb-20 pt-12 md:px-8">
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.2em] text-slate-500">All Projects</p>
        <ul className="mx-auto grid max-w-6xl grid-cols-1 place-items-center gap-8 md:grid-cols-2 xl:grid-cols-3">
          {publishedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </ul>
      </section>
    </div>
  )
}
