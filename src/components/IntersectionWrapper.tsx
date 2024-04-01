/* eslint-disable react-hooks/exhaustive-deps */
import { ReactElement, ReactNode, useEffect, useRef, useState } from "react";

export default function IntersectionWrapper({ children, oneShot = true, ...rest }: { children: ReactNode, oneShot?: boolean;[x: string]: any; }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Remove observer of we don't want to run continuously 
          if (oneShot === true) {
            removeObserver(observer);
          }
        } else {
          // if we're back out of range - change it to not visible
          setIsVisible(false);
        }
      });
    };

    const removeObserver = (observerArg: IntersectionObserver) => {
      if (elementRef.current) {
        observerArg.unobserve(elementRef.current);
      }
    };

    observer = new IntersectionObserver(intersectionCallback, options);
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      removeObserver(observer);
    };
  }, []);

  return (
    <div
      {...rest}
      ref={elementRef}
      className={`${rest.className ? rest.className : ''}${isVisible ? '--visible' : '--not-visible'}`}
    >
      {children}
    </div>
  );

}