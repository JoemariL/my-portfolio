import Skills from './Skills';

export default function About() {
  return (
    <div className="site-container page-spacing space-y-12 sm:space-y-16">
      <section aria-labelledby="about-heading">
        <h1 id="about-heading" className="page-title">Who Am I?</h1>
        <div className="site-panel mt-6 max-w-3xl space-y-4">
          <p className="body-copy">
            A passionate developer / programmer with a strong drive for continuous improvement. I aim for the best possible outcome in the work that I do.
          </p>
          <p className="body-copy">
            I specialize in building scalable and efficient applications using modern technologies.
          </p>
        </div>
      </section>
      <Skills />
    </div>
  );
}
