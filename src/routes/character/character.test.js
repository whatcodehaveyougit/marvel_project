import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Character from './character';
import characterData from './testData/character-object.json';
import comicData from './testData/comic-object.json';
import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import * as reactRedux from 'react-redux'

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'), // Preserve all original exports
  useSelector: jest.fn(),
  useDispatch: jest.fn(() => jest.fn()), // Mock useDispatch
}));

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
}));

jest.mock('../../components/spinner/spinner.component', () => jest.fn(() => 'Spinner'));

const mockStore = configureStore([]);

// const initialState = {
//   characters: [ characterData ], // TO FIX: Ensure characters data is initially an empty array
//   isLoading: false,
//   error: null,
//   comics: [],
// };

describe('Character', () => {
  // const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')

  beforeEach(() => {
    // Set up useSelector mock to return initialState.characters
    // useSelectorMock.mockReturnValue(initialState);
    useParams.mockReturnValue({ characterid: 1011334 });
  });

  afterEach(() => {
    // Clear mock implementation after each test
    // useSelector.mockClear();
  });

  // it('Component renders correctly', () => {
  //   const store = mockStore(initialState);
  //   const { asFragment } = render(
  //     <Provider store={store}>
  //       <Character />
  //     </Provider>
  //   );
  //   expect(asFragment()).toMatchSnapshot();
  // });

  it('Spinner is rendered when there is no comic book data but the data is loading', () => {
    const initialState = {
      characters: [ characterData ], // TO FIX: Ensure characters data is initially an empty array
      isLoading: false,
      error: null,
      character: {
        comics: [],
        data: null,
        isLoading: true,
        error: null
      }
    };
    const store = mockStore(initialState);
    jest.spyOn(reactRedux, 'useSelector').mockImplementation(callback => callback(store.getState()));;
    const view = render(
      <Provider store={store}>
        <Character />
      </Provider>
    );
    expect(view).toMatchSnapshot();
  });

  it('Accordion of comics is rendered when data has loaded in', () => {
    const initialState1 = {
      characters: [ characterData ], // TO FIX: Ensure characters data is initially an empty array
      isLoading: false,
      error: null,
      character: {
        comics: [ comicData ],
        data: { name: 'THe hulk'},
        isLoading: false,
        error: null
      }
    };
    const store = mockStore(initialState1);
    jest.spyOn(reactRedux, 'useSelector').mockImplementation(callback => callback(store.getState()));
    const view = render(
      <Provider store={store}>
        <Character />
      </Provider>
    );
    expect(view).toMatchSnapshot();
  });


});

