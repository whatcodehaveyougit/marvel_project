import { render } from "@testing-library/react";
import CustomInput from "./input.component";
import { describe, it, expect } from "@jest/globals";

describe("CustomInput", () => {
  it("renders correctly", () => {
    const tree = render(<CustomInput />).asFragment();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with props", () => {
    const tree = render(
      <CustomInput type="text" name="test" placeholder="test" />
    ).asFragment();
    expect(tree).toMatchSnapshot();
  });
});
