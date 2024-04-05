import { createSelector } from "reselect";
import { TStore } from "../../types/types";

// This is an input selecter - Gives us the parameters we need to determine what our output should be
// Create a selector to give us the slice of the reducer that we NEED
// This is a selector function which SOMEHOW gets the entire redux state
const selectCharactersReducer = (state: TStore) => state.characters;

export const selectCharacters = createSelector(
  [selectCharactersReducer],
  (characters) => characters.data
);

export const selectCharactersLoading = createSelector(
  [selectCharactersReducer],
  (characters) => characters.isLoading
);

export const selectCharactersError = createSelector(
  [selectCharactersReducer],
  (characters) => characters.error
);
