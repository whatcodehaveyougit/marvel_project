// import { characterSlice, fetchCharacterDataAsync } from "./character.slice";
// import { describe, it, expect, jest } from "@jest/globals";
// import * as characterData from "../../testData/character-object.json";
// import configureStore from "redux-mock-store";
// import thunk from "redux-thunk";
// // import { AnyAction, Dispatch, Middleware } from "@reduxjs/toolkit";

// // const middlewares: Middleware<{}, any, Dispatch<AnyAction>>[] = [
// //   thunk as unknown as Middleware<{}, any, Dispatch<AnyAction>,
// // ];

// jest.mock("../../utils/utils", () => ({
//   fetchData: jest.fn(() =>
//     Promise.resolve({ data: { results: characterData } })
//   ),
// }));

// const mockStore = configureStore([thunk as any]);

// describe("characterSlice reducer", () => {
//   // beforeEach(() => {
//   //   store = mockStore({
//   //     characters: {
//   //       data: null,
//   //       isLoading: false,
//   //       error: undefined,
//   //     },
//   //   });
//   // });

//   it("should handle setCharacterData", () => {
//     const characterInitialState = {
//       data: null,
//       isLoading: false,
//       error: undefined,
//     };
//     const action = characterSlice.actions.setCharacterData(characterData);
//     const newState = characterSlice.reducer(characterInitialState, action);
//     expect(newState.data).toEqual(characterData);
//   });

//   it("should handle fetchCharacterDataAsync", async () => {
//     const characterInitialState = {
//       data: null,
//       isLoading: false,
//       error: undefined,
//     };
//     const store = mockStore(characterInitialState);
//     await store.dispatch(fetchCharacterDataAsync("1011334") as any);
//     const actions = store.getActions();
//     expect(actions[0].type).toEqual(fetchCharacterDataAsync.pending.type);
//     expect(actions[1].type).toEqual(fetchCharacterDataAsync.fulfilled.type);
//     expect(actions[1].payload).toEqual(characterData);
//   });
// });
