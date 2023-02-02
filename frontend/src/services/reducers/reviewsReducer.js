import {
  SET_REVIEWS,
  ADD_REVIEW,
} from '../types';

export default function reviewsReducer(state = [], action) {
  const { type, payload } = action;
  // console.log(state);
  switch (type) {
    case SET_REVIEWS:
      return payload;
    case ADD_REVIEW:
      return {
        ...state,
        reviews: [
          ...state.reviews,
          payload,
        ],
      };
    default:
      return state;
  }
}
