/* eslint-disable import/no-duplicates */
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import s from './Header.module.css';
import userIcon from '../../images/btn-icon.png';
import logo from '../../images/logo.png';
import logopng from '../../images/logopng.png';
import SearchInput from '../SearchInput/SearchInput';
import { setOpenSearch } from '../../services/actions/actions';

function Header() {
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  console.log(user, 'user');
  const dispatch = useDispatch()
  const openSearch = useSelector((store) => store.openSearch)

  return (
    <nav className={s.nav}>
      {
        isLoggedIn
          ? (
            <>
              <ul className={openSearch ? s.hidden : s.nav__bar}>
                <li className={s.nav__item}>
                  <NavLink to="/" className={s.nav__logo}>
                    {/* TODO: user.isSubscrebed ===>>> красим лого  */}
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
                    Подписки
                  </NavLink>
                </li>
                <li className={s.nav__item}>
                  <button
                    type="submit"
                    title="Искать"
                    className={s.search__icon}
                    onClick={() => dispatch(setOpenSearch(true))}
                  >
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className={s.search__icon}>
                      <path d="M20.71 19.29L17 15.61A9 9 0 1015.61 17l3.68 3.68a1.002 1.002 0 001.42 0 1 1 0 000-1.39zM10 17a7 7 0 110-14 7 7 0 010 14z" fill="#fff" />
                    </svg>
                  </button>
                </li>
                <li className={user.isSubscribed ? `${s.nav_item_two}` : `${s.nav__item} ${s.nav__item_login}`}>
                  <Link to="/profile">
                    <button type="button" className={user.isSubscribed ? `${s.nav__btn_two}` : `${s.nav__btn}`}>
                      <span className={s.nav__btn_text}>
                        {`${user?.name[0].toUpperCase()}${user?.name.slice(1)}`}
                      </span>
                      <div className={s.nav__icon_wrapper}>
                        <img className={s.nav__btn_icon} src={user.isSubscribed ? logopng : userIcon} alt="icon-login" />
                      </div>
                    </button>
                  </Link>
                </li>
              </ul>
              <SearchInput /* openSearch={openSearch} setOpenSearch={setOpenSearch} */ />
            </>
          ) : (
            <>
              <ul className={openSearch ? s.hidden : s.nav__bar}>
                <li className={s.nav__item}>
                  <NavLink to="/" className={s.nav__link}>
                    Главная
                  </NavLink>
                </li>

                <li className={s.nav__item}>
                  <button
                    type="submit"
                    title="Искать"
                    className={s.search__icon}
                    onClick={() => dispatch(setOpenSearch(true))}
                  >
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className={s.search__icon}>
                      <path d="M20.71 19.29L17 15.61A9 9 0 1015.61 17l3.68 3.68a1.002 1.002 0 001.42 0 1 1 0 000-1.39zM10 17a7 7 0 110-14 7 7 0 010 14z" fill="#fff" />
                    </svg>
                  </button>
                </li>
                <li className={s.nav__item}>
                  <NavLink to="/reg" className={s.nav__link}>Регистрация</NavLink>
                </li>
                <li className={s.nav__item}>
                  <NavLink to="/auth" className={s.nav__link}>Войти</NavLink>
                </li>
              </ul>
              <SearchInput /* openSearch={openSearch} setOpenSearch={setOpenSearch} */ />
            </>
          )
      }
    </nav>
  );
}

export default Header;
