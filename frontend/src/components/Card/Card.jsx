import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import s from './Card.module.css';

function Card({ card }) {
  const {
    id, image, title, rate,
  } = card;
  const navigate = useNavigate();
  const checkEvent = (e) => {
    if (e.target.tagName === 'DIV') {
      navigate(`/moviepage/${id}`)
    } else if (e.target.tagName === 'svg') {
      console.log('add to favorite', title);
    }
  }
  return (
    <div onClick={(e) => checkEvent(e)} className={`${s.card__link} card__movie`}>
      <div className={s.card__interactive}>
        <span className={s.card__rate}>{rate}</span>
        <img src={image} alt="" className={s.card__image} />
        <div className={s.card__display}>
          <button onMouseDown={(e) => checkEvent(e)} type="button" className={s.btn_add_to_favorite}>
            <svg width="50%" height="70%" viewBox="0 0 15 21" data-v-58cacffa="" fill="none" xmlns="http://www.w3.org/2000/svg" className="test">
              <symbol id="paragraph"><path data-v-58cacffa="" d="M1.013 20.111l5.674-2.836a.7.7 0 01.626 0l5.674 2.837A.7.7 0 0014 19.485V2a2 2 0 00-2-2H2a2 2 0 00-2 2v17.485a.7.7 0 001.013.626zM7 14.883l-5 2.5V2h10v15.382z" fill="currentColor" /></symbol>
              <use xlinkHref="#paragraph" />
            </svg>
          </button>
        </div>
      </div>
      <p className={s.card__subtitle}>Подписка</p>
    </div>
  );
}

export default Card;
