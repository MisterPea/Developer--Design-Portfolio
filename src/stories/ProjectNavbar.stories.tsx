import type { Meta, StoryObj } from "@storybook/react";
import ProjectNavbar from "../components/ProjectNavbar";
import '../style/globals.scss';

const meta: Meta<typeof ProjectNavbar> = {
  title: 'Project/Navbar',
  component: ProjectNavbar,
};

export default meta;
const ScrollSimulator: React.FC = () => {
  return (
    <div style={{ minHeight: '150vh', padding: '1rem' }}> {/* Ensure this div is taller than 100vh */}
      <ProjectNavbar />
      <div style={{
        paddingTop: '20vh',
        fontFamily: 'var(--main-font)',
        fontSize: '1rem',
        fontWeight: 150,
        color: 'var(--dark-4)'

      }}>
        Scroll to see the navbar change form
      </div>
    </div>
  );
};

type Story = StoryObj<typeof ProjectNavbar>;

export const Primary: Story = {
  render: () => <ScrollSimulator />, // Use the ScrollSimulator component in your story
};

