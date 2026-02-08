'use client'

import Autoplay from 'embla-carousel-autoplay'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { type CarouselApi } from '@/components/ui/carousel'
import { getImageSrc } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { ImageType } from '@/data/projects'

interface CarouselComponentProps {
  images: ImageType[]
}

export default function CarouselComponent({ images }: CarouselComponentProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  if (images && images.length === 0) return null

  return (
    <div className="mx-auto max-w-[700px]">
      <Carousel setApi={setApi} plugins={[Autoplay({ delay: 3000 })]} className="mx-auto w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {images.map((image: ImageType, index: number) => {
            return (
              <CarouselItem key={index} className="pl-2 md:pl-4">
                <img src={getImageSrc(image.src)} alt={image.alt} className="rounded" loading="lazy" />
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <div className="relative mt-2 hidden h-5 justify-center sm:flex">
          <CarouselPrevious className="relative -left-2 h-5 w-5 border-zinc-400 bg-black" />
          <CarouselNext className="relative -right-2 h-5 w-5 border-zinc-400 bg-inherit" />
        </div>
      </Carousel>
      <div className="mt-1 text-center text-xs opacity-50">
        <p>
          Slide {current} of {count}
          <span className="sm:hidden"> Swipe to view</span>
        </p>
      </div>
    </div>
  )
}
