/* eslint-disable react-hooks/exhaustive-deps */
import { once } from "events";
import { RefObject, useEffect, useRef, useState } from "react";

export default function LandingTag() {

  const [move, setMove] = useState(false);
  const textOne = useRef<HTMLParagraphElement>(null);
  const textTwo = useRef<HTMLParagraphElement>(null);
  const textThree = useRef<HTMLParagraphElement>(null);
  const slashOne = useRef<HTMLParagraphElement>(null);
  const slashTwo = useRef<HTMLParagraphElement>(null);


  const refArray = [textOne, textTwo, textThree, slashOne, slashTwo];
  const [index, setIndex] = useState(0);

  const tags = [
    {
      one: 'Developer',
      slashOne: '/',
      two: 'Designer',
      slashTwo: '/',
      three: 'Programmatic Pixel Pusher'
    },
    {
      one: 'Cat Wrangler',
      slashOne: '/',
      two: 'Writer of Missives',
      slashTwo: '/',
      three: 'Friend of CSS'
    },
    {
      one: 'Curator of Pixels',
      slashOne: '/',
      two: 'Connoisseur of Coffee',
      slashTwo: undefined,
      three: undefined
    },
    {
      one: 'Painter of Pictures',
      slashOne: '/',
      two: 'Fancier of The Equine',
      slashTwo: undefined,
      three: undefined
    },
    {
      one: 'They Are Gutting',
      slashOne: '/',
      two: 'A Body of Water',
      slashTwo: undefined,
      three: undefined
    },
    {
      one: 'Piano',
      slashOne: '/',
      two: 'Bass',
      slashTwo: '/',
      three: 'Drums'
    },
    {
      one: 'Ice Cream Maker',
      slashOne: '/',
      two: 'Chocolate Covered Potato Chip Lover',
      slashTwo: undefined,
      three: undefined
    }
  ];

  const removeAction = (element: RefObject<HTMLParagraphElement>, classToApply: string) => element.current!.classList.remove(classToApply);
  const addAction = (element: RefObject<HTMLParagraphElement>, classToApply: string) => element.current!.classList.add(classToApply);

  /* Actions to batch class and style modification */
  function applyActionToRef(action: (element: RefObject<HTMLParagraphElement>, classToApply: string) => any, classToApply: string, callback?: () => void) {
    refArray.forEach((ref) => {
      if (ref.current) {
        action(ref, classToApply);
      }
    });
    if (callback) {
      callback();
    }
  };

  function applyStylesToRefs(styles: Partial<CSSStyleDeclaration>) {
    refArray.forEach(ref => {
      if (ref.current) {
        Object.entries(styles).forEach(([styleKey, value]) => {
          (ref.current!.style as any)[styleKey] = value;
        });
      }
    });
  }

  const lastIndex = useRef(-1);
  const seenIndex = useRef([0]);
  function randomIndexTag() {
    if (seenIndex.current.length === tags.length) {
      seenIndex.current.length = 0;
    }
    setIndex(() => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * tags.length);
      } while (randomIndex === lastIndex.current || seenIndex.current.includes(randomIndex));

      lastIndex.current = randomIndex;

      seenIndex.current.push(randomIndex);
      return randomIndex;
    });
  }

  function getRandomNumber() {
    const randomNumber = Math.random();
    const scaledNumber = (randomNumber * (10000 - 5000)) + 5000;
    const randomInteger = Math.round(scaledNumber);
    return randomInteger;
  }

  function removeAndAdvanceText() {
    textThree.current?.classList.add('up');
    setTimeout(() => slashTwo.current?.classList.add('up'), 10, { once: true });
    setTimeout(() => textTwo.current?.classList.add('up'), 50, { once: true });
    setTimeout(() => slashOne.current?.classList.add('up'), 90, { once: true });
    setTimeout(() => textOne.current?.classList.add('up'), 100, { once: true });
    textOne.current?.addEventListener('transitionend', () => {
      randomIndexTag();
      applyStylesToRefs({ opacity: '0' });
      applyActionToRef(removeAction, 'up');
      applyActionToRef(addAction, 'down', renderText);
    }, { once: true });
  }

  function renderText() {
    applyActionToRef(addAction, 'down');
    textThree.current?.addEventListener('transitionend', () => {
      applyStylesToRefs({ opacity: '1' });
      textOne.current?.classList.remove('down');
      setTimeout(() => slashOne.current?.classList.remove('down'), 10, { once: true });
      setTimeout(() => textTwo.current?.classList.remove('down'), 50, { once: true });
      setTimeout(() => slashTwo.current?.classList.remove('down'), 90, { once: true });
      setTimeout(() => textThree.current?.classList.remove('down'), 100, { once: true });
      setTimeout(() => removeAndAdvanceText(), getRandomNumber(), { once: true });
    }, { once: true });
  }

  useEffect(() => {
    applyStylesToRefs({ opacity: '1' });
    textOne.current?.classList.remove('down');
    setTimeout(() => slashOne.current?.classList.remove('down'), 10, { once: true });
    setTimeout(() => textTwo.current?.classList.remove('down'), 50, { once: true });
    setTimeout(() => slashTwo.current?.classList.remove('down'), 90, { once: true });
    setTimeout(() => textThree.current?.classList.remove('down'), 100, { once: true });
    setTimeout(() => removeAndAdvanceText(), 5000, { once: true });
  }, []);

  return (
    <>
      <div className="landing_tag-main_wrapper">
        <div className="landing_tag-one_wrapper">
          <p ref={textOne} className='landing_tag-one_text'>{tags[index].one}</p>
          <p ref={slashOne} className="landing_tag-slash">&nbsp;{tags[index].slashOne}&nbsp;</p>
        </div>

        <div className="landing_tag-two_wrapper">
          <p ref={textTwo} className='landing_tag-two_text'>{tags[index].two}</p>
          <p ref={slashTwo} className="landing_tag-slash">&nbsp;{tags[index].slashTwo}&nbsp;</p>
        </div>
        <div className="landing_tag-three_wrapper">
          <p ref={textThree} className='landing_tag-three_text'>{tags[index].three}</p>
        </div>
      </div>
    </>
  );
}