import type { Meta, StoryObj } from "@storybook/react";
import ProjectTextBlock from "../components/ProjectTextBlock";
import '../style/globals.scss';

const meta: Meta<typeof ProjectTextBlock> = {
  title: 'Project/Text Block',
  component: ProjectTextBlock,
};

export default meta;
type Story = StoryObj<typeof ProjectTextBlock>;

export const RegularTextBlock: Story = {
  args: {
    title: 'Intuitive Feedback',
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
  }
};

export const RegularTextBlockCollapsible: Story = {
  args: {
    title: 'Intuitive Feedback',
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    collapsible: true

  }
};

export const BoldTextBlock: Story = {
  args: {
    title: 'Intuitive Feedback',
    titleIsBold: true,
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  }
};


export const BulletedList: Story = {
  args: {
    title: 'Intuitive Feedback',
    body: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    ]
  }
};

export const BulletedListNoTitle: Story = {
  args: {
    body: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    ]
  }
};

export const BulletedListWithUnderlines: Story = {
  args: {
    title: 'Intuitive Feedback',
    body: ['Lorem ipsum dolor sit amet: Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Ipsum dolor sit amet: sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Lorem ipsum dolor sit amet dolor sit amet: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    ]
  }
};
