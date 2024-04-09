import {
  jest,
  describe,
  it,
  expect,
  beforeEach,
  afterEach,
} from "@jest/globals";
import { fetchData } from "./utils";
import MD5 from "crypto-js/md5";
import { generateBackgroundImageUrl, showFirstNCharacters } from "./utils";
import * as character from "../testData/character-object.json";
import axios from "axios";
jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

jest.mock("crypto-js/md5", () => ({
  __esModule: true,
  default: jest.fn(() => "mockedHash"),
}));

describe("fetchData function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    process.env.REACT_APP_API_URL = "mock_api_url";
    process.env.REACT_APP_PRIVATE_KEY = "mock_private_key";
    process.env.REACT_APP_PUBLIC_KEY = "mock_public_key";
  });

  afterEach(() => {
    delete process.env.REACT_APP_API_URL;
    delete process.env.REACT_APP_PRIVATE_KEY;
    delete process.env.REACT_APP_PUBLIC_KEY;
  });

  it("fetches data successfully", async () => {
    const ts = Date.now();
    global.Date.now = jest.fn(() => ts);

    mockedAxios.get.mockResolvedValueOnce({
      data: {
        data: {
          results: "mock data",
        },
      },
    });
    const apiRoute = "/test-route";
    const result = await fetchData(apiRoute);
    expect(MD5).toHaveBeenCalledWith(expect.any(String));
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `${process.env.REACT_APP_API_URL}${apiRoute}?ts=${ts}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=mockedHash`
    );
    expect(result).toEqual("mock data");
  });

  it("throws error on fetch error", async () => {
    const ts = Date.now();
    global.Date.now = jest.fn(() => ts);
    const mockError = "Mock fetch error";
    mockedAxios.get.mockRejectedValueOnce(mockError);
    const apiRoute = "/test-route";
    await expect(fetchData(apiRoute)).rejects.toThrow(mockError);
  });
});

describe("generateBackgroundImageUrl function", () => {
  it("returns empty string when characterData is falsy", () => {
    expect(generateBackgroundImageUrl(null)).toEqual("");
  });

  it("returns empty string when characterData.thumbnail is falsy", () => {
    expect(generateBackgroundImageUrl(null)).toEqual("");
  });

  it("generates background image URL correctly", () => {
    const expectedUrl =
      "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg";
    expect(generateBackgroundImageUrl(character)).toEqual(expectedUrl);
  });
});

describe("showFirstNCharacters function", () => {
  it("returns full string if n is falsy", () => {
    const string = "test string";
    const n = 0;
    expect(showFirstNCharacters(string, n)).toEqual(string);
  });

  it("returns first n characters of string followed by ellipsis", () => {
    const string = "test string";
    const n = 4;
    const expected = "test...";
    expect(showFirstNCharacters(string, n)).toEqual(expected);
  });
});
