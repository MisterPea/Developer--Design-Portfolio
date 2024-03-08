import type { Meta, StoryObj } from "@storybook/react";
import Chip from "../components/Chip";
import '../style/globals.scss';

const meta: Meta<typeof Chip> = {
  title: 'Project/Chip',
  component: Chip,
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Primary: Story = {
  args: {
    label:'TypeScript'
  }
}

