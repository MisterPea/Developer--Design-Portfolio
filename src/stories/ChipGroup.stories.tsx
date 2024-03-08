import type { Meta, StoryObj } from "@storybook/react";
import ChipGroup from "../components/ChipGroup";
import '../style/globals.scss';

const meta: Meta<typeof ChipGroup> = {
  title: 'Project/ChipGroup',
  component: ChipGroup,
};

export default meta;
type Story = StoryObj<typeof ChipGroup>;

export const Primary: Story = {
  args: {
    toolList:['Figma','TypeScript','React','Next.js','Storybook']
  }
}

