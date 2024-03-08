import { ProjectHeadlineProps } from "./_types";

export default function ProjectHeadline({ topHead, bottomHead, accentColor, subHead }: ProjectHeadlineProps) {
  return (
    <header className="project-headline">
      <h1>{topHead}</h1>
      <h1 style={{ color: `${accentColor}` }}>{bottomHead}</h1>
      <p>{subHead}</p>
    </header>
  );
}