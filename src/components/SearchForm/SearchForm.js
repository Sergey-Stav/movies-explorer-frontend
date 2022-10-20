import { useState } from 'react';
import search__icon from "../../images/find_icon.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";


function SearchForm(props) {
  const [search, setSearch] = useState('');
  const [isSearchValid, setIsSearchValid] = useState(true);
  
  function handleSearchChange(evt) {
    setSearch(evt.target.value);
    setIsSearchValid(evt.target.checkValidity())
  }
  
  function handleSearchMovies(evt) {
    evt.preventDefault();
    props.onSearchMovies(search);
  }
  
  function handleSearchSavedMovies(evt) {
    evt.preventDefault();
    props.onSearchSavedMovies(search);
  }
  
  return (
    <section className="search">
      <form className="search__form" onSubmit={props.isSaved ? handleSearchSavedMovies : handleSearchMovies}>
        <fieldset className="search__form-fields">
          <input
            type="text"
            placeholder="Фильм"
            className="search__form-input"
            minLength="1"
            maxLength="100"
            value={search || ''}
            onChange={handleSearchChange}
            required
          />
          <span className={`search__form-error ${isSearchValid ? 'no-display' : ''}`}>Нужно ввести ключевое слово</span>
        </fieldset>
        <button className="search__form-button opacity-on-hover" type="submit">
          <img src={search__icon} alt="Поиск" className="search__icon" />
        </button>
      </form>
      <div className="search__toggle-box">
        <h3 className="search__toggle-text">Короткометражки</h3>
        <FilterCheckbox onChange={props.onShortMoviesCheck} isChecked={props.isChecked}/>
      </div>
    </section>
  );
}

export default SearchForm;
