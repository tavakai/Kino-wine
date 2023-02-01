import React, { useEffect } from 'react';
import { Navigation } from 'swiper';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import s from './Categories.module.css';
import { getCategoriesWithMoviesAction } from '../../services/actions/actions';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Card from '../Card/Card';
import CategoryRow from './CategoryRow/CategoryRow';

function Categories() {
  const { categories } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!categories.length) {
      dispatch(getCategoriesWithMoviesAction());
    }
  }, [])

  return categories?.map((category) => (
    <CategoryRow key={category.id} categories={category} />
  ))
}

export default Categories;
