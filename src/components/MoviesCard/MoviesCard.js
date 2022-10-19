import { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import cardImage from "../../images/movie.png";


function MoviesCard(props) {
  const [isDeleteButtonVisible, setIsDeleteButtonVisible] =
    useState(false);
  const [isLiked, setIsLiked] = useState(false);
  
  const movie = {
    country : props.movie.country || 'Не указано',
    director: props.movie.director || 'Не указано',
    duration: props.movie.duration || 0,
    year: props.movie.year || 'Не указано',
    description: props.movie.description || 'Не указано',
    image: `${props.movie.image === null ? `${cardImage}` : `https://api.nomoreparties.co${props.movie.image?.url}`}`,
    trailer: props.movie?.trailerLink,
    nameRU: props.movie.nameRU || 'Не указано',
    nameEN: props.movie.nameEN || 'Не указано',
    thumbnail: `${props.movie.image === null ? `${cardImage}` : `https://api.nomoreparties.co${props.movie.image?.formats?.thumbnail?.url}`}`,
    movieId: props.movie.id,
  }
  
  const durationMovie = `${Math.trunc(movie.duration/60)}ч${movie.duration % 60}м`;
  const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
  const currentMovie = savedMovies.find((movie) => movie.nameRU === props.movie.nameRU);

  const location = useLocation();

  function handleCardMouseOver() {
    setIsDeleteButtonVisible(true);
  }

  function handleCardMouseOut() {
    setIsDeleteButtonVisible(false);
  }

  function handleLikeButtonCLick() {
    props.onMovieSave(movie);
    setIsLiked(true);
  }

  function handleDisLike() {
    setIsLiked(false);
    props.onDeleteMovie(currentMovie._id);
  }
  
  function handleDeleteMovie() {
    props.onDeleteMovie(props.movie._id);
    setIsLiked(false);
}

useEffect(() => {
    if(currentMovie) {
      setIsLiked(true)
    }

}, [currentMovie, location])

  return (
    <>
      <li className="card"> 
          <div
          onMouseEnter={handleCardMouseOver}
          onMouseLeave={handleCardMouseOut}
          className="card__description"
        >
          <div className="card__description-container">
            <p className="card__title">{props.movie.nameRU}</p>
            <p className="card__duration">{durationMovie}</p>
          </div>
          {props.isSaved ? (
            <button
              className={`card__delete-button opacity-on-hover ${
                isDeleteButtonVisible ? "card__delete-button_visible" : ""
              }`} onClick={handleDeleteMovie}
            ></button>
          ) : (
            <button
              className={`card__like-button opacity-on-hover ${
                isLiked ? "card__like-button_clicked" : ""
              }`}
              onClick={isLiked ? handleDisLike : handleLikeButtonCLick}
            ></button>
          )}
        </div>
        <a href={props.isSaved ? props.movie.trailer : props.movie.trailerLink} className="card__trailer-link">
          <img src={props.isSaved ? props.movie.image : movie.image} alt={props.movie.nameRU} className="card__image" />
          </a>
      </li>
    </>
  );
}

export default MoviesCard;
