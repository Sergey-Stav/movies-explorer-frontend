import React from "react";
import {Link} from "react-router-dom";
import Header from "../Header/Header";

function Profile(props) {
  const [isFormDisabled, setIsFormDisabled] = React.useState(true);

  function handleEditProfile(e) {
    e.preventDefault();

    setIsFormDisabled(false);
  }

  return (
    <>
      <Header loggedIn={props.loggedIn} />
      <section className="profile">
        <p className="profile__title">Привет, Сергей!</p>
        <form className="profile__form">
          <fieldset className="profile__fieldset">
            <label className="profile__input-label">
              Имя
              <input
                className="profile__input"
                type="text"
                name="name"
                placeholder="Сергей"
                required
                disabled={isFormDisabled}
              />
            </label>
            <span
              className={
                isFormDisabled
                  ? "profile__input-error no-display"
                  : "profile__input-error"
              }
            ></span>
          </fieldset>
          <fieldset className="profile__fieldset">
            <label className="profile__input-label">
              E-mail
              <input
                className="profile__input"
                type="email"
                name="email"
                placeholder="email@mail.ru"
                required
                disabled={isFormDisabled}
              />
            </label>
            <span
              className={
                isFormDisabled
                  ? "profile__input-error no-display"
                  : "profile__input-error"
              }
            >
              Неверный email
            </span>
                  </fieldset>
                  
                  <p
              className={
                isFormDisabled
                  ? "profile__error no-display"
                  : "profile__error"
              }
            >
              При обновлении профиля произошла ошибка.
            </p>
          {isFormDisabled ? (
            <button
              className="profile__form-button profile__form-button_type_edit opacity-on-hover"
              type="submit"
              onClick={handleEditProfile}
            >
              Редактировать
            </button>
          ) : (
            <button
              className="profile__form-button profile__form-button_type_save opacity-on-hover"
              type="submit"
            >
              Сохранить
            </button>
          )}
        </form>
        <Link
          to="/"
          className={
            isFormDisabled
              ? "profile__sign-out-button opacity-on-hover"
              : "profile__sign-out-button no-display"
          }
        >
          Выйти из&nbsp;аккаунта
        </Link>
      </section>
    </>
  );
}

export default Profile;
