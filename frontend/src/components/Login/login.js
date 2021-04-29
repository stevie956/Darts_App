import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import LoginForm from "./LoginForm";


function LoginApp(props) {
  const history = useHistory();
  const adminUser = {
    username: "player",
    password: "player123",
  };
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.username === adminUser.username &&
      details.password === adminUser.password
    ) {
      console.log("you have logged in");
      props.setUser({
        name: details.name,
        username: details.username,
      });
      props.setUserLoggedIn(true);
      window.localStorage.setItem("userLoggedin", true);
      history.replace("/");
    } else {
      console.log("Details not match");
      setError("Details not match");
    }
  };

  return (
    <div className="Login">
      <LoginForm Login={Login} error={error} />
    </div>
  );
}

export default LoginApp;