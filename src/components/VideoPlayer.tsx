import { useRef } from "react";
import useIntersection from "./_helpers/useIntersection";


export default function VideoPlayer({ videoSource, intersect, intersectDelay, oneShot, ...rest }: { videoSource: string; intersect?: boolean; intersectDelay?: number; oneShot?: boolean;[x: string]: any; }) {
  const elementRef = useRef<HTMLElement>(null);
  const isVisible = useIntersection(elementRef, oneShot, intersect, intersectDelay);

  const compileClass = (() => {
    const classArray = ['project-figure video', 'video'];
    if (rest.className) { classArray.push(rest.className); };
    if (intersect === true) {
      if (isVisible) { classArray.push('intersect--visible'); };
      if (!isVisible) { classArray.push('intersect--not-visible'); };
    }
    return classArray.join(' ');
  })();

  return (
    <figure
      {...rest}
      className={compileClass}
      ref={elementRef}
    >
      <video autoPlay muted loop playsInline>
        <source src={videoSource} type="video/mp4" />
      </video>
    </figure>
  );
}