import type { Meta, StoryObj } from "@storybook/react";
import BackToAllWork from "../components/BackToAllWork";
import '../style/globals.scss';

const meta: Meta<typeof BackToAllWork> = {
  title: 'Project/BackToAllWork',
  component: BackToAllWork,
};

export default meta;
type Story = StoryObj<typeof BackToAllWork>;

export const Primary: Story = {
  args: {
    isOpen: false
  }
}

