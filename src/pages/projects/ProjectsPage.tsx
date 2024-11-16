import SingleProjectCard from '@/components/SingleProjectCard';
import websiteProjects from '@/types/projectTypes';
import BasketJoin from './BasketJoin';
import WanderWilnius from './WanderWilnius';
import MumsWebsite from './MumsWebsite';
export default function ProjectsPage() {
  return (
    <div className='flex flex-col gap-4 '>
      <h1 className='mx-auto mt-8 text-xl md:text-3xl'>Projects:</h1>

      {/* {websiteProjects.map((project, index) => {
        console.log(index);
        return <SingleProjectCard project={project} />;
      })} */}

      <BasketJoin />
      <WanderWilnius />
      <MumsWebsite/>
    </div>
  );
}
