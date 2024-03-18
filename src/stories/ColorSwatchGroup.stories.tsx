import type { Meta, StoryObj } from "@storybook/react";
import ColorSwatchGroup from "../components/ColorSwatchGroup";
import '../style/globals.scss';
import { Color } from "@/components/_types";

const meta: Meta<typeof ColorSwatchGroup> = {
  title: 'Project/Color Swatch Group',
  component: ColorSwatchGroup,
};

export default meta;
type Story = StoryObj<typeof ColorSwatchGroup>;

const colors = [
  {
    name: 'Warm Black',
    color: '#2d2c2c' as Color
  },
  {
    name: 'Text Light',
    color: '#6f766f' as Color
  },
  {
    name: 'Warm White',
    color: '#fbf8f3' as Color
  },
  {
    name: 'Rest Blue',
    color: '#32ade6' as Color
  },
  {
    name: 'Go Green',
    color: '#34c759' as Color
  },
  {
    name: 'Error Red',
    color: '#ff3b30' as Color
  },
  {
    name: 'Warn Orange',
    color: '#ff9500' as Color
  },

];

export const Primary: Story = {
  args: {
    swatches: colors
  }
}

