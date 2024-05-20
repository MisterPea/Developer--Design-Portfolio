'use client';

import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';

export default function LandingTag() {
  const [index, setIndex] = useState(0);
  const controls = useAnimation();
  const isMounted = useRef(false);
  const firstRun = useRef(true);

  const rootTag = useMemo(() => ({ one: 'Developer', two: '/', three: 'Designer', four: '/', five: 'Programmatic Pixel Pusher' }), []);

  const [tags, setTags] = useState([
    { one: 'Cat Wrangler', two: '/', three: 'Friend of CSS' },
    { one: 'Identity theft is not a joke, Jim!' },
    { one: 'Curator of Pixels', two: '/', three: 'Connoisseur of Coffee' },
    { one: 'Painter of Pictures', two: '/', three: 'Fancier of The Equine' },
    { one: 'Piano', two: '/', three: 'Bass', four: '/', five: 'Drums' },
    { one: 'Chocolate Covered Potato Chip Lover' },
    { one: 'Dancing Like Somebody May Be Looking' },
    { one: 'Making Ice Cream', two: '/', three: 'And Cookies' },
    { one: 'Nationally Ranked Cones of Dunshire Player' }
  ]);

  const shuffleArray = useCallback((array: any[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return [rootTag, ...newArray];
  }, [rootTag]);

  /*
  Instead of randomizing the index on each iteration, we're incrementing 
  the index by 1 and randomizing the list on every reset to index 0.
  When calling the setTags, we're removing the zeroth index, when shuffling, and
  then adding it back in after the shuffling is complete.
  */
  const cycleTags = useCallback(() => {
    setIndex((i) => {
      const nextIndex = (i + 1) % tags.length;
      if (nextIndex === 0) {
        // Shuffle array on 0 index
        const tagsMinusZeroth = [...tags];
        tagsMinusZeroth.shift();
        setTags(shuffleArray(tagsMinusZeroth));
      }
      return nextIndex;
    });
  }, [shuffleArray, tags]);

  // This runs once - on load we shuffle and set the tags which kicks off the animation
  if (firstRun.current === true) {
    setTags(shuffleArray(tags));
    setIndex(0);
    firstRun.current = false;
  }

  /* 
  Disengaging this function from the useEffect seems to work better; at least
  it's cleaner and the logic is more...logical.
  */
  const sequence = useCallback(async () => {
    await controls.start('show'); // Start the show animation
    const delay = Math.random() * (10000 - 5000) + 5000;
    await new Promise((resolve: any) => setTimeout(resolve, delay));
    if (isMounted.current === false) return;
    await controls.start('hidden'); // Hide after showing
    cycleTags(); // Change the tag
  }, [controls, cycleTags]);

  useEffect(() => {
    if (firstRun.current === false) {
      isMounted.current = true;
      sequence();
    }
    return () => { isMounted.current = false; };
  }, [index, sequence]);

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
      y: '20%',
      x: '1px',
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
        <motion.div
          key={`${key}-${value}`}
          className="landing_tag-one_wrapper"
          variants={item}
        >
          <p className={`landing_tag-text${value === '/' ? ' --slash' : ''}`}>{value}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
