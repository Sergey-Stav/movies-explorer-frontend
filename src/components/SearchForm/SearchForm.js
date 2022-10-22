import { useState } from 'react';
import search__icon from "../../images/find_icon.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";


function SearchForm(props) {
  
  const [search, setSearch] = useState(props.savedSearch);
  const [isSearchValid, setIsSearchValid] = useState(true);
  
  function handleSearchChange(evt) {
    setSearch(evt.target.value);
    // evt.target.setCustomValidity('Нужно ввести ключевое слово');
    // setIsSearchValid(evt.target.checkValidity())
  }
  
  function handleSearchMovies(evt) {
    evt.preventDefault();
  //   if (props.isSaved) {
  //     props.onSearchMovies(search);
  //     return;
  //  }
    const isValid = search !== "";
    setIsSearchValid(isValid);
    if (isValid) {
      props.onSearchMovies(search);
    }
    
  }
  
    
  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSearchMovies} noValidate
      >
        <fieldset className="search__form-fields">
          <input
            type="text"
            placeholder="Фильм"
            className="search__form-input"
            value={search || ''}
            onChange={handleSearchChange}
            />
          <span className={`search__form-error ${isSearchValid ? 'no-display' : ''}`} aria-live="polite">Нужно ввести ключевое слово</span>
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
