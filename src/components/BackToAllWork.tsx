import { useRef } from "react";

export default function BackToAllWork({ isOpen }: { isOpen: boolean; }) {

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
        return '--show';
      } else {
        return '--hide';
      }
    } else {
      return '';
    }
  };

  return (
    <div className={`back_to_all_work ${showHide()}`}>
      <div className={`back_to_all_work-wrapper_outer ${showHide()}`}>
        <div className={`back_to_all_work-wrapper_inner ${showHide()}`}>
          <p className={` ${showHide()}`}>← Back to all work</p>
        </div>
      </div>
    </div>
  );
}