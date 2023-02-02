import React, { useEffect, useState } from 'react'
import axios from 'axios'
import s from './Review.module.css'

export default function ReviewCard({ review, users }) {
  const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
  const revDate = new Date((review.createdAt).slice(0, 10)).toLocaleDateString()
  const newDate = `${revDate.slice(0, 2)} ${month.find((el, ind) => ind + 1 === Number(revDate.slice(3, 5)))} 20${revDate.slice(-2)}`
  const [likes, setLikes] = useState(review.likes)
  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)
  useEffect(() => {
    axios.put(`http://localhost:3001/reviews/${review.id}`, { likes })
  }, [likes])
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
        {!disliked
          ? (
            <button
              onClick={
                !liked
                  ? () => {
                    setLikes(likes + 1)
                    setLiked(true)
                  }
                  : () => {
                    setLikes((prev) => prev - 1)
                    setLiked(false)
                  }
              }
              className={s.vote__button}
              type="button"
            >
              <div className={!liked ? s.voteUp__icon : `${s.voteUp__icon} ${s.voteUp__icon__liked}`} />
            </button>
          )
          : (
            <button
              className={s.vote__button}
              type="button"
            >
              <div className={s.voteUp__icon} />
            </button>
          )}

        <div className={
          likes > 0
            ? s.vote__valuePositive
            : likes < 0
              ? s.vote__valueNegative
              : s.vote__valueNull
        }
        >
          {likes}
        </div>
        {!liked
          ? (
            <button
              onClick={!disliked
                ? () => {
                  setLikes((prev) => prev - 1)
                  setDisliked(true)
                }
                : () => {
                  setLikes((prev) => prev + 1)
                  setDisliked(false)
                }}
              className={s.vote__button}
              type="button"
            >
              <div className={!disliked ? s.voteDown__icon : `${s.voteDown__icon} ${s.voteDown__icon__disliked}`} />
            </button>
          )
          : (
            <button
              className={s.vote__button}
              type="button"
            >
              <div className={s.voteDown__icon} />
            </button>
          )}

      </div>
    </div>
  )
}
