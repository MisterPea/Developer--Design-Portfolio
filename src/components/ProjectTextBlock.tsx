import { useState } from "react";
import { BodyContent, MixedText, ProjectTextBlockProps } from "./_types";

export default function ProjectTextBlock({ title, titleIsBold = false, body = '', collapsible, smallTitle = false, ...rest }: ProjectTextBlockProps) {
  const [isOpen, setIsOpen] = useState<boolean>(!collapsible);

  function handleShowMore() {
    setIsOpen((s) => !s);
  }

  const isMixedText = (content: any): content is MixedText => {
    return typeof content === 'object' && 'body' in content && 'list' in content;
  };

  const renderArray = (list: string[]) => (
    <ul>
      {list.map((element) => {
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
  );

  const createBodyContent = (content: BodyContent) => {
    if (content === undefined) {
      return '';
    }
    if (Array.isArray(content)) {
      return renderArray(content);
    } else if (isMixedText(content)) {
      return (
        <>
          <p>{content.body}</p>
          {renderArray(content.list)}
        </>
      );
    } else {
      return <p>{body as unknown as string}</p>;
    }
  };

  const titleTreatment = () => {
    if (titleIsBold) {
      return '--bold';
    }
    if (smallTitle) {
      return '--small-title';
    }
    return '--reg';
  };

  return (
    <div {...rest} className={`project_text_block${collapsible ? ' collapsible' : ''} ${rest.className || ''}`} onClick={handleShowMore} >
      {title && <h3 className={`project_text_block${titleTreatment()}`}>{title}</h3>}
      <div className={`project_text_block-collapsible${isOpen ? '--open' : '--closed'} ${!collapsible ? '-collapsible--std' : ''}`}>
        {createBodyContent(body)}
      </div>
      {collapsible && <p className="project_text_block_cta">{`${isOpen ? 'Read Less…' : 'Read More…'}`}</p>}
    </div>
  );
}