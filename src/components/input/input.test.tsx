import { render, screen, fireEvent } from "@testing-library/react";
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

  it("user types into input", () => {
    render(<CustomInput type="text" name="test" placeholder="test" />);
    const input: TestElement | null = screen.queryByTestId("custom-input");
    if (input) {
      fireEvent.change(input, { target: { value: "123" } });
    }
    expect(hasInputValue(input, "123")).toBe(true);
  });
});

type TestElement = Document | Element | Window | Node;

function hasInputValue(e: TestElement | null, inputValue: string) {
  if (!e) return false;
  return screen.getByDisplayValue(inputValue) === e;
}
