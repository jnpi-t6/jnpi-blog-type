import type { Meta, StoryObj } from "@storybook/react";
import PanelBody from "./PanelBody";

const meta: Meta<typeof PanelBody> = {
  title: "layout/PanelBody",
  component: PanelBody,
};

export default meta;

type Story = StoryObj<typeof PanelBody>;

export const Index: Story = {};
