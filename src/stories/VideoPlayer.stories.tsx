import type { Meta, StoryObj } from "@storybook/react";
import VideoPlayer from "../components/VideoPlayer";
import '../style/globals.scss';

const meta: Meta<typeof VideoPlayer> = {
  title: 'Project/Video Player',
  component: VideoPlayer,
};

export default meta;

interface VideoWrapperProps {
  videoSource: string;
}

const VideoWrapper: React.FC<VideoWrapperProps> = ({ videoSource }) => {
  return (
    <div style={{ maxWidth: '500px' }}>
      <VideoPlayer videoSource={videoSource} />
    </div>
  );
};

type Story = StoryObj<typeof VideoPlayer> & {
  args: VideoWrapperProps;
};

export const Primary: Story = {
  render: () => <VideoWrapper videoSource="/video/times_pilot/nyt_raw_capture-large_final-resize.mp4" />,
  args: {
    videoSource: "/video/times_pilot/nyt_raw_capture-large_final-resize.mp4"
  }
};
