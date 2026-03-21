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
      {/* Variant 1 — Confident / Direct */}
      <section className="text-md mx-auto my-8 flex max-w-[850px] flex-col items-center gap-4">
        <p>
          I build <span className="text-blue-500">production systems</span> that handle real traffic. At Fametonic, I ship across the full stack — Next.js frontends,
          NestJS backends, PostgreSQL, Supabase — and I own the entire pipeline from database schema to Vercel deployment.
        </p>
        <p>
          My most complex project is <span className="text-blue-500">SweetSecrets</span>, an AI-powered interactive story platform where user choices shape the narrative.
          I built choice-dependent story funnels, integrated a CRM, and implemented an <span className="text-blue-500">in-app coin economy</span> that drives premium
          content upsells — all backed by a Supabase + GitHub + Vercel deployment chain.
        </p>
        <p>
          I use <span className="text-blue-500">AI tooling</span> heavily in my workflow to ship faster without cutting corners. I prefer full-stack ownership because
          seeing the whole system means making better architectural decisions. If code doesn't perform under load while staying readable, it's not done.
        </p>
      </section>

      {/* Variant 2 — Casual / Friendly */}
      <section className="text-md mx-auto my-8 flex max-w-[850px] flex-col items-center gap-4">
        <p>
          I'm a <span className="text-blue-500">full-stack developer</span> who got into this because I wanted to build things that actually work at scale. These days I'm
          at Fametonic, working across Next.js, NestJS, PostgreSQL, and Supabase — handling everything from frontend components to{' '}
          <span className="text-blue-500">CI/CD pipelines</span> and database design.
        </p>
        <p>
          One project I'm especially proud of is <span className="text-blue-500">SweetSecrets</span> — an AI-driven story platform where every reader choice branches the
          narrative differently. I wired up the whole thing: story funnels, a CRM integration, a <span className="text-blue-500">coin-based economy</span> for premium
          content, and a full Supabase-to-Vercel deployment pipeline.
        </p>
        <p>
          I lean hard on <span className="text-blue-500">AI tools</span> to move fast, and I like owning the full stack so I can see how decisions ripple through the
          system. Clean code that holds up under real traffic — that's what I'm after.
        </p>
      </section>

      {/* Variant 3 — Professional / Measured */}
      <section className="text-md mx-auto my-8 flex max-w-[850px] flex-col items-center gap-4">
        <p>
          I'm a <span className="text-blue-500">full-stack developer</span> focused on building production applications that serve thousands of users. Currently at
          Fametonic, I work across the entire stack — <span className="text-blue-500">Next.js</span>, NestJS, PostgreSQL, Prisma, and Supabase — with responsibility for
          both feature development and deployment infrastructure.
        </p>
        <p>
          A key project has been <span className="text-blue-500">SweetSecrets</span>, an AI-powered interactive story platform. I designed choice-dependent narrative
          funnels, integrated CRM tooling for user management, and built an <span className="text-blue-500">in-app coin economy</span> powering premium content access. The
          system runs on a Supabase + GitHub + Vercel CI/CD pipeline I set up end to end.
        </p>
        <p>
          I leverage <span className="text-blue-500">AI-assisted development</span> to accelerate delivery and prefer full-stack ownership for the architectural clarity it
          provides. I prioritize code that is both performant under load and straightforward to maintain.
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
