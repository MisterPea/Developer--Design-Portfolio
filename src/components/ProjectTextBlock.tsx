import { useState } from "react";

export default function ProjectTextBlock({ title, titleIsBold = false, body, collapsible }: { title: string | undefined, titleIsBold: boolean, body: string | string[], collapsible: boolean; }) {
  const [isOpen, setIsOpen] = useState<boolean>(!collapsible);

  function handleShowMore() {
    setIsOpen((s) => !s);
  }

  return (
    <div className={`project_text_block${collapsible ? ' collapsible':''}`} onClick={handleShowMore} >
      {title && <h3 className={`project_text_block${titleIsBold ? '--bold' : '--reg'}`}>{title}</h3>}
      <div className={`project_text_block-collapsible${isOpen ? '--open' : '--closed'} ${!collapsible ? '-collapsible--std' : ''}`}>
        {typeof body === 'string' ? (<p>{body}</p>) : (
          <ul>
            {body.map((element) => {
              const elemArray = element.split(':');
              if (elemArray.length > 1) {
                return <li key={element}><span>{elemArray[0]}</span>:{elemArray[1]}</li>;
              } else {
                return (
                  <li key={element}>{element}</li>
                );
              }
            })}
          </ul>
        )}
      </div>
      {collapsible && <p className="project_text_block_cta">{`${isOpen ? 'Read Less…' : 'Read More…'}`}</p>}
    </div>
  );
}