import charactersSlice from './characters/charactersSlice.js'
import characterSlice from './character/characterSlice.js'
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'


export const store = configureStore({
  reducer: {
    // Refactor: Here we should be passing the root reducer,
    // which is a combination of all the reducers in our app
    // Not an object of all the reduvers which is what we have here
    characters: charactersSlice,
    character: characterSlice
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})


// Have added type module to package.json
// "type": "module",
// Allows me to run this file in node so I can see what is happening

// console.log(store, 'Initial State')
// store.subscribe(() => console.log(store.getState(), 'State Updated'))
// store.dispatch(setCharacters([{ name: 'Hulk' }]))
