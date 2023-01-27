import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './Header.module.css';
import userIcon from '../../images/btn-icon.png';
import logo from '../../images/logo.png';

function Header() {
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  return (
    <nav className={s.nav}>
      <ul className={s.nav__bar}>
        {
          isLoggedIn
            ? (
              <>
                <li className={s.nav__item}>
                  <NavLink to="/" className={s.nav__logo}>
                    <img src={logo} className={s.nav__logo} alt="logo icon movie" />
                  </NavLink>
                </li>
                <li className={s.nav__item}>
                  <NavLink to="/" className={s.nav__link}>
                    Главная
                  </NavLink>
                </li>
                <li className={s.nav__item}>
                  <NavLink to="/favorite" className={s.nav__link}>
                    Избранное
                  </NavLink>
                </li>
                <li className={s.nav__item}>
                  <NavLink to="/shop" className={s.nav__link}>
                    Магазин
                  </NavLink>
                </li>
                <li className={`${s.nav__item} ${s.nav__item_login}`}>
                  <Link to="/profile">
                    <button type="button" className={s.nav__btn}>
                      <span className={s.nav__btn_text}>
                        { `${user?.name[0].toUpperCase()}${user?.name.slice(1)}` }
                      </span>
                      <div className={s.nav__icon_wrapper}>
                        <img className={s.nav__btn_icon} src={userIcon} alt="icon-login" />
                      </div>
                    </button>
                  </Link>
                </li>
              </>
            ) : (
              <ul className={s.nav__bar}>
                <li className={s.nav__item}>
                  <NavLink to="/reg" className={s.nav__link}>Регистрация</NavLink>
                </li>
                <li className={s.nav__item}>
                  <NavLink to="/auth" className={s.nav__link}>Войти</NavLink>
                </li>
              </ul>
            )
        }
      </ul>
    </nav>
  );
}

export default Header;
