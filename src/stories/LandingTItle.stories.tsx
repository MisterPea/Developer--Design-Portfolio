import type { Meta, StoryObj } from "@storybook/react";
import LandingTitle from "../components/LandingTitle";
import '../style/globals.scss';

const meta: Meta<typeof LandingTitle> = {
  title: 'Landing/Title',
  component: LandingTitle,
};

export default meta;
type Story = StoryObj<typeof LandingTitle>;

export const Primary: Story = {}

