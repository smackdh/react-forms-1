import useInput from "../hooks/input-hook";
import React, { useEffect } from 'react'

const BasicForm = (props) => {
  const {
    value: nameInputValue,
    isInputValid: isNameValid,
    hasError: nameHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((name) => name.trim() !== "");

  const submitHandler = (event) => {
    event.preventDefault();

    nameReset();
  };

  const nameInputClasses = !isNameValid ? "form-control invalid" : "form-control "};


  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            onBlur={nameBlurHandler}
            onChange={nameChangeHandler}
            type="text"
            id="name"
          />
        </div>
        {nameHasError ? <p>Enter a name.</p> : ""}
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
