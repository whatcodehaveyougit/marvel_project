import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  characters: [],
  isLoading: false,
  error: null
}

// Create slice is a function that you pass 1 object
export const charactersSlice = createSlice({
  name: 'characters', // This is the namespace that is used to generate the action names
  initialState,
  reducers: {
    setCharacters: (state, action) => {
      state.characters = action.payload
    },
    // Could be that
    // But instead the above is shorthand for the below
    // setCharacters: (state, action) => {
    //   state.characters = action.payload
    // }
    setCharactersLoading: (state, action) => {
      // State is immutable but under the hood it is generating a new object
      // But this way 'is easier to read'
      state.isLoading = action.payload

    },
    setCharactersError: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { setCharacters, setCharactersLoading, setCharactersError } = charactersSlice.actions

export default charactersSlice.reducer // give us back the actual reducer function which is generated from createSlice