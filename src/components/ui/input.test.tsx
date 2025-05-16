import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "./input";

describe("Input", () => {
  it("renders input with correct type and placeholder", () => {
    render(<Input type="text" placeholder="Enter text" />);
    const input = screen.getByPlaceholderText(/enter text/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
  });

  it("accepts and displays user input", () => {
    render(<Input type="text" placeholder="Type here" />);
    const input = screen.getByPlaceholderText(/type here/i);
    fireEvent.change(input, { target: { value: "Hello" } });
    expect(input).toHaveValue("Hello");
  });

  it("is disabled when disabled prop is set", () => {
    render(<Input type="text" disabled placeholder="Disabled" />);
    const input = screen.getByPlaceholderText(/disabled/i);
    expect(input).toBeDisabled();
  });
});
