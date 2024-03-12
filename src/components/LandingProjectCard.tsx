
import ExportedImage from "next-image-export-optimizer";
import LandingProjectHeadline from "./LandingProjectHeadline";
import { LandingProjectCardProps } from "./_types";
import { Icon } from "./Icons";
import Link from "next/link";

export default function LandingProjectCard({ headline, desc, tools, image, slug }: LandingProjectCardProps) {
  return (
    <Link href={`project/${slug}`}>
      <div className="landing_project_card">
        <LandingProjectHeadline headline={headline} desc={desc} tools={tools} />
        <figure className="landing_project_card-image">
          <ExportedImage src={image} alt="test" />
        </figure>
        <p className="landing_project_card-cta">View Case Study<span>{Icon.rightArrow()}</span></p>
      </div>
    </Link>
  );
}         