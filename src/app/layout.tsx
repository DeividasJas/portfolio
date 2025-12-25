'use client'

import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { usePathname } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link
          rel="icon"
          href="/favicon-light.svg"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Deividas Jasas - Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Deividas Jasas - Web Developer"
        />
      </head>
      <body className={spaceGrotesk.variable}>
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
      </body>
    </html>
  )
}
