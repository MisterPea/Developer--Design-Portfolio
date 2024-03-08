import type { Meta, StoryObj } from "@storybook/react";
import DivideLine from "../components/DivideLine";
import '../style/globals.scss';

const meta: Meta<typeof DivideLine> = {
  title: 'Project/DivideLine',
  component: DivideLine,
};

export default meta;
type Story = StoryObj<typeof DivideLine>;

export const Primary: Story = {}

