'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Computer } from 'lucide-react'
import Sidebar from './Sidebar'

export default function Header() {
  const pathname = usePathname()

  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    const handleResize = () => {
      setIsMobile(window.innerWidth < 440)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    handleScroll()
    handleResize()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <header className={`flex h-0 items-center justify-start ${pathname !== '/' ? 'h-20' : ''}`} id="header">
      <Link
        href="/"
        className={`${isScrolled ? 'bg-opacity-70' : ''} fixed top-[45px] z-50 flex translate-y-[-50%] cursor-pointer items-center justify-center gap-2 rounded-e-md bg-zinc-700 px-4 py-2`}
      >
        <Computer />
        {!isMobile && !isScrolled && <p>Deividas Jasas</p>}
      </Link>
      <Sidebar />
    </header>
  )
}
