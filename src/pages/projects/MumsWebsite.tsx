import CarouselComponent from '@/components/CarouselComponent';
import websiteProjects from '@/types/projectTypes';
import { Link } from 'react-router-dom';
export default function MumsWebsite() {
  const data = websiteProjects.filter(
    (project) => project.title === 'GinteJasiene'
  )[0];
  return (
    <>
      <section className='sm:max-w-[90vw] border-b-2 mx-auto pb-2 border-zinc-600'>
        <h3 className='m-3 text-2xl underline'>{data.title}</h3>
        <div className='md:flex '>
          <CarouselComponent images={data.images} />
          <div className='flex flex-col flex-1 m-3 divide-y-2 divide-zinc-600 md:mx-3 md:my-0'>
            <p className='pb-2'>
             {data.description}
            </p>
            <p className='py-2'>
              Notable challenges I had to overcome:
            </p>
            <p className='pt-2'>
              Link:{' '}
              <Link to={data.link} className='hover:text-blue-500'>
                {data.link}
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
