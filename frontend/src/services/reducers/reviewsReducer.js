import {
  SET_REVIEWS,
  ADD_REVIEW,
} from '../types';

export default function favoritesReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_REVIEWS:
      return payload;
    case ADD_REVIEW:
      return [payload, ...state];
    default:
      return state;
  }
}
