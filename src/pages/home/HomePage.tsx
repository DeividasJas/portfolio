import MouseTrackingEffect from '@/components/MouseTrackingEffect';
import NavBullets from '../../components/NavBullets';
import './../../styles/homePage.css';

export default function HomePage() {
  return (
    <>
      {/* because i want snap scroll to footer as well i have to wrap everything with container class inside App.tsx  */}
      <MouseTrackingEffect />
      <section
        id='target-1'
        className='section h-[400px] px-10 flex gap-8 md:gap-24 flex-col justify-center text-center '
      >
        <h1 className='z-0 text-2xl whitespace-normal md:text-4xl'>
          Hi, I’m Deividas Jasas, a Passionate Web Developer.
        </h1>
        <h3 className='mx-4 md:max-w-[600px] md:text-2xl text-xl'>
          I create modern, responsive websites that combine clean design with
          seamless functionality.
        </h3>
        {/* <h3 className='mx-4 md:max-w-[600px] md:text-2xl text-xl'>
          I craft intuitive, high-performance websites and applications to bring
          ideas to life.
        </h3> */}
        {/* <div>
          <h1>
            <span className='text-zinc-600 '>Deividas Jasas.</span> <br />I
            build things for web world.
          </h1>
          <h1>
            <span className='text-zinc-600'>Deividas Jasas.</span> <br />
            Web developer, based in Vilnius, Lithuania.
          </h1>
        </div> */}
      </section>
      <section
        id='target-2'
        className='flex group flex-col justify-center gap-8 px-10 py-10 text-center section md:gap-24 h-[400px] bg-zinc-800'
      >
        <p className='md:max-w-[660px] max-w-[497px] text-lg md:text-2xl'>
          I’m a Junior Programmer with a{' '}
          <span className='transition-colors duration-500 ease-in-out group-hover:text-blue-500'>
            passion
          </span>{' '}
          for building web experiences that stand out. Whether it’s crafting
          sleek landing pages or complex applications, I focus on making every{' '}
          <span className='transition-colors duration-500 ease-in-out group-hover:text-blue-500'>
            detail
          </span>{' '}
          count.
        </p>
        <h2 className='text-2xl md:text-3xl'>
          Let’s{' '}
          <span className='transition-colors duration-500 ease-in-out group-hover:text-blue-500'>
            Build
          </span>{' '}
          Something Great Together.
        </h2>
      </section>

      {/* <section id='target-3' className='section bg-zinc-500 h-[400px]'>
        <h1 className='animate-bounce'>Target-3</h1>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='white'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
          className='animate-spin'
        >
          <path d='M18 21a6 6 0 0 0-12 0' />
          <circle cx='12' cy='11' r='4' />
          <rect width='18' height='18' x='3' y='3' rx='2' />
        </svg>
      </section> */}
      <div className='fixed hidden md:block top-1/2 right-4'>
        <NavBullets />
      </div>
    </>
  );
}
