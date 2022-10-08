import "./Register.css";
import Logo from "../Logo/Logo";
import {Link} from "react-router-dom";

function Register() {
    return (
        <>
        <section className="register">
            <Logo />
            <h2 className="register__title">Добро пожаловать!</h2>
           <form className="user-form">
          <fieldset className="user-form__fieldset">
            <label className="user-form__input-label">Имя
              <input
                className="user-form__input"
                type="text"
                name="name"
                required
              />
            </label>
            <span className="user-form__input-error"></span>
          </fieldset>
          <fieldset className="user-form__fieldset">
            <label className="user-form__input-label">E-mail
              <input
                className="user-form__input"
                type="email"
                name="email"
                required
              />
            </label>
            <span className="user-form__input-error"></span>
          </fieldset>
          <fieldset className="user-form__fieldset">
            <label className="user-form__input-label">Пароль
              <input
                className="user-form__input"
                type="password"
                name="password"
                required
                minLength="8"
              />
            </label>
            <span className="user-form__input-error">Что-то пошло не так...</span>
          </fieldset>
          <button
            className="user-form__form-button"
            type="submit">
            Зарегистрироваться
          </button>
        </form>
                <p className="register__subtitle">Уже зарегистрированы?
                    <Link className="register__link" to="/signin"> Войти</Link></p>
        </section>
       </>
    )
}

export default Register;