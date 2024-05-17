import type { Meta, StoryObj } from "@storybook/react";
import ControlledCheckbox from "../components/ControlledCheckbox";
import '../style/globals.scss';

const meta: Meta<typeof ControlledCheckbox> = {
  title: 'Project/Controlled Checkbox',
  component: ControlledCheckbox,
};

export default meta;
type Story = StoryObj<typeof ControlledCheckbox>;

export const Primary: Story = {
  args: {
    label:'TypeScript',
    checked: false,
  }
}

