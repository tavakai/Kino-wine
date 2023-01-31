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
}

const api = new Api({
  baseUrl: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
