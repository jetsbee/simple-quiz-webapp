import type { Meta, StoryObj } from "@storybook/react";

const PEASE_CHANGE_ME = () => <p>Hello, storybook!</p>;

const meta = {
  title: "PEASE_CHANGE_ME",
  component: PEASE_CHANGE_ME,
  tags: ["autodocs"],
} satisfies Meta<typeof PEASE_CHANGE_ME>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
