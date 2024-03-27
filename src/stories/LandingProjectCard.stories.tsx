
import type { Meta, StoryObj } from "@storybook/react";
import LandingProjectCard from "../components/LandingProjectCard";
import '../style/globals.scss';
import { ResponsiveImageProps } from "@/components/_types";

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
      imageUrl_1x: "/optimizedImages/timesPilotSingle.c577402c-opt-771.WEBP",
      imageUrl_2x: "/optimizedImages/timesPilotSingle.c577402c-opt-1920.WEBP",
      imageUrl_3x: "/optimizedImages/timesPilotSingle.c577402c-opt-2332.WEBP",
    },
    medium: {
      imageUrl_1x: "/optimizedImages/timesPilotSingle.c577402c-opt-514.WEBP",
      imageUrl_2x: "/optimizedImages/timesPilotSingle.c577402c-opt-1125.WEBP",
      imageUrl_3x: "/optimizedImages/timesPilotSingle.c577402c-opt-1920.WEBP",
    },
    large: {
      imageUrl_1x: "/optimizedImages/timesPilotSingle.c577402c-opt-771.WEBP",
      imageUrl_2x: "/optimizedImages/timesPilotSingle.c577402c-opt-1920.WEBP",
      imageUrl_3x: "/optimizedImages/timesPilotSingle.c577402c-opt-2332.WEBP",
    }
  },
  blurDataUrl: "data:image/jpeg;base64,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"
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

