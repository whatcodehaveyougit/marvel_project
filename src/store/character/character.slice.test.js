import { characterSlice } from './character.slice';

const {
  setCharacterComics,
  setCharacterComicsLoading,
  setCharacterComicsError,
  setCharacterData,
  setCharacterDataLoading,
  setCharacterDataError,
} = characterSlice.actions;

describe('characterSlice reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      comics: [],
      data: null,
      isLoading: false,
      error: null,
    };
  });

  it('should handle setCharacterComics', () => {
    const action = setCharacterComics([{ id: 1, title: 'Comic 1' }]);
    const newState = characterSlice.reducer(initialState, action);
    expect(newState.comics).toEqual([{ id: 1, title: 'Comic 1' }]);
  });

  it('should handle setCharacterComicsLoading', () => {
    const action = setCharacterComicsLoading(true);
    const newState = characterSlice.reducer(initialState, action);
    expect(newState.isLoading).toBe(true);
  });

  it('should handle setCharacterComicsError', () => {
    const error = 'An error occurred';
    const action = setCharacterComicsError(error);
    const newState = characterSlice.reducer(initialState, action);
    expect(newState.error).toBe(error);
    expect(newState.isLoading).toBe(false);
  });

  it('should handle setCharacterData', () => {
    const characterData = { id: 1, name: 'Character 1' };
    const action = setCharacterData(characterData);
    const newState = characterSlice.reducer(initialState, action);
    expect(newState.data).toEqual(characterData);
  });

  it('should handle setCharacterDataLoading', () => {
    const action = setCharacterDataLoading(true);
    const newState = characterSlice.reducer(initialState, action);
    expect(newState.isLoading).toBe(true);
  });

  it('should handle setCharacterDataError', () => {
    const error = 'An error occurred';
    const action = setCharacterDataError(error);
    const newState = characterSlice.reducer(initialState, action);
    expect(newState.error).toBe(error);
    expect(newState.isLoading).toBe(false);
  });
});
