import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { authCheckAction } from '../../services/actions/actions';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Slider from '../Slider/Slider';
import s from './App.module.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authCheckAction());
  }, [])

  return (
    <div className={s.App}>
      <Header />
      <Slider />
      <Routes>
        <Route path="/auth" element={<Login />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
