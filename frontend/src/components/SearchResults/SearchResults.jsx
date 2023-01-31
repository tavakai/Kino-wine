import React from 'react'
import s from './SearchResults.module.css';

export default function SearchResults() {
  return (
    <div className={s.searchTips}>
      <section className={`${s.psContainer} ${s.ps}`}>
        <ul className={`${s.searchTips__list} ${s.ul}`}>
          {/* <li className={s.searchTips__item}>
            <a href="/show/smotritelmayaka" className="search-tips__item-inside">
              <div className="search-tips__image">
                <img src="https://pic.uma.media/pic/cardimage/1c/53/1c532bbfa25ccb5735af510d3a428e89.jpg?size=120" alt="Поиск" title="Поиск" />
              </div>
              <div className="search-tips__text">
                <div>Смотритель маяка</div>
                <div className="search-tips__description">
                  <div className="search-tips__description-item">
                    Драма
                  </div>
                </div>
              </div>
            </a>
          </li> */}
        </ul>

        {/* <div className="ps__rail-y" style={{ top: '0px', height: '511px', right: '3px' }}>
          <div className="ps__thumb-y" style={{ top: '0px', height: '473px' }} />
        </div> */}
      </section>
    </div>
  )
}
