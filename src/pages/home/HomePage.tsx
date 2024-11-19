import MouseTrackingEffect from '@/components/MouseTrackingEffect';
import NavBullets from '../../components/NavBullets';
import './../../styles/homePage.css';

export default function HomePage() {
  return (
    <>
      {/* because i want snap scroll to footer as well i have to wrap everything with container class inside App.tsx  */}
      {/* <div className='snap-scroll-container'> */}
      <MouseTrackingEffect />
      <section id='target-1' className='section bg-lime-100 h-[400px] '>
        <div>
          {/* <h3>Hello, my name is</h3> */}
          <h1>
            <span className='text-zinc-600 '>Deividas Jasas.</span> <br />I
            build things for web world.
          </h1>
          <h1>
            <span className='text-zinc-600'>Deividas Jasas.</span> <br />
            Web developer, based in Vilnius, Lithuania.
          </h1>
        </div>
      </section>
      <section id='target-2' className='bg-red-300 section h-[400px]'>
        <h1>Target-2</h1>
      </section>
      <section id='target-3' className='section bg-zinc-500 h-[400px]'>
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
          class='lucide lucide-square-user-round'
          className='animate-spin'
        >
          <path d='M18 21a6 6 0 0 0-12 0' />
          <circle cx='12' cy='11' r='4' />
          <rect width='18' height='18' x='3' y='3' rx='2' />
        </svg>
      </section>
      {/* </div> */}
      <div className='fixed hidden md:block top-1/2 right-4'>
        <NavBullets />
      </div>
    </>
  );
}
