import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "./App";

describe("App", () => {
  it("should renders header title", () => {
    render(<App />);
    const title = screen.getByText(/Capital Flow/i);
    expect(title).toBeInTheDocument();
  });

  it("should render the app snapshot", () => {
    const render = renderer.create(<App />);
    expect(render).toMatchSnapshot();
  });

  it("should render the components name", () => {
    render(<App />);
    const componentsName = screen.getByText(/User/i);
    expect(componentsName).toBeInTheDocument();
  });
});
