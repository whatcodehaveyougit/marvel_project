import { fetchCharacterDataAsync, setCharacterData } from "./character.slice";
import { describe, it, expect, jest } from "@jest/globals";
import * as characterData from "../../testData/character-object.json";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../../store/store";

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

describe("characterSlice reducer", () => {
  it("should handle setCharacterData", () => {
    const store = configureStore({
      preloadedState: initialState,
      reducer: rootReducer,
    });
    store.dispatch(setCharacterData(characterData));
    expect(store.getState().character.data).toEqual(characterData);
  });

  it("should handle fetchCharacterDataAsync", async () => {
    const store2 = configureStore({
      preloadedState: initialState,
      reducer: rootReducer,
    });
    await store2.dispatch(fetchCharacterDataAsync("1011334"));
    expect(store2.getState().character.data).toEqual(characterData);
  });
});
