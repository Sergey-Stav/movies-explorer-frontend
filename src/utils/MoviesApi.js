import { MOVIES_URL } from "./constants";

class MoviesApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  // Проверка статуса ответа
  _handleResponseOfServer(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  // получение фильмов с сервера
  getMovies() {
    return fetch(`${this._baseUrl}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then(this._handleResponseOfServer);
  }
}

const moviesApi = new MoviesApi({
  baseUrl: MOVIES_URL,
});

export default moviesApi;
