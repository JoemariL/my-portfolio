import { Link } from 'react-router-dom';
import { FiCloud, FiCode, FiMail, FiShield } from 'react-icons/fi';
import heroImage from '../assets/infrastructure-hero.jpg';
import ProjectPreview from './projects/ProjectPreview';
import { projects } from './projects/projectsData';

const expertise = [
  { Icon: FiShield, title: 'Network security', description: 'Web application firewalls, network systems, and security monitoring.' },
  { Icon: FiCloud, title: 'Cloud infrastructure', description: 'Cloud deployments, Terraform automation, and infrastructure troubleshooting.' },
  { Icon: FiCode, title: 'Web development', description: 'Full-stack applications built around real operational workflows.' },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="site-container hero-layout">
          <div>
            <p className="eyebrow">Developer · Network &amp; Security</p>
            <h1 className="hero-title">
              Hi, I’m <span>Joemari Lopez.</span>
            </h1>
            <p className="hero-lead">I build web applications and work on the infrastructure that keeps them running securely.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/experience" className="button button-primary">My experience</Link>
              <Link to="/projects" className="button button-secondary">View projects</Link>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <img src={heroImage} alt="" fetchPriority="high" />
          </div>
        </div>
      </section>

      <section className="site-container home-section" aria-labelledby="selected-work">
        <div className="section-intro">
          <div>
            <p className="eyebrow">Portfolio</p>
            <h2 id="selected-work" className="section-title">Selected projects</h2>
          </div>
          <Link className="button button-secondary" to="/projects">Explore projects</Link>
        </div>
        <div className="work-grid">
          {projects.map((project) => (
            <article className="work-tile" key={project.id}>
              <ProjectPreview theme={project.id} />
              <div className="work-caption">
                <p className="text-sm text-accent">{project.category}</p>
                <h3 className="card-title">{project.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="expertise-section" aria-labelledby="expertise">
        <div className="site-container home-section">
          <div className="section-intro">
            <div>
              <p className="eyebrow">Expertise</p>
              <h2 id="expertise" className="section-title">What I do</h2>
            </div>
            <Link className="button button-secondary" to="/about">About me</Link>
          </div>
          <div className="expertise-grid">
            {expertise.map(({ Icon, title, description }) => (
              <article key={title} className="site-panel">
                <span className="expertise-icon"><Icon aria-hidden="true" /></span>
                <h3 className="card-title mt-5">{title}</h3>
                <p className="body-copy mt-2">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container home-section" aria-labelledby="contact">
        <div className="contact-panel">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 id="contact" className="section-title">Let’s work together</h2>
          </div>
          <a href="mailto:lopezjoemari1@gmail.com" className="button button-primary">
            <FiMail aria-hidden="true" /> Send an email
          </a>
        </div>
      </section>

      <footer className="site-container home-footer">
        <span>Joemari Lopez</span>
        <div className="flex flex-wrap gap-5">
          <a href="https://github.com/JoemariL/">GitHub</a>
          <a href="https://www.linkedin.com/in/joemari-lopez-95409423a/">LinkedIn</a>
        </div>
      </footer>
    </>
  );
}
