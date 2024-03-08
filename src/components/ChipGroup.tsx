import Chip from "./Chip";

export default function ChipGroup({ toolList }: { toolList: string[]; }) {
  return (
    <ul className="chip_group">{toolList.map((label: string) => (
      <li key={label}>
        <Chip label={label} />
      </li>
    ))}</ul>
  );
}