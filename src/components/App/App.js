import mainApi from "../../utils/MainApi.js";
import moviesApi from "../../utils/MoviesApi.js";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useState, useEffect } from "react";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import Preloader from "../Preloader/Preloader.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoad, setIsLoad] = useState(true);
  const [isLoader, setIsLoader] = useState(false);
  const [moviesCard, setMoviesCard] = useState([]);
  const [saveMoviesCard, setSaveMoviesCard] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchSavedMovies, setSearchSavedMovies] = useState([]);
  const [isInfoTooltip, setIsInfoTooltip] = useState({
    isOpen: false,
    successful: true,
    text: "",
  });
  const searchMoviesName = localStorage.getItem("searchMoviesName") ?? "";
  const searchSaveMoviesName =
    localStorage.getItem("searchSaveMoviesName") ?? "";
  const [isShortFilmChecked, setIsShortFilmChecked] = useState(
    localStorage.getItem("isShortFilm") === "true"
  );
  const [isShortSavedFilmChecked, setIsShortSavedFilmChecked] = useState(
    localStorage.getItem("isShortSavedFilm") === "true"
  );

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      setIsLoader(true);
      mainApi
        .getUserInfo()
        .then((data) => {
          if (data) {
            setIsLoggedIn(true);
            setCurrentUser(data);
          }
        })
        .catch((err) =>
          setIsInfoTooltip({
            isOpen: true,
            successful: false,
            text: err,
          })
        )
        .finally(() => {
          setIsLoader(false);
          setIsLoad(false);
        });
    } else {
      setIsLoad(false);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("searchMovies") && isLoggedIn) {
      setSearchMovies(JSON.parse(localStorage.getItem("searchMovies")));
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([
        moviesApi.getMovies(),
        mainApi.getUserInfo(),
        mainApi.getSavedMovies(),
      ])
        .then(([movies, user, saveMovies]) => {
          setMoviesCard(movies);
          setCurrentUser(user);
          const cards = saveMovies.filter((i) => i.owner === user._id);
          setSaveMoviesCard(cards);
          setSearchSavedMovies(cards);
        })
        .catch((err) =>
          setIsInfoTooltip({
            isOpen: true,
            successful: false,
            text: err,
          })
        )
        .finally(() => setIsLoader(false));
    }
  }, [isLoggedIn]);

  function getMovies() {
    const value = localStorage.getItem("searchMoviesName") ?? "";
    const isShortMoviesOnly = localStorage.getItem("isShortFilm") === "true";
    setIsLoader(true);
    try {
      const filteredMovies = moviesCard.filter((movie) => {
        return (
          (String(movie.nameEN).toLowerCase().includes(value.toLowerCase()) ||
            movie.nameRU.toLowerCase().includes(value.toLowerCase())) &&
          ((isShortMoviesOnly && movie.duration <= 40) || !isShortMoviesOnly)
        );
      });
      if (filteredMovies.length === 0) {
        setIsInfoTooltip({
          isOpen: true,
          successful: false,
          text: "Ничего не найдено",
        });
        setSearchMovies([]);
        setIsLoader(false);
      } else {
        setIsLoader(false);
        setSearchMovies(filteredMovies);
        // localStorage.setItem("searchMovies", JSON.stringify(filteredMovies))
      }
    } finally {
      setIsLoader(false);
    }
  }

  function handleGetMovies(value) {
    localStorage.setItem("searchMoviesName", value);
    getMovies();
  }

  function onShortMoviesCheck(value) {
    localStorage.setItem("isShortFilm", value);
    setIsShortFilmChecked(value);
    getMovies();
  }

  function filterSaveMovies(showTooltip, moviesList) {
    const value = localStorage.getItem("searchSaveMoviesName") ?? "";
    const isShortMoviesOnly =
      localStorage.getItem("isShortSavedFilm") === "true";
    const filteredMovies = moviesList.filter((movie) => {
      return (
        (String(movie.nameEN).toLowerCase().includes(value.toLowerCase()) ||
          movie.nameRU.toLowerCase().includes(value.toLowerCase())) &&
        ((isShortMoviesOnly && movie.duration <= 40) || !isShortMoviesOnly)
      );
    });
    if (filteredMovies.length === 0) {
      if (showTooltip) {
        setIsInfoTooltip({
          isOpen: true,
          successful: false,
          text: "Ничего не найдено",
        });
      }
      setSearchSavedMovies([]);
      setIsLoader(false);
    } else {
      setIsLoader(false);
      setSearchSavedMovies(filteredMovies);
    }
  }

  function onShortSavedMoviesCheck(value) {
    localStorage.setItem("isShortSavedFilm", value);
    setIsShortSavedFilmChecked(value);
    setIsLoader(true);
    try {
      filterSaveMovies(true, saveMoviesCard);
    } finally {
      setIsLoader(false);
    }
  }

  function handleGetSaveMovies(value) {
    localStorage.setItem("searchSaveMoviesName", value);
    setIsLoader(true);
    try {
      filterSaveMovies(true, saveMoviesCard);
    } finally {
      setIsLoader(false);
    }
  }

  function handleSaveMovie(movie) {
    mainApi
      .saveMovie(movie)
      .then((newMovie) => {
        const newMoviesList = [newMovie, ...saveMoviesCard];
        setSaveMoviesCard(newMoviesList);
        filterSaveMovies(false, newMoviesList);
      })
      .catch((err) =>
        setIsInfoTooltip({
          isOpen: true,
          successful: false,
          text: err,
        })
      );
  }

  function handleDeleteMovie(movie) {
    const savedMovie = saveMoviesCard.find(
      (item) => item.movieId === movie._id || item.movieId === movie.movieId
    );
    mainApi
      .deleteMovie(savedMovie._id)
      .then(() => {
        const newMoviesList = saveMoviesCard.filter((m) => {
          if (movie._id === m.movieId || movie.movieId === m.movieId) {
            return false;
          } else {
            return true;
          }
        });
        setSaveMoviesCard(newMoviesList);
        filterSaveMovies(false, newMoviesList);
      })
      .catch((err) =>
        setIsInfoTooltip({
          isOpen: true,
          successful: false,
          text: err,
        })
      );
  }

  function closeInfoTooltip() {
    setIsInfoTooltip({ ...isInfoTooltip, isOpen: false });
  }

  function handleRegister({ name, email, password }) {
    setIsLoader(true);
    mainApi
      .createUser(name, email, password)
      .then((data) => {
        if (data._id) {
          handleLogin({ email, password });
        }
      })
      .catch((err) =>
        setIsInfoTooltip({
          isOpen: true,
          successful: false,
          text: err,
        })
      )
      .finally(() => setIsLoader(false));
  }

  function handleLogin({ email, password }) {
    setIsLoader(true);
    mainApi
      .loginUser(email, password)
      .then((jwt) => {
        if (jwt.token) {
          localStorage.setItem("jwt", jwt.token);
          setIsLoggedIn(true);
          history.push("/movies");
          setIsInfoTooltip({
            isOpen: true,
            successful: true,
            text: "Добро пожаловать!",
          });
        }
      })
      .catch((err) =>
        setIsInfoTooltip({
          isOpen: true,
          successful: false,
          text: err,
        })
      )
      .finally(() => setIsLoader(false));
  }

  function handleEditUserInfo({ name, email }) {
    setIsLoader(true);
    mainApi
      .updateUserInfo(name, email)
      .then((newUserData) => {
        setCurrentUser(newUserData);
        setIsInfoTooltip({
          isOpen: true,
          successful: true,
          text: "Профиль успешно обновлён!",
        });
      })
      .catch((err) =>
        setIsInfoTooltip({
          isOpen: true,
          successful: false,
          text: err,
        })
      )
      .finally(() => setIsLoader(false));
  }

  function handleSignOut() {
    localStorage.clear();
    setCurrentUser({});
    setIsLoggedIn(false);
    setSearchMovies([]);
    history.push("/");
  }

  return (
    <div className="page">
      {isLoad ? (
        <Preloader isOpen={isLoader} />
      ) : (
        <CurrentUserContext.Provider value={currentUser}>
          <>
            <Switch>
              <Route exact path="/">
                <Main isLoggedIn={isLoggedIn} />
              </Route>
              <Route path="/signup">
                {!isLoggedIn ? (
                  <Register handleRegister={handleRegister} />
                ) : (
                  <Redirect to="/" />
                )}
              </Route>
              <Route path="/signin">
                {!isLoggedIn ? (
                  <Login handleLogin={handleLogin} />
                ) : (
                  <Redirect to="/" />
                )}
              </Route>
              <ProtectedRoute
                path="/movies"
                component={Movies}
                movies={searchMovies}
                isLoggedIn={isLoggedIn}
                isShortFilmChecked={isShortFilmChecked}
                onShortMoviesCheck={onShortMoviesCheck}
                onSearchMovies={handleGetMovies}
                savedMovies={saveMoviesCard}
                onMovieSave={handleSaveMovie}
                onDeleteMovie={handleDeleteMovie}
                savedSearch={searchMoviesName}
              />
              <ProtectedRoute
                path="/saved-movies"
                component={SavedMovies}
                isLoggedIn={isLoggedIn}
                movies={searchSavedMovies}
                onSearchMovies={handleGetSaveMovies}
                savedMovies={saveMoviesCard}
                onDeleteMovie={handleDeleteMovie}
                savedSearch={searchSaveMoviesName}
                isShortFilmChecked={isShortSavedFilmChecked}
                onShortMoviesCheck={onShortSavedMoviesCheck}
              />
              <ProtectedRoute
                path="/profile"
                component={Profile}
                isLoggedIn={isLoggedIn}
                onSignOut={handleSignOut}
                onChangeUser={handleEditUserInfo}
              />
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
            <Preloader isOpen={isLoader} />
            <InfoTooltip status={isInfoTooltip} onClose={closeInfoTooltip} />
          </>
        </CurrentUserContext.Provider>
      )}
    </div>
  );
}

export default App;
