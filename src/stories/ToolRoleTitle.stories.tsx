import type { Meta, StoryObj } from "@storybook/react";
import ProjectHeadline from "../components/ToolRoleTitle";
import '../style/globals.scss';

const meta: Meta<typeof ProjectHeadline> = {
  title: 'Project/Tool Role Label',
  component: ProjectHeadline,
};

export default meta;
type Story = StoryObj<typeof ProjectHeadline>;

export const Tools: Story = {
  args: {
    label: 'Tools:'
  }
};

export const Role: Story = {
  args: {
    label: 'Role:',
    content: ' Concept, Design, Development'
  }
};
