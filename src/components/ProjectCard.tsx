'use client'

import { WebsiteProjectType } from '@/data/projects'
import Link from 'next/link'

export default function ProjectCard({ project }: { project: WebsiteProjectType }) {
  return (
    <li className="group w-full cursor-pointer">
      <Link href={`/work/${project.slug}`} className="block h-full w-full">
        <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80 transition-all duration-300 group-hover:border-slate-600 group-hover:shadow-lg group-hover:shadow-slate-900/50">
          {/* Logo Area */}
          <div className="flex h-44 w-full items-center justify-center bg-slate-800/50 p-8">
            {project.logoSrc ? (
              <img
                src={project.logoSrc}
                alt={`${project.title} Logo`}
                className="max-h-24 max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <span className="text-2xl font-semibold text-slate-500">{project.title[0]}</span>
            )}
          </div>

          {/* Info Area */}
          <div className="flex flex-col gap-2.5 p-5">
            <p className="text-base font-semibold text-slate-100">{project.title}</p>

            {project.stack && project.stack.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {project.stack.slice(0, 4).map((tech) => (
                  <span key={tech} className="rounded-full bg-slate-800 px-2.5 py-0.5 text-[11px] font-medium text-slate-400">
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {project.published && (
              <a
                href={project.link}
                rel="noopener noreferrer"
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="mt-1 text-xs text-slate-500 transition-colors duration-200 hover:text-blue-400"
              >
                {project.link.includes('https://www.') ? project.link.split('https://www.')[1] : project.link.split('https://')[1]}
              </a>
            )}
          </div>
        </div>
      </Link>
    </li>
  )
}
