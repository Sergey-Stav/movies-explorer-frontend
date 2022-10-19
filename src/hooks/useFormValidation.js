import { useState, useCallback } from "react";
import isEmail from "validator/es/lib/isEmail";

export default function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  function handleChange(e) {
    const input = e.target;
    const name = input.name;
    const value = input.value;

    if (name === "name" && input.validity.patternMismatch) {
      input.setCustomValidity(
        "поле Имя должно содержать только латиницу, кириллицу, пробел или дефис"
      );
    } else {
      input.setCustomValidity("");
    }

    if (name === "email") {
      if (!isEmail(value)) {
        input.setCustomValidity("Некорректный адрес электронной почты");
      } else {
        input.setCustomValidity("");
      }
    }

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage });
    setIsFormValid(input.closest("form").checkValidity());
  }

  // Сброс полей и ошибок формы
  const resetForm = useCallback(
    (newValue = {}, newError = {}, isFormValid = false) => {
      setValues(newValue);
      setErrors(newError);
      setIsFormValid(isFormValid);
    },
    [setValues, setErrors, setIsFormValid]
  );

  return {
    values,
    handleChange,
    errors,
    isFormValid,
    setIsFormValid,
    resetForm,
  };
}
