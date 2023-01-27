import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Register from '../Register/Register';
import s from './App.module.css';

function App() {
  return (
    <div className={s.App}>
      <Header />
      <Routes>
        <Route path="/auth" element={<Login />} />
        <Route path="/reg" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
