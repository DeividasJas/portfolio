import { WebsiteProjectType } from '@/types/project'
import Link from 'next/link'

export default function ProjectCard({
  project,
}: {
  project: WebsiteProjectType
}) {
  const logoSrc =
    typeof project.logoSrc === 'string'
      ? project.logoSrc
      : project.logoSrc.src

  return (
    <li className="flex flex-col items-center justify-between h-64 mx-12 transition hover:scale-105  w-full max-w-[400px] min-w-0">
      <Link
        href={`/work/${project.slug}`}
        className="flex items-center justify-center w-full rounded-t-sm h-4/6 bg-zinc-800"
      >
        <img
          src={logoSrc}
          alt={`${project.title} Logo`}
          className="w-20"
        />
      </Link>
      <div className="flex flex-col justify-center w-full gap-1 pl-8 overflow-hidden rounded-b-sm bg-zinc-600 h-2/6">
        <p>{project.title}</p>
        {project.published && (
          <a
            href={project.link}
            rel="noopener noreferrer"
            target="_blank"
            className="break-words hover:text-blue-500"
          >
            {project.link.includes("https://www.")
              ? project.link.split("https://www.")[1]
              : project.link.split("https://")[1]}
          </a>
        )}
      </div>
    </li>
  );
}
