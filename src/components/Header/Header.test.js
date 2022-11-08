import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Header from "./Header";

describe("teste", () => {
  it("should render Header", () => {
    render(<Header />);
    const title = screen.getByText("Header");
    expect(title).toBeInTheDocument();
  });
});
