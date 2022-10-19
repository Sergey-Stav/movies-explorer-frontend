import React from "react";
import { Link } from "react-router-dom";

function Navigation(props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
 function handleMenuOpen() {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(true);
    }
  }

  return (
    <div
      className={
        props.isLoggedIn
          ? "header__nav"
          : "header__nav header__nav_position_right"
      }
    >
      <div
        className={
          props.isLoggedIn
            ? "header__movies-nav"
            : "header__movies-nav no-display"
        }
      >
        <Link to="/movies" className="header__link header__link_type_movies">
          Фильмы
        </Link>
        <Link
          to="/saved-movies"
          className="header__link header__link_type_movies"
        >
          Сохранённые фильмы
        </Link>
      </div>
      <div className="header__login-nav">
        <Link
          to="/signup"
          className={
            props.isLoggedIn
              ? "header__link header__link_type_register no-display"
              : "header__link header__link_type_register opacity-on-hover"
          }
        >
          Регистрация
        </Link>
        {props.isLoggedIn ? (
          <Link
            to="/profile"
            className="header__link header__link_type_account opacity-on-hover"
          >
            Аккаунт
            <div className="header__link_type_account-background"></div>
          </Link>
        ) : (
          <Link
            to="/signin"
            className="header__link header__link_type_login opacity-on-hover"
          >
            Войти
          </Link>
        )}
      </div>
      <button
        className={
          props.isLoggedIn
            ? "header__burger-button opacity-on-hover"
            : "header__burger-button no-display"
        }
        onClick={handleMenuOpen}
      ></button>
      <div
        className={
          isMobileMenuOpen
            ? "header__burger-menu visible"
            : "header__burger-menu"
        }
      >
        <button
          className="header__burger-menu-close-button opacity-on-hover"
          onClick={handleMenuOpen}
        ></button>
        <div
          className={
            isMobileMenuOpen
              ? "header__burger-menu-container visible"
              : "header__burger-menu-container"
          }
        >
          <div className="header__burger-menu-links">
            <div className="header__burger-menu-links-container">
              <Link
                to="/"
                className="header__burger-menu-link opacity-on-hover"
              >
                Главная
              </Link>
              <Link
                to="/movies"
                className="header__burger-menu-link opacity-on-hover"
              >
                Фильмы
              </Link>
              <Link
                to="/saved-movies"
                className="header__burger-menu-link opacity-on-hover"
              >
                Сохранённые фильмы
              </Link>
            </div>
            <Link
              to="/profile"
              className="header__burger-menu-link header__burger-menu-link_type_account opacity-on-hover"
            >
              Аккаунт
              <div className="header__link_type_account-background"></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
