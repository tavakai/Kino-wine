import React from 'react';
import { Link } from 'react-router-dom';
import s from './GenresItem.module.css';

function GenresItem({ genre }) {
  // console.log(genre);
  return (
    <Link to={`/genres/${genre.id}`}>
      <div className={s.genres__item_wrapper}>
        <img className={s.genres__item_image} src={genre.image} alt="genre poster" />
      </div>
    </Link>
  );
}

export default GenresItem;
