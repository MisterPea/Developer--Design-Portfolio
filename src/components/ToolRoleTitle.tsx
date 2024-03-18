export default function AreaTopTitles({ label, content, ...rest }: { label: string; content?: string;[x: string]: any; }) {
  return (
    <h2 {...rest} className={`area_top_title ${rest.className || ''}`}>
      {label}
      {content && <span>{content}</span>}
    </h2>
  );
}