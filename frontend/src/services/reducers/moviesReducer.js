import {
  GET_MOVIES_FOR_MAIN,
  GET_GENRES,
  GET_SEARCHED,
} from '../types';

const initialState = {
  mainSliderMovies: [],
  genres: [],
  searchedMovies: [],
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
    case GET_SEARCHED:
      return {
        ...state,
        searchedMovies: [...payload],
      }
    default:
      return state;
  }
}
