import {
  GET_MOVIES_FOR_MAIN,
  GET_GENRES,
} from '../types';

const initialState = {
  mainSliderMovies: [],
  genres: [],
}

export default function moviesReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIES_FOR_MAIN:
      return {
        ...state,
        mainSliderMovies: [...payload],
      }
    case GET_GENRES:
      return {
        ...state,
        genres: [...payload],
      }
    default:
      return state;
  }
}
