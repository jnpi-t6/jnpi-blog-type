import type { Meta, StoryObj } from "@storybook/react";
import Footer from "./Footer";

const meta: Meta<typeof Footer> = {
  title: "layout/Footer",
  component: Footer,
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Index: Story = {};
