function FilterCheckbox() {
  return (
    <label htmlFor="short-films" className="search__toggle-label">
      <input id="short-films" type="checkbox" className="search__toggle" />
      <span className="search__toggle_slider"></span>
    </label>
  );
}

export default FilterCheckbox;
