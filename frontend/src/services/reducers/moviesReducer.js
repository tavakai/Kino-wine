import {
  GET_MOVIES_FOR_MAIN,
  GET_GENRES,
  GET_SEARCHED,
  SET_GENRE_MOVIES,
} from '../types';

const initialState = {
  mainSliderMovies: [],
  genres: [],
  searchedMovies: [],
  genreMovies: [],
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
    case SET_GENRE_MOVIES:
      return {
        ...state,
        genreMovies: [...payload],
      }
    default:
      return state;
  }
}
