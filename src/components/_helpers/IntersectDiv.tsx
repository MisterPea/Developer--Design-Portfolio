import { ReactNode, useRef } from "react";
import useIntersection from "./useIntersection";

interface IntersectDivProps {
  children: ReactNode;
  className: string;
  [x: string]: any;
}

export default function IntersectDiv({ children, className, ...rest }: IntersectDivProps) {
  const intersectDivRef = useRef<HTMLDivElement>(null);

  const isVisible = useIntersection(intersectDivRef, true, true, 0);

  return (
    <div
      ref={intersectDivRef}
      className={`${className}${isVisible ? ' --visible' : ' --hidden'}`}
      {...rest}
    >
      {children}
    </div>
  );
}