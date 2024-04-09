import { createSelector } from "reselect";
import { RootState } from "../../store/store.ts";

// This is an input selecter - Gives us the parameters we need to determine what our output should be
// Create a selector to give us the slice of the reducer that we NEED
// This is a selector function which SOMEHOW gets the entire redux state
const selectCharactersReducer = (state: RootState) => state.characters;

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
