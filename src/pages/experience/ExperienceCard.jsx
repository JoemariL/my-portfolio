import { FiMapPin } from 'react-icons/fi';
import { BsBriefcase } from 'react-icons/bs';
import ShowcaseCard from '../../components/ShowcaseCard';

export default function ExperienceCard({
  logo,
  companyName,
  duration,
  position,
  type,
  location,
  description,
  responsibilities,
}) {
  return (
    <ShowcaseCard>
      <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-12">
        <div>
          <div className="mb-5 flex h-20 w-24 items-center justify-center rounded-lg bg-white p-2 sm:h-24 sm:w-28">
            <img
              src={logo}
              width={96}
              height={80}
              className="h-full w-full object-contain"
              alt=""
            />
          </div>
          <p className="eyebrow mb-2">Experience</p>
          <h2 className="page-title">{companyName}</h2>
          <p className="mt-2 text-sm font-semibold text-accent">{duration}</p>
          <p className="mt-4 flex items-center gap-2">
            <BsBriefcase aria-hidden="true" className="shrink-0" />
            <span>{position} · {type}</span>
          </p>
          <p className="mt-1 flex items-center gap-2">
            <FiMapPin aria-hidden="true" className="shrink-0" />
            <span>{location}</span>
          </p>
        </div>

        <div className="space-y-4 border-t border-divider pt-5 text-base leading-relaxed text-muted lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <p className="text-lg text-foreground">{description}</p>
          <ul className="list-disc space-y-2 pl-5">
            {responsibilities.map((responsibility) => (
              <li key={responsibility}>{responsibility}</li>
            ))}
          </ul>
        </div>
      </div>
    </ShowcaseCard>
  );
}
