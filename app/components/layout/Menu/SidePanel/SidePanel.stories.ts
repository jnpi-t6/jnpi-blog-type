import type { Meta, StoryObj } from "@storybook/react";
import SidePanel from "./SidePanel";

const meta: Meta<typeof SidePanel> = {
  title: "layout/SidePanel",
  component: SidePanel,
};

export default meta;

type Story = StoryObj<typeof SidePanel>;

export const Index: Story = {};
