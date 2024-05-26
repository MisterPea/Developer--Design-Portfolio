"use client";
import siteContent from "../src/app/siteContent.json";
import LandingHeader from "../src/components/LandingHeader";
import LandingProjectCard from "../src/components/LandingProjectCard";
import { ResponsiveImageProps } from "@/components/_types";
import HomeAboutNavigation from "@/components/NavHomeAbout";
import ProjectFooter from "@/components/ProjectFooter";
import { motion } from 'framer-motion';
import { indexVariant } from '@/components/_helpers/animationVariants';
import Placeholder from "@/components/SvgPlaceHolder";

export default function Home() {
  const images: ResponsiveImageProps[] = [
    {
      alt: "Desktop sizes image of the times.pilot app",
      imageSize: {
        h: 2680,
        w: 3498
      },
      imageUrls: {
        small: {
          imageUrl_1x: "/sourceImages/timesPilotSingle.c577402c-opt-771.WEBP",
          imageUrl_2x: "/sourceImages/timesPilotSingle.c577402c-opt-1920.WEBP",
          imageUrl_3x: "/sourceImages/timesPilotSingle.c577402c-opt-2332.WEBP",
        },
        medium: {
          imageUrl_1x: "/sourceImages/timesPilotSingle.c577402c-opt-514.WEBP",
          imageUrl_2x: "/sourceImages/timesPilotSingle.c577402c-opt-1125.WEBP",
          imageUrl_3x: "/sourceImages/timesPilotSingle.c577402c-opt-1920.WEBP",
        },
        large: {
          imageUrl_1x: "/sourceImages/timesPilotSingle.c577402c-opt-771.WEBP",
          imageUrl_2x: "/sourceImages/timesPilotSingle.c577402c-opt-1920.WEBP",
          imageUrl_3x: "/sourceImages/timesPilotSingle.c577402c-opt-2332.WEBP",
        }
      },
      PlaceholderComponent:Placeholder.TimesPilotOneUp,
    },
    {
      alt: "Three screens from the Circuit iOS App",
      imageSize: {
        h: 2054,
        w: 3340
      },
      imageUrls: {
        small: {
          imageUrl_1x: "/sourceImages/MainStaticFrontPage.1443cdea-opt-771.WEBP",
          imageUrl_2x: "/sourceImages/MainStaticFrontPage.1443cdea-opt-1920.WEBP",
          imageUrl_3x: "/sourceImages/MainStaticFrontPage.1443cdea-opt-2332.WEBP",
        },
        medium: {
          imageUrl_1x: "/sourceImages/MainStaticFrontPage.1443cdea-opt-514.WEBP",
          imageUrl_2x: "/sourceImages/MainStaticFrontPage.1443cdea-opt-1125.WEBP",
          imageUrl_3x: "/sourceImages/MainStaticFrontPage.1443cdea-opt-1920.WEBP",
        },
        large: {
          imageUrl_1x: "/sourceImages/MainStaticFrontPage.1443cdea-opt-771.WEBP",
          imageUrl_2x: "/sourceImages/MainStaticFrontPage.1443cdea-opt-1920.WEBP",
          imageUrl_3x: "/sourceImages/MainStaticFrontPage.1443cdea-opt-2332.WEBP",
        }
      },
      PlaceholderComponent:Placeholder.CircuitHero,
    },
    {
      alt: "Image of Ibry/Marey Train Schedule in situ.",
      dropShadow: 2,
      PlaceholderComponent:Placeholder.D3Hero,
      imageSize: {
        h: 2523, w: 3498
      },
      imageUrls: {
        small: {
          imageUrl_1x: '/sourceImages/D3-main-f4289387-opt-771.WEBP',
          imageUrl_2x: '/sourceImages/D3-main-f4289387-opt-1920.WEBP',
          imageUrl_3x: '/sourceImages/D3-main-f4289387-opt-2332.WEBP'
        },
        medium: {
          imageUrl_1x: '/sourceImages/D3-main-f4289387-opt-1166.WEBP',
          imageUrl_2x: '/sourceImages/D3-main-f4289387-opt-2332.WEBP',
          imageUrl_3x: '/sourceImages/D3-main-f4289387-opt-3498.WEBP'
        },
        large: {
          imageUrl_1x: '/sourceImages/D3-main-f4289387-opt-1125.WEBP',
          imageUrl_2x: '/sourceImages/D3-main-f4289387-opt-2332.WEBP',
          imageUrl_3x: '/sourceImages/D3-main-f4289387-opt-3498.WEBP'
        }
      }
    }
  ];



  return (
    <motion.main
      variants={indexVariant}
      initial='hidden'
      animate='show'
      exit='exit'
      className='main_wrap'>
      <LandingHeader />
      <div className="main_wrap-about_wrap">
        <HomeAboutNavigation currentPage="home" />
      </div>
      <div className="main_wrap-right_side">
        <ul className="landing_project-ul">
          {siteContent.map(({ projectHeadline, description, landingToolList, slug, isProject }, index) => (
            <li className="landing_project-li" key={projectHeadline}>
              <LandingProjectCard
                headline={projectHeadline}
                desc={description}
                tools={landingToolList}
                image={images[index]}
                slug={slug}
                isProject={isProject}
              />
            </li>
          ))}
        </ul>
      </div>
      <ProjectFooter isHomePage />
    </motion.main>
  );
}
