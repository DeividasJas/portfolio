import websiteProjects from '@/types/projectTypes';
import ProjectCard from '@/components/ProjectCard';
export default function ProjectsPage() {
  return (
    <div className='flex flex-col gap-4 '>
      <h1 className='mt-8 text-xl text-center md:text-3xl'>Work</h1>
      <h3 className='text-lg text-center md:text-xl'>
        Select the work I've taken in the past
      </h3>

      {/* {websiteProjects.map((project, index) => {
        console.log(index);
        return <SingleProjectCard project={project} />;
      })} */}

      {/* <BasketJoin />
      <WanderWilnius />
      <MumsWebsite/> */}

      <ul
        className={`grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 place-items-center md:mx-4 ${
          websiteProjects.length >= 4 && 'xl:grid-cols-4'
        }`}
      >
        {websiteProjects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </ul>

      {/* <Link to='/projects/'>press me</Link> */}
    </div>
  );
}
