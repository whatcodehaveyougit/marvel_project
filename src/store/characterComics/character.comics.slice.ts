import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../utils/utils";
import { TCharacterComicsStore } from "../../types/types";

const initialState: TCharacterComicsStore = {
  data: null,
  isLoading: false,
  error: undefined,
};

export const fetchCharacterComicsAsync = createAsyncThunk(
  "characterComics/fetchCharacterComicsAsync",
  async (characterId: string | undefined) => {
    const apiRouteComicsData = `/characters/${characterId}/comics`;
    try {
      return await fetchData(apiRouteComicsData);
    } catch (error) {
      return error;
    }
  }
);

export const characterComicsSlice = createSlice({
  name: "characterComics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCharacterComicsAsync.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchCharacterComicsAsync.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
    builder.addCase(fetchCharacterComicsAsync.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export default characterComicsSlice.reducer;
