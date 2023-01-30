import React from 'react';
import MainSlider from '../MainSlider/MainSlider';
import s from './Main.module.css';
import Genres from '../Genres/Genres'

function Main() {
  return (
    <>
      <MainSlider />
      <section className={s.lists__wrapper}>
        <Genres />
      </section>
    </>
  );
}

export default Main;
