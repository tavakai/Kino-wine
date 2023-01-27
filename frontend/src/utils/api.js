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

  // Редактировать профиль пользователя
  changeUser(user) {
    return axios.patch(`${this.baseUrl}/profile-edit`, user)
  }

  // Получить посты пользователя
  getUserPosts() {
    return fetch(`${this.baseUrl}/posts/me`, {
      method: 'GET',
      headers: this.headers,
    })
  }

  // Получить все карточки
  getEvents() {
    return fetch(`${this.baseUrl}/events`, {
      headers: this.headers,
    })
  }

  // Загрузка начальных данных
  getMovies() {
    return axios.get(`${this.baseUrl}/movies`);
  }

  // Загрузка данных категории
  getCategoryList(category) {
    return axios.get(`${this.baseUrl}/list/${category}`);
  }

  // Получить одно событие
  getEvent(eventId) {
    return fetch(`${this.baseUrl}/events/one/`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ eventId }),
    })
  }

  // Удаление поста
  removeEvent(cardId) {
    return fetch(`${this.baseUrl}/events/${cardId}`, {
      method: 'DELETE',
      headers: this.headers,
    })
  }
}

const api = new Api({
  baseUrl: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
