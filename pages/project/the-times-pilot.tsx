import ProjectHeadline from "../../src/components/ProjectHeadline";
import siteContent from "../../src/app/siteContent.json";
import "../../src/style/globals.scss";
import ExportedImage from "next-image-export-optimizer";
import heroImage from "../../public/images/times_pilot/timesPilot2Up.png";
import ToolRoleTitle from "../../src/components/ToolRoleTitle";
import ChipGroup from "../../src/components/ChipGroup";
import ProjectTextBlock from "@/components/ProjectTextBlock";
import DivideLine from "@/components/DivideLine";
import ProjectLinks from "@/components/ProjectLinks";
import ProjectNavbar from "@/components/ProjectNavbar";
import { Icon } from "@/components/Icons";
import sectionsSelections from "../../public/images/times_pilot/sectionsSelections.png";
import problemOne from "../../public/images/times_pilot/problem_one.png";
import ColorSwatchGroup from "@/components/ColorSwatchGroup";
import { SvgIllustration } from "@/components/SvgIllustration";
import ImageCaption from "@/components/ImageCaption";
import nytLoginOne from "../../public/images/times_pilot/times_login_1.png";
import nytLoginTwo from "../../public/images/times_pilot/times_login_2.png";
import nytLoginThree from "../../public/images/times_pilot/times_login_3.png";
import nytLoginFour from "../../public/images/times_pilot/times_login_4.png";
import nytFlowchart from "../../public/images/times_pilot/nyt_flowchart.png";
import VideoPlayer from "@/components/VideoPlayer";
import TypeSpecimen from "@/components/TypeSpecimen";
import BackToAllWork from "@/components/BackToAllWork";
import ProjectFooter from "@/components/ProjectFooter";
import IntersectionWrapper from "@/components/IntersectionWrapper";

export default function TimesPilot() {
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
  return (
    <>
      <div className="project_page-wrapper">
        <BackToAllWork />
        <ProjectNavbar />
        <ProjectHeadline
          topHead={headlineOne}
          bottomHead={headlineTwo}
          accentColor="#E4C24D"
          subHead={description}
        />
        <figure className="project_page-hero">
          <ExportedImage src={heroImage} alt="Image of the desktop/tablet and mobile version of the times.pilot website." />
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
        <section className="project_page-problem">
          <ProjectTextBlock title={problemHeadline} body={`${problemBody}`} />
        </section>
        <section className="project_page-user_research">
          <ProjectTextBlock title={userResearchHeadline} body={userResearchBody} />
        </section>

        {/* Approach */}
        <article className="nyt_project_page-approach">
          <h4>{approachSectionTitle}</h4>

          <section className="nyt_project_page-approach-section_one">
            <ProjectTextBlock title={approaches![0].headline} body={approaches![0].body} collapsible />
            <VideoPlayer videoSource="/video/times_pilot/nyt_raw_capture-large_final-resize.mp4" />
          </section>

          <section className="nyt_project_page-approach-section_two">
            <ProjectTextBlock title={approaches![1].headline} body={approaches![1].body} collapsible />
            <figure className="project-figure svg">
              <Icon.contentAccessability />
            </figure>
          </section>

          <section className="nyt_project_page-approach-section_three">
            <ProjectTextBlock title={approaches![2].headline} body={approaches![2].body} collapsible />
            <figure className="project-figure svg">
              <ExportedImage src={sectionsSelections} alt="Section Selections panel illustrating how the user can select a specific group of topics to suite their taste." />
            </figure>
          </section>

          <section className="nyt_project_page-approach-section_four">
            <ProjectTextBlock title={approaches![3].headline} body={approaches![3].body} collapsible />
            <VideoPlayer videoSource="/video/times_pilot/nyt_allow_access.mp4" />
          </section>
        </article >

        <DivideLine className="full-width-line" />
        {/* Design Considerations */}
        <article className="nyt_project_page-design">
          <section className="nyt_project_page-design-considerations-wrapper">
            <ProjectTextBlock title={design?.designHeadline} body={[design!.designList[0], design!.designList[1]]} className="nyt_project_page-design-considerations_left" />
            <ProjectTextBlock title="" body={[design!.designList[2], design!.designList[3]]} className="nyt_project_page-design-considerations_right" />
          </section>
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
        </article>

        <article className="nyt_project_page-site_flow">
          <ProjectTextBlock title={projectPage.siteFlow!.headline} body={projectPage.siteFlow!.body} />
          <ExportedImage src={nytFlowchart} alt="High-level site flow of the Times.Pilot; showing different authentication states as it relates to user access." />
        </article>

        <DivideLine className="full-width-line" />
        {/* Problem */}
        <article className="nyt_project_page-problems">
          <ProjectTextBlock title={problems!.headline} body={[problems!.body[0], problems!.body[1]]} className="nyt_project_page-problems_left" />
          <ProjectTextBlock title="" body={[problems!.body[2]]} className="nyt_project_page-problems_right" />

          <section className="nyt_project_page-problems-section_one" >
            <ProjectTextBlock title={problems!.problemOne.headline} body={problems!.problemOne.body} smallTitle collapsible />
            <figure className="project_page-problem_section-problem --single_image">
              <ExportedImage src={problemOne} alt="Illustration of the different states of article bookmarking for mobile as opposed to bookmarking on desktop." />
            </figure>
          </section>

          <section className="nyt_project_page-problems-section_two">
            <ProjectTextBlock title={problems!.problemTwo.headline} body={problems!.problemTwo.body} smallTitle collapsible />
            <figure className="project_page-problem_section-problem --single_svg">
              <SvgIllustration.optimizedLayout />
            </figure>
          </section>

          <section className="nyt_project_page-problems-section_three">
            <div className="nyt_project_page-problems-section_three-group">
              <ProjectTextBlock title={problems!.problemThree.headline} body={problems!.problemThree.body} smallTitle={true} collapsible />
              <figure className="nyt_project_page-problems-section_three-image">
                <ExportedImage src={nytLoginOne} alt="Screen capture of initial screen for the times.pilot onboarding." />
                <figcaption>
                  <ImageCaption headline={problems!.problemThree.imageCaption[0].headline} body={problems!.problemThree.imageCaption[0].body} />
                </figcaption>
              </figure>
              <figure className="nyt_project_page-problems-section_three-image">
                <ExportedImage src={nytLoginTwo} alt="Screen capture of second screen for the times.pilot onboarding." />
                <figcaption>
                  <ImageCaption headline={problems!.problemThree.imageCaption[1].headline} body={problems!.problemThree.imageCaption[1].body} />
                </figcaption>
              </figure>
              <figure className="nyt_project_page-problems-section_three-image">
                <ExportedImage src={nytLoginThree} alt="Screen capture of third screen for the times.pilot onboarding." />
                <figcaption>
                  <ImageCaption headline={problems!.problemThree.imageCaption[2].headline} body={problems!.problemThree.imageCaption[2].body} />
                </figcaption>
              </figure>
              <figure className="nyt_project_page-problems-section_three-image">
                <ExportedImage src={nytLoginFour} alt="Screen capture of fourth screen for the times.pilot onboarding." />
                <figcaption>
                  <ImageCaption headline={problems!.problemThree.imageCaption[3].headline} body={problems!.problemThree.imageCaption[3].body} />
                </figcaption>
              </figure>
            </div>
          </section>
        </article>
      </div >
      <ProjectFooter />
    </>
  );
}