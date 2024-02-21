import { describe, expect, test, vi } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from "../Components/ComplexButton";
import axios from "axios";
// complex button test

vi.mock("axios");

describe("Button", () => {
  test("should call onClick and fetch data when clicked", async () => {
    render(<Button />);
    const button = screen.getByText("Click me");
    fireEvent.click(button);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toBeCalledWith(
      "https://pokeapi.co/api/v2/pokemon/geodude"
    );
  });
});
