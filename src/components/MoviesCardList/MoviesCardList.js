import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from "../MoviesCard/MoviesCard";
import { DEVICE_PARAMS } from "../../utils/constants.js";
import useWindowSize from '../../hooks/useWindowSize';

function MoviesCardList(props) {
  const width = useWindowSize();
  const { desktop, tablet, mobile } = DEVICE_PARAMS;
  const [isMount, setIsMount] = useState(true);
  const [showCards, setShowCards] = useState({ total: 12, more: 3 });
  const [movieList, setMovieList] = useState([]);
  const location = useLocation();
  const moviesList = props.movies;
  const isSaved = props.isSaved;
  
  useEffect(() => {
    if (location.pathname === '/movies') {
      if (width > desktop.width) {
        setShowCards(desktop.cards);
      } else if (width <= desktop.width && width > tablet.width) {
        setShowCards(tablet.cards);
      } else {
        setShowCards(mobile.cards);
      }
      return () => setIsMount(false);
    }
  }, [width, isMount, desktop, tablet, mobile, location.pathname]);
  
  useEffect(() => {
    if (moviesList) {
      const res = moviesList.filter((item, i) => i < showCards.total);
      setMovieList(res);
      
    }
  }, [moviesList, showCards.total]);
  
  function addMovies() {
    const start = movieList.length;
    const end = start + showCards.more;
    const add = moviesList.length - start;

    if (add > 0) {
      const newMoviesCards = moviesList.slice(start, end);
      setMovieList([...movieList, ...newMoviesCards]);
    }    
  };
  return (
    <section className="movies">
      <ul className="movies__list">
      {movieList.map(movie => (
          <MoviesCard
          key={isSaved ? movie.movieId : movie.id}
          isSaved={props.isSaved}
          onMovieSave={props.onMovieSave}
          onDeleteMovie={props.onDeleteMovie}
          savedMovies={props.savedMovies}
          movie={movie}
          />
        ))}     
      </ul>
      <button
        className={
          props.isSaved
            ? "movies__more-button movies__more-button_invisible"
            : `movies__more-button opacity-on-hover ${moviesList.length === movieList.length ? 'movies__more-button_invisible' : ''}`
        } onClick={addMovies}
      >
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
