import CarouselComponent from '@/components/CarouselComponent';
import websiteProjects from '@/types/projectTypes';
import { Link } from 'react-router-dom';
export default function WanderWilnius() {
    const data = websiteProjects.filter(
        (project) => project.title === 'WanderWilnius'
      )[0];
  
    return (
    <section className='sm:max-w-[90vw] border-b-2 mx-auto pb-2 border-zinc-600'>
      <h3 className='m-3 text-2xl underline'>{data.title}</h3>
      <div className='md:flex '>
        <CarouselComponent images={data.images} />
        {/* <p className='m-3'>{data.description}</p> */}
        <div className='flex flex-col flex-1 m-3 divide-y-2 md:mx-3 md:my-0 divide-zinc-600'>
          <p className='pb-2'>
            A basketball registration page built with{' '}
            <span className='text-zinc-500'>Next.js</span> and
            <span className='text-zinc-500'> Tailwind CSS</span>, featuring user
            authentication powered by
            <span className='text-zinc-500'> Kinde</span>. Users can create
            accounts and register for basketball games. The platform helps track
            whether enough players have signed up to play on Tuesday evenings or
            other selected days.
          </p>
          <p className='py-2'>
            Notable challenges I had to overcome: creating database with prisma
          </p>

          {data.published && 
          <p className='pt-2'>
            Link: <Link to={data.link} className='hover:text-blue-500'>{data.link}</Link>
          </p>
          }
        </div>
      </div>
    </section>
  );
}
