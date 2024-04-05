import { createSlice } from "@reduxjs/toolkit";
import {
  TCharacterComicsStore,
  TSetComicsAction,
  TSetErrorAction,
  TSetIsLoadingAction,
} from "../../types/types";

const initialState: TCharacterComicsStore = {
  data: null,
  isLoading: false,
  error: null,
};

export const characterComicsSlice = createSlice({
  name: "characterComics", // This is the namespace that is used to generate the action names
  initialState,
  reducers: {
    setCharacterComics: (state, action: TSetComicsAction) => {
      state.data = action.payload;
    },
    setCharacterComicsLoading: (state, action: TSetIsLoadingAction) => {
      state.isLoading = action.payload;
    },
    setCharacterComicsError: (state, action: TSetErrorAction) => {
      state.error = action.payload;
    },
  },
});

export const {
  setCharacterComics,
  setCharacterComicsLoading,
  setCharacterComicsError,
} = characterComicsSlice.actions;

export default characterComicsSlice.reducer;
