import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../utils/utils";
import { TCharacterStore, TCharacter } from "../../types/types";
// import { store } from "../store.ts";

const initialState: TCharacterStore = {
  data: null,
  isLoading: false,
  error: undefined,
};

export const fetchCharacterDataAsync = createAsyncThunk(
  "character/fetchCharacterDataAsync",
  async (characterid: Number) => {
    // const characters = store.getState().characters;
    // if (characters && characters.data?.length === 0) {
    const apiRouteCharacterData = `/characters/${characterid}`;
    try {
      const result = await fetchData(apiRouteCharacterData);
      return result[0];
    } catch (error) {
      return error;
    }
    // } else {
    // const characterData = characters.data?.find(
    //   (character: TCharacter) => character.id === Number(characterid)
    // );
    // return characterData;
    // }
  }
);

// Create slice is a function that you pass 1 object
export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setCharacterData: (state, action: any) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharacterDataAsync.fulfilled, (state, action) => {
      if (action.payload !== null) {
        state.data = action.payload;
      }
      state.isLoading = false;
    });
    builder.addCase(fetchCharacterDataAsync.rejected, (state, action) => {
      if (action.error !== null && action.error.message !== null) {
        state.error = action.error.message;
      }
      state.isLoading = false;
    });
    builder.addCase(fetchCharacterDataAsync.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const { setCharacterData } = characterSlice.actions;

export default characterSlice.reducer;
