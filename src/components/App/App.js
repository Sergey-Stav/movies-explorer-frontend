import Main from "../Main/Main";
// import Movies from "../Movies/Movies";
// import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import { Route, Switch } from "react-router-dom";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function App() {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Main loggedIn={true} />
        </Route>
        {/* <Route exact path="/movies">
          <Movies loggedIn={true} />
        </Route>
        <Route exact path="/saved-movies">
          <SavedMovies loggedIn={true} />
        </Route> */}
        <Route exact path="/profile">
          <Profile loggedIn={true} />
        </Route>
        <Route exact path="/signup">
          <Register />
        </Route>
        <Route exact path="/signin">
          <Login />
        </Route>
        <Route exact path="/notfound">
          <NotFound />
        </Route>
        <Route exact path="/checkbox">
          <FilterCheckbox />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
