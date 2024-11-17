import { useParams } from 'react-router-dom';
export default function ProjectPage() {
  const { projectName } = useParams();
  // console.log(projectName);

  return (
    <>
      <h1>hello im a </h1>
      <h1>hello im a {projectName}</h1>
    </>
  );
}
