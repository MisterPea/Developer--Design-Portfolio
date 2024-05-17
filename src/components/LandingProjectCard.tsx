'use client';
import LandingProjectHeadline from "./LandingProjectHeadline";
import { LandingProjectCardProps } from "./_types";
import { Icon } from "./Icons";
import Link from "next/link";
import ResponsiveImage from "./ResponsiveImage";

export default function LandingProjectCard({ headline, desc, tools, image, slug, isProject }: LandingProjectCardProps) {
  const { alt, imageSize, imageUrls, blurDataUrl } = image;

  return (
    <Link href={`project/${slug}`} scroll={false}>
      <div className="landing_project_card">
        <LandingProjectHeadline headline={headline} desc={desc} tools={tools} />
        <figure className="landing_project_card-image">
          <ResponsiveImage
            alt={alt}
            imageSize={imageSize}
            imageUrls={imageUrls}
            blurDataUrl={blurDataUrl}
            dropShadow={1}
            loading="eager"
            className="landing_image"
          />
        </figure>
        <p className="landing_project_card-cta">{isProject ? "View Project":"View Case Study"}<span>{Icon.rightArrow()}</span></p>
      </div>
    </Link>
  );
}         