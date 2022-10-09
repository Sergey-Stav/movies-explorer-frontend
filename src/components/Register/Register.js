import AuthForm from "../AuthForm/AuthForm";

function Register() {
  return (
    <section className="register">
      <AuthForm
        formType="register"
        textOnBtn="Зарегистрироваться"
        title="Добро пожаловать!"
      >
        <fieldset className="auth-form__fieldset">
          <label className="auth-form__input-label">
            Имя
            <input
              className="auth-form__input"
              type="text"
              name="name"
              required
            />
          </label>
          <span className="auth-form__input-error"></span>
        </fieldset>
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

export default Register;
