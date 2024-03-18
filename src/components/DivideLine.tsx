export default function DivideLine({ className }: { className?: string; }) {
  return (
    <div className={`divide_line${className ? ' ' + className : ''}`} />
  );
}