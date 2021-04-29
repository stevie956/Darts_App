import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";


const LoginForm = (props, error) => {
  const [formState, setFormState] = useState({ username: "", password: "" });
  
  const handleChange = (e) => {
    
    const newState = { ...formState }
    newState[e.target.name] = e.target.value;
    setFormState(newState);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
  props.submit(formState.username, formState.password)
    
  };

  return (
    <Container maxWidth="lg">
      <div className="login">
        <form onSubmit={handleSubmit}>
          <div className="form-inner">
            <h2>Login</h2>
            {error !== "" ? <div className="error">{error}</div> : ""}
            <div className="form-group">
              <label htmlFor="username">Username: </label>
              <input
                type="text"
                name="username"
                id="username"
              onChange={handleChange}
                value={formState.username}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" name="password" id="password">
                Password:{" "}
              </label>
              <input
                type="password"
                name="password"
                id="password"
              onChange={handleChange}
                value={formState.password}
              ></input>
            </div>
            <div className="loginbtn">
              <Button
                type="submit"
                value="LOGIN"
                variant="contained"
                color="primary"
              >
                LOGIN
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default LoginForm;