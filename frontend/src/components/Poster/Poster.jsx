import React from 'react';
import s from './Poster.module.css';

function Poster({ movie }) {
  const { title, description, poster } = movie;
  return (
    <div className={s.poster__wrapper}>
      <img className={s.poster__img} src={poster} alt="poster movie background" />
      <h1 className={s.poster__title}>
        {title}
      </h1>
      <p className={s.poster__description}>
        {description}
      </p>
      <button type="button" onClick={() => console.log('Ckick to ', title)} className={s.poster__button}>
        Подробнее
      </button>
    </div>
  );
}

export default Poster;
