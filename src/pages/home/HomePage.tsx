import MouseTrackingEffect from '@/components/MouseTrackingEffect';
import NavBullets from '../../components/NavBullets';
import './../../styles/homePage.css';


export default function HomePage() {
  return (
    <>
      {/* because i want snap scroll to footer as well i have to wrap everything with container class inside App.tsx  */}
      {/* <div className='snap-scroll-container'> */}
 <MouseTrackingEffect/>
      <section id='target-1' className='section bg-lime-100 h-[400px] '>
        <div>
          {/* <h3>Hello, my name is</h3> */}
          <h1>
            <span className='text-zinc-600 '>Deividas Jasas.</span> <br />I build
            things for web world.
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
        <h1>Target-3</h1>
      </section>
      {/* </div> */}
      <div className='fixed hidden md:block top-1/2 right-4'>
        <NavBullets />
      </div>
    </>
  );
}
