import { Variants } from 'framer-motion';

export const indexVariant: Variants = {
  hidden: {
    y: 15,
    opacity: 0
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [.5, .29, .74, 1],
      duration: 1.5,
    },
  },
  exit: {
    y: 15,
    opacity: 0,
    transition: {
      ease: [.74, .13, .37, .99],
      duration: 0.3,
    },
  }
};

export const projectVariant: Variants = {
  hidden: {
    y: 5,
    opacity: 0

  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.31, 0.44, 0.21, 0.99],
      duration: 1.125,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
    transition: {
      ease: [.79,.02,.29,1],
      duration: 0.8,
    },
  }
};

