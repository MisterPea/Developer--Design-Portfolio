import ProjectHeadline from "../../src/components/ProjectHeadline";
import siteContent from "../../src/app/siteContent.json";
import "../../src/style/globals.scss";
import ExportedImage from "next-image-export-optimizer";
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
import Spacer from "@/components/Spacer";
import { ImageGroup, ImageSize } from "@/components/_types";
import ResponsiveImage from "@/components/ResponsiveImage";

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

  const heroDataUrl = "data:image/jpeg;base64,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";
  const imageUrls: ImageGroup = {
    small: {
      imageUrl_1x: "/optimizedImages/timesPilotSingle.c577402c-opt-771.WEBP",
      imageUrl_2x: "/optimizedImages/timesPilotSingle.c577402c-opt-1920.WEBP",
      imageUrl_3x: "/optimizedImages/timesPilotSingle.c577402c-opt-2332.WEBP"
    },
    medium: {
      imageUrl_1x: "/optimizedImages/timesPilotSingle.c577402c-opt-1166.WEBP",
      imageUrl_2x: "/optimizedImages/timesPilotSingle.c577402c-opt-2332.WEBP",
      imageUrl_3x: "/optimizedImages/timesPilotSingle.c577402c-opt-3498.WEBP"
    },
    large: {
      imageUrl_1x: "/optimizedImages/timesPilotSingle.c577402c-opt-1125.WEBP",
      imageUrl_2x: "/optimizedImages/timesPilotSingle.c577402c-opt-2332.WEBP",
      imageUrl_3x: "/optimizedImages/timesPilotSingle.c577402c-opt-3498.WEBP"
    }
  };
  const imageSize: ImageSize = {
    h: 2680,
    w: 3498
  };

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
          <ResponsiveImage
            imageUrls={imageUrls}
            imageSize={imageSize}
            alt="Image of the desktop/tablet and mobile version of the times.pilot website."
            blurDataUrl={heroDataUrl}
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
          <ProjectTextBlock title={problemHeadline} body={`${problemBody}`} />
        </section>
        <DivideLine className="mobile_divide_line post_problem" />
        <section className="project_page-user_research">
          <ProjectTextBlock title={userResearchHeadline} body={userResearchBody} />
        </section>

        {/* Approach */}
        <Spacer amount={1.5} className="tablet_spacer" />
        <article className="nyt_project_page-approach">
          <h4>{approachSectionTitle}</h4>
          <Spacer />
          <section className="nyt_project_page-approach-section_one">
            <ProjectTextBlock title={approaches![0].headline} body={approaches![0].body} collapsible />
            <VideoPlayer videoSource="/video/times_pilot/nyt_raw_capture-large_final-resize.mp4" />
          </section>
          <Spacer amount={6} />
          <section className="nyt_project_page-approach-section_two">
            <ProjectTextBlock title={approaches![1].headline} body={approaches![1].body} collapsible />
            <figure className="project-figure svg">
              <Icon.contentAccessability />
            </figure>
          </section>
          <Spacer amount={6} />
          <section className="nyt_project_page-approach-section_three">
            <ProjectTextBlock title={approaches![2].headline} body={approaches![2].body} collapsible />
            <figure className="project-figure svg">
              <ExportedImage src={sectionsSelections} alt="Section Selections panel illustrating how the user can select a specific group of topics to suite their taste." />
            </figure>
          </section>
          <Spacer amount={6} />
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
          <ExportedImage src={nytFlowchart} alt="High-level site flow of the Times.Pilot; showing different authentication states as it relates to user access." />
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
              <ExportedImage src={problemOne} alt="Illustration of the different states of article bookmarking for mobile as opposed to bookmarking on desktop." />
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
                <ExportedImage src={nytLoginOne} alt="Screen capture of initial screen for the times.pilot onboarding." />
                <figcaption>
                  <ImageCaption headline={problems!.problemThree.imageCaption[0].headline} body={problems!.problemThree.imageCaption[0].body} />
                </figcaption>
              </figure>
              <figure className="nyt_project_page-problems-section_three-image image_two">
                <ExportedImage src={nytLoginTwo} alt="Screen capture of second screen for the times.pilot onboarding." />
                <figcaption>
                  <ImageCaption headline={problems!.problemThree.imageCaption[1].headline} body={problems!.problemThree.imageCaption[1].body} />
                </figcaption>
              </figure>
              <figure className="nyt_project_page-problems-section_three-image image_three">
                <ExportedImage src={nytLoginThree} alt="Screen capture of third screen for the times.pilot onboarding." />
                <figcaption>
                  <ImageCaption headline={problems!.problemThree.imageCaption[2].headline} body={problems!.problemThree.imageCaption[2].body} />
                </figcaption>
              </figure>
              <figure className="nyt_project_page-problems-section_three-image image_four">
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
};;