/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import Player from '../Player/Player'
import style from './MoviePage.module.css'

export default function DeskCard({ onefilm }) {
  console.log(onefilm, 'onefilm');
  // const [film, setFilm] = useState(null)

  // useEffect(() => {
  //   setFilm(onefilm?.actors && console.log(JSON.parse(onefilm?.actors)))
  // }, [onefilm])
  // console.log(film, 'film');
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
            <div>{onefilm.actor}</div>
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
          {/* {film.map((el) => (
            <div>
              {' '}
              {el}
            </div> */}
          {/* ))} */}
        </div>
      </div>
      <div style={{ padding: '5px 30px 30px 50px', display: 'flex', justifyContent: 'center' }}>
        <Player onefilm={onefilm} />
      </div>
    </div>
  )
}
