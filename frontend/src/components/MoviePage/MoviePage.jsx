import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import DeskCard from './DeskCard'

export default function MoviePage() {
  const [onefilm, setOneFilm] = useState(null)
  const { id } = useParams()
  console.log(id, 'id');
  useEffect(() => {
    axios.get(`http://localhost:3001/film/moviepage/${id}`)
      .then((res) => setOneFilm(res.data))
  }, [])

  return (
    <div>

      {onefilm && <DeskCard onefilm={onefilm} />}

    </div>
  )
}
