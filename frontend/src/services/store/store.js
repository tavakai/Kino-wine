import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/authReducer';
import moviesReducer from '../reducers/moviesReducer';
import favoritesReducer from '../reducers/favoritesReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    movies: moviesReducer,
    favorites: favoritesReducer,
  },
});

export default store;
