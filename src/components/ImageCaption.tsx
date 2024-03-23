export default function ImageCaption({ headline, body, ...rest }: { headline?: string, body: string;[x: string]: any; }) {
  return (
    <p {...rest} className={`image_caption${rest.className ? ' ' + rest.className : ''}`}>
      {headline && <span>{headline}</span>}
      {`${headline ? ' ' : ''}`}{body}</p>
  );
}