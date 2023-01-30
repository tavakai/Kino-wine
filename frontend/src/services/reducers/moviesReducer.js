import {
  GET_MOVIES_FOR_MAIN,
} from '../types';

const initialState = {
  mainSliderMovies: [],
}

export default function moviesReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIES_FOR_MAIN:
      return {
        ...state,
        mainSliderMovies: [...payload],
      }
    default:
      return state;
  }
}
