import { Variants } from 'framer-motion';

export const indexVariant: Variants = {
  hidden: {
    y: 20,
    opacity: 0.01
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [.55,.17,.21,.98],
      duration:1,
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
    opacity: 0.01

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
      ease: [.79, .02, .29, 1],
      duration: 0.8,
    },
  }
};

export const fadeInUp_1: Variants = {
  hidden: {
    y: 10,
    opacity: 0.01
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.5, 1, 0.89, 1],
      duration: 1
    }
  }
};

export const fadeInUp_1_delay: Variants = {
  hidden: {
    y: 10,
    opacity: 0.01
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.5, 1, 0.89, 1],
      duration: 1,
      delay: 0.4,
      staggerChildren: 0.2
    }
  }
};