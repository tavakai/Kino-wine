import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSwiperSlide } from 'swiper/react';
import s from './MainSliderItem.module.css';

function MainSliderItem({ movie }) {
  const [isHidden, setIsHidden] = useState('');
  const swiperSlide = useSwiperSlide();
  const {
    logo, image_horizontal, description, id,
  } = movie;
  const shortDescription = `${description.slice(0, 150)}...`;

  useEffect(() => {
    if (swiperSlide.isActive) {
      setTimeout(
        () => (swiperSlide.isActive ? setIsHidden(s.poster__img_hidden) : setIsHidden('')),
        2000,
      )
    } else {
      setIsHidden('')
    }
    return () => {
      clearInterval();
    }
  })

  return (
    <Link to={`/moviepage/${id}`} className={`main__slider_poster ${s.poster__wrapper}`}>
      <div className={s.poster__layout} />
      {
        swiperSlide.isActive && <video className={s.poster__background_video} muted autoPlay loop src="/content/fortune.mp4" />
      }
      <div className="" />
      <img className={`${s.poster__img} ${isHidden}`} src={image_horizontal} alt="poster movie background" />
      <img className={s.poster__logo} src={logo} alt="poster movie title" />
      <p className={s.poster__description}>
        {shortDescription}
      </p>
      <button type="button" onClick={() => console.log('Ckick to ', title)} className={s.poster__button}>
        Подробнее
      </button>
    </Link>
  );
}

export default MainSliderItem;
