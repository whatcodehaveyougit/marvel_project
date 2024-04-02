import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Character from './character';
import { useSelector } from 'react-redux';
import characterData from './character-object.json';
import { useParams } from 'react-router-dom';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'), // Preserve all original exports
  useSelector: jest.fn(), // Mock useSelector
  useDispatch: jest.fn(() => jest.fn()), // Mock useDispatch
}));

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
}));

jest.mock('../../components/spinner/spinner.component', () => ({
  Spinner: jest.fn(() => '<div>Spinner</div>'),
}));


const mockStore = configureStore([]);

const initialState = {
  characters: [ characterData ], // Ensure characters data is initially an empty array
  isLoading: false,
  error: null
};

describe('Character', () => {
  beforeEach(() => {
    // Set up useSelector mock to return initialState.characters
    useSelector.mockReturnValue(initialState.characters);
    useParams.mockReturnValue({ characterid: 1011334 });
  });

  afterEach(() => {
    // Clear mock implementation after each test
    useSelector.mockClear();
  });

  it('Component renders correctly', () => {
    const store = mockStore(initialState);
    const { asFragment } = render(
      <Provider store={store}>
        <Character />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });


});

