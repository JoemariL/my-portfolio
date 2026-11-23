import { motion } from 'framer-motion';
import { FiCalendar, FiGlobe, FiCode } from 'react-icons/fi';

const halftone = {
  backgroundImage: 'radial-gradient(rgba(0,0,0,0.22) 1.2px, transparent 1.4px)',
  backgroundSize: '7px 7px',
  WebkitMaskImage: 'linear-gradient(135deg, black 0%, transparent 55%)',
  maskImage: 'linear-gradient(135deg, black 0%, transparent 55%)',
};

const ProjectsCard = ({
  projectTitle,
  projectDate,
  children,
  index,
  tech,
  url,
  ...rest
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ ease: 'easeOut', duration: 0.7 }}
      className="relative w-full h-full overflow-hidden
                 rounded-xl bg-accent text-canvas
                 shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
      {...rest}
    >
      {/* Halftone texture */}
      <div className="absolute inset-0 pointer-events-none" style={halftone} />

      {/* White diagonal corners */}
      <div
        className="absolute inset-0 bg-foreground pointer-events-none"
        style={{ clipPath: 'polygon(52% 0, 100% 0, 100% 42%)' }}
      />
      <div
        className="absolute inset-0 bg-foreground pointer-events-none"
        style={{ clipPath: 'polygon(0 74%, 0 100%, 40% 100%)' }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between gap-6 p-5 sm:p-6">
        {/* Top: stars + project number */}
        <div className="flex items-center gap-3 text-sm font-bold tracking-[0.3em] uppercase">
          <span>★</span>
          <span>Project {String(index ?? 1).padStart(2, '0')}</span>
          <span>★</span>
        </div>

        {/* Middle: title + description */}
        <div>
          <h2 className="card-title">
            {projectTitle}
          </h2>
          <p className="mt-1 text-sm font-semibold">
            {projectDate}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed">
            {children}
          </p>
        </div>

        {/* Bottom: icon rows */}
        <ul className="grid gap-3 sm:grid-cols-2 text-sm sm:text-base font-medium">
          <li className="flex items-center gap-3">
            <FiCalendar className="shrink-0 text-lg" />
            {projectDate}
          </li>
          <li className="flex items-center gap-3">
            <FiCode className="shrink-0 text-lg" />
            {tech ?? 'Tech stack coming soon'}
          </li>
          <li className="flex items-center gap-3 sm:col-span-2">
            <FiGlobe className="shrink-0 text-lg" />
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:opacity-75"
              >
                {url.replace(/^https?:\/\//, '')}
              </a>
            ) : (
              <span>Coming soon...</span>
            )}
          </li>
        </ul>
      </div>
    </motion.article>
  );
};

export default ProjectsCard;