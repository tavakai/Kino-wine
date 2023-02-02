import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import AnimatedPage from '../AnimatedPage/AnimatedPage';
import Preloader from '../Preloader/Preloader';
import Done from '../Done/Done';
import { subscribeAction } from '../../services/actions/actions';

export default function MyPaiment({ subscribeLevel }) {
  const navigate = useNavigate()
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');
  const [preloader, setPreloader] = useState(false);
  const [done, setDone] = useState(false)
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    setPreloader(true);
    e.preventDefault();
    setTimeout(() => {
      setPreloader(false)
      setDone(true)
      dispatch(subscribeAction(subscribeLevel))
      // in actions
      // const subscribeAction = (subscribeLevel) => (dispatch) => {
      // axios.post('/subscribe',)
      // }
      setTimeout(() => {
        navigate('/')
      }, 2000)
    }, 3000)
  }

  return (
    <AnimatedPage>

      <div
        className="pocket-form"
      >
        {preloader && <Preloader />}
        {done && <Done />}
        <div>
          <div style={{ zIndex: '1', position: 'relative', padding: '40px 0' }}>
            <h3 style={{ color: 'white' }}>Оплатить подписку</h3>
            <h5 style={{ color: 'white' }}>Чтобы начать пользоваться сервисом Кино под вино</h5>
          </div>
          <div className="pocket-form__box">
            <Cards number={number} name={name} expiry={expiry} cvc={cvc} focused={focus} />
            <form
              className="pocket-form__form"
              onSubmit={(e) => handleSubmit(e)}
            >
              <input
                type="tel"
                name="number"
                placeholder="Введите номер карты"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
                className="pocket-form__input"
                required
              />
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
                className="pocket-form__input"
                required
              />
              <input
                type="tel"
                name="expiry"
                placeholder="год/месяц"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
                className="pocket-form__input"
                required
              />
              <input
                type="tel"
                name="cvc"
                placeholder="CVC"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
                className="pocket-form__input"
                required
              />
              <button
                className="pocket-form__btn"
                type="submit"
              >
                Оплатить

              </button>

            </form>
            <div><h6 style={{ color: 'white' }}>Продалжая, я соглашаюсь с Пользовательским соглашением и Политикой конфиденциальности</h6></div>
            {/* <Preloader /> */}
          </div>
        </div>
      </div>

    </AnimatedPage>
  );
}
