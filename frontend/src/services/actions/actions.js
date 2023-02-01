import {
  AUTH_USER,
  SIGNOUT,
  REG_USER,
  AUTH_CHECK,
  IS_LOADING_TRUE,
  IS_LOADING_FALSE,
  USER_EDIT,
  GET_MOVIES_FOR_MAIN,
  GET_GENRES,
  GET_SEARCHED,
  SET_FAVORITES,
  ADD_TO_FAVORITES,
  DELETE_FROM_FAVORITES,
  SET_GENRE_MOVIES,
  SET_REVIEWS,
  ADD_REVIEW,
} from '../types';
import api from '../../utils/api';

// Actions
export const authUser = (payload) => ({ type: AUTH_USER, payload });
export const regUser = (payload) => ({ type: REG_USER, payload });
export const signOut = () => ({ type: SIGNOUT });
export const authCheck = (payload) => ({ type: AUTH_CHECK, payload });
export const isLoadingTrue = () => ({ type: IS_LOADING_TRUE });
export const isLoadingFalse = () => ({ type: IS_LOADING_FALSE });
export const userChange = (payload) => ({ type: USER_EDIT, payload });
export const getMoviesForMain = (payload) => ({ type: GET_MOVIES_FOR_MAIN, payload });
export const getGenresList = (payload) => ({ type: GET_GENRES, payload });
export const getSearchedMovies = (payload) => ({ type: GET_SEARCHED, payload });
export const setFavorites = (allFav) => ({ type: SET_FAVORITES, payload: allFav });
export const addToFavorites = (oneMovie) => ({ type: ADD_TO_FAVORITES, payload: oneMovie });
export const deleteFromFavorites = (movieId) => ({ type: DELETE_FROM_FAVORITES, payload: movieId });
export const setGenreMovies = (allMovies) => ({ type: SET_GENRE_MOVIES, payload: allMovies });
export const setReviews = (allReviews) => ({ type: SET_REVIEWS, payload: allReviews });
export const addReview = (newReview) => ({ type: ADD_REVIEW, payload: newReview });

// Creators

// Auth
export const authUserAction = (user) => (dispatch) => {
  api.authUser(user).then((res) => {
    dispatch(authUser(res.data));
  });
};
export const regUserAction = (user) => (dispatch) => {
  api.regUser(user).then((res) => dispatch(regUser(res.data)));
};
export const authCheckAction = () => (dispatch) => {
  api.authCheck().then((res) => {
    dispatch(authCheck(res.data));
    dispatch(isLoadingFalse());
  })
    .catch((err) => {
      console.log(`Error authorization ${err}`);
      dispatch(isLoadingFalse());
    });
};
export const userChangeAction = (user) => (dispatch) => {
  api.changeUser(user).then((res) => {
    dispatch(userChange(res.data));
  })
    .catch((err) => {
      console.log(`Error authorization ${err}`);
    });
};
export const signOutAction = () => (dispatch) => {
  api.signOut().then(() => dispatch(signOut()));
};

// Likes
export const isLikeAction = ({ id, isLike }) => (dispatch) => {
  dispatch(setLike({ id, isLike }));
};
export const isLoadingFalseAction = () => (dispatch) => {
  dispatch(isLoadingFalse());
};

// Data
export const getMoviesForMainAction = () => (dispatch) => {
  // dispatch(isLoadingTrue());
  api.getMoviesForMain().then((res) => {
    dispatch(getMoviesForMain(res.data));
  })
    .catch((err) => {
      console.log(err);
      // dispatch(isLoadingFalse());
    })
    .finally(() => {
      // dispatch(isLoadingFalse());
    });
};

export const getGenresAction = () => (dispatch) => {
  api.getGenres().then((res) => {
    dispatch(getGenresList(res.data));
  })
    .catch((err) => {
      console.log(err);
      // dispatch(isLoadingFalse());
    })
    .finally(() => {
      // dispatch(isLoadingFalse());
    });
};

export const getSearchedMoviesAction = (input) => (dispatch) => {
  // dispatch(isLoadingTrue());
  api.getSearchedMovies(input)
    .then((res) => {
      dispatch(getSearchedMovies(res.data));
    })
    .catch((err) => {
      console.log(err);
      // dispatch(isLoadingFalse());
    })
    .finally(() => {
      // dispatch(isLoadingFalse());
    });
};

export const getFavoritesAction = () => (dispatch) => {
  api.getFavorites()
    .then((res) => dispatch(setFavorites(res.data)))
    .catch(() => dispatch(setFavorites([])));
};

export const addToFavoritesAction = (oneFilm) => (dispatch) => {
  api.addToFavoritesAction(oneFilm)
    .then((res) => dispatch(addToFavorites(res.data)));
};

export const deleteFromFavoritesAction = (id) => (dispatch) => {
  api.deleteFromFavorites(id)
    .then(() => dispatch(deleteFromFavorites(id)))
    .catch(console.log);
};

export const getGenreMoviesAction = (id) => (dispatch) => {
  api.getGenreMovies(id)
    .then((res) => {
      dispatch(setGenreMovies(res.data.Movies))
      console.log(res.data.Movies);
    })
    .catch(() => dispatch(setGenreMovies([])));
};

export const getReviewsAction = (id) => (dispatch) => {
  api.getReviews(id)
    .then((res) => dispatch(setReviews(res.data)))
    .catch(() => dispatch(setReviews([])));
};

export const addReviewAction = (e, input) => (dispatch) => {
  e.preventDefault();
  api.addReview(input)
    .then((res) => dispatch(addReview(res.data)));
};
