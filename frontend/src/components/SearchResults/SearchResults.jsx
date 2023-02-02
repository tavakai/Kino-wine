import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import s from './SearchResults.module.css';
import { setOpenSearch } from '../../services/actions/actions';

export default function SearchResults() {
  const { searchedMovies } = useSelector((store) => store.movies);
  const dispatch = useDispatch()

  return (
    <div className={s.searchTips}>
      <section className={`${s.psContainer} ${s.ps}`}>
        <ul className={`${s.searchTips__list} ${s.ul}`}>
          {searchedMovies?.map((movie) => (
            <li className={s.searchTips__item}>
              <Link
                to={`/moviepage/${movie.id}`}
                className={s.searchTips__itemInside}
                onClick={() => dispatch(setOpenSearch(false))}
              >
                <div className={s.searchTips__image}>
                  <img src={movie.image} className={s.img} alt="Поиск" title="Поиск" />
                </div>
                <div className={s.searchTips__text}>
                  <div>{movie.title}</div>
                  <div className={s.searchTips__description}>
                    <span className={s.searchTips__rating}>
                      <svg viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="search-tips__icon-star">
                        <path d="M10.357.493a.7.7 0 011.286 0l2.437 5.66a.7.7 0 00.578.42l6.136.569a.7.7 0 01.398 1.223l-4.63 4.066a.7.7 0 00-.22.68l1.354 6.011a.7.7 0 01-1.04.756l-5.299-3.146a.7.7 0 00-.714 0l-5.299 3.146a.7.7 0 01-1.04-.756l1.355-6.01a.7.7 0 00-.221-.68L.808 8.364a.7.7 0 01.398-1.223l6.136-.57a.7.7 0 00.578-.42l2.437-5.66z" fill="currentColor" />
                      </svg>
                      <span>
                        {movie.rating}
                      </span>
                    </span>
                    <div className={s.searchTips__descriptionItem}>
                      {movie.year}
                      {' '}
                      год
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}

        </ul>

      </section>
    </div>

  )
}
