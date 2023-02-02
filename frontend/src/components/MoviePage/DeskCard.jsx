/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addToFavoritesAction, deleteFromFavoritesAction, getFavoritesAction } from '../../services/actions/actions'
import Player from '../Player/Player'
import style from './MoviePage.module.css'
import Reviews from '../Reviews/Reviews';
import FullScreenPlayer from '../FullScreenPlayer/FullScreenPlayer';

export default function DeskCard({ onefilm }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const favorites = useSelector((store) => store.favorites)
  const { user } = useSelector((store) => store.auth)
  const [inFavorites, setInFavorites] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    dispatch(getFavoritesAction());
  }, [])

  useEffect(() => {
    if (favorites?.find((el) => el.id === onefilm.id)) {
      setInFavorites(true)
    } else {
      setInFavorites(false)
    }
  }, [favorites])

  const actors = onefilm.actors.replace(/\[/g, '').split(/},{/g).map((str, i, arr) => {
    if ((i !== 0) && (i !== arr.length - 1)) {
      return JSON.parse(`{${str}}`)
    }
    return i === 0 ? JSON.parse(`${str}}`) : JSON.parse(`{${str.replace(']', '')}`)
  })
  // Метод проверки кнопки и запуска полноэкранного плеера (ДОДЕЛАТЬ)
  const checkSubscribe = () => {
    if (user.isSubscribed) {
      setFullscreen(true);
    }
    return navigate('/shop')
  }

  const checkButtonText = () => {
    if (user.isSubscribed) {
      return 'Смотреть сейчас'
    }
    return 'Оформить подписку'
  }
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setFullscreen(false);
    })
  }, [fullscreen])

  return (
    <div style={{ maxWidth: '1126px', width: '100%', margin: '0 auto' }}>
      <div
        className="card"
      >
        <div className={style.style_card}>
          <div style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
          }}
          >
            <img src={onefilm.image} className={style.style_img} alt="..." />
            <div className={style.showPromo__actions}>
              <button onClick={checkSubscribe} type="button" className={style.button_buy}>{checkButtonText()}</button>
              {inFavorites
                ? (
                  <button onClick={() => dispatch(deleteFromFavoritesAction(onefilm.id))} data-v-58cacffa="" type="button" className={style.btn_add_to_favorite}>
                    <svg data-v-58cacffa="" width="17" height="13" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
                      <path data-v-58cacffa="" d="M5.707 9.293L15 0l1.415 1.414L5.707 12.121 0 6.414 1.414 5l4.293 4.293z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
                    </svg>
                  </button>
                )
                : (
                  <button onClick={() => dispatch(addToFavoritesAction(onefilm))} data-v-58cacffa="" type="button" className={style.btn_add_to_favorite}>
                    <svg data-v-58cacffa="" width="14" height="20.186" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
                      <path data-v-58cacffa="" d="M1.013 20.111l5.674-2.836a.7.7 0 01.626 0l5.674 2.837A.7.7 0 0014 19.485V2a2 2 0 00-2-2H2a2 2 0 00-2 2v17.485a.7.7 0 001.013.626zM7 14.883l-5 2.5V2h10v15.382z" fill="currentColor" />
                    </svg>
                  </button>
                )}
            </div>
          </div>

          <div className={style.description_text}>
            <div>
              <img src={onefilm.logo} alt="..." className={style.style_logo} />
            </div>
            <div><h3 className={style.card_title}>{`Год производства:  ${onefilm.year} `}</h3></div>
            <div className={style.cardText}>
              {onefilm.description}
            </div>
            <Player onefilm={onefilm.path_trailer} full="/content/StarWars4.mp4" fullscreen={fullscreen} />
          </div>
          <div style={{ color: 'white' }}>
            <div>
              <p>
                {' '}
                Рейтинг :
                {' '}
                {onefilm.rating}
                {' '}
                {'⭐'.repeat(Math.floor(onefilm.rating))}
              </p>
              <p>
                {' '}
                {onefilm.productionCompanies}
              </p>
              <p>
                Страна:
                {` ${onefilm.country}`}
              </p>
              <p className="btn btn-primary" style={{ color: 'white' }}>{`${onefilm.duration} мин`}</p>
            </div>
            <div className={style.card_actor_container}>
              {actors.filter((_, i) => i <= 14).map((topActor) => (
                <div
                  key={topActor.kp_id}
                  className={style.card_actor}
                >
                  <img src={topActor.image} alt="..." className={style.style_img_actor} />
                  {' '}
                  <p className={style.style_fullname_actor}>{topActor.fullname}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Reviews id={onefilm.id} />
    </div>
  )
}
