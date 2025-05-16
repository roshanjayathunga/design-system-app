import { userEvent, within, expect } from "@storybook/test";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

export default {
  title: "Pages/SamplePages",
  parameters: { layout: "centered" },
};

export const Home = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to the Design System App</CardTitle>
        <CardDescription>
          This is a sample home page using your custom UI components.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Explore the reusable components below. You can use these components to
          build consistent and beautiful UIs.
        </p>
        <div style={{ margin: "1rem 0" }}>
          <Badge variant="default">Default</Badge>{" "}
          <Badge variant="secondary">Secondary</Badge>{" "}
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="primary">Get Started</Button>
      </CardFooter>
    </Card>
  ),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByText(/Welcome to the Design System App/i)
    ).toBeInTheDocument();
    await expect(
      canvas.getByRole("button", { name: /Get Started/i })
    ).toBeInTheDocument();
    await expect(canvas.getByText(/Default/i)).toBeInTheDocument();
    await expect(canvas.getByText(/Secondary/i)).toBeInTheDocument();
    await expect(canvas.getByText(/Destructive/i)).toBeInTheDocument();
  },
};

export const About = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>About This Project</CardTitle>
        <CardDescription>
          Learn more about the design system and its goals.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          This project demonstrates a modular approach to building React UI
          components with automated testing and continuous integration. The goal
          is to provide a robust, maintainable, and visually consistent set of
          building blocks for modern web applications.
        </p>
      </CardContent>
    </Card>
  ),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/About This Project/i)).toBeInTheDocument();
    await expect(
      canvas.getByText(/Learn more about the design system/i)
    ).toBeInTheDocument();
    await expect(canvas.getByText(/modular approach/i)).toBeInTheDocument();
  },
};

export const Contact = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div style={{ marginBottom: "1rem" }}>
            <label>
              Name:
              <input type="text" name="name" style={{ marginLeft: 8 }} />
            </label>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label>
              Email:
              <input type="email" name="email" style={{ marginLeft: 8 }} />
            </label>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label>
              Message:
              <textarea
                name="message"
                style={{ marginLeft: 8, width: "100%" }}
              />
            </label>
          </div>
          <CardFooter>
            <Button type="submit">Send</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  ),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/Contact Us/i)).toBeInTheDocument();
    await expect(
      canvas.getByRole("button", { name: /Send/i })
    ).toBeInTheDocument();
    await expect(canvas.getByLabelText(/Name:/i)).toBeInTheDocument();
    await expect(canvas.getByLabelText(/Email:/i)).toBeInTheDocument();
    await expect(canvas.getByLabelText(/Message:/i)).toBeInTheDocument();
  },
};
