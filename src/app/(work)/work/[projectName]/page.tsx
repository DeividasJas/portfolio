import type { Metadata } from 'next'
import { projects } from '@/data/projects'
import CarouselComponent from '@/components/CarouselComponent'

interface ProjectPageProps {
  params: Promise<{
    projectName: string
  }>
}

export function generateStaticParams() {
  return projects
    .filter((p) => p.published)
    .map((p) => ({ projectName: p.slug }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { projectName } = await params
  const project = projects.find((p) => p.slug === projectName)

  return {
    title: project?.title ?? 'Project',
    description: project?.projectDescription?.slice(0, 160) ?? 'Project details',
    openGraph: {
      title: project?.title ?? 'Project',
      description: project?.projectDescription?.slice(0, 160) ?? 'Project details',
      images: project?.logoSrc ? [{ url: project.logoSrc }] : [],
    },
  }
}

function highlightKeywords(text: string | undefined, keywords: string[]): JSX.Element[] {
  if (!text || keywords.length === 0) return [<span key={0}>{text}</span>]

  const regex = new RegExp(`(${keywords.join('|')})`, 'gi')
  const parts = text.split(regex)

  return parts.map((part, index) =>
    keywords.some((kw) => part.toLowerCase() === kw.toLowerCase()) ? (
      <span key={index} className="text-blue-500">
        {part}
      </span>
    ) : (
      <span key={index}>{part}</span>
    ),
  )
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { projectName } = await params
  const data = projects.find((p) => p.slug === projectName)

  if (!data) {
    return <h1 className="mx-auto flex items-center text-center text-xl md:text-3xl">Project not found</h1>
  }

  const keywords = data.highlightKeywords ?? []

  return (
    <div className="flex flex-col gap-4 px-8 text-left">
      <h1 className="z-0 mt-8 text-center text-xl md:text-3xl">{data.title}</h1>

      <CarouselComponent images={data.images} />
      <div className="mx-auto flex max-w-[800px] flex-col gap-4">
        <section>
          <p className="mb-2 text-lg font-semibold">About Project</p>
          <p>{highlightKeywords(data.projectDescription, keywords)}</p>
        </section>
        <section>
          <p className="mb-2 text-lg font-semibold">My Role</p>
          <p>{highlightKeywords(data.myWorkDescription, keywords)}</p>
        </section>
        <section>
          <p className="mb-2 text-lg font-semibold">Stack</p>
          <p>{data.stack?.join(', ')}</p>
        </section>
      </div>
    </div>
  )
}
