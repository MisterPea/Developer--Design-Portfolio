import siteContent from "./siteContent.json";
import timesImage from "../../public/images/times_pilot/timesPilotSingle.png";
import circuitImage from "../../public/images/circuit/MainStaticFrontPage.png";
import LandingHeader from "../components/LandingHeader";
import LandingProjectCard from "../components/LandingProjectCard";

export default function Home() {
  const images = [timesImage, circuitImage];
  return (
    <main className='main_wrap'>
      <LandingHeader />
      <ul className="landing_project-ul">
        {siteContent.map(({ projectHeadline, description, landingToolList, slug }, index) => (
          <li className="landing_project-li" key={projectHeadline}>
            <LandingProjectCard
              headline={projectHeadline}
              desc={description}
              tools={landingToolList}
              image={images[index]}
              slug={slug}
            />
          </li>
        ))}
      </ul>
      <div className="main_wrap-about_wrap">
        About
      </div>
    </main>
  );
}
