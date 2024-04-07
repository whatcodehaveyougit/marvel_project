// import {
//   setCharacterComics,
//   setCharacterComicsError,
//   setCharacterComicsLoading,
// } from "./character.comics.slice.ts";

// import { fetchData } from "../../utils/utils.ts";
// import { Dispatch } from "@reduxjs/toolkit";

// //  A thunk is a function which returns a function which takes dispatch
// const fetchCharacterComicsAsync =
//   (characterid: Number) => async (dispatch: Dispatch) => {
//     dispatch(setCharacterComicsLoading(true));
//     const apiRouteComicsData = `/characters/${characterid}/comics`;
//     try {
//       const resultData = await fetchData(apiRouteComicsData);
//       if (resultData.length > 0) {
//         dispatch(setCharacterComics(resultData));
//         dispatch(setCharacterComicsLoading(false));
//       }
//     } catch (error) {
//       dispatch(setCharacterComicsLoading(false));
//       dispatch(
//         setCharacterComicsError(`Error Fetching Data:" ${error.message}`)
//       );
//     }
//   };

// export { fetchCharacterComicsAsync };
