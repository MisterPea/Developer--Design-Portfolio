export default function ImageCaption({ headline, body }: { headline: string, body: string; }) {
  return (
    <p className="image_caption"><span>{headline}</span> {body}</p>
  );
}