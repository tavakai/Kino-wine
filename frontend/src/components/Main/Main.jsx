import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../Card/Card';
import CategorySlider from '../CategorySlider/CategorySlider';
import MainSlider from '../MainSlider/MainSlider';
import s from './Main.module.css';

function Main() {
  const mokData = [
    {
      id: 101,
      title: 'Люди Икс 2',
      image: 'https://st.kp.yandex.net/images/film_big/298.jpg',
      rate: 7.56,
    },
    {
      id: 102,
      title: 'Матрица: Перезагрузка',
      image: 'https://st.kp.yandex.net/images/film_big/299.jpg',
      rate: 7.56,
    },
    {
      id: 103,
      title: 'Лиззи Магуайр',
      image: 'https://st.kp.yandex.net/images/film_big/300.jpg',
      rate: 7.56,
    },
    {
      id: 104,
      title: 'Управление гневом',
      image: 'https://st.kp.yandex.net/images/film_big/301.jpg',
      rate: 7.56,
    },
    {
      id: 105,
      title: 'Управление гневом 2',
      image: 'https://st.kp.yandex.net/images/film_big/302.jpg',
      rate: 7.56,
    },
    {
      id: 106,
      title: 'Управление гневом 3',
      image: 'https://st.kp.yandex.net/images/film_big/303.jpg',
      rate: 7.56,
    },
    {
      id: 107,
      title: 'Управление гневом 4',
      image: 'https://st.kp.yandex.net/images/film_big/303.jpg',
      rate: 7.56,
    },
    {
      id: 108,
      title: 'Управление гневом 5',
      image: 'https://st.kp.yandex.net/images/film_big/304.jpg',
      rate: 7.56,
    },
  ]
  return (
    <>
      <MainSlider />
      <div className={s.list__wrapper}>
        <CategorySlider />
      </div>
    </>
  );
}

export default Main;
