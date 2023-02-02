import React, { useEffect } from 'react';
import { Navigation } from 'swiper';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import s from './Categories.module.css';
import { getCategoriesWithMoviesAction, getHighRatedAction, getWeekTopsAction } from '../../services/actions/actions';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Card from '../Card/Card';
import CategoryRow from './CategoryRow/CategoryRow';

function Categories() {
  // const { categories } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const { weekTops } = useSelector((store) => store.movies);
  const { highRated } = useSelector((store) => store.movies);
  const categories = [
    {
      title: 'Топ недели',
      Movies: weekTops,
    }, {
      title: 'Фильмы с высокой оценкой',
      Movies: highRated,
    }]

  useEffect(() => {
    // if (!categories.length) {
    //   dispatch(getCategoriesWithMoviesAction());
    // }
    dispatch(getWeekTopsAction())
    dispatch(getHighRatedAction())
  }, [])

  return (
    categories?.map((category) => (
      <CategoryRow category={category} />
    ))
  )
}

export default Categories;
