import charactersSlice from "./characters/charactersSlice.ts";
import characterSlice from "./character/character.slice.ts";
import characterComicsSlice from "./characterComics/character.comics.slice.ts";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    characters: charactersSlice,
    character: characterSlice,
    characterComics: characterComicsSlice,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Have added type module to package.json
// "type": "module",
// Allows me to run this file in node so I can see what is happening

// console.log(store, 'Initial State')
// store.subscribe(() => console.log(store.getState(), 'State Updated'))
// store.dispatch(setCharacters([{ name: 'Hulk' }]))
