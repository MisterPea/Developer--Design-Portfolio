export default function AreaTopTitles({ label, content }: { label: string, content?: string; }) {
  return (
    <h2
      className="area_top_title"
    >
      {label}
      {content && <span>{content}</span>}
    </h2>
  );
}