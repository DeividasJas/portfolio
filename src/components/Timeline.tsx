'use client'

import { type TimelineEntry } from '@/data/timeline'
import { GraduationCap, Briefcase } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

function TimelineItem({ entry, index }: { entry: TimelineEntry; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const isWork = entry.type === 'work'

  return (
    <div ref={ref} className="group relative flex gap-6 pb-12 last:pb-0">
      {/* Vertical line */}
      <div className="relative flex flex-col items-center">
        <div
          className={`z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-500 ${
            visible
              ? isWork
                ? 'border-blue-500 bg-blue-500/10 text-blue-500'
                : 'border-emerald-500 bg-emerald-500/10 text-emerald-500'
              : 'border-zinc-700 bg-zinc-900 text-zinc-600'
          }`}
        >
          {isWork ? <Briefcase className="h-4 w-4" /> : <GraduationCap className="h-4 w-4" />}
        </div>
        {/* Connector line */}
        <div className="absolute top-10 h-[calc(100%-2.5rem)] w-px bg-gradient-to-b from-zinc-700 to-transparent" />
      </div>

      {/* Content */}
      <div
        className={`flex min-w-0 flex-1 flex-col gap-1 pt-1 transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <h4 className="text-base font-semibold text-zinc-100">{entry.title}</h4>
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
              isWork ? 'bg-blue-500/10 text-blue-400' : 'bg-emerald-500/10 text-emerald-400'
            }`}
          >
            {entry.type}
          </span>
        </div>
        <p className="text-sm font-medium text-zinc-400">{entry.organization}</p>
        <p className="font-mono text-xs tracking-wide text-zinc-500">
          {entry.startDate} — {entry.endDate}
        </p>
        {entry.description && <p className="mt-1 text-sm leading-relaxed text-zinc-500">{entry.description}</p>}
      </div>
    </div>
  )
}

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="flex flex-col">
      {entries.map((entry, i) => (
        <TimelineItem key={`${entry.organization}-${entry.startDate}`} entry={entry} index={i} />
      ))}
    </div>
  )
}
