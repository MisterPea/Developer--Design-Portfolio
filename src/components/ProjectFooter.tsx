import Link from "next/link";
import { Icon } from "./Icons";
import renderEmail from "./_helpers/renderEmail";

export default function ProjectFooter({ isHomePage = false, isAboutPage = false }: { isHomePage?: boolean; isAboutPage?: boolean; }) {

  function emailClick() {
    return window.location.href = renderEmail();
  }

  return (
    <footer className={`project_footer${isHomePage === true ? "-home_page" : ""}${isAboutPage === true ? "-about_page" : ""}`}>
      <ul className="project_footer-all_links">
        <li className="project_footer-link">
          <a
            title="Github Link"
            href="https://github.com/MisterPea" rel="noopener noreferrer" target="_blank" >
            <Icon.github />
          </a>
        </li>
        <li className="project_footer-link">
          <a
            title="LinkedIn Link"
            href="https://www.linkedin.com/in/perry-angelora/" rel="noopener noreferrer" target="_blank">
            <Icon.linkedIn />
          </a>
        </li>
        <li className="project_footer-link">
          <button
            title="Email Perry!"
            onClick={emailClick}>
            <Icon.mail />
          </button>
        </li>
      </ul>
      {isHomePage && <div className="project_footer-home_page-about_link">
        <Link
          title="About Page"
          href='/about' scroll={false} >
          About
        </Link>
      </div>}
    </footer>
  );
}