import { describe, expect, test } from "vitest";
import { screen, render, fireEvent } from "@testing-library/react";
import Button from "../Components/Button";

describe("Button", async () => {
  test("should call onClick when clicked", async () => {
    render(<Button />);

    const button = screen.getByText("Click me");

    expect(screen.getByText("Please click")).toBeInTheDocument();

    await fireEvent.click(button);

    expect(screen.queryByText("Please click above")).not.toBeInTheDocument();

    expect(screen.getByText("Clicked = 1")).toBeInTheDocument();
  });
});
