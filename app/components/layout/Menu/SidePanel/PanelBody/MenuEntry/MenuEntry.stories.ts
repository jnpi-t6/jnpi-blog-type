import type { Meta, StoryObj } from "@storybook/react";
import MenuEntry from "./MenuEntry";

const meta: Meta<typeof MenuEntry> = {
  title: "layout/MenuEntry",
  component: MenuEntry,
};

export default meta;

type Story = StoryObj<typeof MenuEntry>;

export const Index: Story = {};
