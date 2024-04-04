import { fetchData } from './utils';
import MD5 from 'crypto-js/md5';
import { generateBackgroundImageUrl, showFirstNCharacters } from './utils';

// Mock the MD5 function from the crypto-js library
jest.mock('crypto-js/md5', () => ({
  __esModule: true,
  default: jest.fn(), // Mock MD5 as a function
}));

describe('fetchData function', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    // Mock environment variables
    process.env.REACT_APP_API_URL = 'mock_api_url';
    process.env.REACT_APP_PRIVATE_KEY = 'mock_private_key';
    process.env.REACT_APP_PUBLIC_KEY = 'mock_public_key';
  });

  afterEach(() => {
    // Reset environment variables after each test
    delete process.env.REACT_APP_API_URL;
    delete process.env.REACT_APP_PRIVATE_KEY;
    delete process.env.REACT_APP_PUBLIC_KEY;
  });
  it('fetches data successfully', async () => {
    // Mock MD5 function to return the expected hash
    MD5.mockReturnValueOnce({
      toString: jest.fn().mockReturnValue('mockedHash'),
    });
    const ts = Date.now();
    global.Date.now = jest.fn(() => ts);

    const mockResponse = { data: 'mock data' };
    const mockJsonPromise = Promise.resolve(mockResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    global.fetch = jest.fn().mockResolvedValueOnce(mockFetchPromise);

    const apiRoute = '/test-route';
    const result = await fetchData(apiRoute);

    // Ensure MD5 was called with the correct parameters
    expect(MD5).toHaveBeenCalledWith(expect.any(String));
    expect(global.fetch).toHaveBeenCalledWith(`${process.env.REACT_APP_API_URL}${apiRoute}?ts=${ts}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=mockedHash`)
    expect(result).toEqual(mockResponse);
  });

  it('handles fetch error', async () => {
    // Mock MD5 function to return the expected hash
    MD5.mockReturnValueOnce({
      toString: jest.fn().mockReturnValue('mockedHash'),
    });
    const ts = Date.now();
    global.Date.now = jest.fn(() => ts);

    const mockError = new Error('Mock fetch error');
    global.fetch = jest.fn().mockRejectedValueOnce(mockError);

    const apiRoute = '/test-route';
    const result = await fetchData(apiRoute);

    // Ensure MD5 was called with the correct parameters
    expect(MD5).toHaveBeenCalledWith(expect.any(String));
    expect(global.fetch).toHaveBeenCalledWith(`${process.env.REACT_APP_API_URL}${apiRoute}?ts=${ts}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=mockedHash`)

    expect(result).toEqual(`Fetch Failed: ${mockError}`);
  });
})

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


