import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "./card";

describe("Card", () => {
  it("renders Card with header, content, and footer", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Test Card</CardTitle>
          <CardAction>
            <button>Action</button>
          </CardAction>
          <CardDescription>Description here</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card content goes here.</p>
        </CardContent>
        <CardFooter>
          <button>Footer Action</button>
        </CardFooter>
      </Card>
    );
    expect(screen.getByText(/Test Card/i)).toBeInTheDocument();
    expect(screen.getByText(/Description here/i)).toBeInTheDocument();
    expect(screen.getByText(/Card content goes here/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /^Action$/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /^Footer Action$/i })
    ).toBeInTheDocument();
  });
});
