import React, { useState } from "react";

const useInput = (validateValue) => {
  const [nameInputValue, setNameInputValue] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const isValid = validateValue(nameInputValue);
  const hasError = !isValid && inputTouched;

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
