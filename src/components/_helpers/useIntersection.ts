/* eslint-disable react-hooks/exhaustive-deps */
import { RefObject, useEffect, useState, useRef } from 'react';

const useIntersection = (elementRef: RefObject<HTMLElement>, oneShot?: boolean, listenerActive?: boolean, intersectDelay?: number) => {
  if (listenerActive === undefined) listenerActive = false;
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const observer = useRef<IntersectionObserver | null>(null);
  const frameId = useRef<number | null>(null);

  useEffect(() => {
    async function ensurePolyfill() {
      if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
        // Dynamically import the IntersectionObserver polyfill
        const { default: IntersectionObserverPolyfill } = await import('intersection-observer');
        (window as Window & { IntersectionObserver: typeof IntersectionObserver }).IntersectionObserver = IntersectionObserverPolyfill;
      }
    }

    ensurePolyfill().then(() => {
      if (typeof window === 'undefined' || !listenerActive) return; // Ensure we are on the client side

      const options: IntersectionObserverInit = {
        root: null,
        rootMargin: `-32px 0px -2% 0px`, 
        threshold: 0.2
      };

      // Timeout handle
      function handleVisibleTrue() {
        if (typeof intersectDelay === 'number') {
          window.setTimeout(() => setIsVisible(true), intersectDelay);
        } else {
          setIsVisible(true);
        }
      }

      const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
        if (frameId.current) {
          cancelAnimationFrame(frameId.current);
        }
        // requestAnimationFrame to debounce calls
        frameId.current = requestAnimationFrame(() => {
          entries.forEach((entry: IntersectionObserverEntry) => {
            if (entry.isIntersecting) {
              handleVisibleTrue();
              if (oneShot && elementRef.current && observer.current) {
                observer.current.unobserve(elementRef.current);
              }
            } else {
              setIsVisible(false);
            }
          });
        });
      };

      observer.current = new IntersectionObserver(intersectionCallback, options);
      if (elementRef.current && observer.current) {
        observer.current.observe(elementRef.current);
      }
    });


    return () => {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
      observer.current?.disconnect();
    };

  }, [elementRef, oneShot]);

  return isVisible;
};

export default useIntersection;