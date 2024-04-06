import { render, fireEvent, screen } from "@testing-library/react";
import Accordion from "./accordion";
import { describe, it, expect } from "@jest/globals";

describe("Accordion", () => {
  it("renders correctly", () => {
    const tree = render(
      <Accordion title="title example" description="example description" />
    ).asFragment();
    expect(tree).toMatchSnapshot();
  });

  it("displays the clicked element", () => {
    render(
      <Accordion title="title example" description="example description" />
    );
    const accordionSummary = screen.getByTestId("accordion-summary");

    // Clicking on the accordion summary should display the description
    fireEvent.click(accordionSummary);
    const descriptionElement = screen.getByText("example description");
    expect(descriptionElement).toBeTruthy();

    // Clicking again should hide the description
    fireEvent.click(accordionSummary);
    expect(descriptionElement).toBeTruthy();
  });
});
