import axios from 'axios'

class Api {
  constructor({
    baseUrl,
    headers,
  }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  // Авторизация пользователя
  authUser(user) {
    return axios.post(`${this.baseUrl}/auth`, user)
  }

  // Регистрация пользователя
  regUser(user) {
    return axios.post(`${this.baseUrl}/reg`, user)
  }

  // Выход из системы
  logout() {
    return axios.get(`${this.baseUrl}/logout`)
  }

  // Проверка на авторизацию при первой загрузке приложения
  authCheck() {
    return axios.post(`${this.baseUrl}/check`)
  }

  // Загрузка фильмов для главного слайдера
  getMoviesForMain() {
    return axios.get(`${this.baseUrl}/movies/rec`)
  }

  // Загрузка списка жанров
  getGenres() {
    return axios.get(`${this.baseUrl}/genres`)
  }

  // Загрузка списка жанров с фильмами (!)
  getCategoriesWithMovies() {
    return axios.get(`${this.baseUrl}/genres/movies`)
  }

  // Загрузка фильмов для поиска
  getSearchedMovies(input) {
    return axios.post(`${this.baseUrl}/movies/search`, { input })
  }

  // Загрузка списка фильмов из избранного
  getFavorites() {
    return axios.get(`${this.baseUrl}/favorite`)
  }

  // Добавление фильма в избранное
  addToFavoritesAction(oneFilm) {
    return axios.post(`${this.baseUrl}/favorite`, { oneFilm })
  }

  // Удаление фильма из избранного
  deleteFromFavorites(id) {
    return axios.delete(`${this.baseUrl}/favorite/${id}`)
  }

  // Загрузка списка фильмов определенного жанра
  getGenreMovies(id) {
    return axios.get(`${this.baseUrl}/genres/${id}`)
  }

  // Загрузка списка рецензий
  getReviews(id) {
    return axios.get(`${this.baseUrl}/reviews/${id}`)
  }

  // Добавление новой рецензии
  addReviewAction(input) {
    return axios.post(`${this.baseUrl}/reviews`, input)
  }


  // Изменение статуса подписки
  setSubscribe(level) {
    return axios.post(`${this.baseUrl}/subscribe`, { level })
  changeLikesAction(id, change) {
    return axios.put(`${this.baseUrl}/reviews/${id}`, change)
  }
}

const api = new Api({
  baseUrl: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
