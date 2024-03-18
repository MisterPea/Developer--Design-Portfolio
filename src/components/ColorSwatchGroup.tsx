import ColorSwatch from "./ColorSwatch";
import { SwatchGroup } from "./_types";

export default function ColorSwatchGroup({ swatches }: SwatchGroup) {
  return (
    <ul className="color_swatch_group">
      {swatches.map(({ name, color, contrast }) => (
        <li key={color}>
          <ColorSwatch
            name={name}
            color={color}
            contrast={contrast}
          />
        </li>
      ))}
    </ul>
  );
}