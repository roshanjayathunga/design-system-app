import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "./alert-dialog";

describe("AlertDialog", () => {
  it("renders trigger button", () => {
    render(
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button>Open Alert</button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Test Title</AlertDialogTitle>
            <AlertDialogDescription>Test Description</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
    expect(
      screen.getByRole("button", { name: /open alert/i })
    ).toBeInTheDocument();
  });

  it("shows dialog content when trigger is clicked", () => {
    render(
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button>Open Alert</button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Test Title</AlertDialogTitle>
            <AlertDialogDescription>Test Description</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
    fireEvent.click(screen.getByRole("button", { name: /open alert/i }));
    expect(screen.getByText(/test title/i)).toBeInTheDocument();
    expect(screen.getByText(/test description/i)).toBeInTheDocument();
  });
});
