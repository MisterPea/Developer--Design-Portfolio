// import ProjectCard from './components/ProjectCard';
// import siteContent from "./siteContent.json";

import ProjectHeadline from "@/components/ProjectHeadline";

export default function Home() {

  return (
    <main className='main_wrap'>
      <ProjectHeadline
        topHead="Circuit App"
        bottomHead="Revolutionizing Time Management for Creatives"
        subHead="An iOS app to empower creatives by bettering focus and eliminating burnout."
        accentColor="#FABD8C"
      />
      <ul className='project_card_wrap'>
        {/* {siteContent.map(({ title, stack, slug, description, image_url }, index) => ( */}
        <li className='project_card-li'>
          {/*           <ProjectCard title={title}
              desc={description}
              stack={stack}
              slug={slug}
              image={image_url}
            /> */}
        </li>
        {/* ))} */}
      </ul>
    </main>
  );
}
