'use client';

import { StackCarousel } from '@/components/StackCarousel';
import { ArrowDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@radix-ui/react-accordion';

export default function AboutPage() {
  const techStack = {
    'Backend & APIs': [
      'Node.js',
      'Nest.js',
      'Express.js',
      'TypeScript',
      'JavaScript',
    ],
    'Databases & ORMs': [
      'PostgreSQL',
      'MySQL',
      'Prisma',
      'TypeORM',
      'Supabase',
    ],
    'Infrastructure & DevOps': [
      'Docker',
      'RabbitMQ',
      'Git',
      'GitHub',
      'GitLab',
    ],
    Frontend: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
  };

  return (
    <>
      <section className='flex flex-col items-left gap-4 my-8 text-md max-w-[850px] mx-auto'>
        <p>
          I’m a <span className='text-blue-500'>Fullstack Developer</span> based
          in Vilnius, Lithuania, with hands-on experience building and
          maintaining production systems using TypeScript and NestJS.
        </p>

        <p>
          I work across backend services, APIs, and integrations, focusing on
          clean architecture, scalability, and reliable data flow. My background
          in both frontend and backend development allows me to collaborate
          effectively across teams and build solutions with a full-product
          perspective.
        </p>

        <p>
          I value collaboration, continuous improvement, and writing code that
          is easy to understand, maintain, and extend over time.
        </p>

        <p>
          Outside of coding, I enjoy staying playing basketball, dancing and
          staying social.
        </p>
      </section>

      <Accordion
        type='single'
        collapsible
        className=' my-12 max-w-[850px]  md:2 mx-auto'
      >
        <AccordionItem value='item-1'>
          <AccordionTrigger className='relative flex items-center justify-between w-full p-4 border rounded-md group hover:text-blue-500'>
            Show tech stack
            <ArrowDown className='h-6 w-6 transition-transform duration-200 group-data-[state=open]:rotate-180' />
          </AccordionTrigger>
          <AccordionContent className='data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden transition-all duration-700'>
            <div className='py-6 space-y-6'>
              {Object.entries(techStack).map(([category, technologies]) => (
                <div key={category}>
                  <h3 className='text-lg font-semibold text-blue-500 text-center mb-3'>
                    {category}
                  </h3>
                  <ul className='grid grid-cols-3 gap-2 md:gap-4 md:grid-cols-5 lg:grid-cols-5 w-[70%] place-items-center mx-auto'>
                    {technologies.map((tech) => (
                      <li
                        key={tech}
                        className="cursor-default relative before:content-[''] before-w-0 before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[1px] before:bg-current before:transition-all before:duration-300 hover:before:w-[calc(100%+20px)]"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <StackCarousel />
    </>
  );
}
