import React from 'react'
import type { Metadata } from 'next'
import { getProjectBySlug, getAllProjectSlugs } from '@/data/projects'
import { WebsiteProjectType } from '@/types/project'
import CarouselComponent from '@/components/CarouselComponent'

interface ProjectPageProps {
  params: Promise<{
    projectName: string
  }>
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { projectName } = await params
  const project = getProjectBySlug(projectName)

  const logoUrl: string | undefined = project?.logoSrc
    ? typeof project.logoSrc === 'string'
      ? project.logoSrc
      : project.logoSrc.src
    : undefined

  return {
    title: project?.title ?? 'Project',
    description: project?.description?.slice(0, 160) ?? 'Project details',
    openGraph: {
      title: project?.title ?? 'Project',
      description: project?.description?.slice(0, 160) ?? 'Project details',
      images: logoUrl ? [{ url: logoUrl }] : [],
    },
  }
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    projectName: slug,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { projectName } = await params

  const data = getProjectBySlug(projectName)

  const keywords = ['basketball registration app']

  interface HighlightKeywordsProps {
    text: string
    keywords: string[]
  }

  const highlightKeywords = ({
    text,
    keywords,
  }: HighlightKeywordsProps): JSX.Element[] => {
    const regex = new RegExp(`(${keywords.join('|')})`, 'gi')
    const parts = text.split(regex)

    return parts.map((part, index) =>
      keywords.some(
        (keyword) => part.toLowerCase() === keyword.toLowerCase(),
      ) ? (
        <span key={index} className="text-blue-500">
          {part}
        </span>
      ) : (
        <React.Fragment key={index}>{part}</React.Fragment>
      ),
    )
  }

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="z-0 mt-8 text-xl text-center md:text-3xl">
          Project not found
        </h1>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="z-0 mt-8 text-xl text-center md:text-3xl">{data.title}</h1>
      <CarouselComponent images={data.images} />
      <p className="mx-8 max-w-[800px]">
        {highlightKeywords({ text: data.description, keywords })}
      </p>
    </div>
  )
}
