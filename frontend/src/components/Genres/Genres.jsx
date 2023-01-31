import React, { useEffect } from 'react';
import { Navigation } from 'swiper';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import GenresItem from './GenresItem/GenresItem';
import s from './Genres.module.css';
import { getGenresAction } from '../../services/actions/actions';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Genres() {
  const { genres } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!genres.length) {
      dispatch(getGenresAction());
    }
  }, [])

  return (
    <>
      <div className={s.genres__header}>
        <h2 className={s.genres__title}>Жанры</h2>
        <div className={s.genres__header_icon} />
      </div>
      <Swiper
        slidesPerView={5}
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
          // when window width is >= 560
          560: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
      >
        {
          genres?.map((genre) => (
            <SwiperSlide key={genre.id}>
              <GenresItem genre={genre} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}

export default Genres;
