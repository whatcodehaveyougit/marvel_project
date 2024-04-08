import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
// import Character from "./character";
import * as characterData from "./testData/character-object.json";
import * as comicData from "./testData/comic-object.json";
import * as ReactRouterDom from "react-router-dom";
// import { useSelector } from 'react-redux';
import * as reactRedux from "react-redux";
import { jest, describe, it, expect } from "@jest/globals";
import Character from "./character";

jest.mock("react-redux", () => ({
  // ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(() => jest.fn()),
  Provider: ({ children }: any) => children,
}));

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as typeof ReactRouterDom),
  useParams: jest.fn().mockReturnValue({ characterid: 1011334 }),
}));

// jest.mock("../../components/spinner/spinner.component.tsx", () =>
//   jest.fn(() => "Spinner")
// );

console.log(characterData);

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
      characters: {
        data: null,
        isLoading: true,
        error: null,
      },
      character: {
        data: characterData,
        isLoading: true,
        error: null,
      },
      characterComics: {
        data: [comicData],
        isLoading: true,
        error: null,
      },
    };
    const store = mockStore(initialState);
    jest
      .spyOn(reactRedux, "useSelector")
      .mockImplementation((callback) => callback(store.getState()));
    console.log(store.getState());
    const view = render(
      <Provider store={store}>
        <Character />
      </Provider>
    ).asFragment();
    expect(view).toMatchSnapshot();
  });
  // it("Accordion of comics is rendered when data has loaded in", () => {
  //   const initialState1 = {
  //     characters: [],
  //     isLoading: false,
  //     error: null,
  //     character: {
  //       comics: [comicData],
  //       data: { name: "THe hulk" },
  //       isLoading: false,
  //       error: null,
  //     },
  //   };
  //   const store = mockStore(initialState1);
  //   jest
  //     .spyOn(reactRedux, "useSelector")
  //     .mockImplementation((callback) => callback(store.getState()));
  //   const view = render(
  //     <Provider store={store}>
  //       <Character />
  //     </Provider>
  //   );
  //   expect(view).toMatchSnapshot();
  // });
});
