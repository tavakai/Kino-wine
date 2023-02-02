import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSearchedMoviesAction, setOpenSearch } from '../../services/actions/actions';
import SearchResults from '../SearchResults/SearchResults';
import s from './SearchInput.module.css';

export default function SearchInput() {
  // const [openSearch, setOpenSearch] = useState(false)
  const openSearch = useSelector((store) => store.openSearch)
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSearchedMoviesAction(input));
  }, [input]);
  useEffect(() => {
    window.onclick = (event) => {
      if (openSearch) {
        if (event.target.id !== 'modal' && event.target.id !== 'modal-btn') {
          dispatch(setOpenSearch(false));
          setInput('')
        }
      }
    }
  }, [openSearch])
  return (
    <div className={s.search__container}>
      <div className={s.header_left} />
      <form className={s.search__form}>
        {openSearch && <div className={s.headerSearch__background} />}
        <input
          id="modal"
          type="text"
          placeholder="Название фильма"
          className={openSearch ? s.search__input : `${s.search__input} ${s.hidden}`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="button"
          title="Закрыть поиск"
          onClick={() => setInput('')}
          className={openSearch ? `${s.search__icon} ${s.search__closeBtn} ${s.search__icon__open}` : s.hidden}
        >
          <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
            <path id="modal-btn" d="M10 1.667A8.333 8.333 0 001.667 10 8.333 8.333 0 0010 18.333 8.333 8.333 0 0018.333 10 8.333 8.333 0 0010 1.667zM7.396 6.305L10 8.91l2.604-2.604 1.09 1.09L11.092 10l2.604 2.604-1.09 1.09L10 11.092l-2.604 2.604-1.09-1.09L8.908 10 6.305 7.396l1.09-1.09z" fill="#8C8C8C" />
          </svg>
        </button>
        <button type="submit" title="Искать" className={openSearch ? `${s.search__icon} ${s.search__icon__open}` : s.hidden}>
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className={s.search__icon}>
            <path d="M20.71 19.29L17 15.61A9 9 0 1015.61 17l3.68 3.68a1.002 1.002 0 001.42 0 1 1 0 000-1.39zM10 17a7 7 0 110-14 7 7 0 010 14z" fill="#fff" />
          </svg>
        </button>
        {openSearch && <SearchResults />}
      </form>
      <div className={s.header_right}>
        <svg
          onClick={() => {
            dispatch(setOpenSearch(false))
            setInput('')
          }}
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          className={openSearch ? s.headerSearch__close : s.hidden}
        >
          <path data-v-75d9214c="" d="M14 1.415L12.585 0 7 5.585 1.415 0 0 1.415 5.585 7 0 12.585 1.415 14 7 8.415 12.585 14 14 12.585 8.415 7 14 1.415z" fill="#fff" />
        </svg>
      </div>
    </div>
  )
}
