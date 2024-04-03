/**
 * Jest test for blog component
 *
 * Title Assertion: <h1>
 * Description Assertion: <p>
 */

import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Hero from "../components/Hero/Hero";

// Hero Component Unit Testing

describe("Hero Component", () => {
  test("Renders Hero component with title and description", () => {
    render(<Hero />);

    // Assert title presence
    const title = screen.getByRole("heading", { name: /Welcome to Our Blog/i });
    expect(title).toBeInTheDocument();

    // Assert description presence
    const description = screen.getByText(
      /Stay updated with Lorem ipsum dolor/i
    );
    expect(description).toBeInTheDocument();

    // Ensure description content with normalized whitespace
    const textDescription =
      "Stay updated with Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    expect(description.textContent?.trim()).toEqual(textDescription.trim());
  });
});
