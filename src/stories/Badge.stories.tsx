import { userEvent, within, expect } from "@storybook/test";
import { Badge } from "../components/ui/badge";

export default {
  title: "Components/Badge",
  component: Badge,
};

export const Default = () => <Badge>Default Badge</Badge>;

export const Variants = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/Default/i)).toBeInTheDocument();
    await expect(canvas.getByText(/Secondary/i)).toBeInTheDocument();
    await expect(canvas.getByText(/Destructive/i)).toBeInTheDocument();
    await expect(canvas.getByText(/Outline/i)).toBeInTheDocument();
  },
};
