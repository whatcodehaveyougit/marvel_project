import { createSlice } from "@reduxjs/toolkit";
import {
  TCharacterStore,
  TSetComicsAction,
  TSetErrorAction,
  TSetIsLoadingAction,
  TSetCharacterAction,
} from "../../types/types";

const initialState: TCharacterStore = {
  comics: [],
  data: null,
  isLoading: false,
  error: null,
};

// Create slice is a function that you pass 1 object
export const characterSlice = createSlice({
  name: "characters", // This is the namespace that is used to generate the action names
  initialState,
  reducers: {
    setCharacterComics: (state, action: TSetComicsAction) => {
      state.comics = action.payload;
    },
    setCharacterComicsLoading: (state, action: TSetIsLoadingAction) => {
      state.isLoading = action.payload;
    },
    setCharacterComicsError: (state, action: TSetErrorAction) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    setCharacterData: (state, action: TSetCharacterAction) => {
      state.data = action.payload;
    },
    setCharacterDataLoading: (state, action: TSetIsLoadingAction) => {
      state.isLoading = action.payload;
    },
    setCharacterDataError: (state, action: TSetErrorAction) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCharacterComics,
  setCharacterComicsLoading,
  setCharacterComicsError,
  setCharacterData,
  setCharacterDataLoading,
  setCharacterDataError,
} = characterSlice.actions;

export default characterSlice.reducer;
