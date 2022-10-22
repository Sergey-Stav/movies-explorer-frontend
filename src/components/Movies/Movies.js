import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies(props) {
  
  return (
    <>
      <Header isLoggedIn={props.isLoggedIn} />
      <SearchForm onSearchMovies={props.onSearchMovies} onShortMoviesCheck={props.onShortMoviesCheck} savedSearch={props.savedSearch}
                   isShortFilmChecked={props.isShortFilmChecked}/>
      <MoviesCardList movies={props.movies} onMovieSave={props.onMovieSave}
                       onDeleteMovie={props.onDeleteMovie} saved={false} savedMovies={props.savedMovies}
                       />
      <Footer />
    </>
  );
}

export default Movies;
