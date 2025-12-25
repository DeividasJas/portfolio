'use client'

import MouseTrackingEffect from '@/components/MouseTrackingEffect'
import NavBullets from '@/components/NavBullets'

export default function HomePage() {
  return (
    <>
      <MouseTrackingEffect />
      <section
        id="target-1"
        className="section h-[400px] px-10 flex gap-8 md:gap-24 flex-col justify-center text-center "
      >
        <h1 className="z-0 text-2xl whitespace-normal md:text-4xl">
          Hi, I'm Deividas Jasas, a Passionate Web Developer.
        </h1>
        <h3 className="mx-4 md:max-w-[600px] md:text-2xl text-xl">
          I create modern, responsive websites that combine clean design with
          seamless functionality.
        </h3>
      </section>
      <section
        id="target-2"
        className="group flex flex-col justify-center gap-8 px-10 py-10 text-center section md:gap-24 h-[400px] bg-zinc-800 "
      >
        <p className="md:max-w-[660px] max-w-[497px] text-lg md:text-2xl mx-auto">
          I'm a Junior Programmer with a{' '}
          <span className="text-blue-500 transition-colors duration-500 ease-in-out sm:group-hover:text-blue-500 sm:text-inherit">
            passion
          </span>{' '}
          for building web experiences that stand out. Whether it's crafting
          sleek landing pages or complex applications, I focus on making every{' '}
          <span className="text-blue-500 transition-colors duration-500 ease-in-out sm:group-hover:text-blue-500 sm:text-inherit">
            detail
          </span>{' '}
          count.
        </p>
        <h2 className="text-2xl md:text-3xl">
          Let's{' '}
          <span className="text-blue-500 transition-colors duration-500 ease-in-out sm:group-hover:text-blue-500 sm:text-inherit">
            Build
          </span>{' '}
          Something Great Together.
        </h2>
      </section>

      <div className="fixed hidden md:block top-1/2 right-4">
        <NavBullets />
      </div>
    </>
  )
}
