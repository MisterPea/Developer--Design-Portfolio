import type { Meta, StoryObj } from "@storybook/react";
import ProjectLinks from "../components/ProjectLinks";
import '../style/globals.scss';

const meta: Meta<typeof ProjectLinks> = {
  title: 'Project/Project Links',
  component: ProjectLinks,
};

export default meta;
type Story = StoryObj<typeof ProjectLinks>;

export const Primary: Story = {
  args: {
    links: [
      {
        "label": "View the Components in Storybook.js",
        "url": "https://65d287f2e2f0d9b863b88cfa-tvijbshvmk.chromatic.com/?path=/story/article-article-group--primary"
      },
      {
        "label": "Browse the Github Repo",
        "url": "https://github.com/MisterPea/times-pilot"
      },
      {
        "label": "Visit the Website",
        "url": "https://times-pilot.vercel.app/home"
      }
    ]
  }
}

