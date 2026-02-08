'use client'

import { WebsiteProjectType } from '@/data/projects'
import { getImageSrc } from '@/lib/utils'
import Link from 'next/link'

export default function ProjectCard({ project }: { project: WebsiteProjectType }) {
  return (
    <li className="mx-12 h-64 w-full max-w-[400px] transition hover:scale-105">
      <Link href={`/work/${project.slug}`} className="h-full w-full">
        <div className="flex h-4/6 w-full items-center justify-center rounded-t-sm bg-zinc-800 p-10">
          <img src={getImageSrc(project.logoSrc)} alt={`${project.title} Logo`} className="h-full w-full object-contain" />
        </div>
        <div className="flex h-2/6 w-full flex-col justify-center gap-1 overflow-hidden rounded-b-sm bg-zinc-600 pl-8">
          <p>{project.title}</p>
          {project.published && (
            <a
              href={project.link}
              rel="noopener noreferrer"
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="break-words hover:text-blue-500"
            >
              {project.link.includes('https://www.') ? project.link.split('https://www.')[1] : project.link.split('https://')[1]}
            </a>
          )}
        </div>
      </Link>
    </li>
  )
}
