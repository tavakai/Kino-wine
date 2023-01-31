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
    <div>
      <div
        className="card"
      >
        <div style={{ display: 'flex', margin: '5px 30px' }}>
          <div>
            <img src={onefilm.image} style={{ width: '300px', height: '400px', borderRadius: '20px' }} className="card-img-top" alt="..." />
          </div>
          <div className="card-body" style={{ color: 'white', padding: '0px 50px' }}>
            <img src={onefilm.logo} alt="..." style={{ width: '250px', height: '100px' }} />
            <h3 className={style.card_title}>{onefilm.title}</h3>
            <h3 className={style.card_title}>{`Год производства:  ${onefilm.year} ` }</h3>
            <div className="card-text">
              {onefilm.description}
            </div>
            <p>
              {' '}
              Рейтинг :
              {' '}
              {onefilm.rating}
            </p>
            <p>
              {' '}
              {onefilm.productionCompanies}
            </p>
            <p>{onefilm.country}</p>
            <p className="btn btn-primary" style={{ color: 'white' }}>{`${onefilm.duration} мин`}</p>
          </div>

        </div>
      </div>
      {actors.filter((_, i) => i <= 3).map((topActor) => (
        <div
          key={topActor.kp_id}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          <img src={topActor.image} alt="..." style={{ width: '100px', height: '140px' }} />
          {' '}
          <p style={{ color: 'white' }}>{topActor.fullname}</p>
        </div>
      ))}

      <button onClick={navigate('/shop')} type="button" className={style.button_buy}>Купить и смотреть </button>

      <div style={{ padding: '5px 30px 30px 50px', display: 'flex', justifyContent: 'center' }}>
        <Player onefilm={onefilm} />
      </div>
    </div>
  )
}
