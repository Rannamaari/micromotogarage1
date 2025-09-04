import { Variants } from 'framer-motion';

// Fade in from bottom animation
export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

// Fade in from left animation
export const fadeInLeft: Variants = {
  initial: {
    opacity: 0,
    x: -60,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

// Fade in from right animation
export const fadeInRight: Variants = {
  initial: {
    opacity: 0,
    x: 60,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

// Scale animation
export const scaleIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

// Stagger container for child animations
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

// Fast stagger container
export const fastStaggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

// Slide in from top
export const slideInTop: Variants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

// Magnetic hover effect
export const magneticHover: Variants = {
  hover: {
    scale: 1.05,
    y: -5,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  tap: {
    scale: 0.95,
  },
};

// Card hover effect
export const cardHover: Variants = {
  initial: {
    boxShadow: "0 0 0 rgba(56, 189, 248, 0)",
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  hover: {
    boxShadow: "0 20px 60px rgba(56, 189, 248, 0.15)",
    borderColor: "rgba(56, 189, 248, 0.3)",
    y: -5,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Glow effect animation
export const glowPulse: Variants = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(56, 189, 248, 0.3)",
      "0 0 40px rgba(56, 189, 248, 0.5)",
      "0 0 20px rgba(56, 189, 248, 0.3)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Rotation animation for icons
export const rotateOnHover: Variants = {
  initial: {
    rotate: 0,
  },
  hover: {
    rotate: 360,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Page transition
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }
};

// Viewport animation settings
export const viewportOnce = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -100px 0px"
};

export const viewportRepeat = {
  once: false,
  amount: 0.3,
  margin: "0px 0px -50px 0px"
};