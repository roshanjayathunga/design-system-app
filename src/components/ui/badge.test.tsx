import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Badge } from "./badge";

describe("Badge", () => {
  it("renders with correct text", () => {
    render(<Badge>Test Badge</Badge>);
    expect(screen.getByText(/test badge/i)).toBeInTheDocument();
  });

  it("applies the default variant styles", () => {
    render(<Badge>Default</Badge>);
    const badge = screen.getByText(/default/i);
    expect(badge.className).toMatch(/bg-neutral-900/);
  });

  it("applies the secondary variant styles", () => {
    render(<Badge variant="secondary">Secondary</Badge>);
    const badge = screen.getByText(/secondary/i);
    expect(badge.className).toMatch(/bg-neutral-100/);
  });

  it("applies the destructive variant styles", () => {
    render(<Badge variant="destructive">Destructive</Badge>);
    const badge = screen.getByText(/destructive/i);
    expect(badge.className).toMatch(/bg-red-500/);
  });

  it("applies the outline variant styles", () => {
    render(<Badge variant="outline">Outline</Badge>);
    const badge = screen.getByText(/outline/i);
    expect(badge.className).toMatch(/text-neutral-950/);
  });
});
