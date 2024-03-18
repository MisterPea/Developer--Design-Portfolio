import type { Meta, StoryObj } from "@storybook/react";
import LandingTag from "../components/LandingTag";
import '../style/globals.scss';

const meta: Meta<typeof LandingTag> = {
  title: 'Landing/Tag',
  component: LandingTag,
};

export default meta;
type Story = StoryObj<typeof LandingTag>;

export const Primary: Story = {}

