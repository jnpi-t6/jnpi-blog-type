import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "./Navbar";

const meta: Meta<typeof Navbar> = {
  title: "layout/Navbar",
  component: Navbar,
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Index: Story = {};
