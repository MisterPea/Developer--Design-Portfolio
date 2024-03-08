export default function ProjectTextBlock({ title, titleIsBold = false, body }: { title: string | undefined, titleIsBold: boolean, body: string | string[]; }) {
  return (
    <div className="project_text_block">
      {title && <h3 className={`project_text_block${titleIsBold ? '--bold' : '--reg'}`}>{title}</h3>}
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
  );
}