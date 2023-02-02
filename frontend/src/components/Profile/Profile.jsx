import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFormWithValidation from '../../hooks/useFormValidation';
import { signOutAction, userChangeAction } from '../../services/actions/actions';
import s from './Profile.module.css';

function Profile() {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const validateForm = useFormWithValidation();
  const [edit, setEdit] = useState(false);

  const handleChangeName = (e) => {
    validateForm.handleChange(e);
  };
  const handleChangeEmail = (e) => {
    validateForm.handleChange(e);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userChangeAction({ ...validateForm.values, currentUser: user.email }));
    setEdit(false);
  };

  const handleLogout = () => {
    dispatch(signOutAction());
  };

  const handleEditActive = () => {
    setEdit(true);
  }
  const handleEditDisabled = () => {
    setEdit(false);
  }

  return (
    <section className="register">
      <div className={s.profile__content}>
        <form name="register" className={s.profile__form} onSubmit={handleSubmit}>
          <fieldset className={s.profile__fieldset}>
            <legend>
              <h2 className={s.profile__title}>{`Твой профиль, ${user?.name}`}</h2>
            </legend>
            <input
              type="text"
              className={`${s.profile__input} ${edit && s.profile__input_active} ${s.profile__input_name}`}
              placeholder={user?.name}
              onChange={handleChangeName}
              name="name"
              minLength="2"
              maxLength="30"
              required
              disabled={!edit ? 'disabled' : null}
            />
            <span className={`${s.profile__error} ${s.profile__error_name}`}>{validateForm.errors.name}</span>
            <input
              type="email"
              className={`${s.profile__input} ${edit && s.profile__input_active} ${s.profile__input_email}`}
              placeholder={user?.email}
              autoComplete="username"
              onChange={handleChangeEmail}
              name="email"
              pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
              disabled={!edit ? 'disabled' : null}
              required
            />
            <span className={`${s.profile__error} ${s.profile__error_email}`}>{validateForm.errors.email}</span>
          </fieldset>
          <p className={s.subscribe__info}>
            Статус подписки:
            {'   '}
            {
              user.isSubscribed ? (
                <span className={s.subscribe__info_active}>Активная</span>
              ) : <span className={s.subscribe__info_none}>Нет подписки</span>
            }
          </p>
          {
              edit ? (
                <>
                  <button type="submit" disabled={`${validateForm.isValid ? '' : 'disabled'}`} className={`${s.profile__btn} ${validateForm.isValid ? s.profile__btn_active : ''}`}>Сохранить</button>
                  <button type="button" onClick={handleEditDisabled} className={`${s.profile__btn} ${s.profile__btn_active}`}>Отменить</button>
                </>
              ) : (
                <button type="button" onClick={handleEditActive} className={`${s.profile__btn} ${s.profile__btn_active}`}>Редактировать</button>
              )
            }
          {
              isLoggedIn && (
                <button type="button" onClick={handleLogout} className={`${s.profile__btn_logout}`}>Выйти</button>
              )
            }
        </form>
      </div>
    </section>
  );
}

export default Profile;
