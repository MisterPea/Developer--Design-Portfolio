import type { Meta, StoryObj } from "@storybook/react";
import MobileCircuitDiagram from "../components/MobileCircuitDiagram";
import '../style/globals.scss';

const meta: Meta<typeof MobileCircuitDiagram> = {
  title: 'Circuit/Mobile Diagram',
  component: MobileCircuitDiagram,
};

export default meta;
type Story = StoryObj<typeof MobileCircuitDiagram>;

export const First: Story = {
  args: {
    variant: 'one'
  }
}
export const Second: Story = {
  args: {
    variant: 'two'
  }
}
export const Third: Story = {
  args: {
    variant: 'three'
  }
}
export const Fourth: Story = {
  args: {
    variant: 'four'
  }
}


