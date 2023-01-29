import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function MyButton() {
  const { id } = useParams()
  console.log(id, 'id');

  const desk = [
    {
      id: 298,
      title: 'Люди Икс 2',
      year: 2003,
      description: 'Мутанты продолжают борьбу против общества, которое страшит их, и которому они не доверяют. Их положение становится еще более отчаянным, когда они подвергаются мощной атаке неизвестного противника, обладающего экстраординарными способностями.',
      country: 'США',
      image: 'https://st.kp.yandex.net/images/film_big/298.jpg',
      path_trailer: 'https://www.youtube.com/embed/yVzqz_zpP20',
      duration: '134',
      rating: 8,
    },
    {
      id: 299,
      title: 'Матрица: Перезагрузка',
      year: 2003,
      description: 'Американские, британские и канадские военнопленные осуществляют массовый побег из немецкого лагеря во время Второй мировой войны.',
      country: 'США',
      image: 'https://st.kp.yandex.net/images/film_big/392.jpg',
      path_trailer: 'https://www.youtube.com/watch?v=r9Q_WESQUVw',
      duration: '172',
      rating: 8,
    },

  ]
  return (
    <div>
      {desk.map((el) => <Link to={`/moviepage/${el.id}`}>abc</Link>)}

    </div>
  )
}
