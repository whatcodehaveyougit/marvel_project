import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import * as reactRedux from "react-redux";
import Home from "./home";
import configureStore from "redux-mock-store";
import * as characterData from "./testData/character-object.json";
import { jest, describe, it, expect } from "@jest/globals";
import { RootState } from "../../store/store.ts";

jest.mock("../../components/character-card/character-card.tsx", () => {
  return {
    __esModule: true,
    default: jest.fn(() => "CharacterComponent"),
  };
});
jest.mock("../../components/spinner/spinner.component.tsx", () => {
  return {
    __esModule: true,
    default: jest.fn(() => "Spinner"),
  };
});
jest.mock("../../components/input/input.component", () => {
  return {
    __esModule: true,
    default: jest.fn(() => "CustomInput"),
  };
});

const mockStore = configureStore([]);

jest.mock("react-redux", () => ({
  // ...jest.requireActual("react-redux"), // Preserve all original exports
  useSelector: jest.fn(),
  Provider: ({ children }: any) => children,
}));

describe("Home", () => {
  it("renders correctly with character data", () => {
    const initialState: RootState = {
      characters: {
        data: [characterData],
        isLoading: true,
        error: undefined,
      },
      character: {
        data: null,
        isLoading: false,
        error: undefined,
      },
      characterComics: {
        data: [],
        isLoading: true,
        error: undefined,
      },
    };
    const store = mockStore(initialState);

    jest
      .spyOn(reactRedux, "useSelector")
      .mockImplementation((callback) => callback(store.getState()));
    const tree = render(
      <Provider store={store}>
        <Home />
      </Provider>
    ).asFragment();
    expect(tree).toMatchSnapshot();
  });
  it("renders spinner when data is loading", () => {
    // Optimization: Why do I have to create new state object each time here?
    // Instead of just changing some of the properties..
    const initialState: RootState = {
      characters: {
        data: null,
        isLoading: true,
        error: undefined,
      },
      character: {
        data: null,
        isLoading: true,
        error: undefined,
      },
      characterComics: {
        data: [],
        isLoading: true,
        error: undefined,
      },
    };
    const store = mockStore(initialState);
    jest
      .spyOn(reactRedux, "useSelector")
      .mockImplementation((callback) => callback(store.getState()));
    const tree = render(
      <Provider store={store}>
        <Home />
      </Provider>
    ).asFragment();
    expect(tree).toMatchSnapshot();
  });
  it("renders error correctly", () => {
    const initialState: RootState = {
      characters: {
        data: null,
        isLoading: true,
        error: undefined,
      },
      character: {
        data: characterData,
        isLoading: true,
        error: undefined,
      },
      characterComics: {
        data: [],
        isLoading: true,
        error: undefined,
      },
    };
    const store = mockStore(initialState);
    jest
      .spyOn(reactRedux, "useSelector")
      .mockImplementation((callback) => callback(store.getState()));
    const tree = render(
      <Provider store={store}>
        <Home />
      </Provider>
    ).asFragment();
    expect(tree).toMatchSnapshot();
  });
});
