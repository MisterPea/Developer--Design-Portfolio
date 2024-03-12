
import type { Meta, StoryObj } from "@storybook/react";
import LandingProjectCard from "../components/LandingProjectCard";
import '../style/globals.scss';
import image from '../../public/images/circuit/MainStaticFrontPage.png';

const meta: Meta<typeof LandingProjectCard> = {
  title: 'Landing/Project Card',
  component: LandingProjectCard,
};

export default meta;
type Story = StoryObj<typeof LandingProjectCard>;

export const Primary: Story = {
  args: {
    headline: "the.times.pilot: Tailoring Your NY Times Digest",
    desc: "Seamlessly curate and receive the stories that matter to you with a custom news aggregator and subscriber-focused daily email service.",
    tools: ["Figma", "TypeScript", "React", "Next.js", "Storybook", "SCSS", "NoSQL", "Twilio Sendgrid"],
    image: image
  }
}

