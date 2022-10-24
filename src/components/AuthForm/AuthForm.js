import { Link } from "react-router-dom";

function AuthForm(props) {
  const { children, formType, textOnBtn, onSubmit, title, isValid } = props;
  return (
    <div className="auth">
      <Link to="/">
        <div
          className={`auth__logo opacity-on-hover ${
            formType === "login" && "auth__logo_type_login"
          }`}
        ></div>
      </Link>
      <h2
        className={`auth__title ${
          formType === "login" && "auth__title_type_login"
        }`}
      >
        {title}
      </h2>
      <form className="auth-form" name={formType} onSubmit={onSubmit}>
        {children}
        <button
          className={`auth-form__form-button ${
            formType === "login" && "auth-form__form-button_type_login"
          } ${!isValid && "auth-form__form-button_disabled"} opacity-on-hover`}
          type="submit"
          disabled={!isValid}
        >
          {textOnBtn}
        </button>
      </form>
      {formType === "register" ? (
        <p className="auth__subtitle">
          Уже зарегистрированы?
          <Link className="auth__link opacity-on-hover" to="/signin">
            {" "}
            Войти
          </Link>
        </p>
      ) : (
        <p className="auth__subtitle">
          Ещё не зарегистрированы?
          <Link className="auth__link opacity-on-hover" to="/signup">
            {" "}
            Регистрация
          </Link>
        </p>
      )}
    </div>
  );
}

export default AuthForm;
