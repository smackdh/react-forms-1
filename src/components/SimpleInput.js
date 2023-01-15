import React, { useState, useRef, useEffect } from "react";

const SimpleInput = (props) => {
  const [nameInput, setNameInput] = useState("");
  const [nameInputValid, setNameInputValid] = useState(false);
  const [userTouchedInput, setUserTouchedInput] = useState(false);
  const nameInputRef = useRef();

  useEffect(() => {
    if (nameInputValid) {
      console.log("Name input is ok");
    }
  }, [nameInputValid]);

  const inputHandler = (e) => {
    setNameInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setUserTouchedInput(true);
    if (nameInput.trim() === "") {
      setNameInputValid(false);
      return;
    }

    setNameInputValid(true);
    console.log(`This is useState: ${nameInput}`);
    const enteredName = nameInputRef.current.value;
    console.log(`This is useRef: ${enteredName}`);
  };

  const nameInputIsInvalid = !nameInputValid && userTouchedInput;

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={inputHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Input a valid name!!</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
