import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { authCheckAction } from '../../services/actions/actions';
import MoviePage from '../MoviePage/MoviePage';

import Header from '../Header/Header';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import s from './App.module.css';
import Subscribe from '../Subscribe/Subscribe';
import Favorites from '../Favorites/Favorites';
import GenrePage from '../Genres/GenrePage/GenrePage';
import Footer from '../../Footer/Footer';
import Footer2 from '../Footer2/Footer2';

function App() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(authCheckAction());
  }, [])

  // useEffect(() => {
  //   if (!isLoggedIn) navigate('/')
  // }, [isLoggedIn])

  return (
    <div className={`app_container ${s.App}`}>
      <div className="main_container">
        <Header />
        {/* <StreamComponentTest /> */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/auth" element={<Login />} />
          <Route path="/reg" element={<Register />} />
          <Route path="/favorite" element={<Favorites />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/moviepage/:id" element={<MoviePage />} />
          <Route path="/shop" element={<Subscribe />} />
          <Route path="/genres/:id" element={<GenrePage />} />
        </Routes>
      </div>
      <div className="footer__wrapper">
        <Footer2 />
      </div>
    </div>
  );
}

export default App;
