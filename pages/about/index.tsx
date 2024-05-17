import "../../src/style/globals.scss";
import ProjectNavbar from "@/components/ProjectNavbar";
import { motion } from "framer-motion";
import { projectVariant } from '@/components/_helpers/animationVariants';
import { useEffect } from "react";
import BackToAllWork from "@/components/BackToAllWork";
import AboutImageCanvas from "../../src/components/AboutImageCanvas";
import { SvgIllustration } from "@/components/SvgIllustration";
import ProjectFooter from "@/components/ProjectFooter";


export default function CircuitApp() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <BackToAllWork />
      <motion.div
        variants={projectVariant}
        initial='hidden'
        animate='show'
        exit='exit'>
        <div className="about_page-page_wrapper">
          <ProjectNavbar currentPage="about" />
          <section className="about_page-image_wrapper">
            <AboutImageCanvas darkMode={false} color={'#595959'} />
            <div className="up_arrow">
              <SvgIllustration.upArrow />
            </div>
            <h3 className="first_heading">That&apos;s me!</h3>
          </section>
          <p className="about_page-body_text">Serial creator; restless learner.<br /> Making things with code, pixels, and paper.<br /> Lauded for my development, design and homemade salted caramel and strawberry ice creams.</p>
          <h3 className="last_heading">Say hi!</h3>
          <ProjectFooter isAboutPage />
        </div >
      </motion.div >
    </>
  );
};;