import { Icon } from "./Icons";

export default function ProjectFooter() {
  return (
    <footer className="project_footer">
      <ul className="project_footer-all_links">
        <li className="project_footer-link"><Icon.github /></li>
        <li className="project_footer-link"><Icon.linkedIn /></li>
        <li className="project_footer-link"><Icon.mail /></li>
      </ul>
    </footer>
  );
}