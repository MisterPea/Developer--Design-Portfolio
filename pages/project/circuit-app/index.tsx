import ProjectHeadline from "../../../src/components/ProjectHeadline";
import siteContent from "../../../src/app/siteContent.json";
import "../../../src/style/globals.scss";
import ToolRoleTitle from "../../../src/components/ToolRoleTitle";
import ChipGroup from "../../../src/components/ChipGroup";
import ProjectTextBlock from "@/components/ProjectTextBlock";
import DivideLine from "@/components/DivideLine";
import ProjectLinks from "@/components/ProjectLinks";
import ProjectNavbar from "@/components/ProjectNavbar";
import ColorSwatchGroup from "@/components/ColorSwatchGroup";
import ImageCaption from "@/components/ImageCaption";
import VideoPlayer from "@/components/VideoPlayer";
import TypeSpecimen from "@/components/TypeSpecimen";
import BackToAllWork from "@/components/BackToAllWork";
import ProjectFooter from "@/components/ProjectFooter";
import Spacer from "@/components/Spacer";
import CircuitPeriodGroup from "@/components/CircuitPeriodGroup";
import MobileCircuitDiagram from "@/components/MobileCircuitDiagram";
import ResponsiveImage from "@/components/ResponsiveImage";
import { motion } from "framer-motion";
import { circuitImages } from "@/app/imageContent";
import { projectVariant, fadeInUp_1, fadeInUp_1_delay } from '@/components/_helpers/animationVariants';
import { useEffect } from "react";


export default function CircuitApp() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  // Text imports
  const { description, projectPage } = siteContent[1];
  const {
    headlineOne,
    headlineTwo,
    summaryHeadline,
    summaryBody,
    problemHeadline,
    problemBody,
    approachSectionTitle,
    approaches,
    design,
    role,
    tools,
    links,
    userResearchBody,
    userResearchHeadline
  } = projectPage;

  // Image imports
  const {
    circuitAltDesignOne,
    circuitAltDesignTwo,
    circuitCompletedScreen,
    circuitFlowchart,
    circuitHeroImage,
    circuitInProgressScreen,
    circuitInitialScreen
  } = circuitImages;

  return (
    <>
      <BackToAllWork />
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
              alt={circuitHeroImage.alt}
              blurDataUrl={circuitHeroImage.blurDataUrl}
              imageUrls={circuitHeroImage.imageUrls}
              imageSize={circuitHeroImage.imageSize}
              dropShadow={circuitHeroImage.dropShadow}
            />
          </figure>

          <DivideLine className="hero_line " />
          <section className="project_page-summary">
            <ProjectTextBlock title={summaryHeadline} body={summaryBody} titleIsBold />
          </section>
          <section className="project_page-info-wrapper">
            <div className="project_page-info-tools">
              <ToolRoleTitle label="Tools:" />
              <ChipGroup toolList={tools} />
            </div>
            <div className="project_page-info-role">
              <ToolRoleTitle label="Role: " content={role} className="project_page-top_info-role" />
            </div>
            <div className="project_page-info-links">
              <ProjectLinks links={links} />
            </div>
          </section>
          <DivideLine className="mobile_divide_line post_summary" />
          <section className="project_page-problem">
            <ProjectTextBlock intersect title={problemHeadline} body={`${problemBody}`} />
          </section>
          <DivideLine className="mobile_divide_line post_problem" />
          <section className="project_page-user_research">
            <ProjectTextBlock intersect intersectDelay={270} title={userResearchHeadline} body={userResearchBody} />
          </section>

          {/* Approach */}
          <Spacer amount={1.5} className="tablet_spacer" />
          <article className="circuit_project_page-approach">
            <motion.h4
              variants={fadeInUp_1}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 'all', once: true }}
            >{approachSectionTitle}</motion.h4>
            <Spacer />
            {/* Section One */}
            <motion.section
              variants={fadeInUp_1_delay}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 'some', once: true }}
              className="circuit_project_page-approach-section_one">
              <ProjectTextBlock intersect intersectDelay={400} oneShot={false} title={approaches![0].headline} body={approaches![0].body} />
              <VideoPlayer intersect intersectDelay={100} onShot={false} videoSource="/video/circuit/circuit_edit-773x2a.mov" className="bezel" />
            </motion.section>
            <Spacer amount={6} />
            {/* Section Two */}
            <section className="circuit_project_page-approach-section_two">
              <ProjectTextBlock intersect intersectDelay={400} title={approaches![1].headline} body={approaches![1].body} />
              <VideoPlayer intersect intersectDelay={100} videoSource="/video/circuit/circuit_add-773x2.mov" className="bezel" />
            </section>

            <Spacer amount={6} />

            <section className="circuit_project_page-approach-section_three">
              {/* Semantical Periods */}
              <figure className="semantic_illustration">
                <ProjectTextBlock title="" body="Semantically colored circles identify the current activity status (Each circle represents one minute)." />
                <CircuitPeriodGroup />
              </figure>
              <ProjectTextBlock title={approaches![2].headline} body={approaches![2].body} />
              {/* Section Three - One */}
              <h5 className="sequence_approach_heading one">Initial</h5>
              <ResponsiveImage
                alt={circuitInitialScreen.alt}
                blurDataUrl={circuitInitialScreen.blurDataUrl}
                imageSize={circuitInitialScreen.imageSize}
                imageUrls={circuitInitialScreen.imageUrls}
                dropShadow={circuitInitialScreen.dropShadow}
                className="image_one"
              />
              <ImageCaption
                body="Initial screen for a basic Pomodoro timer, consisting of 4 - 25 minute active and 5 - 1 minute rest periods."
                className="caption_one"
              />
              {/* Section Three - Two */}
              <h5 className="sequence_approach_heading two">In Progress…</h5>
              <ResponsiveImage
                alt={circuitInProgressScreen.alt}
                blurDataUrl={circuitInProgressScreen.blurDataUrl}
                imageSize={circuitInProgressScreen.imageSize}
                imageUrls={circuitInProgressScreen.imageUrls}
                dropShadow={circuitInProgressScreen.dropShadow}
                className="image_two"
                intersectDelay={200}
              />
              <ImageCaption
                body="While in progress, the current minute is animated and bottom text tells the user how much time until the next period."
                className="caption_two"
              />
              {/* Section Three - Three */}
              <h5 className="sequence_approach_heading three">Completed</h5>
              <ResponsiveImage
                alt={circuitCompletedScreen.alt}
                blurDataUrl={circuitCompletedScreen.blurDataUrl}
                imageSize={circuitCompletedScreen.imageSize}
                imageUrls={circuitCompletedScreen.imageUrls}
                dropShadow={circuitCompletedScreen.dropShadow}
                className="image_three"
                intersectDelay={400}
              />
              <ImageCaption
                body="Once completed, the user is offered the option to reset the timer, or finish and view their progress."
                className="caption_three"
              />
            </section>
          </article >

          <DivideLine className="full-width-line" />
          {/* Design Considerations */}
          <article className="circuit_project_page-design">
            <section className="circuit_project_page-design-considerations-wrapper">
              <ProjectTextBlock intersect title={design?.designHeadline} body={[design!.designList[0], design!.designList[1]]} className="circuit_project_page-design-considerations_left" />
              <ProjectTextBlock intersect intersectDelay={400} title={"\u2003"} body={[design!.designList[2], design!.designList[3]]} className="circuit_project_page-design-considerations_right" />
            </section>
            <Spacer amount={2} />
            <section className="diagram_section">
              <h5 className="diagram_heading one">Circuit Picker Screen</h5>
              <MobileCircuitDiagram variant="one" className="one" />
              <Spacer amount={3} />
              <h5 className="diagram_heading two">Completed Session Recap Screen</h5>
              <MobileCircuitDiagram variant="two" className="two" />
              <Spacer amount={3} />
              <h5 className="diagram_heading three">Completed Session Detail Screen</h5>
              <MobileCircuitDiagram variant="three" className="three" />
              <MobileCircuitDiagram variant="four" className="four" />
            </section>
            <section className="circuit_project_page-design-typography_and_color">
              <div className="circuit_project_page-design-typography_and_color-type_wrapper">
                <h5 className="circuit_project_page-design-small_headline">{design!.typeHeadline}</h5>
                <div className="circuit_project_page-design-type_specimen_wrapper">
                  <TypeSpecimen fontName="Barlow SemiBold" className="barlow-semibold" />
                  <TypeSpecimen fontName="Barlow Regular" className="barlow-regular" />
                </div>
              </div>
              <div className="circuit_project_page-design-typography_and_color-color_wrapper">
                <h5 className="circuit_project_page-design-small_headline">{design!.colorHeadline}</h5>
                <ColorSwatchGroup swatches={design!.colorList} />
              </div>
            </section>
            <Spacer amount={2} className="spacer-post_color" />
          </article>

          <article className="circuit_project_page-site_flow">
            <ProjectTextBlock title={projectPage.siteFlow!.headline} body={projectPage.siteFlow!.body} />
            <Spacer amount={0.5} />
            <ResponsiveImage
              alt={circuitFlowchart.alt}
              blurDataUrl={circuitFlowchart.blurDataUrl}
              imageSize={circuitFlowchart.imageSize}
              imageUrls={circuitFlowchart.imageUrls}
              dropShadow={undefined}
            />
          </article>
          <DivideLine className="full-width-line" />
          <section className="circuit_project_page-approach circuit_alts">
            <motion.h4
              variants={fadeInUp_1}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 'all', once: true }}
              className="circuit_alts_headline">Matrix Design Alternatives</motion.h4>

            <ResponsiveImage
              alt={circuitAltDesignOne.alt}
              blurDataUrl={circuitAltDesignOne.blurDataUrl}
              imageSize={circuitAltDesignOne.imageSize}
              imageUrls={circuitAltDesignOne.imageUrls}
              dropShadow={circuitAltDesignOne.dropShadow}
              className="alt_one"
            />
            <ProjectTextBlock
              intersect
              intersectDelay={150}
              smallTitle
              title="Alternate Matrix One"
              body="In this iteration the rest periods are grouped together. Doing so presents the user with an alternative sectional representation, which augments the description via semantic color. From a development point of view, this may be a slightly more complex route to take as we're essentially treating time in 2 different ways: by minimal instance (minute dots) and by section (rest lines)."
              className="text_one" />
            <ResponsiveImage
              alt={circuitAltDesignTwo.alt}
              blurDataUrl={circuitAltDesignTwo.blurDataUrl}
              imageSize={circuitAltDesignTwo.imageSize}
              imageUrls={circuitAltDesignTwo.imageUrls}
              dropShadow={circuitAltDesignTwo.dropShadow}
              className="alt_two"
              intersectDelay={200}
            />
            <ProjectTextBlock
              intersect
              intersectDelay={350}
              smallTitle
              title="Alternate Matrix Two" body="In this iteration the active and rest periods are treated the same. This allows us to treat all measurements of time the same. By bridging the dots we create cohesive areas that are easy to visually discern by color or density. Another issue for users is that this format may read too closely to text-placeholder graphics."
              className="text_two" />
          </section>
        </div>
        <ProjectFooter />
      </motion.div >
    </>
  );
};