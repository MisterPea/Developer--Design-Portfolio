import { useEffect, useRef, useState } from "react";

export default function TypeSpecimen({ fontName, ...rest }: { fontName: string;[x: string]: any; }) {
  const rightDivRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    if (rightDivRef.current) {
      setWidth(rightDivRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (rightDivRef.current) {
        setWidth(rightDivRef.current.offsetWidth);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, []);
  return (
    <div {...rest} className={`type_specimen-main_wrapper ${rest.className || ''}`}>
      <div className='type_specimen-left'>
        <p
          style={{ fontSize: `${width / 5}px` }}
          className="type_specimen-large_Aa">Aa</p>
      </div>
      <div ref={rightDivRef} className='type_specimen-right'>
        <p
          style={{
            fontSize: `${width / 19}px`,
            lineHeight: `${width * 0.075}px`,
            letterSpacing: `${width / 500}px`,
          }}
          className="type_specimen-font_name">{fontName}</p>
        <p
          style={{
            fontSize: `${width / 12}px`,
            lineHeight: `${width * 0.09}px`,
            letterSpacing: `${width / 500}px`,
          }}
          className="type_specimen-saying">A big fjord vexes a quick waltzing nymph</p>
      </div>
    </div>
  );
}
