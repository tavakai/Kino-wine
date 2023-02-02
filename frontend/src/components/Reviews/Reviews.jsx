import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getReviewsAction } from '../../services/actions/actions'
import ReviewCard from './ReviewCard'
import s from './Review.module.css'
import ReviewForm from './ReviewForm'

export default function Reviews({ id }) {
  const [showForm, setShowForm] = useState(false)
  const [showAllReviews, setShowAllReviews] = useState(false)
  const { reviews, users } = useSelector((store) => store.reviews)
  const { user } = useSelector((store) => store.auth)
  const [hideBtn, setHideBtn] = useState(false)
  console.log(reviews);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getReviewsAction(id))
    // if (reviews?.find((el) => el.user_id === user.id)) {
    //   setHideBtn(true)
    // }
  }, [])
  useEffect(() => {
    if (reviews?.find((el) => el.user_id === user.id)) {
      setHideBtn(true)
    }
  }, [reviews])
  console.log(hideBtn);
  return (
    <div className={s.review_body}>
      <h2 className={s.review_header}>Рецензии зрителей</h2>
      {!showForm && !hideBtn
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

      {reviews?.length
        ? (
          <>
            {!showAllReviews
              ? reviews.slice(0, 3).map((review) => (
                <div key={review.id}>
                  <ReviewCard review={review} users={users} />
                </div>
              ))
              : reviews.map((review) => (
                <div key={review.id}>
                  <ReviewCard review={review} users={users} />
                </div>
              ))}

            {!showAllReviews
              && (
                <div className={s.reviewAll__btnContainer}>
                  <button
                    onClick={() => setShowAllReviews(true)}
                    type="button"
                    className={`${s.review__btn} ${s.reviewAll__btn}`}
                  >
                    <div className={s.review__btn_text}>
                      Все рецензии
                    </div>
                  </button>
                </div>
              )}
          </>
        )
        : (
          <div style={{ marginTop: '20px' }}>
            У фильма пока нет рецензий
          </div>
        )}

    </div>
  )
}
