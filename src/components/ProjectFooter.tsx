import Link from "next/link";
import { Icon } from "./Icons";
import renderEmail from "./_helpers/renderEmail";

export default function ProjectFooter({ isHomePage = false }: { isHomePage?: boolean; }) {

  function emailClick() {
    return window.location.href = renderEmail();
  }

  return (
    <footer className={`project_footer${isHomePage === true ? "-home_page" : ""}`}>
      <ul className="project_footer-all_links">
        <li className="project_footer-link">
          <a href="https://github.com/MisterPea" rel="noopener noreferrer" target="_blank" >
            <Icon.github />
          </a>
        </li>
        <li className="project_footer-link">
          <a href="https://www.linkedin.com/in/perry-angelora/" rel="noopener noreferrer" target="_blank">
            <Icon.linkedIn />
          </a>
        </li>
        <li className="project_footer-link">
          <button onClick={emailClick}>
            <Icon.mail />
          </button>
        </li>
      </ul>
      { isHomePage && <div className="project_footer-home_page-about_link">
        <Link href='/about' >
          About
        </Link>
      </div>}
    </footer>
  );
}