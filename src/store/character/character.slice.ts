import { createSlice } from "@reduxjs/toolkit";
import {
  TCharacterStore,
  TSetErrorAction,
  TSetIsLoadingAction,
  TSetCharacterAction,
} from "../../types/types";

const initialState: TCharacterStore = {
  data: null,
  isLoading: false,
  error: null,
};

// Create slice is a function that you pass 1 object
export const characterSlice = createSlice({
  name: "character", // This is the namespace that is used to generate the action names
  initialState,
  reducers: {
    setCharacterData: (state, action: TSetCharacterAction) => {
      state.data = action.payload;
    },
    setCharacterDataLoading: (state, action: TSetIsLoadingAction) => {
      state.isLoading = action.payload;
    },
    setCharacterDataError: (state, action: TSetErrorAction) => {
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCharacterData,
  setCharacterDataLoading,
  setCharacterDataError,
} = characterSlice.actions;

export default characterSlice.reducer;
