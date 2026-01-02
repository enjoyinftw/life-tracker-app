import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Counter } from "@/components/CounterExample/Counter";

describe("Counter example test", () => {
  it("should render a text and button when mounted", () => {
    render(<Counter />);
    const text = screen.getByText(/0/i);
    const button = screen.getByRole("button", { name: /increment/i });
    screen.debug(button);
    expect(text).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
