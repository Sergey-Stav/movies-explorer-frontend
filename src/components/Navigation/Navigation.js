import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

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
        <div className={props.loggedIn ? "header__nav" : "header__nav header__nav_position_right"}>
            <div className={props.loggedIn ? "header__movies-nav" : "header__movies-nav no-display"}>
                <Link to="/movies" className="header__link header__link_type_movies opacity">Фильмы</Link>
                <Link to="/saved-movies" className="header__link header__link_type_movies header__link_type_saved-movies opacity">Сохранённые фильмы</Link>
            </div>
            <div className="header__login-nav">
                <Link to="/signup" className={props.loggedIn ? "header__link header__link_type_register no-display" :
                    "header__link header__link_type_register opacity"}>Регистрация</Link>
                {props.loggedIn ? <Link to="/profile" className="header__link header__link_type_account opacity">Аккаунт
                <div className="header__link_type_account-background"></div></Link> :
                    <Link to="/signin" className="header__link header__link_type_login opacity">Войти</Link>}
            </div>
            <button className={props.loggedIn ? "header__burger-button opacity" : "header__burger-button no-display"} onClick={handleMenuOpen}></button>
            <div className={isMobileMenuOpen ? "header__burger-menu visible" : "header__burger-menu"}>
                <button className="header__burger-menu-close-button opacity" onClick={handleMenuOpen}></button>
                <div className={isMobileMenuOpen ? "header__burger-menu-container visible" : "header__burger-menu-container"}>
                    <div className="header__burger-menu-links">
                        <div className="header__burger-menu-links-container">
                        <Link to="/" className="header__burger-menu-link opacity">Главная</Link>
                        <Link to="/movies" className="header__burger-menu-link opacity">Фильмы</Link>
                        <Link to="/saved-movies" className="header__burger-menu-link opacity">Сохранённые фильмы</Link> 
                        </div>
                        <Link to="/profile" className="header__burger-menu-link header__burger-menu-link_type_account opacity">Аккаунт
                        <div className="header__link_type_account-background"></div></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;