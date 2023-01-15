import React, { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [nameInput, setNameInput] = useState("");

  const inputHandler = (e) => {
    setNameInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    inputHandler();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
