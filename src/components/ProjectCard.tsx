import { WebsiteProjectType } from '@/types/project'
import { getImageSrc } from '@/lib/utils'
import Link from 'next/link'

export default function ProjectCard({
  project,
}: {
  project: WebsiteProjectType
}) {
  return (
    <li className="flex flex-col h-64 w-full transition hover:scale-105">
      <Link
        href={`/work/${project.slug}`}
        className="flex items-center justify-center w-full rounded-t-sm h-4/6 bg-zinc-800 relative"
      >
        <span className="absolute top-3 right-3 text-xs px-2 py-1 bg-zinc-700 text-zinc-300 rounded">
          Personal Project
        </span>
        <img
          src={getImageSrc(project.logoSrc)}
          alt={`${project.title} Logo`}
          className="w-20"
        />
      </Link>
      <div className="flex flex-col justify-center w-full gap-1 px-6 overflow-hidden rounded-b-sm bg-zinc-600 h-2/6">
        <p className="font-semibold">{project.title}</p>
        {project.published && (
          <a
            href={project.link}
            rel="noopener noreferrer"
            target="_blank"
            className="text-sm break-words hover:text-blue-500 transition-colors"
          >
            {project.link.includes('https://www.')
              ? project.link.split('https://www.')[1]
              : project.link.split('https://')[1]}
          </a>
        )}
      </div>
    </li>
  )
}
