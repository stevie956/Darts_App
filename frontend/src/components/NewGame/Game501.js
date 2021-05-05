import React, { useState } from "react";

const Game501Form = (props) => {
  const [formState, setFormState] = useState({
    nameOne: "",
    nameTwo: "",
  });

  const handleChange = (e) => {
    const newState = { ...formState };
    newState[e.target.name] = e.target.value;
    setFormState(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    props.submit(formState.nameOne, formState.nameTwo);
  };

  return (
      <div>
        <form onSubmit={handleSubmit}>
          <label className="label">
            Player One: 
            <input
              className="input"
              name="nameOne"
              value={formState.nameOne}
              onChange={handleChange}
            ></input>
          </label>
          <br/><br/>
          <label className="label">
            Player Two: 
            <input
            className="input"
              name="nameTwo"
              value={formState.nameTwo}
              onChange={handleChange}
            ></input>
          </label>
          <br/><br/>
          <button type="submit" className="btn btn-primary btn-block gameOnBtn">
            GAME ON!
          </button>
        </form>
      </div>
  );
};

export { Game501Form };
