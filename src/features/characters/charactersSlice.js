import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  characters: [],
  isLoading: false,
  error: null
}

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters: (state, action) => {
      state.characters = action.payload
    },
    setCharactersLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setCharactersError: (state, action) => {
      state.error = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setCharacters, setCharactersLoading, setCharactersError } = charactersSlice.actions

export default charactersSlice.reducer