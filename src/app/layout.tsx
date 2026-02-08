import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { ClientLayout } from './client-layout'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk'
})

export const metadata: Metadata = {
  title: {
    default: 'Deividas Jasas - Portfolio',
    template: '%s | Deividas Jasas'
  },
  description: 'Portfolio of Deividas Jasas - Web Developer',
  icons: [
    {
      rel: 'icon',
      url: '/favicon-light.svg',
      media: '(prefers-color-scheme: light)'
    },
    {
      rel: 'icon',
      url: '/favicon-dark.svg',
      media: '(prefers-color-scheme: dark)'
    }
  ]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.variable}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
