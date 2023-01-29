import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { authCheckAction } from '../../services/actions/actions';
import MoviePage from '../MoviePage/MoviePage';

import Header from '../Header/Header';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import s from './App.module.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authCheckAction());
  }, [])

  return (
    <div className={s.App}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/moviepage/:id" element={<MoviePage />} />
      </Routes>
    </div>
  );
}

export default App;
