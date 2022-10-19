import { useEffect } from "react";
import AuthForm from "../AuthForm/AuthForm";

import useFormWithValidation from "../../hooks/useFormValidation";

function Login({ handleLogin }) {
  const {
    values,
    handleChange,
    errors,
    isFormValid,
    resetForm,
  } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(values);
  }

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <section className="register">
      <AuthForm
        formType="login"
        textOnBtn="Войти"
        title="Рады видеть!"
        onSubmit={handleSubmit}
        isValid={isFormValid}
      >
        <fieldset className="auth-form__fieldset">
          <label className="auth-form__input-label">
            E-mail
            <input
              className="auth-form__input"
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email || ""}
              required
            />
          </label>
          <span className="auth-form__input-error">{errors.email || ""}</span>
        </fieldset>
        <fieldset className="auth-form__fieldset">
          <label className="auth-form__input-label">
            Пароль
            <input
              className="auth-form__input"
              type="password"
              name="password"
              onChange={handleChange}
              value={values.password || ""}
              required
              minLength="8"
            />
          </label>
          <span className="auth-form__input-error">
            {errors.password || ""}
          </span>
        </fieldset>
      </AuthForm>
    </section>
  );
}

export default Login;
