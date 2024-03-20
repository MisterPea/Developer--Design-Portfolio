import type { Meta, StoryObj } from "@storybook/react";
import BackToAllWork from "../components/BackToAllWork";
import '../style/globals.scss';

const meta: Meta<typeof BackToAllWork> = {
  title: 'Project/BackToAllWork',
  component: BackToAllWork,
};

export default meta;
const ScrollSimulator: React.FC = () => {
  return (
    <div style={{ minHeight: '150vh', padding: '1rem' }}> {/* Ensure this div is taller than 100vh */}
      <BackToAllWork />
      <div
        className="project_page-wrapper"
        style={{
          paddingBottom: '120vh',
          fontFamily: 'var(--main-font)',
          fontSize: '1rem',
          fontWeight: 150,
          color: 'var(--dark-4)'

        }}>
        Scroll to see the button deploy
      </div>
    </div>
  );
};

type Story = StoryObj<typeof BackToAllWork>;

export const Primary: Story = {
  render: () => <ScrollSimulator />
}

