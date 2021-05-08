
import React, { useContext, useState } from "react";
import{ useHistory } from "react-router";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./HomeContainer";
import { Marginer } from "../Login/Marginer";
import { AccountContext } from "./Context";

export function CreateGameForm(props) {
  
  const [form, setForm]  = useState({username: "", password: ""});
  const history = useHistory();

  const handleChange = (e) => {
    const newFormState = { ...form };
    newFormState[e.target.name] = e.target.value;
    setForm(newFormState);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      props.switchToGameOn();
      // .then(history.push("/LoginForm"));
  };


  
  
  
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" name="username" placeholder="Username" onChange={handleChange}/>
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={handleSubmit}>Sign Up!</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Login
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}