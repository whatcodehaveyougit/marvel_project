import charactersSlice from '../features/characters/charactersSlice'
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    characters: charactersSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})