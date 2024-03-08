import ColorSwatch from "./ColorSwatch";
import { SwatchGroup } from "./_types";

export default function ColorSwatchGroup({ swatches }: SwatchGroup) {
  return (
    <ul className="color_swatch_group">
      {swatches.map(({ name, color }) => (
        <li key={color}>
          <ColorSwatch
            name={name}
            color={color}
          />
        </li>
      ))}
    </ul>
  );
}