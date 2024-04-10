import { fetchCharactersAsync } from "./characters.slice";
import { describe, it, expect, jest } from "@jest/globals";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../../store/store";
import * as characterData from "../../testData/character-object.json";
const { fetchData } = require("../../utils/utils");

jest.mock("../../utils/utils", () => ({
  fetchData: jest.fn(() => Promise.resolve([characterData])), // Update mock to return the correct data shape
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

describe("charactersSlice", () => {
  it("Add the new character to the redux store", async () => {
    const store2 = configureStore({
      preloadedState: initialState,
      reducer: rootReducer,
    });

    await store2.dispatch(fetchCharactersAsync());
    expect(JSON.stringify(store2.getState().characters.data)).toBe(
      JSON.stringify([characterData])
    );
  });

  it("Set is characterError to true", async () => {
    const store = configureStore({
      preloadedState: initialState,
      reducer: rootReducer,
    });
    fetchData.mockImplementation(() => {
      throw Error("Bad things have happened");
    });
    await store.dispatch(fetchCharactersAsync());

    expect(store.getState().characters.error).toBe(
      "(0 , utils_1.rejectWithValue) is not a function"
    );
  });
});
