import { createSlice } from "@reduxjs/toolkit";
import {
  TCharactersStore,
  TSetCharactersAction,
  TSetErrorAction,
  TSetIsLoadingAction,
} from "../../types/types";

const initialState: TCharactersStore = {
  data: null,
  isLoading: false,
  error: undefined,
};

// Create slice is a function that you pass 1 object
export const charactersSlice = createSlice({
  name: "characters", // This is the namespace that is used to generate the action names
  initialState,
  reducers: {
    setCharacters: (state, action: TSetCharactersAction) => {
      state.data = action.payload;
    },
    setCharactersLoading: (state, action: TSetIsLoadingAction) => {
      // State is immutable but under the hood it is generating a new object
      // But this way 'is easier to read'
      state.isLoading = action.payload;
    },
    setCharactersError: (state, action: TSetErrorAction) => {
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCharacters, setCharactersLoading, setCharactersError } =
  charactersSlice.actions;

export default charactersSlice.reducer; // give us back the actual reducer function which is generated from createSlice
// Which we of course pass an action to
// And it will return the updated state
