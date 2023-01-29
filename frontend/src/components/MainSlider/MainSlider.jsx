import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Controller } from 'swiper';
import MainSliderItem from '../MainSliderItem/MainSliderItem';
import s from './MainSlider.module.css';

export default function MainSlider() {
  const mokData = [
    {
      id: '123',
      title: 'Плохой доктор',
      description: 'Медицинский триллер по реальной истории об опасном хирурге',
      poster: 'https://thumbs.dfs.ivi.ru/storage23/contents/2/9/11a253ee79a7c08a8c7c399509ca72.jpg/1216x524/?q=60',
    },
    {
      id: '1234',
      title: 'Треугольник печали',
      description: 'Избалованные пассажиры терпят крушение во время круиза и остаются один на один с реальностью',
      poster: 'https://thumbs.dfs.ivi.ru/storage31/contents/c/e/f26f2006a3942f4f930717895dccd8.jpg/1216x524/?q=60',
    },
    {
      id: '123435',
      title: 'Ветреный',
      description: 'Миран жаждет отомстить Хазару, но влюбляется в его дочь. Турецкая мелодрама о многолетней вражде и прощении',
      poster: 'https://avatars.mds.yandex.net/get-ott/236744/2a0000017f9887d18b81910ca433dad1c656/1747x982',
    },
    {
      id: '1234123',
      title: 'Ветреный',
      description: 'Миран жаждет отомстить Хазару, но влюбляется в его дочь. Турецкая мелодрама о многолетней вражде и прощении',
      poster: 'https://avatars.mds.yandex.net/get-ott/236744/2a0000017f9887d18b81910ca433dad1c656/1747x982',
    },
  ]
  return (
    <div className={s.slider__wrapper}>
      <Swiper
        slidesPerView="2"
        spaceBetween={10}
        centeredSlides
        grabCursor
        navigation
        loop
        modules={[Navigation, Controller]}
        slideNextClass="swiper-slide-next-main"
        slidePrevClass="swiper-slide-prev-main"
        nextEl="swiper-button-next-main"
        prevEl="swiper-button-prev-main"
        className="mySwiperMain"
      >
        {
          mokData.map((el) => (
            <SwiperSlide key={el.id}>
              <MainSliderItem movie={el} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
}
