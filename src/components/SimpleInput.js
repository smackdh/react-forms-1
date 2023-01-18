import React, { useState, useEffect } from "react";
import useInput from "../hooks/use-input";

const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const SimpleInput = (props) => {
  const [emailInputTouched, setEmailInputTouched] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const [formIsValid, setFormIsValid] = useState(false);

  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    inputHandler: inputChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    inValid: enteredEmailIsValid,
    inputHandler: emailInputChangeHandler,
    inputBlurHandler: emaiLBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim().match(regex));

  const enteredEmailisValid =
    emailInput.trim() !== "" && emailInput.trim().match(regex);
  const emailInputIsInvalid = !enteredEmailisValid && emailInputTouched;

  useEffect(() => {
    if (enteredName && enteredEmailisValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredName, enteredEmailisValid]);

  const emailInputHandler = (e) => {
    setEmailInput(e.target.value);
  };

  const emailInputBlurHandler = (e) => {
    setEmailInputTouched(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setEmailInputTouched(true);

    if (!nameInputHasError) {
      return;
    }
    resetNameInput();
    setEmailInputTouched(false);
  };

  const nameInputClasses =
    enteredNameIsValid || emailInputIsInvalid
      ? "form-control invalid"
      : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onBlur={nameBlurHandler}
          onChange={inputChangeHandler}
        />
      </div>
      {nameInputHasError && <p className="error-text">Input a valid name!!</p>}
      <div className={nameInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onBlur={emailInputBlurHandler}
          onChange={emailInputHandler}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
