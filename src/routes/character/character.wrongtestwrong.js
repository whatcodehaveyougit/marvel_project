import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Character from './character';
import { useSelector } from 'react-redux';

// Mock the react-redux useSelector hook
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

const mockStore = configureStore([]);

const initialState = {
  characters: [
    {
      id: 101133,
      name: 'Hulk',
      description: 'Caught and was transformed into the incredibly powerful creature called the Hulk.',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0',
        extension: 'jpg',
      },
    },
  ],
  isLoading: false,
  error: null,
};

describe('Character', () => {
  it('renders correctly', () => {
    // Set up the mock implementation of useSelector to return initialState.characters
    useSelector.mockImplementation((selectorFunction) => selectorFunction(initialState));

    const store = mockStore(initialState);
    const { asFragment } = render(
      <Provider store={store}>
        <Character />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});