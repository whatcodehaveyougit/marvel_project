import { render, RenderResult } from "@testing-library/react";
import Spinner from "./spinner";
import { describe, test, expect } from "@jest/globals";

describe("Spinner", () => {
  test("renders correctly", (): void => {
    const view: RenderResult = render(<Spinner />);
    expect(view.asFragment()).toMatchSnapshot();
  });
});
