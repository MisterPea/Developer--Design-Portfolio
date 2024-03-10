import type { Meta, StoryObj } from "@storybook/react";
import ImageCaption from "../components/ImageCaption";
import '../style/globals.scss';

const meta: Meta<typeof ImageCaption> = {
  title: 'Project/ImageCaption',
  component: ImageCaption,
};

export default meta;
type Story = StoryObj<typeof ImageCaption>;

export const Primary: Story = {
  args: {
    headline: 'Add further personalization with an avatar.',
    body: 'To allow for a personal experience we can accept an avatar.'
  }
}

