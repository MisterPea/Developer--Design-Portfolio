import type { Meta, StoryObj } from "@storybook/react";
import LandingProjectHeadline from "../components/LandingProjectHeadline";
import '../style/globals.scss';

const meta: Meta<typeof LandingProjectHeadline> = {
  title: 'Landing/Project Headline',
  component: LandingProjectHeadline,
};

export default meta;
type Story = StoryObj<typeof LandingProjectHeadline>;

export const Primary: Story = {
  args: {
    headline:"the.times.pilot: Tailoring Your NY Times Digest",
    desc: "Seamlessly curate and receive the stories that matter to you with a custom news aggregator and subscriber-focused daily email service.",
    tools:["Figma","TypeScript","React","Next.js","Storybook","SCSS","NoSQL","Twilio Sendgrid"],
  }
}

