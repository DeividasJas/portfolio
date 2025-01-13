import Marquee from 'react-fast-marquee';

import {
  siReact,
  siNextdotjs,
  siTailwindcss,
  siTypescript,
  siJavascript,
  siPostgresql,
  siPrisma,
  siGithub,
  siVercel,
  siNodedotjs,
  siDocker,
  siExpress,
  siSupabase,
} from 'simple-icons';

export function StackCarousel() {
  const logos = [
    { icon: siReact, name: 'React', color: '#61DAFB' },
    { icon: siNextdotjs, name: 'Next.js', color: '#000000' },
    { icon: siTailwindcss, name: 'Tailwind', color: '#06B6D4' },
    { icon: siTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: siPostgresql, name: 'PostgreSQL', color: '#4169E1' },
    { icon: siJavascript, name: 'JavaScript', color: '#F7DF1E' },
    { icon: siNodedotjs, name: 'Node.js', color: '#339933' },
    { icon: siPrisma, name: 'Prisma', color: '#2D3748' },
    { icon: siGithub, name: 'GitHub', color: '#181717' },
    { icon: siVercel, name: 'Vercel', color: '#000000' },
    { icon: siDocker, name: 'Docker', color: '#2496ED' },
    { icon: siExpress, name: 'Express', color: '#000000' },
    { icon: siSupabase, name: 'Supabase', color: '#639' },
  ];
  return (
    <Marquee
      pauseOnHover={true}
      gradient={true}
      gradientColor='#18181b'
      gradientWidth={100}
      speed={60}
      autoFill={true}
      className='z-0 w-full md:max-w-[850px] mx-auto'
    >
      {logos.map((logo, index) => (
        <div
          key={index}
          className='flex items-center justify-center w-24 h-24 mx-1 rounded-md bg-zinc-500'
        >
          <svg
            viewBox='0 0 24 24'
            className='w-12 h-12'
            fill='black'
            dangerouslySetInnerHTML={{ __html: logo.icon.svg }}
          />
        </div>
      ))}
    </Marquee>
  );
}
