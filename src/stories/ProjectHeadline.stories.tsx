import type { Meta, StoryObj } from "@storybook/react";
import ProjectHeadline from "../components/ProjectHeadline";
import '../style/globals.scss';

const meta: Meta<typeof ProjectHeadline> = {
  title: 'Project/Headline',
  component: ProjectHeadline,
};

export default meta;
type Story = StoryObj<typeof ProjectHeadline>;

export const Primary: Story = {
  args: {
    topHead: 'the.times.pilot',
    bottomHead: 'Tailoring Your NY Times Digest',
    accentColor: '#E4C24D',
    subHead: 'Seamlessly curate and receive the stories that matter to you with a custom news aggregator and subscriber-focused daily email service.'
  }
}

