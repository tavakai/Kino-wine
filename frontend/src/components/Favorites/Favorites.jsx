import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFavoritesAction } from '../../services/actions/actions';
import Card from '../Card/Card';
import s from './Favorites.module.css';

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavoritesAction());
  }, [])
  return (
    <div style={{ color: 'white' }}>
      <div className={s.container}>
        {favorites?.length
          ? favorites.map((card) => (
            <div key={card.id} className={s.card__item}>
              <Card card={card} />
            </div>
          ))
          : 'Пока что нет фильмов в Избранном'}
      </div>
    </div>
  )
}
