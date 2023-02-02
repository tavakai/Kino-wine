import {
  SET_OPEN_SEARCH,
} from '../types';

export default function searchModalReducer(state = false, action) {
  const { type, payload } = action;
  // console.log(state);
  switch (type) {
    case SET_OPEN_SEARCH:
      return payload;
    default:
      return state;
  }
}
