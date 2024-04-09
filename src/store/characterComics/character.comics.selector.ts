import { createSelector } from "reselect";
import { RootState } from "../../store/store.ts";

// This is an input selecter - Gives us the parameters we need to determine what our output should be
// Create a selector to give us the slice of the reducer that we NEED
// This is a selector function which SOMEHOW gets the entire redux state
const selectCharacterComicsReducer = (state: RootState) =>
  state.characterComics;

const selectCharacterComics = createSelector(
  [selectCharacterComicsReducer],
  (comics) => comics.data
);

const selectIsCharacterComicsLoading = createSelector(
  [selectCharacterComicsReducer],
  (comics) => comics.isLoading
);

const selectCharacterComicsError = createSelector(
  [selectCharacterComicsReducer],
  (comics) => comics.error
);

export {
  selectIsCharacterComicsLoading,
  selectCharacterComics,
  selectCharacterComicsError,
};
