import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './Header.module.css';
import userIcon from '../../images/btn-icon.png';
import logo from '../../images/logo.png';
import SearchResults from '../SearchResults/SearchResults';

function Header() {
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const [openSearch, setOpenSearch] = useState(false)

  return (
    <nav className={s.nav}>
      {
        isLoggedIn
          ? (
            <>
              <ul className={openSearch ? s.hidden : s.nav__bar}>
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
                <li className={s.nav__item}>
                  <button
                    type="submit"
                    title="Искать"
                    className={s.search__icon}
                    onClick={() => setOpenSearch(true)}
                  >
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className={s.search__icon}>
                      <path d="M20.71 19.29L17 15.61A9 9 0 1015.61 17l3.68 3.68a1.002 1.002 0 001.42 0 1 1 0 000-1.39zM10 17a7 7 0 110-14 7 7 0 010 14z" fill="#fff" />
                    </svg>
                  </button>
                </li>
                <li className={`${s.nav__item} ${s.nav__item_login}`}>
                  <Link to="/profile">
                    <button type="button" className={s.nav__btn}>
                      <span className={s.nav__btn_text}>
                        {`${user?.name[0].toUpperCase()}${user?.name.slice(1)}`}
                      </span>
                      <div className={s.nav__icon_wrapper}>
                        <img className={s.nav__btn_icon} src={userIcon} alt="icon-login" />
                      </div>
                    </button>
                  </Link>
                </li>
              </ul>
              <div className={s.search__container}>
                <div className={s.header_left} />
                <form className={s.search__form}>
                  {openSearch && <div className={s.headerSearch__background} />}
                  <input
                    type="text"
                    placeholder="Название фильма"
                    className={openSearch ? s.search__input : `${s.search__input} ${s.hidden}`}
                  />
                  <button type="submit" title="Искать" className={openSearch ? `${s.search__icon} ${s.search__icon__open}` : s.hidden}>
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className={s.search__icon}>
                      <path d="M20.71 19.29L17 15.61A9 9 0 1015.61 17l3.68 3.68a1.002 1.002 0 001.42 0 1 1 0 000-1.39zM10 17a7 7 0 110-14 7 7 0 010 14z" fill="#fff" />
                    </svg>
                  </button>
                  {openSearch && <SearchResults />}
                </form>
                <div className={s.header_right}>
                  <svg onClick={() => setOpenSearch(false)} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20" className={openSearch ? s.headerSearch__close : s.hidden}>
                    <path data-v-75d9214c="" d="M14 1.415L12.585 0 7 5.585 1.415 0 0 1.415 5.585 7 0 12.585 1.415 14 7 8.415 12.585 14 14 12.585 8.415 7 14 1.415z" fill="#fff" />
                  </svg>
                </div>
              </div>
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
    </nav>
  );
}

export default Header;
