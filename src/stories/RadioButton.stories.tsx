import type { Meta, StoryObj } from "@storybook/react";
import RadioButton from "../components/RadioButton";
import '../style/globals.scss';

const meta: Meta<typeof RadioButton> = {
  title: 'Project/Radio Button',
  component: RadioButton,
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Primary: Story = {
  args: {
    label:'TypeScript',
    checked:false
  }
}

