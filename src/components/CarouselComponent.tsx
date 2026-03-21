'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import { ArrowLeft, ArrowRight } from 'lucide-react'
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
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div key={index} className="min-w-0 shrink-0 grow-0 basis-full">
              <img src={image.src} alt={image.alt} className="w-full rounded-xl" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center gap-4">
        <button
          onClick={() => {
            emblaApi?.scrollPrev()
            autoplay.current.reset()
          }}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 transition duration-200 hover:-translate-y-0.5 active:translate-y-0.5"
        >
          <ArrowLeft className="text-neutral-200" />
        </button>
        <span className="text-sm text-zinc-400">
          Slide {current} of {images.length}
        </span>
        <button
          onClick={() => {
            emblaApi?.scrollNext()
            autoplay.current.reset()
          }}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 transition duration-200 hover:-translate-y-0.5 active:translate-y-0.5"
        >
          <ArrowRight className="text-neutral-200" />
        </button>
      </div>
    </div>
  )
}
