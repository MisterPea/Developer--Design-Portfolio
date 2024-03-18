import { ProjectLinkProps } from "./_types";
import ToolRoleTitle from "./ToolRoleTitle";

export default function ProjectLinks({ links }: ProjectLinkProps) {
  return (
    <div className="project_links-wrapper">
      <ToolRoleTitle label="Links:" />
      <ul className="project_links-ul">
        {links.map(({ label, url }) => (
          <li className="project_links-li" key={`link-${label}`}>
            <a href={url} rel="noopener noreferrer" target="_blank">{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}