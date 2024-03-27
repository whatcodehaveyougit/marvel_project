import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  characters: [],
}

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters: (state, action) => {
      state.characters = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCharacters } = charactersSlice.actions

export default charactersSlice.reducer