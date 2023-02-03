import React from 'react';
import { Link } from 'react-router-dom';
import s from './Footer2.module.css';
import logo from '../../images/logo.png';

function Footer2() {
  return (
    <div className={s.container}>
      <div className={s.column_one}>
        <Link to="/favorite" className={s.item}>
          Избранное
        </Link>
        <Link to="/shop" className={s.item}>
          Подписки
        </Link>
        <Link to="/profile" className={s.item}>
          Личный кабинет
        </Link>
      </div>
      <div className={s.column_two}>
        <a href="@info@kinowine.ru" className={s.item}>
          info@kinowine.ru
        </a>
      </div>
      <div className={s.column_three}>
        <img src={logo} alt="footer logo icon" className={`container ${s.footer_logo}`} />
      </div>
    </div>
  );
}

export default Footer2;
