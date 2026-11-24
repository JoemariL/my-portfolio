import { FiAward } from 'react-icons/fi';

export default function Certifications() {
  return (
    <section className="site-container page-spacing" aria-labelledby="certifications-heading">
      <h1 id="certifications-heading" className="page-title">Certifications</h1>
      <div className="site-panel mt-8 flex max-w-3xl items-center gap-4">
        <span className="expertise-icon shrink-0"><FiAward aria-hidden="true" /></span>
        <p className="body-copy">No certifications are listed yet.</p>
      </div>
    </section>
  );
}
