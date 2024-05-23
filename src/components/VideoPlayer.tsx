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
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVisible = useIntersection(elementRef, oneShot, intersect, intersectDelay);
  const [isSafari, setIsSafari] = useState<boolean>(true);


  useEffect(() => {
    // Function to determine if the current browser is Safari
    const userAgent = navigator.userAgent;
    const browserIsSafari = /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
    setIsSafari(browserIsSafari);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    function handleCanPlay() {
      video?.play();
    }

    function handleError(err: any) {
      if (video?.error) {
        console.error(`Error ${video.error.code}: ${getErrorDescription(video.error.code)} - attempting to reload`);
        video.load()
      }
    }

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, []);

  function getErrorDescription(code: number) {
    switch (code) {
      case 1:
        return "MEDIA_ERR_ABORTED - The fetching process for the media was aborted by the user agent at the user's request.";
      case 2:
        return "MEDIA_ERR_NETWORK - A network error caused the media download to fail.";
      case 3:
        return "MEDIA_ERR_DECODE - The media playback was aborted due to a corruption problem or because the media used features your browser did not support.";
      case 4:
        return "MEDIA_ERR_SRC_NOT_SUPPORTED - The media could not be loaded, either because the server or network failed or because the format is not supported.";
      default:
        return "An unknown error occurred.";
    }
  }


  // Dynamically compile class names based on component state
  const className = [
    'project-figure', 'video',
    rest.className,
    intersect && (isVisible ? 'intersect--visible' : 'intersect--not-visible')
  ].filter(Boolean).join(' ');

  return (
    <figure {...rest} className={className} ref={elementRef}>
      <video ref={videoRef} autoPlay muted loop playsInline preload="auto">
        {!isSafari && <source src={webmVideoSource} type="video/webm" />}
        {isSafari && <source src={mp4VideoSource} type="video/mp4" {...{ codecs: "hvc1" }} />}
      </video>
    </figure>
  );
};

export default VideoPlayer;
