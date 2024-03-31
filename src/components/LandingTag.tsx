/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function LandingTag() {
  const [index, setIndex] = useState(0);
  const controls = useAnimation();
  const isMounted = useRef(false);

  const [tags, setTags] = useState([
    { one: 'Developer', two: '/', three: 'Designer', four: '/', five: 'Programmatic Pixel Pusher' },
    { one: 'Cat Wrangler', two: '/', three: 'Friend of CSS' },
    { one: 'Curator of Pixels', two: '/', three: 'Connoisseur of Coffee' },
    { one: 'Painter of Pictures', two: '/', three: 'Fancier of The Equine' },
    { one: 'Identity theft is not a joke, Jim!' },
    { one: 'Piano', two: '/', three: 'Bass', four: '/', five: 'Drums' },
    { one: 'Chocolate Covered Potato Chip Lover' },
    { one: 'Dancing Like Somebody May Be Looking' }
  ]);

  function shuffleArray() {
    for (let i = tags.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tags[i], tags[j]] = [tags[j], tags[i]];
    }
    setTags(tags);
  }

  /*
  Instead of randomizing the index on each iteration, we're incrementing 
  the index by 1 and randomizing the list on every reset to index 0 
  */
  function cycleTags() {
    setIndex((i) => {
      const nextIndex = (i + 1) % tags.length;
      if (nextIndex === 0) {
        // Shuffle array on 0 index
        shuffleArray();
      }
      return nextIndex;
    });
  }


  useEffect(() => {
    isMounted.current = true;
    const sequence = async () => {
      await controls.start('show'); // Start the show animation
      const delay = Math.random() * (10000 - 5000) + 5000;
      await new Promise((resolve: any) => setTimeout(resolve, delay));
      if (isMounted.current === false) return;
      await controls.start('hidden'); // Hide after showing
      cycleTags(); // Change the tag


      // controls.start('show'); // Show the next tag
    };

    sequence();
    return () => {
      isMounted.current = false;
    };
  }, [index, controls]); // This effect runs every time the index changes

  const container = {
    hidden: {
      transition: {
        staggerChildren: 0.04, // Stagger the hiding of children
        staggerDirection: 1, // Stagger from the first element to the last
      }
    },
    show: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: 1,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: '100%',
      x: '-5px',
      transition: {
        duration: 0.2,
        ease: [0.5, 0.12, 0.90, 0.99]
      }
    },
    show: {
      opacity: 1,
      y: 0,
      x: '0px',
      transition: {
        duration: 0.85,
        ease: [0.8, 0, 0.1, 0.99]
      }
    },
  };

  return (
    <motion.div
      className='landing_tag-main_wrapper'
      initial="hidden"
      animate={controls}
      variants={container}
    >
      {Object.entries(tags[index]).map(([key, value]) => (
        <motion.div key={key} className="landing_tag-one_wrapper" variants={item}>
          <p className={`landing_tag-text${value === '/' ? ' --slash' : ''}`}>{value}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
