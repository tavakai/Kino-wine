import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useFormWithValidation from '../../hooks/useFormValidation';
import { regUserAction } from '../../services/actions/actions';
import s from './Register.module.css';

function Register() {
  const dispatch = useDispatch();
  const validateForm = useFormWithValidation();
  const handleChangeName = (e) => {
    validateForm.handleChange(e);
  };
  const handleChangeEmail = (e) => {
    validateForm.handleChange(e);
  };
  const handleChangePassword = (e) => {
    validateForm.handleChange(e);
  };
  const submit = (e) => {
    e.preventDefault();
    dispatch(regUserAction(validateForm.values));
  };

  return (
    <section className="register">
      <div className={s.register__content}>
        <form name="register" className={s.register__form} onSubmit={submit}>
          <fieldset className={s.register__fieldset}>
            <legend>
              <h2 className={s.register__title}>Добро пожаловать!</h2>
            </legend>
            <p className={s.register__input_title}>Имя</p>
            <input
              type="text"
              className={`${s.register__input} ${s.register__input_title}`}
              required
              placeholder="Введите имя"
              onChange={handleChangeName}
              minLength="2"
              maxLength="30"
              name="name"
            />
            <span className={`${s.register__error} ${s.register__error_name}`}>{validateForm.errors.name}</span>
            <p className={s.register__input_title}>E-mail</p>
            <input
              type="email"
              className={`${s.register__input} ${s.register__input_email}`}
              required
              placeholder="Введите email"
              autoComplete="username"
              onChange={handleChangeEmail}
              name="email"
              pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
            />
            <span className={`${s.register__error} ${s.register__error_email}`}>{validateForm.errors.email}</span>
            <p className={s.register__input_title}>Пароль</p>
            <input
              type="password"
              className={`${s.register__input} ${s.register__input_password}`}
              required
              placeholder="Введите пароль"
              autoComplete="current-password"
              minLength="3"
              name="password"
              onChange={handleChangePassword}
            />
            <span className={`${s.register__error} ${s.register__error_password}`}>{validateForm.errors.password}</span>
          </fieldset>
          <button type="submit" disabled={`${validateForm.isValid ? '' : 'disabled'}`} className={`${s.register__btn} ${validateForm.isValid ? s.register__btn_active : ''}`}>Зарегистрироваться</button>
        </form>
        <span className={s.register__signin_text}>
          Уже зарегистрированы?&nbsp;
          <Link to="/auth" className={s.register__signin_btn}>Войти</Link>
        </span>
      </div>
    </section>
  );
}

export default Register;
