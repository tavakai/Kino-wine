import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFavoritesAction } from '../../services/actions/actions';
import Card from '../Card/Card';
// import s from './Favorites.module.css';

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!favorites.length) {
      dispatch(getFavoritesAction());
    }
  }, [])
  return (
    <div style={{ color: 'white' }}>
      {favorites?.length
        ? favorites.map((card) => <Card key={card.id} card={card} />)
        : 'Пока что нет фильмов в Избранном'}
    </div>
  )
}
