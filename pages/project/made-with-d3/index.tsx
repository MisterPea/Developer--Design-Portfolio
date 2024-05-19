import ProjectHeadline from "../../../src/components/ProjectHeadline";
import siteContent from "../../../src/app/siteContent.json";
import "../../../src/style/globals.scss";
import ToolRoleTitle from "../../../src/components/ToolRoleTitle";
import ChipGroup from "../../../src/components/ChipGroup";
import ProjectTextBlock from "@/components/ProjectTextBlock";
import DivideLine from "@/components/DivideLine";
import ProjectNavbar from "@/components/ProjectNavbar";
import BackToAllWork from "@/components/BackToAllWork";
import ProjectFooter from "@/components/ProjectFooter";
import ResponsiveImage from "@/components/ResponsiveImage";
import { motion } from "framer-motion";
import { d3Images } from "@/app/imageContent";
import { projectVariant } from '@/components/_helpers/animationVariants';
import { useEffect, useRef } from "react";
import AnscombeQuartet from "@/components/_D3Components/AnscombeQuartet";
import MtaRidership from "@/components/_D3Components/MtaRidership";
import NycWeather from "@/components/_D3Components/NycWeather";
import LirrSchedule from "@/components/_D3Components/LirrSchedule";
import InsertionSort from "@/components/_D3Components/InsertionSort";
import Spacer from "@/components/Spacer";
import { fadeInUp_1_delay } from "@/components/_helpers/animationVariants";
import { Icon } from "@/components/Icons";
import IntersectDiv from "@/components/_helpers/IntersectDiv";

export default function CircuitApp() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const mtaRidershipRef = useRef<HTMLDivElement>(null);
  const nycWeatherRef = useRef<HTMLDivElement>(null);
  const lirrSchedule = useRef<HTMLDivElement>(null);
  const { description, projectPage } = siteContent[2];
  const {
    headlineOne,
    headlineTwo,
    summaryHeadline,
    summaryBody,
    role,
    tools,
    links,
  } = projectPage;

  // Image imports
  const {
    d3HeroImage,
  } = d3Images;

  return (
    <>
      <BackToAllWork triggerDifference={-170} />
      <motion.div
        variants={projectVariant}
        initial='hidden'
        animate='show'
        exit='exit'>
        <div className="project_page-wrapper">
          <ProjectNavbar />
          <ProjectHeadline
            topHead={headlineOne}
            bottomHead={headlineTwo}
            accentColor="#FABD8C"
            subHead={description}
          />

          <figure className="project_page-hero">
            <ResponsiveImage
              alt={d3HeroImage.alt}
              blurDataUrl={d3HeroImage.blurDataUrl}
              imageUrls={d3HeroImage.imageUrls}
              imageSize={d3HeroImage.imageSize}
              dropShadow={d3HeroImage.dropShadow}
            />
          </figure>

          <section className="project_page-summary">
            <ProjectTextBlock intersect intersectDelay={200} title={summaryHeadline} body={summaryBody} titleIsBold />
          </section>
          <section className="project_page-info-wrapper">
            <div className="project_page-info-tools">
              <ToolRoleTitle label="Tools:" />
              <ChipGroup toolList={tools} />
            </div>
            <div className="project_page-info-role">
              <ToolRoleTitle label="Role: " content={role} className="project_page-top_info-role" />
            </div>
          </section>

          {/* Anscombe Quartet */}
          <section className="project_page_d3-project_wrapper-anscombe">
            <DivideLine className="d3_section_line" />
            <IntersectDiv className="d3_project-headline-grid">
              <ProjectTextBlock className="anscombe-text" title="Anscombe Quartet" body="An illustration of why visualizing data is important. The summary statistics (regression line) can be the same, while the data distributions can be very different." titleIsBold />
              <div className="d3_project-headline-button_wrapper">
                <a
                  title="Github Gist Link for Anscombe Quartet Code"
                  href="https://gist.github.com/MisterPea/8a71b1d359a12c8f9fd1eadcc83deadb" rel="noopener noreferrer" target="_blank">
                  <Icon.github />
                </a>
                <p>View GitHub Gist</p>
              </div>
            </IntersectDiv>
            <motion.div
              variants={fadeInUp_1_delay}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="d3-parent">
              <AnscombeQuartet />
            </motion.div>
          </section>

          {/* LIRR SCHEDULE */}
          <section className="project_page_d3-project_wrapper-lirr">
            <DivideLine className="d3_section_line" />
            <IntersectDiv className="d3_project-headline-grid">
              <ProjectTextBlock className="lirr-text" title="Ibry/Marey Train Schedule" body="A contemporary recreation of the train schedule designed by Charles Ibry and published by Étienne-Jules Marey in his book on data visualizations: <i>La Méthode Graphique Dans les Sciences Expérimentales et Principalement en Physiologie et en Médecine</i> — brought to our attention in Edward Tufte&apos;s book <i>The Visual Display of Quantitative Information</i>. This version is the elucidation of the Long Island Railroad schedule." titleIsBold />
              <div className="d3_project-headline-button_wrapper">
                <a
                  title="Github Gist Link for LIRR Train Schedule"
                  href="https://gist.github.com/MisterPea/c4e1048486832fa26f7a9f0e21ee01aa" rel="noopener noreferrer" target="_blank">
                  <Icon.github />
                </a>
                <p>View GitHub Gist</p>
              </div>
            </IntersectDiv>
            <motion.div
              variants={fadeInUp_1_delay}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="d3-parent" ref={lirrSchedule}>
              < LirrSchedule parentRef={lirrSchedule} />
            </motion.div>
          </section>

          {/* Insertion Sort */}
          <section className="project_page_d3-project_wrapper-insertion_sort">
            <DivideLine className="d3_section_line" />
            <IntersectDiv className="d3_project-headline-grid">
              <ProjectTextBlock className="insertion_sort-text" title="Visualizing Insertion Sort: An Asynchronous Callback Approach" body="This project is a visualization of the classic insertion sort algorithm, an O(<i>n</i><sup>2</sup>) complexity method. Due to the challenges of sequencing and updating asynchronous operations, this implementation primarily uses callbacks. This approach ensures the animations of bar positions is accurately sequenced, which keeps the bars and the array they represent in sync with each other." titleIsBold />
              <div className="d3_project-headline-button_wrapper">
                <a
                  title="Github Gist Link for Insertion Sort"
                  href="https://gist.github.com/MisterPea/edabc35517d98830752a405ab13b1047" rel="noopener noreferrer" target="_blank">
                  <Icon.github />
                </a>
                <p>View GitHub Gist</p>
              </div>
            </IntersectDiv>
            <motion.div
              variants={fadeInUp_1_delay}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="d3-parent">
              <InsertionSort />
            </motion.div>
          </section>

          {/* MTA Pandemic Ridership */}
          <section className="project_page_d3-project_wrapper-ridership">
            <DivideLine className="d3_section_line" />
            <IntersectDiv className="d3_project-headline-grid">
              <ProjectTextBlock className="ridership-text" title="New York City Subway Pandemic Ridership" body="A plotting of the precipitous decline in subway ridership following the discovery of COVID-19 in New York City. This chart is a combination of a daily bar graph with pandemic-related touchstones, which furnish context to the variance in subway ridership." titleIsBold />
              <div className="d3_project-headline-button_wrapper">
                <a
                  title="Github Gist Link for MTA Pandemic Ridership"
                  href="https://gist.github.com/MisterPea/b6cfd16570d16ac57bd0d0b97611eb00" rel="noopener noreferrer" target="_blank">
                  <Icon.github />
                </a>
                <p>View GitHub Gist</p>
              </div>
            </IntersectDiv>

            <motion.div
              variants={fadeInUp_1_delay}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="d3-parent" ref={mtaRidershipRef}>
              <MtaRidership />
            </motion.div>
          </section>

          {/* NYC Weather */}
          <section className="project_page_d3-project_wrapper-weather">
            <DivideLine className="d3_section_line" />
            <IntersectDiv className="d3_project-headline-grid">
              <ProjectTextBlock className="weather-text" title="New York City Weather" body="A dual axis, time series chart plotting the daily temperature range and the corresponding cumulative precipitation for New York City." titleIsBold />
              <div className="d3_project-headline-button_wrapper">
                <a
                  title="Github Gist Link for NYC Weather"
                  href="https://gist.github.com/MisterPea/066915295ec71286a2d2c01da9037b19" rel="noopener noreferrer" target="_blank">
                  <Icon.github />
                </a>
                <p>View GitHub Gist</p>
              </div>
            </IntersectDiv>

            <motion.div
              variants={fadeInUp_1_delay}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="d3-parent" ref={nycWeatherRef}>
              <NycWeather />
            </motion.div>
          </section>
        </div>
        <Spacer amount={2} />
        <ProjectFooter />
      </motion.div >
    </>
  );
};
