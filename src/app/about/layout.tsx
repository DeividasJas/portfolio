import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    "I'm a Junior Programmer with experience in both front-end and back-end development, focusing on writing clean, efficient code and building robust, user-friendly applications.",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
