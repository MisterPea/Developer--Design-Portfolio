import { useRef } from "react";
import { ProjectLinkProps } from "./_types";
import ToolRoleTitle from "./ToolRoleTitle";

export default function ProjectLinks({ links }: ProjectLinkProps) {

  const ListItem = ({ label, url }: { label: string, url: string; }) => {
    const liRef = useRef<HTMLAnchorElement>(null);

    const handleHoverOn = () => {
      if (liRef.current) {
        liRef.current.classList.add('active');
        liRef.current.classList.remove('not-active');
      }
    };
    const handleHoverOff = () => {
      if (liRef.current) {
        liRef.current.classList.add('not-active');
        liRef.current.classList.remove('active');
      }
    };

    return (
      <li

        onMouseEnter={handleHoverOn}
        onMouseLeave={handleHoverOff}
        onMouseDown={handleHoverOff}
        className="project_links-li">
        <a href={url}
          ref={liRef}
          rel="noopener noreferrer"
          target="_blank">
          {label}
        </a>
      </li>
    );
  };



  return (
    <div className="project_links-wrapper">
      <ToolRoleTitle label="Links:" />
      <ul className="project_links-ul">
        {links.map(({ label, url }) => (
          <ListItem key={`link-${label}`} label={label!} url={url!} />
        ))}
      </ul>
    </div>
  );
}