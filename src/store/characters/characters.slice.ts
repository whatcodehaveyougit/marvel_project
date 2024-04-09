import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TCharactersStore } from "../../types/types";
import { fetchData } from "../../utils/utils";

const initialState: TCharactersStore = {
  data: null,
  isLoading: false,
  error: undefined,
};

export const fetchCharactersAsync = createAsyncThunk(
  "characters/fetchCharactersAsync",
  async () => {
    try {
      const result = await fetchData("/characters");
      return result;
    } catch (error) {
      return error;
    }
  }
);

// Create slice is a function that you pass 1 object
export const charactersSlice = createSlice({
  name: "characters", // This is the namespace that is used to generate the action names
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharactersAsync.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCharactersAsync.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(fetchCharactersAsync.pending, (state) => {
        state.isLoading = true;
      });
  },
});

// Action creators are generated for each case reducer function
export const { setCharacters, setCharactersLoading, setCharactersError } =
  charactersSlice.actions;

export default charactersSlice.reducer; // give us back the actual reducer function which is generated from createSlice
// Which we of course pass an action to
// And it will return the updated state