import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import * as reactRedux from 'react-redux'
import Home from './home';
import configureStore from 'redux-mock-store';
import characterData from './testData/character-object.json';
jest.mock('../../components/spinner/spinner.component', () => jest.fn(() => '<Spinner />'));
jest.mock('../../components/character-card/character-card.component', () => jest.fn(() => '<CharacterCard />'));
// jest.mock('../../components/input/input.component', () => jest.fn(() => '<CustomInput />'));

const mockStore = configureStore([]);

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'), // Preserve all original exports
  useSelector: jest.fn(),
}));

const initialState = {
  characters: {
    data: [ characterData ],
    isLoading: false,
    error: null,
  },
  character: {
    comics: [],
    data: null,
    isLoading: false,
    error: null
  }
};
const store = mockStore(initialState);

describe('Home', () => {
  it('renders correctly with character data', () => {
    jest.spyOn(reactRedux, 'useSelector').mockImplementation(callback => callback(store.getState()));;
    const tree = render(<Provider store={store}><Home /></Provider>).asFragment();
    expect(tree).toMatchSnapshot();
  });
  it('renders spinner when data is loading', () => {
    // Optimization: Why do I have to create new state object each time here?
    // Instead of just changing some of the properties..
    const initialState = {
      characters: {
        data: [ ],
        isLoading: true,
        error: null,
      },
      character: {
        comics: [],
        data: null,
        isLoading: false,
        error: null
      }
    };
    const store = mockStore(initialState);
    jest.spyOn(reactRedux, 'useSelector').mockImplementation(callback => callback(store.getState()));;
    const tree = render(<Provider store={store}><Home /></Provider>).asFragment();
    expect(tree).toMatchSnapshot();
  });
  it('renders error correctly', () => {
    const initialState = {
      characters: {
        data: [ ],
        isLoading: false,
        error: 'This is an ERROR!',
      },
      character: {
        comics: [],
        data: null,
        isLoading: false,
        error: null
      }
    };
    const store = mockStore(initialState);
    jest.spyOn(reactRedux, 'useSelector').mockImplementation(callback => callback(store.getState()));;
    const tree = render(<Provider store={store}><Home /></Provider>).asFragment();
    expect(tree).toMatchSnapshot();
  });
  it('user types into input', () => {
    render(<Provider store={store}><Home /></Provider>);
    const input = screen.queryByTestId('custom-input')
    fireEvent.change(input, { target: { value: '123' } })
    expect(input).toHaveValue("123")
  })
});
