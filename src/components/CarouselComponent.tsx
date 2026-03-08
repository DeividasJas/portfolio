'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getImageSrc } from '@/lib/utils'
import { ImageType } from '@/data/projects'

export default function CarouselComponent({ images }: { images: ImageType[] }) {
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }))
  const plugins = useRef([autoplay.current, WheelGesturesPlugin()])
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, plugins.current)
  const [current, setCurrent] = useState(1)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCurrent(emblaApi.selectedScrollSnap() + 1)
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  if (!images?.length) return null

  return (
    <div className="mx-auto max-w-[700px]">
      <div className="overflow-hidden rounded" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div key={index} className="min-w-0 shrink-0 grow-0 basis-full">
              <img src={getImageSrc(image.src)} alt={image.alt} className="w-full rounded" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
      <div className="relative mt-2 hidden h-5 justify-center sm:flex">
        <button onClick={() => { emblaApi?.scrollPrev(); autoplay.current.reset() }} className="relative -left-2 flex h-5 w-5 items-center justify-center rounded-full border border-zinc-400 bg-black">
          <ArrowLeft className="h-3 w-3" />
        </button>
        <button
          onClick={() => { emblaApi?.scrollNext(); autoplay.current.reset() }}
          className="relative -right-2 flex h-5 w-5 items-center justify-center rounded-full border border-zinc-400 bg-inherit"
        >
          <ArrowRight className="h-3 w-3" />
        </button>
      </div>
      <p className="mt-1 text-center text-xs opacity-50">
        Slide {current} of {images.length}
        <span className="sm:hidden"> Swipe to view</span>
      </p>
    </div>
  )
}
