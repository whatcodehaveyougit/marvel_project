import {
  setCharacterComics,
  setCharacterComicsError,
  setCharacterComicsLoading,
} from "./characterSlice.ts";
import {
  setCharacterData,
  setCharacterDataError,
  setCharacterDataLoading,
} from "./characterSlice.ts";
import { fetchData } from "../../utils/utils.ts";
import { store } from "../store.ts";
import { Dispatch } from "@reduxjs/toolkit";
import { TCharacter } from "../../types/types.ts";

//  A thunk is a function which returns a function which takes dispatch
const fetchCharacterComicsAsync =
  (characterid: Number) => async (dispatch: Dispatch) => {
    dispatch(setCharacterComicsLoading(true));
    const apiRouteComicsData = `/characters/${characterid}/comics`;
    try {
      const result = await fetchData(apiRouteComicsData);
      const resultData = result["data"]["results"];
      dispatch(setCharacterComics(resultData));
      dispatch(setCharacterComicsLoading(false));
    } catch (error) {
      dispatch(setCharacterComicsError(error));
      dispatch(setCharacterComicsLoading(false));
    }
  };

const fetchCharacterDataAsync =
  (characterid: Number) => async (dispatch: Dispatch) => {
    // Check if characters are already present in the store - performance optimisation
    const characters = store.getState().characters;
    if (characters && characters.data?.length === 0) {
      const apiRouteCharacterData = `/characters/${characterid}`;
      dispatch(setCharacterDataLoading(true));
      try {
        const result = await fetchData(apiRouteCharacterData);
        const resultData = result["data"]["results"][0];
        dispatch(setCharacterData(resultData));
        dispatch(setCharacterDataLoading(false));
      } catch (error) {
        dispatch(setCharacterDataLoading(false));
        dispatch(setCharacterDataError(error));
      }
    } else {
      const characterData = characters.data?.find(
        (character: TCharacter) => character.id === Number(characterid)
      );
      dispatch(setCharacterData(characterData));
      dispatch(setCharacterDataLoading(false));
    }
  };

export { fetchCharacterComicsAsync, fetchCharacterDataAsync };
