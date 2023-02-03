/* eslint-disable jsx-quotes */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/media-has-caption */
import { Link } from 'react-router-dom';
import './style.css'

export default function NotFound() {
  return (
    <div className="notFound">
      <div>
      <h1>
        Вы кто такие? Я Вас не звал!
        {' '}
      </h1>
      <img style={{ width: 500 }} src="https://memepedia.ru/wp-content/uploads/2018/01/%D0%B2%D1%8B-%D0%BA%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%B8%D0%B5-%D1%8F-%D0%B2%D0%B0%D1%81-%D0%BD%D0%B5-%D0%B7%D0%B2%D0%B0%D0%BB-1.png" alt="..." />
      <p>Идите сюда пожалуйста &darr;</p>
      <div className="link">

<Link to="/">Вам тут самое место!</Link>
<Link to="/favorite">Избранное</Link>
<Link to="/profile">Профиль</Link>
      </div>
      </div>
      <div style={{ marginTop: '75px', marginRight: '150px' }}>
        <video src="/video/we.mp4" controls />
      </div>

    </div>
  )
}
