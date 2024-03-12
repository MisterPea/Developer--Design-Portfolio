import type { Meta, StoryObj } from "@storybook/react";
import LandingHeader from "../components/LandingHeader";
import '../style/globals.scss';

const meta: Meta<typeof LandingHeader> = {
  title: 'Landing/Header',
  component: LandingHeader,
};

export default meta;
type Story = StoryObj<typeof LandingHeader>;

export const Primary: Story = {}

