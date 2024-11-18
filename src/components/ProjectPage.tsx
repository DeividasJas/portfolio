import { useParams } from 'react-router-dom';
import websiteProjects from '@/types/projectTypes';
import { WebsiteProjectType } from '@/types/projectTypes';
import CarouselComponent from './CarouselComponent';
export default function ProjectPage() {
  const { projectName } = useParams();
  
  
  const data: WebsiteProjectType = websiteProjects.filter(
    (project) => project.title === projectName
  )[0];
  
  console.log(data);
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <h1 className='mt-8 text-xl text-center md:text-3xl'>{data.title}</h1>
      <CarouselComponent images={data.images} />
      <p className='mx-8 max-w-[800px]'>{data.description}</p>
    </div>
  );
}
