import React from 'react'
import websiteProjects from '@/types/projectTypes'
import { WebsiteProjectType } from '@/types/projectTypes'
import CarouselComponent from '@/components/CarouselComponent'

interface ProjectPageProps {
  params: Promise<{
    projectName: string
  }>
}

export async function generateStaticParams() {
  return websiteProjects.map((project) => ({
    projectName: project.title,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { projectName } = await params

  const data: WebsiteProjectType = websiteProjects.filter(
    (project) => project.title === projectName,
  )[0]

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
