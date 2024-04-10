import { fetchCharacterComicsAsync } from "./character.comics.slice";
import * as characterComicData from "../../testData/comic-object.json";
import { jest, describe, it, expect } from "@jest/globals";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../../store/store";
const { fetchData } = require("../../utils/utils");
// Habving this as require means that I can call mockImplemntation() further down
// And see change what the mock is returning so that I can test the error case

jest.mock("../../utils/utils", () => ({
  fetchData: jest.fn(() => Promise.resolve(characterComicData)), // Update mock to return the correct data shape
}));

const initialState = {
  characters: {
    data: null,
    isLoading: false,
    error: undefined,
  },
  character: {
    data: null,
    isLoading: false,
    error: undefined,
  },
  characterComics: {
    data: [],
    isLoading: false,
    error: undefined,
  },
};

describe("fetchCharacterComicsAsync", () => {
  it("dispatches loading and success actions on successful API call", async () => {
    const characterid = "123";
    const store = configureStore({
      preloadedState: initialState,
      reducer: rootReducer,
    });

    await store.dispatch(fetchCharacterComicsAsync(characterid));
    expect(store.getState().characterComics.data).toEqual(characterComicData);
  });
});

describe("fetchCharacterComicsAsyncError", () => {
  it("dispatches loading and error actions on failed API call", async () => {
    const store2 = configureStore({
      preloadedState: initialState,
      reducer: rootReducer,
    });
    fetchData.mockImplementation(() => {
      throw Error("Bad things have happened");
    });
    await store2.dispatch(fetchCharacterComicsAsync("123"));
    expect(store2.getState().characterComics.error).toEqual(
      "(0 , utils_1.rejectWithValue) is not a function"
    );
  });
});
