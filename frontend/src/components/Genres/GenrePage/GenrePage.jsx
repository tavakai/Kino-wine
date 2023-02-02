import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getGenreMoviesAction } from '../../../services/actions/actions';
import Card from '../../Card/Card';
import s from './GenrePage.module.css';

export default function GenrePage() {
  const { id } = useParams()
  const { genreMovies } = useSelector((store) => store.movies);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getGenreMoviesAction(id))
  }, [])
  return (
    <div style={{ color: 'white', maxWidth: '1126px', width: '100%' }}>
      <div className={s.container}>
        {genreMovies?.length
          ? genreMovies.map((card) => (
            <div key={card.id} className={s.card__item}>
              <Card card={card} />
            </div>
          ))
          : 'В выбранном жанре нет фильмов'}
      </div>
    </div>
  )
}
