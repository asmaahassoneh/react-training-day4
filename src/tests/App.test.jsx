import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import { test, expect } from "vitest";

test("app renders counter and todo list", () => {
  render(<App />);

  expect(screen.getByText("Counter: 0")).toBeInTheDocument();
  expect(screen.getByText("To-Do List")).toBeInTheDocument();
});

test("add todo from app", () => {
  render(<App />);

  const input = screen.getByPlaceholderText("New task");
  fireEvent.change(input, { target: { value: "Full integration test" } });
  fireEvent.click(screen.getByText("Add"));

  expect(screen.getByText("Full integration test")).toBeInTheDocument();
});
