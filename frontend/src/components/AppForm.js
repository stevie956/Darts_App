import React, { useState } from "react";

const AppForm = (props) => {
  const [formState, setFormState] = useState({
    nameOne: "",
    nameTwo: "",
  });

  const handleChange = (e) => {
    const newState = { ...formState }
    newState[e.target.name] = e.target.value;
    setFormState(newState);
}


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    props.submit(formState.nameOne, formState.nameTwo);
  };

  return (
    <div>
    <h1>501</h1>
      <form onSubmit={handleSubmit}>
        <label className="label">
          Player One
          <input name="nameOne" value={formState.nameOne} onChange={handleChange}></input>
        </label>
        <label className="label">
          Player Two
          <input name="nameTwo" value={formState.nameTwo} onChange={handleChange}></input>
        </label>
        <button type="submit" className="btn btn-primary btn-block">GAME ON!</button>
      </form>
    </div>
  );
};

export { AppForm };