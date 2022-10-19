import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies(props) {
  return (
    <>
      <Header isLoggedIn={props.isLoggedIn} />
      <SearchForm />
      <MoviesCardList isSaved={true} />
      <Footer />
    </>
  );
}

export default SavedMovies;
