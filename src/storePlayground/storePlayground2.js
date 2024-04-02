import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; // Correct import
import axios from 'axios';

const initialState = {
  users: [],
  isLoading: false,
  error: null
}

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'; // Correct action type
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

function fetchUsersRequested() {
  return {
    type: FETCH_USERS_REQUESTED,
  }
}

function fetchUsersSucceeded(users) {
  return {
    type: FETCH_USERS_SUCCEEDED, // Correct action type
    payload: users
  }
}

function fetchUsersFailed(err) {
  return {
    type: FETCH_USERS_FAILED,
    payload: err
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_USERS_SUCCEEDED:
      return {
        ...state,
        users: action.payload,
        isLoading: false
      }
    case FETCH_USERS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state
  }
}

const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequested());
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const users = response.data.map(user => user.name)
        dispatch(fetchUsersSucceeded(users))
      })
      .catch(error => dispatch(fetchUsersFailed(error)))
  }
}

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchUsers());
