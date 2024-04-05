import charactersSlice from './charactersSlice'

const initialState = {
  characters: [],
  isLoading: false,
  error: null
}

describe('charactersSlice', () => {
  it('Returns initial redux store state as no state or action is passed in', () => {
    const reducerReturnValue = charactersSlice(undefined, {} );
    expect(JSON.stringify(reducerReturnValue)).toBe(JSON.stringify(initialState));
  })
  it('Add the new character to the redux store', () => {
    const newState = {
      characters: [{'name': 'The Hulk'}],
      isLoading: false,
      error: null
    }
    const reducerReturnValue = charactersSlice(undefined, { type: 'characters/setCharacters', payload: [{name: 'The Hulk'}] });
    expect(JSON.stringify(reducerReturnValue)).toBe(JSON.stringify(newState));
  })

  it('Set isloading state to true', () => {
    const newState = {
      characters: [],
      isLoading: true,
      error: null
    }
    const reducerReturnValue = charactersSlice(undefined, { type: 'characters/setCharactersLoading', payload: true });
    expect(JSON.stringify(reducerReturnValue)).toBe(JSON.stringify(newState));
  })

  it('Set is characterError to true', () => {
    const newState = {
      characters: [],
      isLoading: false,
      error: 'An Example Error Message'
    }
    const reducerReturnValue = charactersSlice(undefined, { type: 'characters/setCharactersError', payload: 'An Example Error Message' });
    expect(JSON.stringify(reducerReturnValue)).toBe(JSON.stringify(newState));
  })


})