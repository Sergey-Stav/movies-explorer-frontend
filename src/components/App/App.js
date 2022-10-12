import mainApi from '../../utils/MainApi.js';
import { useState } from 'react';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import { BrowserRouter, Route, Switch, Redirect, useHistory } from "react-router-dom";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";

function App() {
  const history = useHistory();
  const [isLoader, setIsLoader] = useState(false);
  const [isInfoTooltip, setIsInfoTooltip] = useState({
    isOpen: false,
    successful: true,
    text: '',
  });

  function handleRegister({ name, email, password }) {
    setIsLoader(true);
    mainApi
      .createUser(name, email, password)
      .then(data => {
        if (data._id) {
          handleLogin({ email, password });
        }
      })
      .catch(err =>
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
      .login(email, password)
      .then(jwt => {
        if (jwt.token) {
          localStorage.setItem('jwt', jwt.token);
          setLoggedIn(true);
          history.push('/movies');
          setIsInfoTooltip({
            isOpen: true,
            successful: true,
            // text: 'Добро пожаловать!' 
          });
        }
      })
      .catch(err =>
        setIsInfoTooltip({
          isOpen: true,
          successful: false,
          text: err,
        })
      )
      .finally(() => setIsLoader(false));
  }
  
  
  return (
    <div className="page">
      <BrowserRouter forceRefresh={true}>
        <Switch>
          <Route exact path="/">
            <Main loggedIn={true} />
          </Route>
          <Route path="/movies">
            <Movies loggedIn={true} />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies loggedIn={true} />
          </Route>
          <Route path="/profile">
            <Profile loggedIn={true} />
          </Route>
          <Route path="/signup">
          {!loggedIn ? (
                <Register handleRegister={handleRegister} />
              ) : (
                <Redirect to='/' />
              )}
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
