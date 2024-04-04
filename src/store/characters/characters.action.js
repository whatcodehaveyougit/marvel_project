import { setCharactersLoading, setCharacters, setCharactersError  } from "./charactersSlice";
import { fetchData } from "../../utils/utils";

// Move out synchornous code from component so that it is handled by the redux-thunk middleware
// Our the App.jsx file will dispatch this action creator and not need to know about the async code
 const fetchCharactersAsync = () => async (dispatch) => {
  dispatch(setCharactersLoading(true));
  try {
    const result = await fetchData("/characters");
    const resultData = result["data"]["results"];
    dispatch(setCharacters(resultData));
    dispatch(setCharactersLoading(false));
  } catch (error) {
    dispatch(setCharactersError(error));
    dispatch(setCharactersLoading(false));
  }
}

export { fetchCharactersAsync };