import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "App";

describe("<App />", () => {
  it("renders ConterView and CountButtons", () => {
    render(<App />);
    const view = screen.getByText("현재 숫자: 0");
    const buttons = screen.getAllByRole("button");

    expect(view).toBeInTheDocument();
    expect(buttons.length).toBe(2);
  });

  it("increments by 1 each time incrementBtn is clicked", () => {
    render(<App />);
    const initialScreen = screen.getByText("현재 숫자: 0");
    expect(initialScreen).toBeInTheDocument();

    const incrementBtn = screen.getByTestId("incrementBtn");

    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);

    const changedScreen = screen.getByText("현재 숫자: 3");
    expect(changedScreen).toBeInTheDocument();
  });

  it("decrements by 1 each time decrementBtn is clicked", () => {
    render(<App />);
    const initialScreen = screen.getByText("현재 숫자: 0");
    expect(initialScreen).toBeInTheDocument();

    const decrementBtn = screen.getByTestId("decrementBtn");

    fireEvent.click(decrementBtn);
    fireEvent.click(decrementBtn);

    const changedScreen = screen.getByText("현재 숫자: -2");
    expect(changedScreen).toBeInTheDocument();
  });
});
