import { BASE_URL } from "./constants";

class MainApi {
  constructor({ baseUrl }) {
    this._url = baseUrl;
  }

  // Проверка статуса ответа
  _handleResponseOfServer(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  // Регистрация
  createUser(name, email, password) {
    return fetch(`${this._url}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }).then(this._handleResponseOfServer);
  }

  // Логин
  loginUser(email, password) {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    }).then(this._handleResponseOfServer);
  }

  // Получение данных пользователя
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then(this._handleResponseOfServer);
  }

  // Редактирование данных пользователя
  updateUserInfo(name, email) {
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    }).then(this._handleResponseOfServer);
  }

  // Получение сохраненных фильмов
  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then(this._handleResponseOfServer);
  }

  // Добавление фильма в сохраненные
  saveMovie(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image,
        trailerLink: data.trailerLink,
        thumbnail: data.thumbnail,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
    }).then(this._handleResponseOfServer);
  }

  // Удаление фильма из сохранённых
  deleteMovie(data) {
    return fetch(`${this._baseUrl}/movies/${data}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then(this._handleResponseOfServer);
  }
}

export const mainApi = new MainApi({
  baseUrl: BASE_URL,
});
