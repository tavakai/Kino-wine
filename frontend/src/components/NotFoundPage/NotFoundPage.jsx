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
        Потерялись? Сначала Посмотрите видео 😉
        {' '}
      </h1>
      <div style={{ marginTop: '75px', marginRight: 'auto', marginLeft: 'auto' }}>
        <video src="/video/vid.mp4" controls poster='https://cdn.dribbble.com/users/67325/screenshots/3488120/attachments/769962/404.jpg?compress=1&resize=400x300&vertical=top' />
      </div>

      <p style={{ marginTop: '30px' }}>Идите сюда пожалуйста &darr;</p>
      <div className="link" style={{ marginTop: '30px' }}>

<Link to="/">Вам тут самое место!</Link>
<Link to="/favorite">Избранное</Link>
<Link to="/profile">Профиль</Link>
      </div>
      </div>

    </div>
  )
}
