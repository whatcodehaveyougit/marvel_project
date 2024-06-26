// import {
//   setCharactersLoading,
//   setCharacters,
//   setCharactersError,
// } from "./charactersSlice.ts";
// import { fetchData } from "../../utils/utils.ts";
// import { Dispatch } from "@reduxjs/toolkit";

// // Move out synchornous code from component so that it is handled by the redux-thunk middleware
// // Our the App.jsx file will dispatch this action creator and not need to know about the async code
// const fetchCharactersAsync = () => async (dispatch: Dispatch) => {
//   dispatch(setCharactersLoading(true));
//   try {
//     const result = await fetchData("/characters");
//     dispatch(setCharacters(result));
//     dispatch(setCharactersLoading(false));
//   } catch (error) {
//     dispatch(setCharactersError(error as string));
//     dispatch(setCharactersLoading(false));
//   }
// };

// export { fetchCharactersAsync };
