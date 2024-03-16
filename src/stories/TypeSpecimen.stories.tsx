import type { Meta, StoryObj } from "@storybook/react";
import TypeSpecimen from "../components/TypeSpecimen";
import '../style/globals.scss';

const meta: Meta<typeof TypeSpecimen> = {
  title: 'Project/Type Specimen',
  component: TypeSpecimen,
};

export default meta;
type Story = StoryObj<typeof TypeSpecimen>;

export const MuseoSlab: Story = {
  args: {
    fontName: 'Museo Slab Rounded - 500',
    className: 'museo_slab'
  }
};

export const FormaDJR900: Story = {
  args: {
    fontName: "Forma DJR Micro - 900",
    className: "djr-900"
  }
};

export const FormaDJR400: Story = {
  args: {
    fontName: "Forma DJR Micro - 400",
    className: "djr-400"
  }
};