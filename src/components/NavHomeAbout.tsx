import Link from "next/link";
import { useRef, MutableRefObject, useEffect } from "react";

interface HomeAboutNavProps {
  currentPage?: 'home' | 'about';
}

export default function HomeAboutNavigation({ currentPage }: HomeAboutNavProps) {
  const homeRef = useRef<HTMLAnchorElement>(null);
  const aboutRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (homeRef.current && aboutRef.current) {
      homeRef.current.classList.remove('--current-page');
      aboutRef.current.classList.remove('--current-page');


      if (currentPage === 'home') {
        homeRef.current.classList.add('--current-page');
        homeRef.current.style.cursor = 'default';
      }
      if (currentPage === 'about') {
        aboutRef.current.classList.add('--current-page');
        aboutRef.current.style.cursor = 'default';
      }
    }
  }, [currentPage]);

  const handleRollOver = (elementRef: MutableRefObject<any>) => {
    // Make sure the rollover isn't the current page
    if (!elementRef.current.classList.contains('--current-page')) {
      elementRef.current.classList.add('active');
      elementRef.current.classList.remove('not-active');
    }
  };
  const handleRollOut = (elementRef: MutableRefObject<any>) => {
    if (!elementRef.current.classList.contains('--current-page')) {
      elementRef.current.classList.add('not-active');
      elementRef.current.classList.remove('active');
    }
  };

  return (
    <nav>
      <Link
        onMouseEnter={() => handleRollOver(homeRef)}
        onMouseLeave={() => handleRollOut(homeRef)}
        onMouseDown={() => handleRollOut(homeRef)}
        ref={homeRef}
        href='/'
        scroll={false}>Home</Link>
      <Link
        onMouseEnter={() => handleRollOver(aboutRef)}
        onMouseLeave={() => handleRollOut(aboutRef)}
        onMouseDown={() => handleRollOut(aboutRef)}
        ref={aboutRef}
        href='/about'
        scroll={false}>About</Link>
    </nav>
  );
}