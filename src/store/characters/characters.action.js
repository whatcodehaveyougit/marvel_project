import { setCharactersLoading, setCharacters, setCharactersError  } from "../../features/characters/charactersSlice";
import { fetchData } from "../../utils/utils";

 const fetchCharactersAsync = () => async (dispatch) => {
  dispatch(setCharactersLoading(true));
  try {
    const result = await fetchData("/characters");
    const resultData = result["data"]["results"];
    dispatch(setCharacters(resultData));
    dispatch(setCharactersLoading(false));
  } catch (error) {
    dispatch(setCharactersError(error));
  }
}

export default fetchCharactersAsync;