import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getReviewsAction } from '../../services/actions/actions'
import ReviewCard from './ReviewCard'
import s from './Review.module.css'
import ReviewForm from './ReviewForm'

export default function Reviews({ id }) {
  const [showForm, setShowForm] = useState(false)
  const { reviews, users } = useSelector((store) => store.reviews)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getReviewsAction(id))
  }, [])
  return (
    <div className={s.review_body}>
      <h2 className={s.review_header}>Рецензии зрителей</h2>
      {reviews?.length
        ? reviews.map((review) => (
          <div key={review.id}>
            <ReviewCard review={review} users={users} />
          </div>
        ))
        : 'Пока нет рецензий'}
      {!showForm
        && (
          <button
            onClick={() => setShowForm(true)}
            type="button"
            className={s.review__btn}
          >
            <div className={s.review__btn_text}>
              Написать рецензию
            </div>
          </button>
        )}
      {showForm && (
        <ReviewForm setShowForm={setShowForm} />
      )}
    </div>
  )
}
