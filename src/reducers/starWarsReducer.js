import {
  FETCH_CHAR_START,
  FETCH_CHAR_SUCCESS,
  FETCH_CHAR_ERROR
} from "../actions";

const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  fetching: false,
  fetched: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHAR_START:
      return {
        ...state,
        fetching: true
      };
    case FETCH_CHAR_SUCCESS:
      return {
        ...state,
        fetching: false,
        characters: action.payload
      };
    case FETCH_CHAR_ERROR:
      return {
        ...state,
        fetching: false,
        error: "Uh oh... something happened 😵!"
      };
    default:
      return state;
  }
};

