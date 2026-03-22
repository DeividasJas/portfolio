'use client'

import MouseTrackingEffect from '@/components/MouseTrackingEffect'
import NavBullets from '@/components/NavBullets'

export default function HomePage() {
  return (
    <>
      <MouseTrackingEffect />
      <section id="target-1" className="section flex h-[400px] flex-col justify-center gap-8 px-10 text-center md:gap-24">
        <h1 className="z-0 whitespace-normal text-2xl md:text-4xl">I&apos;m Deividas Jasas. I build products that people use.</h1>
        <h3 className="mx-4 text-xl md:max-w-[600px] md:text-2xl">Full-stack developer at Netzet. 45,000+ users across my projects.</h3>
      </section>
      <section
        id="target-2"
        className="section group flex h-[400px] flex-col justify-center gap-8 bg-slate-800/50 px-10 py-10 text-center md:gap-24"
      >
        <p className="mx-auto max-w-[497px] text-lg md:max-w-[660px] md:text-2xl">
          I don&apos;t have ten years of experience. I have <span className="highlight-text">products in production</span>, users who depend on
          them, and code that hasn&apos;t <span className="highlight-text">gone down</span>.
        </p>
        <h2 className="text-2xl md:text-3xl">
          <span className="highlight-text">Judge</span> for yourself.
        </h2>
      </section>

      <div className="fixed right-4 top-1/2 hidden md:block">
        <NavBullets />
      </div>
    </>
  )
}
