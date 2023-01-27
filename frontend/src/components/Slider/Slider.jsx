import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectFade, Navigation } from 'swiper';

export default function Slider() {
  return (
    <div style={{ height: '400px' }}>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop
        navigation
        modules={[Navigation, EffectFade]}
        effect="fade"
        className="mySwiper"
      >
        {[1, 2, 3].map((i, el) => (
          <SwiperSlide>
            Slide
            {el}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
