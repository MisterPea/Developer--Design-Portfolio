import type { Meta, StoryObj } from "@storybook/react";
import CircuitPeriodGroup from "../components/CircuitPeriodGroup";
import '../style/globals.scss';

const meta: Meta<typeof CircuitPeriodGroup> = {
  title: 'Circuit/Period Group',
  component: CircuitPeriodGroup,
};

export default meta;
type Story = StoryObj<typeof CircuitPeriodGroup>;

export const Primary: Story = {}

