// import {
//   setCharacterData,
//   setCharacterDataError,
//   setCharacterDataLoading,
// } from "./character.slice.ts";
// import { fetchData } from "../../utils/utils.ts";
// import { store } from "../store.ts";
// import { Dispatch } from "@reduxjs/toolkit";
// import { TCharacter } from "../../types/types.ts";

// const fetchCharacterDataAsync =
//   (characterid: Number) => async (dispatch: Dispatch) => {
//     // Check if characters are already present in the store - performance optimisation

//     const characters = store.getState().characters;
//     if (characters && characters.data?.length === 0) {
//       const apiRouteCharacterData = `/characters/${characterid}`;
//       dispatch(setCharacterDataLoading(true));
//       try {
//         const result = await fetchData(apiRouteCharacterData);
//         const resultData = result[0];
//         dispatch(setCharacterData(resultData));
//         dispatch(setCharacterDataLoading(false));
//       } catch (error) {
//         dispatch(setCharacterDataLoading(false));
//         dispatch(setCharacterDataError(error.message));
//       }
//     } else {
//       const characterData = characters.data?.find(
//         (character: TCharacter) => character.id === Number(characterid)
//       );
//       dispatch(setCharacterData(characterData));
//       dispatch(setCharacterDataLoading(false));
//     }
//   };

// export { fetchCharacterDataAsync };
