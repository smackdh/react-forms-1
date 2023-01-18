import React, { useState, useEffect } from "react";

const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const SimpleInput = (props) => {
  const [emailInputTouched, setEmailInputTouched] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameisValid = nameInput.trim() !== "";
  const enteredEmailisValid =
    emailInput.trim() !== "" && emailInput.trim().match(regex);

  const nameInputIsInvalid = !enteredNameisValid && nameInputTouched;
  const emailInputIsInvalid = !enteredEmailisValid && emailInputTouched;

  useEffect(() => {
    if (enteredNameisValid && enteredEmailisValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredNameisValid, enteredEmailisValid]);

  const nameInputHandler = (e) => {
    setNameInput(e.target.value);
  };

  const emailInputHandler = (e) => {
    setEmailInput(e.target.value);
  };

  const nameInputBlurHandler = (e) => {
    setNameInputTouched(true);
  };

  const emailInputBlurHandler = (e) => {
    setEmailInputTouched(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setNameInputTouched(true);
    setEmailInputTouched(true);

    if (!enteredNameisValid) {
      return;
    }

    setNameInput("");
    setNameInputTouched(false);
    setEmailInputTouched(false);
  };

  const nameInputClasses =
    nameInputIsInvalid || emailInputIsInvalid
      ? "form-control invalid"
      : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onBlur={nameInputBlurHandler}
          onChange={nameInputHandler}
        />
      </div>
      <div className={nameInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onBlur={emailInputBlurHandler}
          onChange={emailInputHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Input a valid name!!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
