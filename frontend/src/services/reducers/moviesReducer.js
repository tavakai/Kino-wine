import {
  GET_MOVIES_FOR_MAIN,
  GET_GENRES,
  GET_SEARCHED,
  SET_GENRE_MOVIES,
  GET_CATEGORIES_WITH_MOVIES,
  GET_WEEK_TOPS,
  GET_HIGH_RATED,
} from '../types';

const initialState = {
  mainSliderMovies: [],
  genres: [],
  searchedMovies: [],
  genreMovies: [],
  categories: [],
  weekTops: [],
  highRated: [],
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
    case GET_CATEGORIES_WITH_MOVIES:
      return {
        ...state,
        categories: [...payload],
      }
    case GET_WEEK_TOPS:
      return {
        ...state,
        weekTops: [...payload],
      }
    case GET_HIGH_RATED:
      return {
        ...state,
        highRated: [...payload],
      }
    default:
      return state;
  }
}
