import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import s from './Review.module.css'

export default function ReviewForm({ setShowForm }) {
  const [input, setInput] = useState({ title: '', text: '' })
  const changeHandler = (e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const dispatch = useDispatch()
  return (
    <form
      onSubmit={() => dispatch(addReviewAction(e, input))}
    >
      <div className={s.form__container}>

        <div className={s.form_inputBody}>
          <input
            name="title"
            placeholder="Название рецензии"
            autoComplete="off"
            className={s.form_inputTitle}
            type="text"
            // value=""
            // minLength="10"
            onChange={changeHandler}
          />
        </div>

        <div className={s.form_textareaBody}>
          <textarea
            name="text"
            placeholder="Ваша рецензия"
            className={s.form_textareaText}
            onChange={changeHandler}
          // minLength="500"
          />
        </div>

        <div className={s.form__footer}>
          <div className={s.form__buttonsCover}>

            <button
              onClick={() => setShowForm(false)}
              type="button"
              data-test="reviews_post_review_cancel_button"
              className={s.form__cancelBtn}
            >
              <div className={s.form__btn_text}>Отменить</div>
            </button>

            <button
              type="submit"
              className={s.form__sendBtn}
            >
              <div className={s.form__btn_text}>
                Отправить
              </div>
            </button>

          </div>
        </div>
      </div>
    </form>
  )
}
