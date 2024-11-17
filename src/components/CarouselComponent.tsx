import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import { type CarouselApi } from '@/components/ui/carousel';

import { ImageType } from '@/types/projectTypes';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

interface CarouselComponentProps {
  images: ImageType[];
}

export default function CarouselComponent({ images }: CarouselComponentProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const isDesktop = useMediaQuery({ minWidth: 640 });

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <>
      <div className='w-full mx-auto sm:w-[90vw] max-w-[700px] flex-1 '>
        <Carousel setApi={setApi} plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]} className='w-full mx-auto'>
          <CarouselContent className='-ml-2 md:-ml-4'>
            {images.map((image: ImageType, index: number) => {
              return (
                <CarouselItem key={index} className='pl-2 md:pl-4'>
                  <img src={image.src} alt={image.alt} className='rounded' />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          {isDesktop && (
            <div className='relative flex justify-center h-5 mt-2'>
              <CarouselPrevious className='relative w-5 h-5 bg-black border-zinc-400 -left-2' />
              <CarouselNext className='relative w-5 h-5 bg-inherit border-zinc-400 -right-2' />
            </div>
          )}
        </Carousel>
        <div className='mt-1 text-xs text-center opacity-50'>
          <p>
            Slide {current} of {count}
            {!isDesktop && ' Swipe to view'}
          </p>
        </div>
      </div>
    </>
  );
}
