import type { Meta, StoryObj } from "@storybook/react";
import NavHomeAbout from "../components/NavHomeAbout";
import '../style/globals.scss';

const meta: Meta<typeof NavHomeAbout> = {
  title: 'Project/Home About Navigation',
  component: NavHomeAbout,
};

export default meta;

const NavWrapper: React.FC<{ currentPage?: 'home' | 'about' }> = ({ currentPage }) => {
  return (
    <div className="main_wrap-about_wrap">
      <NavHomeAbout currentPage={currentPage} />
    </div>
  );
};

type Story = StoryObj<typeof NavHomeAbout>;

export const Primary: Story = {
  render: (args) => (
    <NavWrapper {...args} />
  ),
  args: {
    currentPage: 'home', // This can be 'home' or 'about'
  },
}
