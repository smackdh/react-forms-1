import React, { useState } from "react";

const useInput = (validateValue) => {
  const [inputValue, setInputValue] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const isValid = validateValue(inputValue);
  const hasError = !isValid && inputTouched;
  // check for errors?

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  const inputBlurHandler = (e) => {
    setInputTouched(true);
    console.log("TOUCHED!");
  };

  const reset = () => {
    setInputValue("");
    setInputTouched(false);
    console.log("RESET");
  };

  return {
    value: inputValue,
    isInputValid: isValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;

// Add State
// Create States
// Check States
// Add Handlers to take the value
// Add onChange on the form
// Add SubmitHandler
// Add Reset handler to clear form
// Add function to the components argument
// Import the custom hook
// Give names to the things
// Add specific validation checks (regex etc)
