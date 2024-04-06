import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./nav";
import { describe, it, expect } from "@jest/globals";

describe("Nav", () => {
  it("renders correctly with another character", () => {
    const tree = render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    ).asFragment();
    expect(tree).toMatchSnapshot();
  });
});
