import { useEffect } from "react";
import AuthForm from "../AuthForm/AuthForm";

import useFormWithValidation from "../../hooks/useFormValidation";

function Register({ handleRegister }) {
  const {
    values,
    handleChange,
    errors,
    isFormValid,
    resetForm,
  } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    handleRegister(values);
  }

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <section className="register">
      <AuthForm
        formType="register"
        textOnBtn="Зарегистрироваться"
        title="Добро пожаловать!"
        onSubmit={handleSubmit}
        isValid={isFormValid}
      >
        <fieldset className="auth-form__fieldset">
          <label className="auth-form__input-label">
            Имя
            <input
              className="auth-form__input"
              type="text"
              name="name"
              pattern="[а-яА-Яa-zA-ZёË\- ]{1,}"
              onChange={handleChange}
              value={values.name || ""}
              minLength="2"
              maxLength="30"
              required
            />
          </label>
          <span className="auth-form__input-error">{errors.name || ""}</span>
        </fieldset>
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
              minLength="8"
              required
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

export default Register;
