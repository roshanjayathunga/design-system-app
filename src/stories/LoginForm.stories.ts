import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";
import { LoginForm } from "../components/ui/LoginForm";

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
  title: "Example/LoginForm",
};
export default meta;
type Story = StoryObj<typeof LoginForm>;

export const EmptyForm: Story = {};

/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Simulate typing in the email and password fields
    await userEvent.type(canvas.getByTestId("email"), "email@provider.com");
    await userEvent.type(canvas.getByTestId("password"), "a-random-password");

    // Click the login button
    await userEvent.click(canvas.getByRole("button", { name: /login/i }));

    // Assert the success message is shown
    await expect(
      canvas.getByText(
        "Everything is perfect. Your account is ready and we should probably get you started!"
      )
    ).toBeInTheDocument();
  },
};
