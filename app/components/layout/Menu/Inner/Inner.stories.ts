import type { Meta, StoryObj } from "@storybook/react";
import Inner from "./Inner";

const meta: Meta<typeof Inner> = {
  title: "layout/Inner",
  component: Inner,
};

export default meta;

type Story = StoryObj<typeof Inner>;

export const Index: Story = {};
