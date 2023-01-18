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

    if (!nameHasError || !lastNameHasError || !emailHasError) {
      return;
    }

    nameReset();
    lastNameReset();
    emailReset();
  };

  const nameInputClasses = isNameValid
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = isLastNameValid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = isEmailValid
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
        </div>
      </div>
      {lastNameHasError ? <p>Enter a full name.</p> : ""}
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          value={emailInputValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          type="text"
          id="email"
        />
      </div>
      {emailHasError ? <p>Enter a real email.</p> : ""}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
