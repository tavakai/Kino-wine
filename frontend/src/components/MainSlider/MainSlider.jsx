import React, { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper';
import { useDispatch, useSelector } from 'react-redux';
import MainSliderItem from '../MainSliderItem/MainSliderItem';
import s from './MainSlider.module.css';
import { getMoviesForMainAction } from '../../services/actions/actions';

export default function MainSlider() {
  const { mainSliderMovies } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!mainSliderMovies.length) {
      dispatch(getMoviesForMainAction());
    }
  }, [])

  return (
    <div className={s.slider__wrapper}>
      {
        mainSliderMovies.length && (
          <Swiper
            slidesPerView="2"
            spaceBetween={10}
            centeredSlides
            grabCursor
            navigation
            pauseOnMouseEnter
            // autoplay={{
            //   delay: 7000,
            // }}
            loop
            modules={[Navigation, Autoplay]}
            slideNextClass="swiper-slide-next-main"
            slidePrevClass="swiper-slide-prev-main"
            className="mySwiperMain"
          >
            {
          mainSliderMovies.map((el) => (
            <SwiperSlide key={el.id}>
              <MainSliderItem movie={el} />
            </SwiperSlide>
          ))
        }
          </Swiper>
        )
      }
    </div>
  );
}
