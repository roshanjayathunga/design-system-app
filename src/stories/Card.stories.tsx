import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "../components/ui/card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardAction>
          <button>Action</button>
        </CardAction>
        <CardDescription>This is a description of the card.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          This is the main content of the card. You can put any React node here.
        </p>
      </CardContent>
      <CardFooter>
        <button>Footer Action</button>
      </CardFooter>
    </Card>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/Card Title/i)).toBeInTheDocument();
    await expect(
      canvas.getByText(/This is a description of the card./i)
    ).toBeInTheDocument();

    const buttons = canvas.getAllByRole("button");
    await userEvent.click(buttons[0]);
    await userEvent.click(buttons[1]);
  },
};
