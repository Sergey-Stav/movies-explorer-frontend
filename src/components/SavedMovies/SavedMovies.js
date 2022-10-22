import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies(props) {
  return (
    <>
      <Header isLoggedIn={props.isLoggedIn} />
      <SearchForm
        onSearchMovies={props.onSearchMovies}
        onShortMoviesCheck={props.onShortMoviesCheck}
        savedSearch={props.savedSearch}
        isShortFilmChecked={props.isShortFilmChecked}
        isSaved={true}
      />
      <MoviesCardList
        movies={props.movies}
        onMovieSave={props.onMovieSave}
        isSaved={true}
        onDeleteMovie={props.onDeleteMovie}
        savedMovies={props.savedMovies}
      />
      <Footer />
    </>
  );
}

export default SavedMovies;
