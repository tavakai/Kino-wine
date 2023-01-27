import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useFormWithValidation from '../../hooks/useFormValidation';
import { authUserAction } from '../../services/actions/actions';
import s from './Login.module.css';

function Login() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const validateForm = useFormWithValidation();

  const handleChangeEmail = (e) => {
    validateForm.handleChange(e);
  };
  const handleChangePassword = (e) => {
    validateForm.handleChange(e);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authUserAction(validateForm.values));
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn]);

  return (
    <section className={s.login}>
      <div className={`${s.content} ${s.login__content}`}>
        <form name="login" className={s.login__form} onSubmit={handleSubmit}>
          <fieldset className={s.login__fieldset}>
            <legend>
              <h2 className={s.login__title}>Рады видеть!</h2>
            </legend>
            <p className={s.login__input_title}>E-mail</p>
            <input
              type="email"
              className={`${s.login__input} ${s.login__input_email}`}
              required
              name="email"
              placeholder="Введите email"
              autoComplete="username"
              onChange={handleChangeEmail}
              pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
            />
            <span className={`${s.login__error} ${s.login__error_email}`}>{validateForm.errors.email}</span>
            <p className={s.login__input_title}>Пароль</p>
            <input
              type="password"
              className={`${s.login__input} ${s.login__input_password}`}
              required
              name="password"
              minLength="3"
              placeholder="Введите пароль"
              autoComplete="current-password"
              onChange={handleChangePassword}
            />
            <span className={`${s.login__error} ${s.login__error_password}`}>{validateForm.errors.password}</span>
          </fieldset>
          <button type="submit" disabled={`${validateForm.isValid ? '' : 'disabled'}`} className={`${s.login__btn} ${validateForm.isValid ? s.login__btn_active : ''}`}>Войти</button>
        </form>
        <span className={s.login__signup_text}>
          Ещё не зарегистрированы?&nbsp;
          <Link to="/reg" className={s.login__signup_btn}>Регистрация</Link>
        </span>
      </div>
    </section>
  );
}

export default Login;
