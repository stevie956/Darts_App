import React, { useState, useContext } from "react";
import { FormContainer, Input, } from "./HomeContainer";
import { AccountContext } from "./Context";

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
const { switchToPlayDarts }  = useContext(AccountContext);
  return (
      <div>
         <FormContainer onSubmit={handleSubmit}>
        <Input type="text" placeholder="Player One" value={formState.nameOne} onChange={handleChange}/>
        <Input type="text" placeholder="Player Two" value={formState.nameTwo} onChange={handleChange}/>
       </FormContainer>
       <button className="btn btn-primary btn-block gameOnBtn"
      onClick={switchToPlayDarts}>
            GAME ON!
          </button>
      
        {/* <form onSubmit={handleSubmit}>
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
          {/* <Link to="/GameContainer">
          <button className="btn btn-primary btn-block gameOnBtn">
            GAME ON!
          </button>
          </Link> */}
       
      </div>
  );
};

export { Game501Form };
