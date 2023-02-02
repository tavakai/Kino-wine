import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import s from './Card.module.css';
import iconAdd from '../../images/icon_favourite.png';
import iconDelete from '../../images/icon_favourite_done.png';
import { addToFavoritesAction, deleteFromFavoritesAction } from '../../services/actions/actions';

function Card({ card }) {
  const {
    id, image, title, rating,
  } = card;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((store) => store.favorites);
  const [inFavorites, setInFavorites] = useState(false);
  const handleVafourite = () => {
    console.log(card);
    if (favorites?.find((el) => el.id === id)) {
      dispatch(addToFavoritesAction(card))
    } else {
      dispatch(deleteFromFavoritesAction(card))
    }
  }
  const checkEvent = (e) => {
    if (e.target.tagName === 'DIV') {
      navigate(`/moviepage/${id}`)
    } else if (e.target.tagName === 'IMG') {
      handleVafourite();
    }
  }
  useEffect(() => {
    if (favorites?.find((el) => el.id === id)) {
      setInFavorites(true)
    } else {
      setInFavorites(false)
    }
  }, [favorites])
  return (
    <div onClick={(e) => checkEvent(e)} className={`${s.card__link} card__movie`}>
      <div className={s.card__interactive}>
        <img src={image} alt="favourite icon" className={`${s.card__image}`} />
        <div className={s.card__display}>
          <div onMouseDown={(e) => checkEvent(e)} type="button" className={`${s.btn_add_to_favorite}`}>
            <img className={s.card__display_favourite_icon} src={inFavorites ? iconDelete : iconAdd} alt="" />
          </div>
          <p className={s.card__display_title}>{title}</p>
          <div className={s.card__display_rateWrapper}>
            <p className={s.card__display_rate}>
              🌟
              {' '}
              {rating}
            </p>
          </div>
        </div>
      </div>
      <p className={s.card__subtitle}>Подписка</p>
    </div>
  );
}

export default Card;
