import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { userEvent, within, expect } from "@storybook/test";
import { Button } from "../components/ui/button";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
    variant: "default",
    size: "default",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole("button", { name: /Button/i });

    // Simulate a click
    await userEvent.click(button);

    // Assert the button is in the document and has correct text
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveTextContent("Button");
  },
};

export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole("button", { name: /Destructive/i });
    await userEvent.click(button);
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveTextContent("Destructive");
  },
};
