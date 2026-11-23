import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { ease: 'easeInOut', duration: 0.8, delay },
});

function Home() {
  return (
    <section className="flex-grow flex items-center justify-center">
        <div className="site-container py-16 flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-20">
        {/* Text */}
        <div className="text-center md:text-left max-w-xl">
          <motion.p {...fadeUp(0.2)} className="section-title text-foreground">
            Hi
          </motion.p>

          <motion.h1
            {...fadeUp(0.35)}
            className="mt-1 page-title text-foreground"
          >
            I'm <span className="text-accent">Joemari Lopez</span>
            <br />
            a Developer
          </motion.h1>

          <motion.p {...fadeUp(0.5)} className="mt-3 text-lg text-accent-soft">
            Network &amp; Security
          </motion.p>

          <motion.p {...fadeUp(0.65)} className="mt-6 body-copy">
            An enthusiastic and self-motivated programmer, dedicated to continuous
            growth, seeking new experiences to improve skills.
          </motion.p>

          <motion.div
            {...fadeUp(0.8)}
            className="mt-8 flex flex-wrap justify-center md:justify-start gap-4"
          >
            <a
              href="mailto:your@email.com"
              className="px-6 py-2.5 rounded-lg bg-accent text-canvas font-semibold
                         hover:bg-yellow-400 transition-colors duration-300"
            >
              Hire Me
            </a>
            <Link
              to="/about"
              className="px-6 py-2.5 rounded-lg border border-accent text-accent font-semibold
                         hover:bg-accent hover:text-canvas transition-colors duration-300"
            >
              Experience
            </Link>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: 'easeOut', duration: 0.9, delay: 0.4 }}
          className="relative shrink-0"
        >
          <div className="absolute inset-0 rounded-[50%] bg-accent/20 blur-3xl" />
          <img
            src="/profile.jpg"
            alt="My Picture"
            loading="eager"
            className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[26rem]
                       rounded-[50%] object-cover border-2 border-accent/60
                       shadow-[0_0_40px_rgba(253,224,71,0.25)]"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Home;