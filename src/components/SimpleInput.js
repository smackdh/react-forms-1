import React, { useState, useEffect } from "react";
import useInput from "../hooks/use-input";

const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const SimpleInput = (props) => {
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

  useEffect(() => {
    if (enteredName && enteredEmail) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredName, enteredEmail]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!nameInputHasError) {
      return;
    }
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = enteredNameIsValid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = enteredEmailIsValid
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
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onBlur={emaiLBlurHandler}
          onChange={emailInputChangeHandler}
        />
      </div>
      {emailInputHasError && (
        <p className="error-text">Input a valid email!!</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
