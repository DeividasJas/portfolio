'use client'

import { StackCarousel } from '@/components/StackCarousel'
import { ArrowDown } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@radix-ui/react-accordion'

export default function AboutPage() {
  const technologies = [
    'Next.js',
    'Tailwind CSS',
    'TypeScript',
    'PostgreSQL',
    'JavaScript',
    'Prisma',
    'Node.js',
    'GitHub',
    'Vercel',
    'Docker',
    'Express.js',
    'Supabase',
  ]

  return (
    <>
      <section className="flex flex-col items-center gap-4 my-8 text-md max-w-[850px] mx-auto">
        <p>
          I'm a <span className="text-blue-500">Junior Programmer</span> and
          graduate of Vilniaus technologijų ir inžinerijos mokymo centras. I
          began my web development journey out of a curiosity for technology and
          a desire to bring ideas to life.
        </p>
        <p>
          I have experience in both{' '}
          <span className="text-blue-500">front-end</span> and{' '}
          <span className="text-blue-500">back-end</span> development, allowing
          me to approach projects with a full-stack perspective. I focus on
          writing <span className="text-blue-500">clean, efficient code</span>{' '}
          and building applications that are both robust and user-friendly.
        </p>
        <p>
          I enjoy tackling new challenges and continuously expanding my
          knowledge of web technologies to stay up-to-date with the latest
          trends. Let's work together to turn your vision into reality!
        </p>
      </section>

      <Accordion
        type="single"
        collapsible
        className=" my-12 max-w-[850px]  md:2 mx-auto"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="relative flex items-center justify-between w-full p-4 border rounded-md group hover:text-blue-500">
            Show stack list
            <ArrowDown className="h-6 w-6 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </AccordionTrigger>
          <AccordionContent className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden transition-all duration-700">
            <ul className="grid grid-cols-3 gap-2 py-4 md:gap-4 md:grid-cols-4 lg:grid-cols-5 w-[70%] place-items-center mx-auto">
              {technologies.map((tech, index) => (
                <li
                  key={index}
                  className="cursor-default relative before:content-[''] before-w-0 before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[1px] before:bg-current before:transition-all before:duration-300 hover:before:w-[calc(100%+20px)]"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <StackCarousel />
    </>
  )
}
