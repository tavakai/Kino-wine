/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Player from '../Player/Player'

export default function DeskCard({ onefilm }) {
  return (
    <>
      <div>
        <div className="card" style={{ width: '18rem' }}>
          <img src={onefilm.image} style={{ width: '400px', height: '500px' }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{onefilm.title}</h5>
            <p className="card-text">{onefilm.description}</p>
            <a href="#" className="btn btn-primary">{`${onefilm.duration}мин`}</a>
          </div>
        </div>
      </div>
      <Player onefilm={onefilm} />
    </>
  )
}
