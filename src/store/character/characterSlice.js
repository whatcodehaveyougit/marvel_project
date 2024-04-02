import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  comics: [],
  data: null,
  isLoading: false,
  error: null
}

// Create slice is a function that you pass 1 object
export const characterSlice = createSlice({
  name: 'characters', // This is the namespace that is used to generate the action names
  initialState,
  reducers: {
    setCharacterComics: (state, action) => {
      state.comics = action.payload
    },
    setCharacterComicsLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setCharacterComicsError: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
    setCharacterData: (state, action) => {
      state.data = action.payload
    },
    setCharacterDataLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setCharacterDataError: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCharacterComics, setCharacterComicsLoading, setCharacterComicsError, setCharacterData, setCharacterDataLoading, setCharacterDataError } = characterSlice.actions

export default characterSlice.reducer