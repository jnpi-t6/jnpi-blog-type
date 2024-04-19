import type { Meta, StoryObj } from "@storybook/react";
import BlogPosts from "./BlogPosts";

const meta: Meta<typeof BlogPosts> = {
  title: "element/BlogPosts",
  component: BlogPosts,
};

export default meta;

type Story = StoryObj<typeof BlogPosts>;

export const Index: Story = {};
