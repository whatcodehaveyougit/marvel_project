import { setCharacterComics, setCharacterComicsError, setCharacterComicsLoading  } from "../../features/character/characterSlice";
import { fetchData } from "../../utils/utils";


//  A thunk is a function which returns a function which takes dispatch
const fetchComicsAsyncThunk = (characterid) => async (dispatch) => {
  // console.log(characterid, 'characterid')
  dispatch(setCharacterComicsLoading(true));
  const apiRouteComicsData = `/characters/${characterid}/comics`;
  try {
    const result = await fetchData(apiRouteComicsData);
    const resultData = result["data"]["results"];
    dispatch(setCharacterComics(resultData));
  } catch (error) {
    dispatch(setCharacterComicsError(error));
    console.log(error, 'error')
    console.log(characterid)
    console.log('this is an error')
  }
}


export { fetchComicsAsyncThunk };