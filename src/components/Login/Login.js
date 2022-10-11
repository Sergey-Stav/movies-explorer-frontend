import AuthForm from "../AuthForm/AuthForm";

function Login() {
  return (
    <section className="register">
      <AuthForm formType="login" textOnBtn="Войти" title="Рады видеть!">
        <fieldset className="auth-form__fieldset">
          <label className="auth-form__input-label">
            E-mail
            <input
              className="auth-form__input"
              type="email"
              name="email"
              required
            />
          </label>
          <span className="auth-form__input-error"></span>
        </fieldset>
        <fieldset className="auth-form__fieldset">
          <label className="auth-form__input-label">
            Пароль
            <input
              className="auth-form__input"
              type="password"
              name="password"
              required
              minLength="8"
            />
          </label>
          <span className="auth-form__input-error">Что-то пошло не так...</span>
        </fieldset>
      </AuthForm>
    </section>
  );
}

export default Login;
