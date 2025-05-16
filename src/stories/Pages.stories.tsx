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

export const Home = () => (
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
);

export const About = () => (
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
);

export const Contact = () => (
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
            <textarea name="message" style={{ marginLeft: 8, width: "100%" }} />
          </label>
        </div>
        <CardFooter>
          <Button type="submit">Send</Button>
        </CardFooter>
      </form>
    </CardContent>
  </Card>
);
