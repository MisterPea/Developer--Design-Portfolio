import "../../../src/style/globals.scss";
import ProjectHeadline from "../../../src/components/ProjectHeadline";
import siteContent from "../../../src/app/siteContent.json";
import ToolRoleTitle from "../../../src/components/ToolRoleTitle";
import ChipGroup from "../../../src/components/ChipGroup";
import ProjectTextBlock from "@/components/ProjectTextBlock";
import DivideLine from "@/components/DivideLine";
import ProjectLinks from "@/components/ProjectLinks";
import ProjectNavbar from "@/components/ProjectNavbar";
import { Icon } from "@/components/Icons";
import ColorSwatchGroup from "@/components/ColorSwatchGroup";
import { SvgIllustration } from "@/components/SvgIllustration";
import ImageCaption from "@/components/ImageCaption";
import VideoPlayer from "@/components/VideoPlayer";
import TypeSpecimen from "@/components/TypeSpecimen";
import BackToAllWork from "@/components/BackToAllWork";
import ProjectFooter from "@/components/ProjectFooter";
import Spacer from "@/components/Spacer";
import ResponsiveImage from "@/components/ResponsiveImage";
import { motion } from 'framer-motion';
import { indexVariant, projectVariant } from '@/components/_helpers/animationVariants';
import { timesPilotImages } from "@/app/imageContent";
import { fadeInUp_1 } from "@/components/_helpers/animationVariants";
import { useEffect } from "react";

export default function TimesPilot() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const { description, projectPage } = siteContent[0];
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
    problems,
    role,
    tools,
    links,
    userResearchBody,
    userResearchHeadline
  } = projectPage;

  const { heroImage, sectionSelection, newUserOne, newUserTwo, newUserThree, newUserFour, flowchart } = timesPilotImages;

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
            accentColor="#E4C24D"
            subHead={description}
          />
          <figure className="project_page-hero">
            <ResponsiveImage
              imageUrls={heroImage.imageUrls}
              imageSize={heroImage.imageSize}
              alt={heroImage.alt}
              PlaceholderComponent={heroImage.PlaceholderComponent}
              dropShadow={heroImage.dropShadow}
              intersectDelay={300}
              loading="eager"
            />
          </figure>
          <DivideLine className="hero_line" />
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

          <section
            className="project_page-problem">
            <ProjectTextBlock intersect title={problemHeadline} body={`${problemBody}`} />
          </section>

          <DivideLine className="mobile_divide_line post_problem" />
          <section className="project_page-user_research">
            <ProjectTextBlock intersect intersectDelay={200} title={userResearchHeadline} body={userResearchBody} />
          </section>

          {/* Approach */}
          <Spacer amount={1.5} className="tablet_spacer" />
          <article className="nyt_project_page-approach">
            <motion.h4
              variants={fadeInUp_1}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 'all', once: true }}
            >{approachSectionTitle}</motion.h4>
            <Spacer />
            {/* Daily Email */}
            <motion.section
              variants={fadeInUp_1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="nyt_project_page-approach-section_one">
              <ProjectTextBlock intersect title={approaches![0].headline} body={approaches![0].body} collapsible />
              <VideoPlayer
                intersect
                intersectDelay={250}
                oneShot
                webmVideoSource="/video/times_pilot/nyt_email_select-766x2.webm"
                mp4VideoSource="/video/times_pilot/nyt_email_select-766x2.mp4"
              />
            </motion.section>
            <Spacer amount={6} />
            {/* Content Layout */}
            <section className="nyt_project_page-approach-section_two">
              <ProjectTextBlock intersect intersectDelay={100} title={approaches![1].headline} body={approaches![1].body} collapsible />
              <motion.figure
                variants={indexVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 'some' }}
                className="project-figure svg">
                <Icon.contentAccessability />
              </motion.figure>
            </section>
            <Spacer amount={6} />
            {/* Section Picker */}
            <section className="nyt_project_page-approach-section_three">
              <ProjectTextBlock intersect title={approaches![2].headline} body={approaches![2].body} collapsible />
              <motion.figure
                variants={indexVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 'some' }}
                className="project-figure svg">
                <ResponsiveImage
                  alt={sectionSelection.alt}
                  PlaceholderComponent={sectionSelection.PlaceholderComponent}
                  imageSize={sectionSelection.imageSize}
                  imageUrls={sectionSelection.imageUrls}
                />
              </motion.figure>
            </section>
            <Spacer amount={6} />
            {/* Settings Accessability */}
            <section className="nyt_project_page-approach-section_four">
              <ProjectTextBlock intersect title={approaches![3].headline} body={approaches![3].body} collapsible />
              <VideoPlayer
                intersect
                intersectDelay={300}
                oneShot
                webmVideoSource="/video/times_pilot/nyt_settings_raw_766x2.webm"
                mp4VideoSource="/video/times_pilot/nyt_settings_raw_766x2.mp4" />
            </section>
          </article >

          <DivideLine className="full-width-line" />
          {/* Design Considerations */}
          <article className="nyt_project_page-design">
            <section className="nyt_project_page-design-considerations-wrapper">
              <ProjectTextBlock title={design?.designHeadline} body={[design!.designList[0], design!.designList[1]]} className="nyt_project_page-design-considerations_left" />
              <ProjectTextBlock title={"\u2003"} body={[design!.designList[2], design!.designList[3]]} className="nyt_project_page-design-considerations_right" />
            </section>
            <Spacer amount={2} />
            <section className="nyt_project_page-design-typography_and_color">
              <div className="nyt_project_page-design-typography_and_color-type_wrapper">
                <h5 className="nyt_project_page-design-small_headline">{design!.typeHeadline}</h5>
                <div className="nyt_project_page-design-type_specimen_wrapper">
                  <TypeSpecimen fontName="Museo Slab Rounded - 500" className="museo_slab" />
                  <TypeSpecimen fontName="Forma DJR Micro - 400" className="djr-400" />
                  <TypeSpecimen fontName="Forma DJR Micro - 900" className="djr-900" />
                </div>
              </div>
              <div className="nyt_project_page-design-typography_and_color-color_wrapper">
                <h5 className="nyt_project_page-design-small_headline">{design!.colorHeadline}</h5>
                <ColorSwatchGroup swatches={design!.colorList} />
              </div>
            </section>
            <Spacer amount={2} className="spacer-post_color" />
          </article>

          <article className="nyt_project_page-site_flow">
            <ProjectTextBlock title={projectPage.siteFlow!.headline} body={projectPage.siteFlow!.body} />
            <Spacer amount={0.5} />
            <ResponsiveImage
              alt={flowchart.alt}
              imageSize={flowchart.imageSize}
              imageUrls={flowchart.imageUrls}
              PlaceholderComponent={flowchart.PlaceholderComponent}

            />
            {/* <ExportedImage src={nytFlowchart} alt="High-level site flow of the Times.Pilot; showing different authentication states as it relates to user access." /> */}
          </article>

          <DivideLine className="full-width-line" />
          {/* Problem */}
          <article className="nyt_project_page-problems">
            <ProjectTextBlock title={problems!.headline} body={[problems!.body[0], problems!.body[1]]} className="nyt_project_page-problems_left" />
            <ProjectTextBlock title="" body={[problems!.body[2]]} className="nyt_project_page-problems_right" />

            <section className="nyt_project_page-problems-section_one" >
              <Spacer amount={1.5} />
              <ProjectTextBlock title={problems!.problemOne.headline} body={problems!.problemOne.body} smallTitle collapsible />
              <figure className="project_page-problem_section-problem --single_image">
                <SvgIllustration.bookmarkPanel />
              </figure>
            </section>

            <section className="nyt_project_page-problems-section_two">
              <Spacer amount={1.5} />
              <ProjectTextBlock title={problems!.problemTwo.headline} body={problems!.problemTwo.body} smallTitle collapsible />
              <figure className="project_page-problem_section-problem --single_svg">
                <SvgIllustration.optimizedLayout />
              </figure>
            </section>

            <section className="nyt_project_page-problems-section_three">
              <Spacer amount={1.5} />
              <div className="nyt_project_page-problems-section_three-group">
                <ProjectTextBlock title={problems!.problemThree.headline} body={problems!.problemThree.body} smallTitle={true} collapsible />
                <figure className="nyt_project_page-problems-section_three-image image_one">
                  <ResponsiveImage
                    alt={newUserOne.alt}
                    dropShadow={newUserOne.dropShadow}
                    imageSize={newUserOne.imageSize}
                    imageUrls={newUserOne.imageUrls}
                    PlaceholderComponent={newUserOne.PlaceholderComponent}
                  />
                  <figcaption>
                    <ImageCaption headline={problems!.problemThree.imageCaption[0].headline} body={problems!.problemThree.imageCaption[0].body} />
                  </figcaption>
                </figure>
                <figure className="nyt_project_page-problems-section_three-image image_two">
                  <ResponsiveImage
                    alt={newUserTwo.alt}
                    dropShadow={newUserTwo.dropShadow}
                    imageSize={newUserTwo.imageSize}
                    imageUrls={newUserTwo.imageUrls}
                    PlaceholderComponent={newUserTwo.PlaceholderComponent}
                    intersectDelay={200}
                  />
                  <figcaption>
                    <ImageCaption headline={problems!.problemThree.imageCaption[1].headline} body={problems!.problemThree.imageCaption[1].body} />
                  </figcaption>
                </figure>
                <figure className="nyt_project_page-problems-section_three-image image_three">
                  <ResponsiveImage
                    alt={newUserThree.alt}
                    dropShadow={newUserThree.dropShadow}
                    imageSize={newUserThree.imageSize}
                    imageUrls={newUserThree.imageUrls}
                    PlaceholderComponent={newUserThree.PlaceholderComponent}
                    intersectDelay={400}
                  />
                  <figcaption>
                    <ImageCaption headline={problems!.problemThree.imageCaption[2].headline} body={problems!.problemThree.imageCaption[2].body} />
                  </figcaption>
                </figure>
                <figure className="nyt_project_page-problems-section_three-image image_four">
                  <ResponsiveImage
                    alt={newUserFour.alt}
                    dropShadow={newUserFour.dropShadow}
                    imageSize={newUserFour.imageSize}
                    imageUrls={newUserFour.imageUrls}
                    PlaceholderComponent={newUserFour.PlaceholderComponent}
                    intersectDelay={600}
                  />
                  <figcaption>
                    <ImageCaption headline={problems!.problemThree.imageCaption[3].headline} body={problems!.problemThree.imageCaption[3].body} />
                  </figcaption>
                </figure>
              </div>
            </section>
          </article>
        </div>
        <ProjectFooter />
      </motion.div>
    </>
  );
};;