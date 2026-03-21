'use client'

import Marquee from 'react-fast-marquee'
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
  siRabbitmq,
  siNestjs,
  siAnthropic
} from 'simple-icons'
import { useState } from 'react'

const logos = [
  { icon: siReact, name: 'React', color: '#61DAFB' },
  { icon: siNextdotjs, name: 'Next.js', color: '#ffffff' },
  { icon: siTailwindcss, name: 'Tailwind', color: '#06B6D4' },
  { icon: siTypescript, name: 'TypeScript', color: '#3178C6' },
  { icon: siPostgresql, name: 'PostgreSQL', color: '#4169E1' },
  { icon: siJavascript, name: 'JavaScript', color: '#F7DF1E' },
  { icon: siNodedotjs, name: 'Node.js', color: '#339933' },
  { icon: siPrisma, name: 'Prisma', color: '#ffffff' },
  { icon: siGithub, name: 'GitHub', color: '#ffffff' },
  { icon: siVercel, name: 'Vercel', color: '#ffffff' },
  { icon: siDocker, name: 'Docker', color: '#2496ED' },
  { icon: siExpress, name: 'Express', color: '#ffffff' },
  { icon: siSupabase, name: 'Supabase', color: '#3FCF8E' },
  { icon: siRabbitmq, name: 'RabbitMQ', color: '#FF6600' },
  { icon: siNestjs, name: 'NestJS', color: '#E0234E' },
  { icon: siAnthropic, name: 'Claude', color: '#D4A574' }
]

function StackItem({ icon, name, color }: { icon: (typeof logos)[number]['icon']; name: string; color: string }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group relative mx-2 flex h-20 w-20 flex-col items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-800/80"
      // style={{
      //   boxShadow: hovered ? `0 0 10px ${color}10, 0 0 7px ${color}` : 'none'
      // }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8 transition-all duration-300 group-hover:scale-110"
        style={{ fill: hovered ? color : '#a1a1aa' }}
        dangerouslySetInnerHTML={{ __html: icon.svg }}
      />
      {/* <span className="mt-1.5 text-[10px] font-medium transition-colors duration-300" style={{ color: hovered ? color : '#71717a' }}>
        {name}
      </span> */}
    </div>
  )
}

export function StackCarousel() {
  return (
    <Marquee pauseOnHover gradientWidth={80} speed={40} autoFill className="mx-auto w-full py-5 md:max-w-[850px]">
      {logos.map((logo) => (
        <StackItem key={logo.name} icon={logo.icon} name={logo.name} color={logo.color} />
      ))}
    </Marquee>
  )
}
