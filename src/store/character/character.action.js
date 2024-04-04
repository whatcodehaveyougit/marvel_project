import { setCharacterComics, setCharacterComicsError, setCharacterComicsLoading  } from "./characterSlice";
import { setCharacterData, setCharacterDataError, setCharacterDataLoading } from "./characterSlice";
import { fetchData } from "../../utils/utils";
import {store} from "../store"


//  A thunk is a function which returns a function which takes dispatch
const fetchCharacterComicsAsync = (characterid) => async (dispatch) => {
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
}

const fetchCharacterDataAsync = (characterid) => async (dispatch) => {
  // Check if characters are already present in the store - performance optimisation
  const { characters } = store.getState().characters;
  if (characters.length === 0) {
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
    const characterData = characters.find(
      (character) => character.id === Number(characterid)
    );
    dispatch(setCharacterData(characterData));
    dispatch(setCharacterDataLoading(false));
  }

};


export { fetchCharacterComicsAsync, fetchCharacterDataAsync };