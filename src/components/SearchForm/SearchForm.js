import search__icon from "../../images/find_icon.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <fieldset className="search__form-fields">
          <input
            type="text"
            placeholder="Фильм"
            className="search__form-input"
            minLength="1"
            maxLength="100"
            required
          />
        </fieldset>
        <button className="search__form-button opacity-on-hover" type="submit">
          <img src={search__icon} alt="Поиск" className="search__icon" />
        </button>
      </form>
      <div className="search__toggle-box">
        <h3 className="search__toggle-text">Короткометражки</h3>
        <FilterCheckbox />
      </div>
    </section>
  );
}

export default SearchForm;
