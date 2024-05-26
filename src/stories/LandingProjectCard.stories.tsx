
import type { Meta, StoryObj } from "@storybook/react";
import LandingProjectCard from "../components/LandingProjectCard";
import '../style/globals.scss';
import { ResponsiveImageProps } from "@/components/_types";
import Placeholder from "../components/SvgPlaceHolder";

const meta: Meta<typeof LandingProjectCard> = {
  title: 'Landing/Project Card',
  component: LandingProjectCard,
};

const image: ResponsiveImageProps = {
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
  PlaceholderComponent: Placeholder.TimesPilotOneUp
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

