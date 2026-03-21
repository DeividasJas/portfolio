import type { Metadata } from 'next'
import { projects } from '@/data/projects'
import CarouselComponent from '@/components/CarouselComponent'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

interface ProjectPageProps {
  params: Promise<{
    projectName: string
  }>
}

export function generateStaticParams() {
  return projects.filter((p) => p.published).map((p) => ({ projectName: p.slug }))
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
      images: project?.logoSrc ? [{ url: project.logoSrc }] : []
    }
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
    )
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
    <div className="mx-auto w-full max-w-7xl px-4 py-12 text-left lg:px-8">
      <div className="mb-12 text-center lg:mb-16">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">{data.title}</h1>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <CarouselComponent images={data.images} />
        </div>
        <div className="flex flex-col gap-10">
          <section>
            <h3 className="mb-4 text-2xl font-bold">About Project</h3>
            <p className="text-lg leading-relaxed text-zinc-400">{highlightKeywords(data.projectDescription, keywords)}</p>
          </section>
          <section>
            <h3 className="mb-4 text-2xl font-bold">My Role</h3>
            <p className="text-lg leading-relaxed text-zinc-400">{highlightKeywords(data.myWorkDescription, keywords)}</p>
          </section>
          {data.stack && data.stack.length > 0 && (
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="stack" className="border-none">
                <AccordionTrigger className="rounded-lg border border-zinc-700 p-4 text-xl font-bold hover:no-underline data-[state=open]:border-blue-500">
                  Stack
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-wrap gap-3 pt-4">
                    {data.stack.map((tech) => (
                      <span
                        key={tech}
                        className="cursor-default rounded-full border border-zinc-700 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-blue-500 hover:text-blue-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}
        </div>
      </div>
    </div>
  )
}
