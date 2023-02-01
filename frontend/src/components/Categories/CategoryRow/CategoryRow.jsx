import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Card from '../../Card/Card';
import s from './CategoryRow.module.css';

function CategoryRow({ categories }) {
  const title = `${categories.title[0].toUpperCase()}${categories.title.slice(1)}`
  return (
    <>
      <div className={s.genres__header}>
        <h2 className={s.category__title}>{title}</h2>
        <div className={s.genres__header_icon} />
      </div>
      <Swiper
        slidesPerView={7}
        spaceBetween={20}
          // loop
        loopFillGroupWithBlank
        navigation
        modules={[Navigation]}
        className="swiper_category"
        breakpoints={{
        // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          // when window width is >= 560
          560: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 6,
            spaceBetween: 25,
          },
        }}
      >
        {
          categories?.Movies.map((card) => (
            <SwiperSlide key={card.id}>
              <Card card={card} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}

export default CategoryRow;
