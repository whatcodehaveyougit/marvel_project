import {createStore} from 'redux';

const state = {
  name: 'Sigurd',
  age: 30,
  favouriteFood: ['Pizza', 'Pasta', 'Burgers']
}
// action creator
const FAVOURITE_FOOD = 'ADD_FAVOURITE_FOOD';

// This is an action creator
function addFavouriteFood(food) {
  return {
    type: FAVOURITE_FOOD,
    favouriteFood: food
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case FAVOURITE_FOOD:
      return {
        ...state,
        favouriteFood: [...state.favouriteFood, action.favouriteFood]
      }
    default:
      return state
  }
}

const store = createStore(reducer, state);
console.log(store.getState());
store.subscribe(() => console.log(store.getState()));
store.dispatch(addFavouriteFood('Sushi'));


// reducer