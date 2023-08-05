import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { TodoItem, Todo } from "./TodoItem";
import "@testing-library/jest-dom";

describe("TodoItem", () => {
  const mockTodo: Todo = {
    id: 1,
    todo: "Test todo item",
    completed: false,
  };

  test("renders correctly", () => {
    render(<TodoItem {...mockTodo} />);
    expect(screen.getByText("Test todo item")).toBeInTheDocument();
  });

  test("changes checkbox state when clicked", () => {
    render(<TodoItem {...mockTodo} />);
    const checkbox = screen.getByTestId("todo-checkbox");
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});
