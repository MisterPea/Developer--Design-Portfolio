import { Url } from "next/dist/shared/lib/router/router";
import { StaticImageData } from "next/image";

type HexColor = `#${string}`; // Basic support for Hex colors
type RGBColor = `rgb(${number},${number},${number})`; // Support for RGB
type RGBAColor = `rgba(${number},${number},${number},${number})` | `rgba(${number},${number},${number},${number}%)`; // Support for RGBA with alpha as number or percentage
type HSLColor = `hsl(${number},${number}%,${number}%)`; // Support for HSL
type HSLAColor = `hsla(${number},${number}%,${number}%,${number})` | `hsla(${number},${number}%,${number}%,${number}%)`; // Support for HSLA with alpha as number or percentage

export type Color = HexColor | RGBColor | RGBAColor | HSLColor | HSLAColor;


export interface ProjectHeadlineProps {
  topHead: string;
  bottomHead: string;
  accentColor: Color;
  subHead: string;
}

export interface ColorSwatchProps {
  name: string;
  color: Color | string;
  contrast?: number;
}

export interface SwatchGroup {
  swatches: ColorSwatchProps[];
}

export interface LandingProjectHeadProps {
  headline: string;
  desc: string;
  tools: string[];
}

export interface LandingProjectCardProps extends LandingProjectHeadProps {
  image: ResponsiveImageProps;
  slug: string;
}

export type LinkProps = {
  label: string,
  url: string | undefined;
};

export interface ProjectLinkProps {
  links: LinkProps[];
}

export type MixedText = {
  body: string,
  list: string[];
};

export type BodyContent = string | string[] | MixedText | undefined;

export interface ProjectTextBlockProps {
  title: string | undefined;
  titleIsBold?: boolean;
  body: BodyContent;
  collapsible?: boolean;
  smallTitle?: boolean;
  [x: string]: any;
}

export type ImageSize = {
  h: number;
  w: number;
};

export type ImageResolutionObject = {
  imageUrl_1x: string,
  imageUrl_2x: string,
  imageUrl_3x: string,
};

export interface ImageGroup {
  small: ImageResolutionObject;
  medium: ImageResolutionObject;
  large: ImageResolutionObject;
};

type HeightUnit = '%' | 'px' | 'em' | 'rem' | 'vh';
type HeightProp = `${number}${HeightUnit}`;

export interface ResponsiveImageProps {
  imageUrls: ImageGroup;
  alt: any;
  loading?: 'lazy' | 'eager';
  imageSize: ImageSize;
  blurDataUrl: string;
  // Add drop shadow filter to the final image. 1 is regular, 2 is for phone images
  dropShadow?: number;
  // Add Blur to the animation
  addBlur?: boolean;
  // Root Margin (offset) for the intersection observer to activate
  activationDistance?: HeightProp;
}