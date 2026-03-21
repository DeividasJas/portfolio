'use client'

import { useEffect, RefObject } from 'react'

/**
 * Disables CSS transitions on an element during window resize to prevent janky animations.
 * Re-enables transitions after a 200ms debounce.
 */
export function useResizeTransition(ref: RefObject<HTMLElement | null>, enabled: boolean = true): void {
  useEffect(() => {
    if (!enabled) return

    const element = ref.current
    if (!element) return

    let resizing = false
    let timeoutId: ReturnType<typeof setTimeout>

    const handleResize = () => {
      if (!resizing) {
        element.style.transition = 'none'
        resizing = true
      }

      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        element.style.transition = ''
        resizing = false
      }, 200)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(timeoutId)
      element.style.transition = ''
    }
  }, [ref, enabled])
}
