import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";

function App() {
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
            <Register />
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
