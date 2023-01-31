import {
  SET_FAVORITES,
  ADD_TO_FAVORITES,
  DELETE_FROM_FAVORITES,
} from '../types';

export default function favoritesReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_FAVORITES:
      return payload;
    case ADD_TO_FAVORITES:
      return [payload, ...state];
    case DELETE_FROM_FAVORITES:
      return state.filter((movie) => movie.id !== payload);
    default:
      return state;
  }
}
