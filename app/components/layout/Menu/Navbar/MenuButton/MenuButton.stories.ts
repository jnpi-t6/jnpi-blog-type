import type { Meta, StoryObj } from "@storybook/react";
import MenuButton from "./MenuButton";

const meta: Meta<typeof MenuButton> = {
  title: "layout/MenuButton",
  component: MenuButton,
};

export default meta;

type Story = StoryObj<typeof MenuButton>;

export const Index: Story = {};
