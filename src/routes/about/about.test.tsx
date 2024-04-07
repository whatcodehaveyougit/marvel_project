import { render } from "@testing-library/react";
import { describe, it, expect } from "@jest/globals";
import About from "./about.tsx";

describe("About", () => {
  it("renders correctly", () => {
    const tree = render(<About />).asFragment();
    expect(tree).toMatchSnapshot();
  });
});
