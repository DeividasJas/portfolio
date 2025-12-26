'use client'

import { useEffect } from 'react'

/**
 * Triggers callback when specified keyboard key is pressed
 * @param key - The keyboard key to listen for (e.g., 'Escape', 'Enter')
 * @param callback - Function to execute when key is pressed
 * @param enabled - Whether the hook is active (default: true)
 */
export function useKeyboardShortcut(
  key: string,
  callback: () => void,
  enabled: boolean = true
): void {
  useEffect(() => {
    if (!enabled) return

    const handler = (event: KeyboardEvent) => {
      if (event.key === key) {
        event.preventDefault()
        callback()
      }
    }

    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [key, callback, enabled])
}
