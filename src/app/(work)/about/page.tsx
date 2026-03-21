import type { Metadata } from 'next'
import { StackCarousel } from '@/components/StackCarousel'
import { Timeline } from '@/components/Timeline'
import { timelineEntries } from '@/data/timeline'
import { ArrowDown } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion'

export const metadata: Metadata = {
  title: 'About',
  description: 'Full-stack developer building production apps & api integrations'
}

const technologies = ['Next.js', 'Tailwind CSS', 'TypeScript', 'PostgreSQL', 'JavaScript', 'Prisma', 'Node.js', 'GitHub', 'Vercel', 'Docker', 'Express.js', 'Supabase']

export default function AboutPage() {
  return (
    <div className="px-4 pb-4">
      <section className="text-md mx-auto my-8 flex max-w-[850px] flex-col items-center gap-4">
        <p>
          I&apos;m a <span className="text-blue-500">full-stack developer</span> at Netzet, where I build products that
          serve real users. My projects include <span className="text-blue-500">Fametonic</span> — a social media growth
          platform with 45,000+ creators — and <span className="text-blue-500">SweetSecrets</span>, an AI-powered story
          app where every reader gets a unique narrative shaped by their choices.
        </p>
        <p>
          I work across the entire stack — Next.js frontends, NestJS backends, PostgreSQL, Supabase — and own
          everything from <span className="text-blue-500">database design</span> to deployment pipelines. On my own time
          I built <span className="text-blue-500">BasketJoin</span>, a pickup basketball organizer, as a solo project
          from scratch.
        </p>
        <p>
          I use <span className="text-blue-500">AI tools</span> daily to ship faster, and I prefer full-stack ownership
          because seeing the whole system means making better decisions. I&apos;m{' '}
          <span className="text-blue-500">open to new opportunities</span> where I can keep building products people
          actually use.
        </p>
      </section>

      <StackCarousel />

      <Accordion type="single" collapsible className="md:2 mx-auto my-12 max-w-[850px]">
        <AccordionItem value="item-1">
          <AccordionTrigger className="group relative flex w-full items-center justify-between rounded-md border p-4 hover:text-blue-500">
            Show stack list
            <ArrowDown className="h-6 w-6 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </AccordionTrigger>
          <AccordionContent className="overflow-hidden transition-all duration-700 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <ul className="mx-auto grid w-[70%] grid-cols-3 place-items-center gap-2 py-4 md:grid-cols-4 md:gap-4 lg:grid-cols-5">
              {technologies.map((tech, index) => (
                <li
                  key={index}
                  className="before-w-0 relative cursor-default before:absolute before:bottom-0 before:left-1/2 before:h-[1px] before:w-0 before:-translate-x-1/2 before:bg-current before:transition-all before:duration-300 before:content-[''] hover:before:w-[calc(100%+20px)]"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <section className="mx-auto my-12 max-w-[850px]">
        <h3 className="mb-8 text-2xl font-bold">Experience & Education</h3>
        <Timeline entries={timelineEntries} />
      </section>
    </div>
  )
}
