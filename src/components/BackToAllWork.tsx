import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function BackToAllWork() {
  const contentFrame = useRef<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState<boolean | null>(null);

  useEffect(() => {
    contentFrame.current = document.querySelector('.project_page-wrapper');
    window.addEventListener('scroll', getElementDistanceToBottom);
    return () => {
      window.removeEventListener('scroll', getElementDistanceToBottom);
    };
  }, []);

  function getElementDistanceToBottom() {
    // Get the element's bottom edge position relative to the document.
    if (contentFrame.current) {
      const elementRect = contentFrame.current.getBoundingClientRect();
      const elementBottom = elementRect.bottom;
      const windowHeight = window.innerHeight;
      const difference = elementBottom - windowHeight;
      if (difference < 150) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    }
  }

  const hoverOn = () => setIsHover(true);
  const hoverOff = () => setIsHover(false);

  /*
  Because I can figure another way, we have to defer the adding of --hide until --show.
  Else --hide animates from where --show ends
  */
  const hasShown = useRef(false);
  if (isOpen === true) {
    hasShown.current = true;
  }
  const showHide = () => {
    if (hasShown.current === true) {
      if (isOpen === true) {
        return ' --show';
      } else {
        return ' --hide';
      }
    } else {
      return '';
    }
  };

  return (
    <Link href='/'>
      <div
        onMouseEnter={hoverOn}
        onMouseLeave={hoverOff}
        onMouseDown={hoverOff}
        className={`back_to_all_work ${showHide()}`}
      >
        <div className={`back_to_all_work-scaler${isHover ? '--hover' : '--no-hover'}`}>
          <div className={`back_to_all_work-wrapper_outer${showHide()}`}>
            <div className={`back_to_all_work-wrapper_inner${showHide()}`}>
              <p className={`text${showHide()}`}>← Back to all work</p>
            </div>
          </div>
        </div >
      </div >
    </Link>
  );
}