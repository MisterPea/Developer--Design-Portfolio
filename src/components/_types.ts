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
  color: Color;
  contrast?: number;
}

export interface SwatchGroup {
  swatches: ColorSwatchProps[];
}