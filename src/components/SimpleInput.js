import React, { useState, useEffect } from "react";

const SimpleInput = (props) => {
  const [nameInput, setNameInput] = useState("");
  const [userTouchedInput, setUserTouchedInput] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const enteredNameisValid = nameInput.trim() !== "";
  const nameInputIsInvalid = !enteredNameisValid && userTouchedInput;

  const nameInputHandler = (e) => {
    setNameInput(e.target.value);
  };

  const emailInputHandler = (e) => {
    setEmailInput(e.target.value);
  };

  const nameInputBlurHandler = (e) => {
    setUserTouchedInput(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setUserTouchedInput(true);

    if (!enteredNameisValid) {
      return;
    }

    setNameInput("");
    setUserTouchedInput(false);
  };

  const nameInputClasses = nameInputIsInvalid
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
          onBlur={nameInputBlurHandler}
          onChange={emailInputHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Input a valid name!!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
