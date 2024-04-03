/* eslint-disable react-hooks/exhaustive-deps */
import { RefObject, useEffect, useState } from 'react';

const useIntersection = (elementRef: RefObject<HTMLElement>, oneShot?: boolean, listenerActive?: boolean, intersectDelay?: number) => {
  if (listenerActive === undefined) listenerActive = false;
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    let observer: IntersectionObserver;
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

    let timerId: NodeJS.Timeout;
    const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
      if (timerId) {
        clearTimeout(timerId);
      }
      // Timer to debounce calls
      timerId = setTimeout(() => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handleVisibleTrue();
            // Remove observer if we don't want to run continuously 
            if (oneShot === true) {
              removeObserver(observer);
            }
          } else {
            // if we're back out of range - change it to not visible
            setIsVisible(false);
          }
        });
      }, 200);
    };

    const removeObserver = (observerArg: IntersectionObserver) => {
      if (elementRef.current) {
        observerArg.unobserve(elementRef.current);
      }
    };
    // if (listenerActive) {
    observer = new IntersectionObserver(intersectionCallback, options);
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    // }
    return () => {
      removeObserver(observer);
    };
  }, [elementRef]);

  return isVisible;
};

export default useIntersection;