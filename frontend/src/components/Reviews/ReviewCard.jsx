import React from 'react'
import s from './Review.module.css'

export default function ReviewCard({ review, users }) {
  const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
  const revDate = new Date((review.createdAt).slice(0, 10)).toLocaleDateString()
  const newDate = `${revDate.slice(0, 2)} ${month.find((el, ind) => ind + 1 === Number(revDate.slice(3, 5)))} 20${revDate.slice(-2)}`
  return (
    <div className={s.review_inner}>
      <div className={s.review_author}>
        {users.find((user) => user.id === review.user_id).name}
      </div>
      <div className={`${s.review_text} ${s.review_title}`}>{review.title}</div>
      <div className={s.review_textBlock}>{review.text}</div>
      <div className={s.review_date}>
        {newDate}
      </div>
      <div className={s.vote}>
        <button className={s.vote__button} type="button">
          <div className={s.voteUp__icon} />
        </button>
        <div className={review.likes > 0 ? s.vote__valuePositive : s.vote__valueNegative}>
          {review.likes}
        </div>
        <button className={s.vote__button} type="button">
          <div className={s.voteDown__icon} />
        </button>
      </div>
    </div>
  )
}
