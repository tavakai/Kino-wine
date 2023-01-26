import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './Header.module.css';

function Header() {
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  return (
    <nav className={s.nav}>
      <ul className={s.nav__bar}>
        <li className={s.nav__item}>
          <NavLink to="/" className={s.nav__link}>
            Главная
          </NavLink>
        </li>
        <li className={s.nav__item}>
          <NavLink to="/reg" className={s.nav__link}>Регистрация</NavLink>
        </li>
        <li className={s.nav__item}>
          <NavLink to="/auth" className={s.nav__link}>Войти</NavLink>
        </li>
        {
          isLoggedIn
          && (
            <>
              <li className={`${s.nav__item} ${s.nav__item_login}`}>
                <Link to="/profile">
                  <button type="button" className={s.nav__btn}>
                    { user?.name }
                    <div className={s.nav__icon_wrapper}>
                      icon login
                      {/* <img className="nav__btn-icon" src={btn_icon} alt="icon-login" /> */}
                    </div>
                  </button>
                </Link>
              </li>
              <li className={s.nav__item}>
                <button type="button" className={s.nav__btn}>Войти</button>
              </li>
            </>
          )
        }
      </ul>
    </nav>
  );
}

export default Header;
