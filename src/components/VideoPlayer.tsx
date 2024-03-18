import { motion } from 'framer-motion';
export default function VideoPlayer({ videoSource, ...rest }: { videoSource: string;[x: string]: any; }) {

  const intersectAnimation = {
    hidden: {
      opacity: 0,
      y: '100px',
    },
    show: {
      opacity: 1,
      y: '0px',
      transition: {
        duration: 2,
        ease: [0.34, 0.89, 0.38, 1]
      }
    }

  };

  return (
    <motion.figure
      {...rest}
      className={`project-figure video ${rest.className || ''}`}
      variants={intersectAnimation}
      initial="hidden"
      whileInView="show"

    >
      <video autoPlay muted loop playsInline>
        <source src={videoSource} type="video/mp4" />
      </video>
    </motion.figure>
  );
}