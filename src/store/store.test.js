import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './characters/charactersSlice';
import characterReducer from './character/characterSlice';
import characterComicsReducer from './characterComics/characterComicsSlice';
import logger from 'redux-logger';

describe('Redux store configuration', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        characters: charactersReducer,
        character: characterReducer,
        characterComics: characterComicsReducer,
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    });
  });

  afterEach(() => {
    store = null;
  });

  it('should have characters and character slices in the store', () => {
    const state = store.getState();
    expect(state.characters).toBeDefined();
    expect(state.character).toBeDefined();
  });

});
