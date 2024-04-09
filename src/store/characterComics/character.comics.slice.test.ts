import { fetchCharacterComicsAsync } from "./character.comics.slice";
import { useDispatch } from "react-redux";
import { fetchData } from "../../utils/utils";
import { jest, describe, beforeEach, it } from "@jest/globals";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

jest.mock("../../utils/utils", () => ({
  fetchData: jest.fn(),
}));

describe("Character actions", () => {
  let dispatchMock;

  beforeEach(() => {
    dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("fetchCharacterComicsAsync", () => {
    it("dispatches loading and success actions on successful API call", async () => {
      const characterid = 123;
      const mockedComicsData = [
        { id: 1, title: "Comic 1" },
        { id: 2, title: "Comic 2" },
      ];
      fetchData.mockResolvedValue({ data: { results: mockedComicsData } });

      await fetchCharacterComicsAsync(characterid)(dispatchMock);
      expect(dispatchMock).toHaveBeenCalledWith({
        type: "characters/setCharacterComicsLoading",
        payload: true,
      });
      expect(fetchData).toHaveBeenCalledWith(
        `/characters/${characterid}/comics`
      );
      expect(dispatchMock).toHaveBeenCalledWith({
        type: "characters/setCharacterComics",
        payload: mockedComicsData,
      });
      expect(dispatchMock).toHaveBeenCalledWith({
        type: "characters/setCharacterComicsLoading",
        payload: false,
      });
    });

    it("dispatches loading and error actions on failed API call", async () => {
      const characterid = 123;
      const mockedError = new Error("API Error");
      fetchData.mockRejectedValue(mockedError);

      await fetchCharacterComicsAsync(characterid)(dispatchMock);

      expect(dispatchMock).toHaveBeenCalledWith({
        type: "characters/setCharacterComicsLoading",
        payload: true,
      });
      expect(fetchData).toHaveBeenCalledWith(
        `/characters/${characterid}/comics`
      );
      expect(dispatchMock).toHaveBeenCalledWith({
        type: "characters/setCharacterComicsError",
        payload: mockedError,
      });
      expect(dispatchMock).toHaveBeenCalledWith({
        type: "characters/setCharacterComicsLoading",
        payload: false,
      });
    });
  });
});

// import { characterSlice } from "./character.slice";
// import { describe, beforeEach, it, expect } from "@jest/globals";
// const { setCharacterData } = characterSlice.actions;

// describe("characterSlice reducer", () => {
//   let initialState;

//   beforeEach(() => {
//     initialState = {
//       comics: [],
//       data: null,
//       isLoading: false,
//       error: null,
//     };
//   });

//   it("should handle setCharacterComics", () => {
//     const action = setCharacterComics([{ id: 1, title: "Comic 1" }]);
//     const newState = characterSlice.reducer(initialState, action);
//     expect(newState.comics).toEqual([{ id: 1, title: "Comic 1" }]);
//   });

//   it("should handle setCharacterComicsLoading", () => {
//     const action = setCharacterComicsLoading(true);
//     const newState = characterSlice.reducer(initialState, action);
//     expect(newState.isLoading).toBe(true);
//   });

//   it("should handle setCharacterComicsError", () => {
//     const error = "An error occurred";
//     const action = setCharacterComicsError(error);
//     const newState = characterSlice.reducer(initialState, action);
//     expect(newState.error).toBe(error);
//     expect(newState.isLoading).toBe(false);
//   });

//   it("should handle setCharacterData", () => {
//     const characterData = { id: 1, name: "Character 1" };
//     const action = setCharacterData(characterData);
//     const newState = characterSlice.reducer(initialState, action);
//     expect(newState.data).toEqual(characterData);
//   });

//   it("should handle setCharacterDataLoading", () => {
//     const action = setCharacterDataLoading(true);
//     const newState = characterSlice.reducer(initialState, action);
//     expect(newState.isLoading).toBe(true);
//   });

//   it("should handle setCharacterDataError", () => {
//     const error = "An error occurred";
//     const action = setCharacterDataError(error);
//     const newState = characterSlice.reducer(initialState, action);
//     expect(newState.error).toBe(error);
//     expect(newState.isLoading).toBe(false);
//   });
// });
