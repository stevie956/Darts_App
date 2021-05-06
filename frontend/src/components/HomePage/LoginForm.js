import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { AccountContext } from "./Context";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  MutedLink,
  SubmitButton,
  Input,
} from "./HomeContainer";
import { Marginer } from "../Login/Marginer";

export const LoginForm = (props) => {
  const history = useHistory();
  console.log("history", history)
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const newFormState = { ...formState };
    newFormState[e.target.name] = e.target.value;
    console.log(newFormState);
    setFormState(newFormState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit", e);

    fetch("http://localhost:4000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((response) => {
        if (response.status !== 200) {
          console.log("Incorrect Details!!");
          setError("Incorrect Details!!");
          return;
        }
        window.localStorage.setItem("userLoggedin", true);
        
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log("data", data);
        if (data && data.token) {
          window.localStorage.setItem("token", data.token);
        }
        props.switchToPlayDarts()
      });
  };

  const { switchToSignup, switchToGameOn } = useContext(AccountContext);

  return (
    <BoxContainer>
      {error !== "" ? <div className="error">{error}</div> : ""}
      <FormContainer onSubmit={handleSubmit}>
        <Input
          type="username"
          placeholder="Username"
          id="username"
          name="username"
          value={formState.username}
          onChange={handleChange}
        />
        <Input
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          value={formState.password}
          onChange={handleChange}
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={handleSubmit}>
        Login
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Sign Up!
        </BoldLink>
      </MutedLink>
      <div>
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToGameOn}>
          Continue As Guest!
        </BoldLink>
      </MutedLink>
      </div>
    </BoxContainer>
  );
};
