import { render } from "@testing-library/react";
import * as character from "../../testData/character-object.json";
import Description from "./description";
import { describe, it, expect, jest } from "@jest/globals";

// Remove the unnecessary console.log statement
// React.useRef = () => ({ current: { clientHeight: 100, scrollHeight: 200 } });

describe("Description", () => {
  it("renders correctly with another character and useRef being mocked", () => {
    // reactMock.useRef = { current: { clientHeight: 100, scrollHeight: 200 } };
    // const useRefSig = jest.fn();
    jest.mock("react", () => {
      // const originReact = jest.requireActual('react');
      return {
        // ...originReact,
        hello: "world",
        useRef: { current: { clientHeight: 100, scrollHeight: 200 } }, // Not working
      };
    });

    const { asFragment } = render(<Description character={character} />);

    expect(asFragment()).toMatchSnapshot();
  });
});

// Problem

// Cannot mock useRef in the test file and the HTML components are not rendered with
// All the attributes and values as normal so it does't go through the whole if statement
// So doesn't test the whole file
// I think it is useRef that I need to mock but not 100% sure.,.
