import { motion, useReducedMotion } from 'framer-motion';

export default function ShowcaseCard({ children }) {
  const reduceMotion = useReducedMotion();

  return (
    <article className="showcase-card flex flex-1 items-center">
      <motion.div
        className="site-container"
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 'some' }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </article>
  );
}
