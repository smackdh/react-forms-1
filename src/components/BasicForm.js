import useInput from "../hooks/input-hook";
import React, { useEffect, useState } from "react";

const BasicForm = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const {
    value: nameInputValue,
    isInputValid: isNameValid,
    hasError: nameHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((name) => name.trim() !== "");

  const {
    value: lastNameInputValue,
    isInputValid: isLastNameValid,
    hasError: lastNameHasError,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput((lastName) => lastName.trim() !== "");

  const {
    value: emailInputValue,
    isInputValid: isEmailValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((email) =>
    email.trim().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  );

  useEffect(() => {
    if (nameInputValue && lastNameInputValue && emailInputValue) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [nameInputValue, lastNameInputValue, emailInputValue]);

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted");

    nameReset();
    lastNameReset();
    emailReset();
  };

  const nameInputClasses = nameHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            value={nameInputValue}
            onBlur={nameBlurHandler}
            onChange={nameChangeHandler}
            type="text"
            id="name"
          />
          {nameHasError && <p className="error-text">Enter a name.</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="lastname">Last Name</label>
          <input
            value={lastNameInputValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            type="text"
            id="lastname"
          />
          {lastNameHasError && <p className="error-text">Enter a last name.</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          value={emailInputValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          type="text"
          id="email"
        />
        {emailHasError && <p className="error-text">Enter a real email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
