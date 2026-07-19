import { motion } from 'framer-motion';

// Reveal-on-scroll wrapper. Restraint over excess: one transition per section.
// Uses framer-motion's built-in `whileInView` so sections already on screen
// at mount (or deep-linked via #anchor) animate in immediately instead of
// getting stuck invisible waiting for an IntersectionObserver callback.
export default function AnimatedSection({ children, className = '', delay = 0 }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
