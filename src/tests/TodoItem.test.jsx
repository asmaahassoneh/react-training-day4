import { render, screen, fireEvent } from "@testing-library/react";
import TodoItem from "../components/TodoItem";
import { test, expect, vi } from "vitest";

test("renders todo text", () => {
  const todo = { id: 1, text: "Study React", completed: false };

  render(<TodoItem todo={todo} onDelete={() => {}} onToggle={() => {}} />);

  expect(screen.getByText("Study React")).toBeInTheDocument();
});

test("calls delete function", () => {
  const todo = { id: 1, text: "Delete test", completed: false };
  const mockDelete = vi.fn();

  render(<TodoItem todo={todo} onDelete={mockDelete} onToggle={() => {}} />);

  fireEvent.click(screen.getByText("Delete"));
  expect(mockDelete).toHaveBeenCalled();
});

test("calls toggle function", () => {
  const todo = { id: 1, text: "Toggle test", completed: false };
  const mockToggle = vi.fn();

  render(<TodoItem todo={todo} onDelete={() => {}} onToggle={mockToggle} />);

  fireEvent.click(screen.getByText("Toggle"));
  expect(mockToggle).toHaveBeenCalled();
});
