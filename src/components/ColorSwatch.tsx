import { ColorSwatchProps } from './_types';
export default function ColorSwatch({ name, color, contrast }: ColorSwatchProps) {
  return (
    <div className='color_swatch'>
      <div
        className='color_swatch-square'
        style={{ backgroundColor: color }}
      />
      <p>{name} <span>{`${color.toUpperCase()}`}</span></p>
      {contrast && <p className='color_swatch-contrast'>{`CR = ${contrast}:1`}</p>}
    </div>
  );
}