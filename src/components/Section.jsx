import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { easings } from '../utils/animations';

/**
 * Reusable Section wrapper with scroll-triggered animations
 * Provides consistent entrance animations for all sections
 */
const Section = ({ 
  children, 
  className = '', 
  id,
  animation = 'fadeUp', // fadeUp, fadeIn, fadeLeft, fadeRight, scale
  delay = 0
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants
  const animations = {
    fadeUp: {
      initial: { opacity: 0, y: 40 },
      animate: { opacity: 1, y: 0 }
    },
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 }
    },
    fadeLeft: {
      initial: { opacity: 0, x: -40 },
      animate: { opacity: 1, x: 0 }
    },
    fadeRight: {
      initial: { opacity: 0, x: 40 },
      animate: { opacity: 1, x: 0 }
    },
    scale: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 }
    }
  };

  const selectedAnimation = animations[animation] || animations.fadeUp;

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={selectedAnimation.initial}
      animate={isInView ? selectedAnimation.animate : selectedAnimation.initial}
      transition={{ 
        duration: 0.7, 
        delay,
        ease: easings.easeOutExpo 
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default Section;
