import { fetchData, generateBackgroundImageUrl, showFirstNCharacters } from './utils';
import MD5 from 'crypto-js/md5';

// Mock the MD5 function from the crypto-js library
jest.mock('crypto-js/md5', () => ({
  toString: jest.fn(),
}));

describe('fetchData function', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // it('fetches data successfully', async () => {
  //   const mockResponse = { data: 'mock data' };
  //   const mockJsonPromise = Promise.resolve(mockResponse);
  //   const mockFetchPromise = Promise.resolve({
  //     json: () => mockJsonPromise,
  //   });
  //   global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

  //   const apiRoute = '/test-route';
  //   const result = await fetchData(apiRoute);

  //   expect(global.fetch).toHaveBeenCalledWith(`${process.env.REACT_APP_API_URL}${apiRoute}?ts=`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   expect(result).toEqual(mockResponse);
  // });

  // it('handles fetch error', async () => {
  //   const mockError = new Error('Mock fetch error');
  //   global.fetch = jest.fn().mockRejectedValue(mockError);

  //   const apiRoute = '/test-route';
  //   const result = await fetchData(apiRoute);

  //   expect(global.fetch).toHaveBeenCalledWith(`${process.env.REACT_APP_API_URL}${apiRoute}?ts=`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   expect(result).toEqual(`Fetch Failed: ${mockError}`);
  // });
});

describe('generateBackgroundImageUrl function', () => {
  it('returns empty string when characterData is falsy', () => {
    expect(generateBackgroundImageUrl(null)).toEqual('');
  });

  it('returns empty string when characterData.thumbnail is falsy', () => {
    expect(generateBackgroundImageUrl({})).toEqual('');
  });

  it('generates background image URL correctly', () => {
    const characterData = {
      thumbnail: {
        path: 'http://example.com/image',
        extension: 'jpg',
      },
    };
    const expectedUrl = 'http://example.com/image.jpg';
    expect(generateBackgroundImageUrl(characterData)).toEqual(expectedUrl);
  });
});

describe('showFirstNCharacters function', () => {
  it('returns full string if n is falsy', () => {
    const string = 'test string';
    const n = 0;
    expect(showFirstNCharacters(string, n)).toEqual(string);
  });

  it('returns first n characters of string followed by ellipsis', () => {
    const string = 'test string';
    const n = 4;
    const expected = 'test...';
    expect(showFirstNCharacters(string, n)).toEqual(expected);
  });
});
