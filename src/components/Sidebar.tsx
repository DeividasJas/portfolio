'use client'

import { useCallback, useState, useRef } from 'react'
import Link from 'next/link'
import { navbarLinks, navbarSocials } from '@/data/navigation'
import { siteConfig } from '@/data/site-config'
import { MailOpen } from 'lucide-react'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import { useKeyboardShortcut } from '@/hooks/useKeyboardShortcut'
import { useResizeTransition } from '@/hooks/useResizeTransition'

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const close = useCallback(() => setOpen(false), [])

  useLockBodyScroll(open)
  useOnClickOutside([sidebarRef, buttonRef], close, open)
  useKeyboardShortcut('Escape', close, open)
  useResizeTransition(sidebarRef, open)

  return (
    <>
      <div className={`nav-button-wrapper ${open ? 'nav-button-wrapper-active' : ''}`}>
        <button
          className={`nav-button ${open ? 'nav-btn-active' : ''}`}
          aria-label="Open Sidebar"
          onClick={() => setOpen((prev) => !prev)}
          ref={buttonRef}
        />
      </div>

      <nav
        className={`sidebar text-zinc-800 ${open ? 'sidebar-active' : ''}`}
        ref={sidebarRef}
      >
        <div className={`sidebar-content ${open ? 'sidebar-content-active' : ''}`}>
          <ul className="flex flex-row items-start justify-start w-full gap-4">
            {navbarLinks.map((link) => (
              <li key={link.path}>
                <Link href={link.path} onClick={close}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="relative flex flex-col items-start justify-start w-full gap-2">
            <p className="flex items-center gap-2">
              SAY HELLO <MailOpen size={20} strokeWidth={2} />
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mail-hover"
              onClick={close}
            >
              {siteConfig.email}
            </a>
          </div>

          <ul className="flex flex-row items-start justify-start w-full gap-4">
            {navbarSocials.map((link) => (
              <li key={link.path}>
                <a
                  href={link.path}
                  onClick={close}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.title}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}
