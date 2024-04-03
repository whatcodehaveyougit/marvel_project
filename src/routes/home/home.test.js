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

describe('Home', () => {
  it('renders correctly with character data', () => {
    const initialState = {
      characters: {
        characters: [ characterData ],
        isLoading: false,
        error: null,
      },
      character: {
        comics: [],
        data: null,
        isLoading: true,
        error: null
      }
    };
    const store = mockStore(initialState);
    jest.spyOn(reactRedux, 'useSelector').mockImplementation(callback => callback(store.getState()));;
    const tree = render(<Provider store={store}><Home /></Provider>).asFragment();
    expect(tree).toMatchSnapshot();
  });
  it('renders spinner when data is loading', () => {
    const initialState = {
      characters: {
        characters: [  ],
        isLoading: true,
        error: null,
      },
      character: {
        comics: [],
        data: null,
        isLoading: true,
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
        characters: [  ],
        isLoading: false,
        error: 'This is an ERROR!',
      },
      character: {
        comics: [],
        data: null,
        isLoading: true,
        error: null
      }
    };
    const store = mockStore(initialState);
    jest.spyOn(reactRedux, 'useSelector').mockImplementation(callback => callback(store.getState()));;
    const tree = render(<Provider store={store}><Home /></Provider>).asFragment();
    expect(tree).toMatchSnapshot();
  });
  it('user types into input', () => {
    console.log(screen)
    render(<Home />);

    const input = screen.queryByTestId('custom-input')
    fireEvent.change(input, { target: { value: '123' } })
    expect(input).toHaveValue("123")
  })
});
