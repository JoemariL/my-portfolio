import ScrollPanels from '../../components/layout/ScrollPanels';
import ProjectsCard from './ProjectsCard';
import { projects } from './projectsData';

export default function Projects() {
  return (
    <ScrollPanels title="Projects">
      {projects.map((project) => <ProjectsCard key={project.id} project={project} />)}
    </ScrollPanels>
  );
}
