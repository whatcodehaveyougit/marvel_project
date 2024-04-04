import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; // Install redux-mock-store if not already installed
import App from './App';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'), // Preserve all original exports
  useDispatch: jest.fn(() => jest.fn()), // Mock useDispatch
}));

// Mock the fetchCharactersAsync action creator
jest.mock('./store/characters/characters.action', () => ({
  fetchCharactersAsync: jest.fn(() => async dispatch => {
    // Mock the dispatch action here if needed
  })
}));

jest.mock('./components/nav/nav.component', () => () => <div data-testid="mock-nav" />);
jest.mock('./routes/home/home', () => () => <div data-testid="mock-home" />);
jest.mock('./routes/about/about', () => () => <div data-testid="mock-about" />);
jest.mock('./routes/character/character', () => () => <div data-testid="mock-character" />);

const mockStore = configureStore([]); // Create a mock Redux store
const initialState = {
  characters: [],
  isLoading: false,
  error: null,
  character: {
    comics: [],
    data: null,
    isLoading: true,
    error: null
  }
};

describe('App', () => {

  test('runs the dispatch', async () => {
    render(
      <Provider store={mockStore(initialState)}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
   // Wait for the fetchCharactersAsync action to be called
    await waitFor(() => {
      expect(fetchCharactersAsync).toHaveBeenCalledTimes(1);
    });
  });


  test('renders Nav and Home Component on / route', async () => {
    render(
      <Provider store={mockStore(initialState)}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByTestId('mock-nav')).toBeInTheDocument();
    expect(screen.getByTestId('mock-home')).toBeInTheDocument();
  });


  test('renders About component', async () => {
    render(
      <Provider store={mockStore(initialState)}>
        <MemoryRouter initialEntries={[ '/about' ]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByTestId('mock-about')).toBeInTheDocument();
  });

  test('renders Character component', async () => {
    render(
      <Provider store={mockStore(initialState)}>
        <MemoryRouter initialEntries={[ '/character/123' ]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByTestId('mock-character')).toBeInTheDocument();
  });


})
