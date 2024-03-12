// Icon.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Icon } from '../components/Icons'; // Adjust the import path based on your file structure

export default {
  title: 'Landing/Icons',
  component: Icon.mail,
} as Meta;

// Template for rendering your icons. Can be reused for each icon by passing the specific icon as an arg
const Template: Story = (args) => <div>{args.icon()}</div>;

export const MailIcon = Template.bind({});
MailIcon.args = {
  icon: Icon.mail,
};

export const LinkedInIcon = Template.bind({});
LinkedInIcon.args = {
  icon: Icon.linkedIn,
};

export const GithubIcon = Template.bind({});
GithubIcon.args = {
  icon: Icon.github,
};

export const ArrowIcon = Template.bind({});
ArrowIcon.args = {
  icon: Icon.rightArrow,
};
