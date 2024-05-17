import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

export default function BackToAllWork({ triggerDifference = 150 }: { triggerDifference?: number; }) {
  const contentFrame = useRef<HTMLElement | null>(null);
  const hasClicked = useRef<boolean>(false); // temp state holder for click
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState<boolean | null>(null);

  const getElementDistanceToBottom = useCallback(() => {
    // Get the element's bottom edge position relative to the document.

    if (contentFrame.current) {
      const elementRect = contentFrame.current.getBoundingClientRect();
      const elementBottom = elementRect.bottom;
      const windowHeight = window.innerHeight;
      const difference = elementBottom - windowHeight;
      if (difference < triggerDifference) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    }
  }, [triggerDifference]);

  useEffect(() => {
    contentFrame.current = document.querySelector('.project_page-wrapper');
    window.addEventListener('scroll', getElementDistanceToBottom);
    return () => {
      window.removeEventListener('scroll', getElementDistanceToBottom);
    };
  }, [getElementDistanceToBottom, triggerDifference]);

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
      if (isOpen === true && hasClicked.current === false) {
        return ' --show';
      } else {
        return ' --hide';
      }
    } else {
      return '';
    }
  };

  const handleClickClose = () => {
    window.removeEventListener('scroll', getElementDistanceToBottom);
    setIsOpen(false);
    hasClicked.current = true;
  };

  return (
    <Link
      onMouseEnter={hoverOn}
      onMouseLeave={hoverOff}
      onMouseDown={handleClickClose}
      onClick={handleClickClose}
      href='/' scroll={false}>
      <div className={`back_to_all_work ${showHide()}`}
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