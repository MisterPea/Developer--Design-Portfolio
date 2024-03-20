import Link from "next/link";
import { useRef, MutableRefObject } from "react";

export default function ProjectNavbar() {
  const homeRef = useRef<any>(null);
  const aboutRef = useRef<any>(null);

  const handleRollOver = (elementRef: MutableRefObject<any>) => {
    elementRef.current.classList.add('active');
    elementRef.current.classList.remove('not-active');
  };
  const handleRollOut = (elementRef: MutableRefObject<any>) => {
    elementRef.current.classList.add('not-active');
    elementRef.current.classList.remove('active');
  };

  return (
    <div className="project_navbar">
      <div className="project_navbar-content_wrapper" >
        <h1>Perry Angelora</h1>
        <nav>
          <Link
            onMouseEnter={handleRollOver.bind(null, homeRef)}
            onMouseLeave={handleRollOut.bind(null, homeRef)}
            onMouseDown={handleRollOut.bind(null, homeRef)}
            ref={homeRef} href='/'>Home</Link>
          <Link
            onMouseEnter={handleRollOver.bind(null, aboutRef)}
            onMouseLeave={handleRollOut.bind(null, aboutRef)}
            onMouseDown={handleRollOut.bind(null, aboutRef)}
            ref={aboutRef} href='/about'>About</Link>
        </nav>
      </div>
    </div>
  );
}