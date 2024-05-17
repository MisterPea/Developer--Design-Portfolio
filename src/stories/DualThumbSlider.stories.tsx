import type { Meta, StoryObj } from "@storybook/react";
import DualThumbSlider from "../components/DualThumbSlider";
import '../style/globals.scss';

const meta: Meta<typeof DualThumbSlider> = {
  title: 'Project/Dual Thumb Slider',
  component: DualThumbSlider,
};

export default meta;
type Story = StoryObj<typeof DualThumbSlider>;

export const Primary: Story = {}

