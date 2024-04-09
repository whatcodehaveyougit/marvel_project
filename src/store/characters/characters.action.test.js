// import { fetchCharactersAsync } from './characters.action';
// import { setCharactersLoading, setCharacters, setCharactersError } from './charactersSlice';
// import { fetchData } from '../../utils/utils';

// // Mock the fetchData function
// jest.mock('../../utils/utils', () => ({
//   fetchData: jest.fn(),
// }));

// describe('fetchCharactersAsync', () => {
//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it('dispatches loading action and sets characters on successful fetch', async () => {
//     const dispatch = jest.fn();
//     const mockResultData = [{ id: 1, name: 'Character 1' }];
//     fetchData.mockResolvedValueOnce({ data: { results: mockResultData } });

//     await fetchCharactersAsync()(dispatch);

//     expect(dispatch).toHaveBeenCalledWith(setCharactersLoading(true));
//     expect(fetchData).toHaveBeenCalledWith('/characters');
//     expect(dispatch).toHaveBeenCalledWith(setCharacters(mockResultData));
//     expect(dispatch).toHaveBeenCalledWith(setCharactersLoading(false));
//     expect(dispatch).not.toHaveBeenCalledWith(setCharactersError(expect.anything()));
//   });

//   it('dispatches loading action and error action on fetch error', async () => {
//     const dispatch = jest.fn();
//     const mockError = new Error('Fetch error');
//     fetchData.mockRejectedValueOnce(mockError);

//     await fetchCharactersAsync()(dispatch);

//     expect(dispatch).toHaveBeenCalledWith(setCharactersLoading(true));
//     expect(fetchData).toHaveBeenCalledWith('/characters');
//     expect(dispatch).toHaveBeenCalledWith(setCharactersError(mockError));
//     expect(dispatch).toHaveBeenCalledWith(setCharactersLoading(false));
//     expect(dispatch).not.toHaveBeenCalledWith(setCharacters(expect.anything()));
//   });
// });
