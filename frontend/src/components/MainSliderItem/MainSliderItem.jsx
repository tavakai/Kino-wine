import React from 'react';
import { Link } from 'react-router-dom';
import s from './MainSliderItem.module.css';

function MainSliderItem({ movie }) {
  const {
    logo, image_horizontal, description, id,
  } = movie;
  console.log(movie, 'movie');
  const shortDescription = `${description.slice(0, 50)}...`;
  return (
    <Link to={`/moviepage/${id}`} className={`main__slider_poster ${s.poster__wrapper}`}>
      <div className={s.poster__layout} />
      <img className={s.poster__img} src={image_horizontal} alt="poster movie background" />
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
