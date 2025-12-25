'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="relative flex flex-col min-h-screen bg-zinc-900 layout text-zinc-300 text-pretty">
      <Header />
      <div
        className={
          pathname === '/'
            ? 'snap-scroll-container'
            : 'flex flex-col h-full grow'
        }
      >
        <main className={pathname === '/' ? '' : 'grow px-4 pb-4'}>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}
