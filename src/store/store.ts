import charactersSlice from "./characters/characters.slice.ts";
import characterSlice from "./character/character.slice.ts";
import characterComicsSlice from "./characterComics/character.comics.slice.ts";
import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";

export const rootReducer = {
  characters: charactersSlice,
  character: characterSlice,
  characterComics: characterComicsSlice,
};

export const store = configureStore({
  reducer: {
    ...rootReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Have added type module to package.json
// "type": "module",
// Allows me to run this file in node so I can see what is happening

// console.log(store, 'Initial State')
// store.subscribe(() => console.log(store.getState(), 'State Updated'))
// store.dispatch(setCharacters([{ name: 'Hulk' }]))

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
