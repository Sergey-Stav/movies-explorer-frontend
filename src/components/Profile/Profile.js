import React from "react";
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import useFormWithValidation from "../../hooks/useFormValidation";

function Profile(props) {
  const { values, handleChange, resetForm, errors, isFormValid } = useFormWithValidation();
  const currentUser = useContext(CurrentUserContext); 
  const [isFormDisabled, setIsFormDisabled] = React.useState(true);

  function handleEditProfile(e) {
    e.preventDefault();

    setIsFormDisabled(false);
  }
  
  function handleSubmit(e) {
    e.preventDefault();

    props.onChangeUser(values);
  }

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, true);
    }
  }, [currentUser, resetForm]);

const formProfileValidity = (!isFormValid || (currentUser.name === values.name && currentUser.email === values.email));

  return (
    <>
      <Header isLoggedIn={props.isLoggedIn} />
      <section className="profile">
        <p className="profile__title">Привет, {currentUser?.name}!</p>
        <form className="profile__form" onSubmit={handleSubmit}>
          <fieldset className="profile__fieldset">
            <label className="profile__input-label">
              Имя
              <input
                className="profile__input"
                type="text"
                name="name"
                pattern="[а-яА-Яa-zA-ZёË\- ]{1,}"
                placeholder="Введите Имя"
                value={values.name || ''}
                minLength="2"
                maxLength="30"
                required
                disabled={isFormDisabled}
                onChange={handleChange}
              />
            </label>
            <span
              className={
                isFormDisabled
                  ? "profile__input-error no-display"
                  : "profile__input-error"
              }
            >{errors.name || ''}</span>
          </fieldset>
          <fieldset className="profile__fieldset">
            <label className="profile__input-label">
              E-mail
              <input
                className="profile__input"
                type="email"
                name="email"
                placeholder="Введите email"
                value={values.email || ''}
                required
                disabled={isFormDisabled}
                onChange={handleChange}
              />
            </label>
            <span
              className={
                isFormDisabled
                  ? "profile__input-error no-display"
                  : "profile__input-error"
              }
            >
              {errors.email || ''}
            </span>
          </fieldset>

          <p
            className={
              isFormDisabled ? "profile__error no-display" : "profile__error"
            }
          >
           
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
                className={`profile__form-button profile__form-button_type_save opacity-on-hover ${formProfileValidity && 'profile__form-button_type_save_disabled'}`}
                type="submit"
                disabled={formProfileValidity ? true : false}
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
          } onClick={props.onSignOut}
        >
          Выйти из&nbsp;аккаунта
        </Link>
      </section>
    </>
  );
}

export default Profile;
