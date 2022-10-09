import { Link } from "react-router-dom";

function AuthForm(props) {
  const { children, formType, textOnBtn, title } = props;
  return (
    <div className="auth">
      <Link to="/">
        <div className="auth__logo"></div>
      </Link>
      <h2 className="auth__title">{title}</h2>
      <form className="auth-form" name={formType}>
        {children}
        <button
          className="auth-form__form-button opacity-on-hover"
          type="submit"
        >
          {textOnBtn}
        </button>
      </form>
      {formType === "register" ? (
        <p className="auth__subtitle">Уже зарегистрированы?
        <Link className="auth__link opacity-on-hover" to="/signin"> Войти</Link></p>
      ) : (
        <p className="auth__subtitle">Ещё не зарегистрированы?
        <Link className="auth__link opacity-on-hover" to="/signup"> Регистрация</Link></p>
      )}
    </div>
  );
}

export default AuthForm;
