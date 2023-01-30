/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Player from '../Player/Player'
import style from './MoviePage.module.css'

export default function DeskCard({ onefilm }) {
  console.log(onefilm, 'onefilm');
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
            <h3 className={style.card_title}>{onefilm.title}</h3>
            <h3 className={style.card_title}>{`Год производства:  ${onefilm.year} ` }</h3>
            <div className="card-text">
              {onefilm.description}
            </div>
            <p className="btn btn-primary" style={{ color: 'white' }}>{`${onefilm.duration} мин`}</p>
          </div>
        </div>
      </div>
      <div style={{ padding: '5px 30px 30px 50px', display: 'flex', justifyContent: 'center' }}>
        <Player onefilm={onefilm} />
      </div>
    </div>
  )
}
