import React, { useState } from "react";

const useInput = (validateValue) => {
  const [nameInputValue, setNameInputValue] = useState("");
  const [inputTouched, setInputTouched] = useState(false);
  const [emailInputTouched, setEmailInputTouched] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const isValid = validateValue(nameInputValue);
  const hasError = !isValid && inputTouched;
  const emailInputIsInvalid = !enteredEmailisValid && emailInputTouched;

  const inputHandler = (e) => {
    setNameInputValue(e.target.value);
  };

  const inputBlurHandler = (e) => {
    setInputTouched(true);
  };

  const reset = () => {
    setNameInputValue("");
    setInputTouched(false);
  };

  return {
    value: nameInputValue,
    hasError,
    isValid,
    inputHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
