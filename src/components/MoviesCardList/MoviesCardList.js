import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  return (
    <section className="movies">
      <ul className="movies__list">
        <li className="movies__list-item">
          <MoviesCard isSaved={props.isSaved} />
        </li>
        <li className="movies__list-item">
          <MoviesCard isSaved={props.isSaved} />
        </li>
        <li className="movies__list-item">
          <MoviesCard isSaved={props.isSaved} />
        </li>
        <li className="movies__list-item">
          <MoviesCard isSaved={props.isSaved} />
        </li>
        <li className="movies__list-item">
          <MoviesCard isSaved={props.isSaved} />
        </li>
        <li className="movies__list-item">
          <MoviesCard isSaved={props.isSaved} />
        </li>
        <li className="movies__list-item">
          <MoviesCard isSaved={props.isSaved} />
        </li>
        <li className="movies__list-item">
          <MoviesCard isSaved={props.isSaved} />
        </li>
        <li className="movies__list-item">
          <MoviesCard isSaved={props.isSaved} />
        </li>
        <li className="movies__list-item">
          <MoviesCard isSaved={props.isSaved} />
        </li>
        <li className="movies__list-item">
          <MoviesCard isSaved={props.isSaved} />
        </li>
        <li className="movies__list-item">
          <MoviesCard isSaved={props.isSaved} />
        </li>
      </ul>
      <button
        className={
          props.isSaved
            ? "movies__more-button movies__more-button_invisible"
            : "movies__more-button opacity-on-hover"
        }
      >
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
