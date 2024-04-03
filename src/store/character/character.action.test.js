import { fetchCharacterComicsAsync, fetchCharacterDataAsync } from './character.action';
import { useDispatch } from 'react-redux';
import { fetchData } from '../../utils/utils';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('../../utils/utils', () => ({
  fetchData: jest.fn(),
}));

describe('Character actions', () => {
  let dispatchMock;

  beforeEach(() => {
    dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('fetchCharacterComicsAsync', () => {
    it('dispatches loading and success actions on successful API call', async () => {
      const characterid = 123;
      const mockedComicsData = [{ id: 1, title: 'Comic 1' }, { id: 2, title: 'Comic 2' }];
      fetchData.mockResolvedValue( { data: { results: mockedComicsData } } );

      await fetchCharacterComicsAsync(characterid)(dispatchMock);
      expect(dispatchMock).toHaveBeenCalledWith({ type: 'characters/setCharacterComicsLoading', payload: true });
      expect(fetchData).toHaveBeenCalledWith(`/characters/${characterid}/comics`);
      expect(dispatchMock).toHaveBeenCalledWith({ type: 'characters/setCharacterComics', payload: mockedComicsData });
      expect(dispatchMock).toHaveBeenCalledWith({ type: 'characters/setCharacterComicsLoading', payload: false });
    });

    it('dispatches loading and error actions on failed API call', async () => {
      const characterid = 123;
      const mockedError = new Error('API Error');
      fetchData.mockRejectedValue(mockedError);

      await fetchCharacterComicsAsync(characterid)(dispatchMock);

      expect(dispatchMock).toHaveBeenCalledWith({ type: 'characters/setCharacterComicsLoading', payload: true });
      expect(fetchData).toHaveBeenCalledWith(`/characters/${characterid}/comics`);
      expect(dispatchMock).toHaveBeenCalledWith({ type: 'characters/setCharacterComicsError', payload: mockedError });
      expect(dispatchMock).toHaveBeenCalledWith({ type: 'characters/setCharacterComicsLoading', payload: false });
    });
  });

  describe('fetchCharacterDataAsync', () => {
    it('dispatches loading and success actions on successful API call', async () => {
      const characterid = 123;
      const mockedCharacterData = { id: 123, name: 'Character 1' };
      fetchData.mockResolvedValue({ data: { results: [mockedCharacterData] } });

      await fetchCharacterDataAsync(characterid)(dispatchMock);

      expect(dispatchMock).toHaveBeenCalledWith({ type: 'characters/setCharacterDataLoading', payload: true });
      expect(fetchData).toHaveBeenCalledWith(`/characters/${characterid}`);
      expect(dispatchMock).toHaveBeenCalledWith({ type: 'characters/setCharacterData', payload: mockedCharacterData });
      expect(dispatchMock).toHaveBeenCalledWith({ type: 'characters/setCharacterDataLoading', payload: false });
    });

    it('dispatches loading and error actions on failed API call', async () => {
      const characterid = 123;
      const mockedError = new Error('API Error');
      fetchData.mockRejectedValue(mockedError);

      await fetchCharacterDataAsync(characterid)(dispatchMock);

      expect(dispatchMock).toHaveBeenCalledWith({ type: 'characters/setCharacterDataLoading', payload: true });
      expect(fetchData).toHaveBeenCalledWith(`/characters/${characterid}`);
      expect(dispatchMock).toHaveBeenCalledWith({ type: 'characters/setCharacterDataLoading', payload: false });
      expect(dispatchMock).toHaveBeenCalledWith({ type: 'characters/setCharacterDataError', payload: mockedError });

    });
  });
});
