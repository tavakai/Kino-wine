/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Player from '../Player/Player'
import style from './MoviePage.module.css'

export default function DeskCard({ onefilm }) {
  const navigate = useNavigate()
  const actors = onefilm.actors.replace(/\[/g, '').split(/},{/g).map((str, i, arr) => {
    if ((i !== 0) && (i !== arr.length - 1)) {
      return JSON.parse(`{${str}}`)
    }
    return i === 0 ? JSON.parse(`${str}}`) : JSON.parse(`{${str.replace(']', '')}`)
  })

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
            {/* <div className={style.style_player}> */}
            <Player onefilm={onefilm} />
            {/* </div> */}
          </div>

          <div className={style.description_text}>
            <div>
              <img src={onefilm.logo} alt="..." className={style.style_logo} />
            </div>
            <div><h3 className={style.card_title}>{`Год производства:  ${onefilm.year} ` }</h3></div>
            <div className="card-text">
              {onefilm.description}
            </div>

          </div>
          <div style={{ color: 'white' }}>
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
        </div>
      </div>
      <div className={style.card_actor_container}>
        {actors.filter((_, i) => i <= 6).map((topActor) => (
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

      <button onClick={() => navigate('/shop')} type="button" className={style.button_buy}>Купить и смотреть </button>
    </div>
  )
}
