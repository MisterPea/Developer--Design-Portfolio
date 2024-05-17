import { useEffect, useRef, useState } from "react";
import useIntersection from "./_helpers/useIntersection";

interface VideoComponent {
  webmVideoSource: string;
  mp4VideoSource?: string;
  intersect?: boolean;
  intersectDelay?: number;
  oneShot?: boolean;
  // whether the video requires alpha
  requireAlpha?: boolean;

  // Additional properties passed to the figure element
  [key: string]: any;
}

const VideoPlayer = ({ webmVideoSource, mp4VideoSource, requireAlpha = false, intersect, intersectDelay, oneShot, ...rest }: VideoComponent) => {
  const elementRef = useRef<HTMLElement>(null);
  // const videoRef = useRef<HTMLVideoElement>(null);
  const isVisible = useIntersection(elementRef, oneShot, intersect, intersectDelay);
  const [isSafari, setIsSafari] = useState<boolean>(true);

  useEffect(() => {
    // Function to determine if the current browser is Safari
    const userAgent = navigator.userAgent;
    const browserIsSafari = /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
    setIsSafari(browserIsSafari);
  }, []);

  // Dynamically compile class names based on component state
  const className = [
    'project-figure', 'video',
    rest.className,
    intersect && (isVisible ? 'intersect--visible' : 'intersect--not-visible')
  ].filter(Boolean).join(' ');

  return (
    <figure {...rest} className={className} ref={elementRef}>
      <video autoPlay muted loop playsInline preload="auto">
        {!isSafari && <source src={webmVideoSource} type="video/webm" />}
        {isSafari && <source src={mp4VideoSource} type="video/mp4" />}
      </video>
    </figure>
  );
};

export default VideoPlayer;
