'use client'

import { useEffect, RefObject } from 'react'

/**
 * Triggers callback when user clicks outside specified element(s)
 * @param refs - Single ref or array of refs to detect clicks outside of
 * @param handler - Callback function to execute on outside click
 * @param enabled - Whether the hook is active (default: true)
 */
export function useOnClickOutside(
  refs: RefObject<HTMLElement> | RefObject<HTMLElement>[],
  handler: (event: MouseEvent | TouchEvent) => void,
  enabled: boolean = true
): void {
  useEffect(() => {
    if (!enabled) return

    const listener = (event: MouseEvent | TouchEvent) => {
      const refsArray = Array.isArray(refs) ? refs : [refs]

      // Check if click is outside all refs
      const clickedOutside = refsArray.every(
        (ref) => ref.current && !ref.current.contains(event.target as Node)
      )

      if (clickedOutside) {
        handler(event)
      }
    }

    // Use mousedown for better UX (triggers before click)
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [refs, handler, enabled])
}
