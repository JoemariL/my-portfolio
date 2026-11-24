import { FiCalendar } from 'react-icons/fi';
import ShowcaseCard from '../../components/ShowcaseCard';
import ProjectPreview from './ProjectPreview';

export default function ProjectsCard({ project }) {
  const { id, title, date, category, description } = project;

  return (
    <ShowcaseCard>
      <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-12">
        <div>
          <p className="eyebrow mb-2">{category}</p>
          <h2 className="page-title">{title}</h2>
          <p className="body-copy mt-4">{description}</p>
          <p className="mt-5 flex items-center gap-2 text-sm text-muted">
            <FiCalendar aria-hidden="true" /> {date}
          </p>
        </div>
        <ProjectPreview theme={id} />
      </div>
    </ShowcaseCard>
  );
}
