import React from 'react';
import MainSlider from '../MainSlider/MainSlider';
import s from './Main.module.css';
import Genres from '../Genres/Genres'
import Categories from '../Categories/Categories';

function Main() {
  return (
    <>
      <MainSlider />
      <section className={s.lists__wrapper}>
        <Genres />
        <Categories />
      </section>
    </>
  );
}

export default Main;
