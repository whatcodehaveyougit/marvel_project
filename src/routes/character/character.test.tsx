import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Character from "./character";
import characterData from "./testData/character-object.json";
import comicData from "./testData/comic-object.json";
import * as ReactRouterDom from "react-router-dom";
// import { useSelector } from 'react-redux';
import * as reactRedux from "react-redux";
import { jest, describe, it, expect } from "@jest/globals";

jest.mock("react-redux", () => ({
  // ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(() => jest.fn()),
}));

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as typeof ReactRouterDom),
  useParams: jest.fn().mockReturnValue({ characterid: 1011334 }),
}));

jest.mock("../../components/spinner/spinner.component", () =>
  jest.fn(() => "Spinner")
);

const mockStore = configureStore([]);

describe("Character", () => {
  // const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
  // beforeEach(() => {
  //   const useParamsMock = jest.fn().mockReturnValue({ characterid: 1011334 });
  //   ReactRouterDom.useParams = useParamsMock;
  //   ReactRouterDom.useParams.mockReturnValue({ characterid: 1011334 });
  // });
  it("Spinner is rendered when there is no comic book data but the data is loading", () => {
    const initialState = {
      characters: [characterData], // TO FIX: Ensure characters data is initially an empty array
      isLoading: false,
      error: null,
      character: {
        comics: [],
        data: null,
        isLoading: true,
        error: null,
      },
    };
    const store = mockStore(initialState);
    jest
      .spyOn(reactRedux, "useSelector")
      .mockImplementation((callback) => callback(store.getState()));
    const view = render(
      <Provider store={store}>
        <Character />
      </Provider>
    );
    expect(view).toMatchSnapshot();
  });
  it("Accordion of comics is rendered when data has loaded in", () => {
    const initialState1 = {
      characters: [],
      isLoading: false,
      error: null,
      character: {
        comics: [comicData],
        data: { name: "THe hulk" },
        isLoading: false,
        error: null,
      },
    };
    const store = mockStore(initialState1);
    jest
      .spyOn(reactRedux, "useSelector")
      .mockImplementation((callback) => callback(store.getState()));
    const view = render(
      <Provider store={store}>
        <Character />
      </Provider>
    );
    expect(view).toMatchSnapshot();
  });
});
