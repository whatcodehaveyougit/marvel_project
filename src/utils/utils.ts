import MD5 from "crypto-js/md5";
import { TCharacter } from "../types/types";
import axios from "axios";

const getHash = (
  ts: string,
  privateKey: string | undefined,
  publicKey: string | undefined
) => {
  return MD5(ts + privateKey + publicKey).toString();
};

// ToDo - The return type of this function ?
const fetchData = async (apiRoute: string) => {
  const baseUrl = `${process.env.REACT_APP_API_URL}${apiRoute}`;
  const ts = Date.now().toString();
  const privateKey = process.env.REACT_APP_PRIVATE_KEY;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;
  const hash = getHash(ts, privateKey, publicKey);
  const url = `${baseUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  try {
    let response = await axios.get(url);
    return response["data"]["data"]["results"];
  } catch (err: any | unknown) {
    throw Error(err);
  }
};

const generateBackgroundImageUrl = (
  characterData: TCharacter | null
): string => {
  if (characterData) {
    if (characterData["thumbnail"]) {
      const backgroundImageUrlConcatenated =
        characterData["thumbnail"]["path"] +
        "." +
        characterData["thumbnail"]["extension"];
      return backgroundImageUrlConcatenated;
    }
  }
  return "";
};

function showFirstNCharacters(string: string, n: number | null): string {
  if (n) {
    return string.slice(0, n) + "...";
  }
  return string;
}

export { fetchData, generateBackgroundImageUrl, showFirstNCharacters };
