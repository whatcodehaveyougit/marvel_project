import { setCharacterComics, setCharacterComicsError, setCharacterComicsLoading  } from "./characterSlice";
import { setCharacterData, setCharacterDataError, setCharacterDataLoading } from "./characterSlice";
import { fetchData } from "../../utils/utils";
import { useSelector } from "react-redux";
import { selectCharacters } from "../characters/characters.selector";


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


// This does not working....
// May need to pass it as an argument to the function
// const charactersData = useSelector(selectCharacters);

// Try and get Character data locally first if it is already loaded in the character array ?
// const character = charactersData.find(
//   (character) => character.id === Number(characterid)
// );

const fetchCharacterDataAsync = (characterid) => async (dispatch) => {
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
};


export { fetchCharacterComicsAsync, fetchCharacterDataAsync };