import React from "react";
import cardImage from "../../images/movie.png";

function MoviesCard(props) {
  const [isDeleteButtonVisible, setIsDeleteButtonVisible] =
    React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);

  function handleCardMouseOver() {
    setIsDeleteButtonVisible(true);
  }

  function handleCardMouseOut() {
    setIsDeleteButtonVisible(false);
  }

  function handleLikeButtonCLick() {
    setIsLiked(!isLiked);
  }
  return (
    <>
      <div className="card">
        <div
          onMouseEnter={handleCardMouseOver}
          onMouseLeave={handleCardMouseOut}
          className="card__description"
        >
          <div className="card__description-container">
            <p className="card__title">33&nbsp;слова о&nbsp;дизайне</p>
            <p className="card__duration">1ч47м</p>
          </div>
          {props.isSaved ? (
            <button
              className={`card__delete-button opacity-on-hover ${
                isDeleteButtonVisible ? "card__delete-button_visible" : ""
              }`}
            ></button>
          ) : (
            <button
              className={`card__like-button opacity-on-hover ${
                isLiked ? "card__like-button_clicked" : ""
              }`}
              onClick={handleLikeButtonCLick}
            ></button>
          )}
        </div>

        <img src={cardImage} alt="Постер" className="card__image" />
      </div>
    </>
  );
}

export default MoviesCard;
