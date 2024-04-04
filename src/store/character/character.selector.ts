import { createSelector } from "reselect";
import { TStore } from "../../types/types";

// This is an input selecter - Gives us the parameters we need to determine what our output should be
// Create a selector to give us the slice of the reducer that we NEED
// This is a selector function which SOMEHOW gets the entire redux state
const selectCharacterReducer = (state: TStore) => state.character;

const selectCharacterComics = createSelector(
  [selectCharacterReducer],
  (character) => character.comics
);

const selectIsCharacterComicsLoading = createSelector(
  [selectCharacterReducer],
  (character) => character.isLoading
);

const selectCharacterData = createSelector(
  [selectCharacterReducer],
  (character) => character.data
);

export {
  selectCharacterData,
  selectIsCharacterComicsLoading,
  selectCharacterComics,
};
