import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";
import { test, expect } from "vitest";

test("counter starts at 0", () => {
  render(<Counter />);
  expect(screen.getByText(/Counter: 0/)).toBeInTheDocument();
});

test("counter increments", () => {
  render(<Counter />);

  const plusBtn = screen.getByText("+");
  fireEvent.click(plusBtn);

  expect(screen.getByText(/Counter: 1/)).toBeInTheDocument();
});

test("counter decrements", () => {
  render(<Counter />);

  const minusBtn = screen.getByText("-");
  fireEvent.click(minusBtn);

  expect(screen.getByText(/Counter: -1/)).toBeInTheDocument();
});

test("counter resets", () => {
  render(<Counter />);

  fireEvent.click(screen.getByText("+"));
  fireEvent.click(screen.getByText("Reset"));

  expect(screen.getByText(/Counter: 0/)).toBeInTheDocument();
});
