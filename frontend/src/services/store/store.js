import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/authReducer';
import moviesReducer from '../reducers/moviesReducer';
import favoritesReducer from '../reducers/favoritesReducer';
import reviewsReducer from '../reducers/reviewsReducer';
import searchModalReducer from '../reducers/searchModalReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    movies: moviesReducer,
    favorites: favoritesReducer,
    reviews: reviewsReducer,
    openSearch: searchModalReducer,
  },
});

export default store;
