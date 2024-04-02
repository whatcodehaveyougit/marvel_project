import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  characterComics: [],
  isLoading: false,
  error: null
}

// Create slice is a function that you pass 1 object
export const characterSlice = createSlice({
  name: 'characters', // This is the namespace that is used to generate the action names
  initialState,
  reducers: {
    setCharacterComics: (state, action) => {
      state.characterComics = action.payload
    },
    setCharacterComicsLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setCharacterComicsError: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { setCharacterComics, setCharacterComicsLoading, setCharacterComicsError } = characterSlice.actions

export default characterSlice.reducer