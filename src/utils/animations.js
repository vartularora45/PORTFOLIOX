/**
 * Production-ready animation system
 * 60fps smooth animations with proper easing curves
 * All animations are GPU-accelerated (transform, opacity)
 */

// Professional easing curves
export const easings = {
  // Smooth deceleration - great for entrances
  easeOutExpo: [0.16, 1, 0.3, 1],
  // Snappy with slight overshoot
  easeOutBack: [0.34, 1.56, 0.64, 1],
  // Smooth and professional
  easeOutQuart: [0.22, 1, 0.36, 1],
  // Gentle spring-like
  spring: { type: 'spring', stiffness: 300, damping: 30 },
  // Bouncy but controlled
  bounce: { type: 'spring', stiffness: 400, damping: 25 }
};

// ===== ENTRANCE ANIMATIONS =====

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5, ease: easings.easeOutQuart }
};

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.6, ease: easings.easeOutExpo }
};

export const fadeInDown = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.6, ease: easings.easeOutExpo }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -10 },
  transition: { duration: 0.6, ease: easings.easeOutExpo }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 10 },
  transition: { duration: 0.6, ease: easings.easeOutExpo }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
  transition: { duration: 0.5, ease: easings.easeOutExpo }
};

export const scaleInBounce = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
  transition: easings.bounce
};

// ===== STAGGER ANIMATIONS =====

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

export const staggerContainerSlow = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  }
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: easings.easeOutExpo }
  }
};

export const staggerItemScale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: easings.easeOutExpo }
  }
};

// ===== SCROLL-TRIGGERED ANIMATIONS =====

export const scrollFadeIn = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: easings.easeOutExpo }
};

export const scrollFadeInLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: easings.easeOutExpo }
};

export const scrollFadeInRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: easings.easeOutExpo }
};

export const scrollScale = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease: easings.easeOutExpo }
};

// ===== HOVER ANIMATIONS =====

export const hoverScale = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.2 }
};

export const hoverLift = {
  whileHover: { y: -4, transition: { duration: 0.3, ease: 'easeOut' } },
  whileTap: { y: 0 }
};

export const hoverGlow = {
  whileHover: { 
    boxShadow: '0 0 30px -5px rgba(14, 165, 233, 0.4)',
    transition: { duration: 0.3 }
  }
};

// ===== TEXT ANIMATIONS =====

export const textRevealContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.03
    }
  }
};

export const textRevealLetter = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: easings.easeOutExpo }
  }
};

export const wordRevealContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

export const wordReveal = {
  initial: { opacity: 0, y: 30, rotateX: -20 },
  animate: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    transition: { duration: 0.5, ease: easings.easeOutExpo }
  }
};

// ===== LINE/PATH ANIMATIONS =====

export const drawLine = {
  initial: { pathLength: 0, opacity: 0 },
  animate: { 
    pathLength: 1, 
    opacity: 1,
    transition: { duration: 1.2, ease: 'easeInOut' }
  }
};

export const expandWidth = {
  initial: { scaleX: 0, originX: 0 },
  animate: { 
    scaleX: 1,
    transition: { duration: 0.8, ease: easings.easeOutExpo }
  }
};

// ===== PAGE TRANSITIONS =====

export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 }
};

// ===== UTILITIES =====

export const withDelay = (animation, delay) => ({
  ...animation,
  transition: {
    ...animation.transition,
    delay
  }
});

export const createStagger = (staggerTime = 0.08, delayStart = 0) => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren: staggerTime,
      delayChildren: delayStart
    }
  }
});

export const viewportOptions = {
  default: { once: true, margin: '-80px' },
  eager: { once: true, margin: '-20px' },
  late: { once: true, margin: '-150px' },
  repeat: { once: false, margin: '-80px' }
};
