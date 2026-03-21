'use client'

import { type TimelineItem, timelineYears } from '@/data/timeline'
import { GraduationCap, Briefcase } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

// The entire chart spans this many months.
// e.g. timelineYears = [2023, 2024, 2025, 2026] → (2026 - 2023 + 1) * 12 = 48 months.
// Every position/width in the chart is calculated as a percentage of this total.
const TOTAL_MONTHS = (timelineYears[timelineYears.length - 1] - timelineYears[0] + 1) * 12

// Converts a month offset (from timeline.ts) to a CSS percentage position.
// e.g. month 12 out of 48 total → 25% from the left edge.
function toPercent(months: number): number {
  return (months / TOTAL_MONTHS) * 100
}

/**
 * Horizontal Gantt-style chart.
 *
 * Layout (simplified):
 *
 *   2023        2024        2025        2026
 *   |           |           |           |        ← year labels (absolute-positioned text)
 *   |           |           |           |        ← vertical grid lines (1px dividers)
 *   |███████████████████████|           |        ← Education bar
 *   |           |███████████████████████|        ← Fametonic bar
 *   |           |     ██████|           |        ← Parenting Leader bar
 *   ...etc
 *
 * How positioning works:
 * - The container is 100% width (fills its parent).
 * - Each bar is absolutely positioned inside a relative row.
 * - `left` = where the bar starts (startMonth as % of total months).
 * - `width` = how long the bar stretches (duration as % of total months).
 *
 * Animation:
 * - Bars start at width: 0% and grow to their full width when the
 *   component scrolls into view (via IntersectionObserver).
 * - Each bar has a staggered delay (i * 100ms) so they animate in sequence.
 *
 * Hover:
 * - Default: bar has a subtle transparent fill (color + "20" hex alpha = 12% opacity).
 * - On hover: bar fills with the solid color and text turns white.
 */
function ProjectTimeline({ items }: { items: TimelineItem[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Trigger the grow-in animation once the chart scrolls into view.
  // threshold: 0.2 means "fire when 20% of the element is visible."
  // After firing once, we unobserve — the animation doesn't reverse on scroll-out.
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

  return (
    <div ref={ref} className="w-full">
      {/* Row 1: Year labels — "2023", "2024", etc. positioned along the x-axis */}
      <div className="relative mb-2 h-6">
        {timelineYears.map((year) => {
          // Convert year to a percentage offset.
          // e.g. 2024 in a [2023..2026] range → (2024-2023)*12 = month 12 → 25%
          const left = toPercent((year - timelineYears[0]) * 12)
          return (
            <span key={year} className="absolute font-mono text-xs text-zinc-500" style={{ left: `${left}%` }}>
              {year}
            </span>
          )
        })}
      </div>

      {/* Row 2: The chart area — grid lines behind, colored bars in front */}
      <div className="relative">
        {/* Vertical grid lines at each year boundary (sits behind the bars via absolute positioning) */}
        <div className="absolute inset-0">
          {timelineYears.map((year) => {
            const left = toPercent((year - timelineYears[0]) * 12)
            return <div key={year} className="absolute top-0 h-full w-px bg-zinc-800" style={{ left: `${left}%` }} />
          })}
        </div>

        {/* The actual project bars — one row per timeline item, stacked vertically */}
        <div className="relative flex flex-col gap-2 py-2">
          {items.map((item, i) => {
            // Where this bar starts (% from left edge)
            const left = toPercent(item.startMonth)
            // How wide this bar is (% of total timeline)
            const width = toPercent(item.endMonth - item.startMonth)
            const isHovered = hoveredIndex === i

            return (
              // Each bar gets a fixed-height row so bars don't overlap
              <div key={item.label} className="relative h-9">
                <div
                  className="absolute flex h-full items-center rounded-md px-3 transition-all duration-500"
                  style={{
                    left: `${left}%`,
                    // When not yet visible (before scroll-in), width is 0% → bars are invisible.
                    // Once visible flips to true, width transitions to its real value (the grow animation).
                    width: visible ? `${width}%` : '0%',
                    // "20" = 12% alpha, "40" = 25% alpha (hex alpha suffix on the color)
                    backgroundColor: isHovered ? item.color : `${item.color}20`,
                    border: `1px solid ${item.color}40`,
                    // Stagger: first bar animates immediately, second after 100ms, third after 200ms, etc.
                    transitionDelay: `${i * 100}ms`,
                    cursor: 'default'
                  }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Bar label — text color matches the bar color, turns white on hover */}
                  <span className="whitespace-nowrap text-xs font-medium transition-colors duration-200" style={{ color: isHovered ? '#fff' : item.color }}>
                    {item.label}
                    {item.solo && <span className="ml-1.5 text-[10px] opacity-60">(solo)</span>}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function TimelineDetail({ item, index }: { item: TimelineItem; index: number }) {
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

  const isWork = item.type === 'work'

  return (
    <div ref={ref} className="group relative flex gap-6 pb-12 last:pb-0">
      {/* Vertical line */}
      <div className="relative flex flex-col items-center">
        <div
          className="z-[1] flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-500"
          style={{
            borderColor: visible ? item.color : undefined,
            backgroundColor: visible ? `${item.color}15` : undefined,
            color: visible ? item.color : undefined
          }}
        >
          {isWork ? <Briefcase className="h-4 w-4" /> : <GraduationCap className="h-4 w-4" />}
        </div>
        {/* Connector line */}
        <div className="absolute top-10 h-[calc(100%-2.5rem)] w-px bg-gradient-to-b from-zinc-700 to-transparent" />
      </div>

      {/* Content */}
      <div
        className={`flex min-w-0 flex-1 flex-col gap-1 pt-1 transition-all duration-700 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <h4 className="text-base font-semibold text-zinc-100">{item.label}</h4>
          <span className="rounded-full px-2.5 py-0.5 text-xs font-medium" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
            {item.type}
          </span>
        </div>
        <p className="text-sm font-medium text-zinc-400">
          {item.title} · {item.organization}
        </p>
        {item.description && <p className="mt-1 text-sm leading-relaxed text-zinc-500">{item.description}</p>}
      </div>
    </div>
  )
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="flex flex-col gap-12">
      {/* Gantt chart */}
      <ProjectTimeline items={items} />

      {/* Vertical timeline */}
      <div className="flex flex-col">
        {items.map((item, i) => (
          <TimelineDetail key={item.label} item={item} index={i} />
        ))}
      </div>
    </div>
  )
}
