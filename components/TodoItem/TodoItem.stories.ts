import type { Meta, StoryObj } from "@storybook/react";

import { TodoItem } from "./TodoItem";

const meta: Meta<typeof TodoItem> = {
  title: "TodoItem",
  component: TodoItem,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TodoItem>;

export const Unchecked: Story = {
  args: {
    id: 123,
    todo: "Buy apples",
    completed: false,
  },
};

export const Checked: Story = {
  args: {
    id: 456,
    todo: "Call Mom",
    completed: true,
  },
};
