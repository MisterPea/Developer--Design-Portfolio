import HomeAboutNavigation from "./NavHomeAbout";


export default function ProjectNavbar({ currentPage }: { currentPage?: "about" | "home"; }) {

  return (
    <div className="project_navbar">
      <div className="project_navbar-content_wrapper" >
        <h1>Perry Angelora</h1>
        <HomeAboutNavigation currentPage={currentPage}/>
      </div>
    </div>
  );
}