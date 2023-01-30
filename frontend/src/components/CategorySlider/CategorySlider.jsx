import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../Card/Card';
import s from './CategorySlider.module.css';

function CategorySlider(props) {
  return (
    <>
      <h2 className={s.category__title}>category</h2>
      <Swiper
        slidesPerView={7}
        spaceBetween={30}
          // loop
        loopFillGroupWithBlank
        navigation
        modules={[Navigation]}
        className="swiper_categories"
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          560: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 7,
            spaceBetween: 40,
          },
        }}
      >
        {
          mokData.map((card) => (
            <SwiperSlide key={card.id}>
              <Card card={card} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}

export default CategorySlider;
