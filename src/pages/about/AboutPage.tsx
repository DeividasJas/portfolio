import { StackCarousel } from '@/components/StackCarousesel';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@radix-ui/react-accordion';
import { ArrowDown } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <h1 className='text-2xl text-center'>More about me</h1>
      <section className='flex flex-col items-center gap-4 px-4 mt-8 text-md max-w-[850px] mx-auto'>
        <p>
          I’m a <span className='text-blue-500'>Junior Programmer</span> and
          graduate of Vilniaus technologijų ir inžinerijos mokymo centras. I
          began my web development journey out of a curiosity for technology and
          a desire to bring ideas to life.
        </p>
        <p>
          I have experience in both <span className='text-blue-500'>front-end</span> and <span className='text-blue-500'>back-end</span> development, allowing
          me to approach projects with a full-stack perspective. I focus on
          writing <span className='text-blue-500'>clean, efficient code</span> and building applications that are both
          robust and user-friendly.
        </p>
        <p>
          I enjoy tackling new challenges and continuously expanding my
          knowledge of web technologies to stay up-to-date with the latest
          trends. Let’s work together to turn your vision into reality!
        </p>
      </section>

      <Accordion
        type='single'
        collapsible
        className='mx-4 my-12 max-w-[850px]  md:mx-auto'
      >
        <AccordionItem value='item-1'>
          <AccordionTrigger className='relative flex items-center justify-between w-full p-4 border rounded-md group hover:text-blue-500'>
            Show stack list
            <ArrowDown className='h-6 w-6 transition-transform duration-200 group-data-[state=open]:rotate-180' />
          </AccordionTrigger>
          <AccordionContent className='data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden transition-all duration-700'>
            <ul className='grid grid-cols-2 gap-2 p-4 list-disc md:gap-4 md:grid-cols-3 lg:grid-cols-5'>
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind css</li>
              <li>Typescript</li>
              <li>Postgresql</li>
              <li>JavaScript</li>
              <li>Prisma</li>
              <li>Node.js</li>
              <li>GitHub</li>
              <li>Vercel</li>
              <li>Docker</li>
              <li>Express.js</li>
              <li>Supabase</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <StackCarousel />
    </>
  );
}
