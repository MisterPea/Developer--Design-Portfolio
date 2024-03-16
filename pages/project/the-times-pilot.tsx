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
import VideoPlayer from "@/components/VideoPlayer";
import TypeSpecimen from "@/components/TypeSpecimen";
import BackToAllWork from "@/components/BackToAllWork";
import ProjectFooter from "@/components/ProjectFooter";

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
    links
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
        <section className="project_page-top_info-wrapper">
          <div className="project_page-top_info-tools">
            <ToolRoleTitle label="Tools:" />
            <ChipGroup toolList={tools} />
          </div>
          <ToolRoleTitle label="Role: " content={role} className="project_page-top_info-role" />
          <ProjectLinks links={links} />
          <ProjectTextBlock title={summaryHeadline} body={summaryBody} titleIsBold />
        </section>
        <DivideLine />
        <ProjectTextBlock title={problemHeadline} body={`${problemBody}`} />
        <DivideLine />

        {/* Approach */}
        <article className="project_page-approach_section">
          <h4>{approachSectionTitle}</h4>
          <div className="project_page-approach_section-wrapper">

            <section className="project_page-approach_section-outer_element">
              <ProjectTextBlock title={approaches![0].headline} body={approaches![0].body} collapsible />
              <VideoPlayer videoSource="/video/times_pilot/nyt_raw_capture-large_final-resize.mp4" />
            </section>

            <section className="project_page-approach_section-outer_element">
              <ProjectTextBlock title={approaches![1].headline} body={approaches![1].body} collapsible />
              <div >
                <figure className="project-figure svg">
                  <Icon.contentAccessability />
                </figure>
              </div>
            </section>

            <section className="project_page-approach_section-outer_element">
              <ProjectTextBlock title={approaches![2].headline} body={approaches![2].body} collapsible />
              <figure className="project-figure svg">
                <ExportedImage src={sectionsSelections} alt="Section Selections panel illustrating how the user can select a specific group of topics to suite their taste." />
              </figure>
            </section>

            <section className="project_page-approach_section-outer_element">
              <ProjectTextBlock title={approaches![3].headline} body={approaches![3].body} collapsible />
              <VideoPlayer videoSource="/video/times_pilot/nyt_allow_access.mp4" />
            </section>
          </div>
        </article>

        {/* Design Considerations */}
        <DivideLine />
        <article className="project_page-design_section">
          <section className="project_page-design_section-design">
            <ProjectTextBlock title={design!.designHeadline} body={design!.designList} />
          </section>
          <section className="project_page-design_section-typography">
            <h5 className="project_page-design_section-small_headline">{design!.typeHeadline}</h5>
            <div className="project_page-design_section-type_specimen_wrapper">
              <TypeSpecimen fontName="Museo Slab Rounded - 500" className="museo_slab" />
              <TypeSpecimen fontName="Forma DJR Micro - 400" className="djr-400" />
              <TypeSpecimen fontName="Forma DJR Micro - 900" className="djr-900" />
            </div>
          </section>
          <section className="project_page-design_section-color">
            <h5 className="project_page-design_section-small_headline">{design!.colorHeadline}</h5>
            <ColorSwatchGroup swatches={design!.colorList} />
          </section>
        </article>
        <DivideLine />

        {/* Problem */}
        <article className="project_page-problem_section">

          <ProjectTextBlock title={problems!.headline} body={problems!.body} />
          <div className="project_page-problem_section-problems_wrapper">

            {/* Problem One */}
            <div>
              <ProjectTextBlock title={problems!.problemOne.headline} body={problems!.problemOne.body} titleIsBold collapsible />
              <figure className="project_page-problem_section-problem --single_image">
                <ExportedImage src={problemOne} alt="Illustration of the different states of article bookmarking for mobile as opposed to bookmarking on desktop." />
              </figure>
            </div>

            {/* Problem Two */}
            <div>
              <ProjectTextBlock title={problems!.problemTwo.headline} body={problems!.problemTwo.body} titleIsBold collapsible />
              <figure className="project_page-problem_section-problem --single_svg">
                <SvgIllustration.optimizedLayout />
              </figure>
            </div>

            {/* Problem Three */}
            <div>
              <ProjectTextBlock title={problems!.problemThree.headline} body={problems!.problemThree.body} titleIsBold collapsible />
              <div className="project_page-problem_section-problem_three-group">
                <figure className="project_page-problem_section-problem_three-image">
                  <ExportedImage src={nytLoginOne} alt="Screen capture of initial screen for the times.pilot onboarding." />
                  <figcaption>
                    <ImageCaption headline={problems!.problemThree.imageCaption[0].headline} body={problems!.problemThree.imageCaption[0].body} />
                  </figcaption>
                </figure>
                <figure className="project_page-problem_section-problem_three-image">
                  <ExportedImage src={nytLoginTwo} alt="Screen capture of second screen for the times.pilot onboarding." />
                  <figcaption>
                    <ImageCaption headline={problems!.problemThree.imageCaption[1].headline} body={problems!.problemThree.imageCaption[1].body} />
                  </figcaption>
                </figure>
                <figure className="project_page-problem_section-problem_three-image">
                  <ExportedImage src={nytLoginThree} alt="Screen capture of third screen for the times.pilot onboarding." />
                  <figcaption>
                    <ImageCaption headline={problems!.problemThree.imageCaption[2].headline} body={problems!.problemThree.imageCaption[2].body} />
                  </figcaption>
                </figure>
                <figure className="project_page-problem_section-problem_three-image">
                  <ExportedImage src={nytLoginFour} alt="Screen capture of fourth screen for the times.pilot onboarding." />
                  <figcaption>
                    <ImageCaption headline={problems!.problemThree.imageCaption[3].headline} body={problems!.problemThree.imageCaption[3].body} />
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </article>
        
      </div >
      <ProjectFooter />
    </>
  );
}