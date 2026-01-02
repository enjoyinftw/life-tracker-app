import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";

import { Counter } from "@/components/CounterExample/Counter";

const meta = {
  title: "Component/Counter",
  component: Counter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Counter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas, userEvent }) => {
    const btn = canvas.getByRole("button", { name: /increment/i });
    const counter = canvas.getByRole("heading", { name: /0/i });

    await expect(btn).toBeInTheDocument();
    await expect(counter).toBeInTheDocument();
    await expect(counter).toHaveTextContent("0");

    await userEvent.click(btn);
    await expect(counter).toHaveTextContent("1");
  },
};
