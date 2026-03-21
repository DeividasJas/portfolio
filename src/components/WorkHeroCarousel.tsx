'use client'

import { useRouter } from 'next/navigation'
import { Carousel3D } from '@/components/ui/carousel-3d'
import { type WebsiteProjectType } from '@/data/projects'
import { useCallback, useMemo } from 'react'

interface WorkHeroCarouselProps {
  projects: WebsiteProjectType[]
}

export default function WorkHeroCarousel({ projects }: WorkHeroCarouselProps) {
  const router = useRouter()

  const projectsWithImages = useMemo(() => projects.filter((p) => p.images.length > 0), [projects])

  const slides = useMemo(
    () =>
      projectsWithImages.map((p) => ({
        title: p.title,
        button: 'View Project',
        src: p.images[0].src.src
      })),
    [projectsWithImages]
  )

  const handleButtonClick = useCallback(
    (index: number) => {
      const project = projectsWithImages[index]
      if (project) {
        router.push(`/work/${project.slug}`)
      }
    },
    [projectsWithImages, router]
  )

  if (slides.length === 0) return null

  return (
    <div className="relative w-full overflow-hidden pb-16 md:pb-20">
      <Carousel3D slides={slides} onButtonClick={handleButtonClick} />
    </div>
  )
}
