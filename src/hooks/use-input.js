import React, { useState } from "react";

const useInput = (validateValue) => {
  const [inputValue, setInputValue] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const isValid = validateValue(inputValue);
  const hasError = !isValid && inputTouched;

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const inputBlurHandler = (e) => {
    setInputTouched(true);
  };

  return {
    value: inputValue,
    hasError,
    isValid,
    inputHandler,
    inputBlurHandler,
  };
};

export default useInput;
