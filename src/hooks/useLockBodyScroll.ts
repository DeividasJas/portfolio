'use client'

import { useEffect } from 'react'

/**
 * Locks body scroll when active, preventing layout shift
 * @param lock - Whether to lock body scroll
 */
export function useLockBodyScroll(lock: boolean): void {
  useEffect(() => {
    if (!lock) return

    const originalOverflow = document.body.style.overflow
    const originalPaddingRight = document.body.style.paddingRight

    // Prevent layout shift by calculating scrollbar width
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth
    document.body.style.paddingRight = `${scrollbarWidth}px`
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalOverflow
      document.body.style.paddingRight = originalPaddingRight
    }
  }, [lock])
}
