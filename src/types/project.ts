import type { StaticImageData } from 'next/image'

export type ImageType = {
  src: string | StaticImageData
  alt: string
}

export type WebsiteProjectType = {
  title: string
  slug: string
  link: string
  published: boolean
  logoSrc: string | StaticImageData
  images: ImageType[]
  description: string
}
