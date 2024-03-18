import type { Meta, StoryObj } from "@storybook/react";
import ColorSwatch from "../components/ColorSwatch";
import '../style/globals.scss';

const meta: Meta<typeof ColorSwatch> = {
  title: 'Project/Color Swatch',
  component: ColorSwatch,
};

export default meta;
type Story = StoryObj<typeof ColorSwatch>;

export const WithoutContrastRatio: Story = {
  args: {
    name: 'Rest Blue',
    color: '#32ade6'
  }
};

export const WithContrastRatio: Story = {
  args: {
    name: 'Rest Blue',
    color: '#32ade6',
    contrast: 5.25
  }
}

