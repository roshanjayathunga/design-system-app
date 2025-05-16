import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./accordion";

describe("Accordion", () => {
  it("renders Accordion with items and triggers", () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
    expect(
      screen.getByRole("button", { name: /section 1/i })
    ).toBeInTheDocument();
  });

  it("shows content when trigger is clicked", () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
    const trigger = screen.getByRole("button", { name: /section 1/i });
    fireEvent.click(trigger);
    expect(screen.getByText(/content 1/i)).toBeInTheDocument();
  });

  it("hides content when trigger is clicked twice (collapsible)", () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
    const trigger = screen.getByRole("button", { name: /section 1/i });
    fireEvent.click(trigger); // open
    fireEvent.click(trigger); // close
    expect(screen.queryByText(/content 1/i)).not.toBeInTheDocument();
  });
});
