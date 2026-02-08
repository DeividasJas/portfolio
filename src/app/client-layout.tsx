'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="layout relative flex min-h-screen flex-col text-pretty bg-zinc-900 text-zinc-300">
      <Header />
      <div className={pathname === '/' ? 'snap-scroll-container' : 'flex h-full grow flex-col'}>
        <main className={pathname === '/' ? '' : 'grow px-4 pb-4'}>{children}</main>
        <Footer />
      </div>
    </div>
  )
}
