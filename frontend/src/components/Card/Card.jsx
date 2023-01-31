import React from 'react';
import { Link } from 'react-router-dom';
import s from './Card.module.css';

function Card({ card }) {
  const {
    id, image, title, rate,
  } = card;
  return (
    // <div className={s.card__wrapper}>
    <Link to={`/moviepage/${id}`} className={s.card__link}>
      {/* <div className={s.card__image_wrapper}> */}
      <span className={s.card__rate}>{rate}</span>
      <img src={image} alt="" className={s.card__image} />
      {/* </div> */}
      <div className={s.card__detail}>
        <h6 className={s.card__detail_title}>
          {title}
        </h6>
      </div>
    </Link>
    // </div>
  );
}

export default Card;
