import Link from "next/link";
import ChipGroup from "./ChipGroup";
import { LandingProjectHeadProps } from "./_types";

export default function LandingProjectHeadline({ headline, desc, tools }: LandingProjectHeadProps) {
  return (
    <div className="landing_project_headline">
      <h2 className="landing_project_headline-headline">{headline}</h2>
      <p className="landing_project_headline-description">{desc}</p>
      <ChipGroup toolList={tools} />
    </div>
  );
}