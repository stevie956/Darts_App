import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { AccountContext } from "./Context";
import { BoldLink, BoxContainer, FormContainer, MutedLink, SubmitButton, Input } from "./HomeContainer";
import { Marginer } from "../Login/Marginer";


export const LoginForm = (props) => {
  const history = useHistory();
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  
   const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit", e);

    fetch("http://localhost:4000/api/user/login",{
      method: "POST",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify(formState)
    }).then(response => {
      if (response.status !== 200) { 
      console.log("Details Incorrect!!");
      setError("Details Incorrect!!");
        return;
      }
      props.setUser({
        username: formState.username
      });
      props.setUserLoggedIn(true);
      window.localStorage.setItem("userLoggedin", true);
history.replace("/");
return response.json();
});
   }

   const { switchToSignup } = useContext(AccountContext);

return (
   <BoxContainer>
   <FormContainer>
     <Input type="username" placeholder="Username" value={formState.username}/>
     <Input type="password" placeholder="Password" value={formState.password}/>
   </FormContainer>
   <Marginer direction="vertical" margin={10} />
   <Marginer direction="vertical" margin="1.6em" />
   <SubmitButton type="submit" onClick={handleSubmit}>Login</SubmitButton>
   <Marginer direction="vertical" margin="1em" />
   <MutedLink href="#">
     Don't have an account?{" "}
     <BoldLink href="#" onClick={switchToSignup}>
       Sign Up!
     </BoldLink>
   </MutedLink>
 </BoxContainer>
);
};
