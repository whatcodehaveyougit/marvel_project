import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store"; // Install redux-mock-store if not already installed
import App from "./App";
import { jest, describe, it, expect } from "@jest/globals";
import { RootState } from "./store/store";

jest.mock("react-redux", () => ({
  // ...jest.requireActual("react-redux"), // Preserve all original exports
  useDispatch: jest.fn(() => jest.fn()),
  Provider: ({ children }: any) => children,
}));

jest.mock("./components/nav/nav.tsx", () => {
  return {
    __esModule: true,
    default: jest.fn(() => <div data-testid="mock-nav" />),
  };
});

jest.mock("./routes/home/home.tsx", () => {
  return {
    __esModule: true,
    default: jest.fn(() => <div data-testid="mock-home" />),
  };
});

jest.mock("./routes/about/about.tsx", () => {
  return {
    __esModule: true,
    default: jest.fn(() => <div data-testid="mock-about" />),
  };
});

jest.mock("./routes/character/character.tsx", () => {
  return {
    __esModule: true,
    default: jest.fn(() => <div data-testid="mock-character" />),
  };
});

const mockStore = configureStore([]); // Create a mock Redux store
const initialState: RootState = {
  characters: {
    data: null,
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

describe("App", () => {
  it("renders Nav and Home Component on / route", async () => {
    render(
      <Provider store={mockStore(initialState)}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByTestId("mock-nav")).toBeTruthy();
    expect(screen.getByTestId("mock-home")).toBeTruthy();
  });

  it("renders About component", async () => {
    render(
      <Provider store={mockStore(initialState)}>
        <MemoryRouter initialEntries={["/about"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByTestId("mock-about")).toBeTruthy();
  });

  it("renders Character component", async () => {
    render(
      <Provider store={mockStore(initialState)}>
        <MemoryRouter initialEntries={["/character/123"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByTestId("mock-character")).toBeTruthy();
  });
});
