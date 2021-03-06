import { Button } from "@material-ui/core";
import React from "react";
import { actionTypes } from "../ContextApi/reducer";
import { useStateValue } from "../ContextApi/StateProvider";
import { auth, provider } from "../Firebase";
import "../Styles/login.css";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = (e) => {
    e.preventDefault();

    // SignIn functionality
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login__">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Facebook_f_Logo_%28with_gradient%29.svg/1024px-Facebook_f_Logo_%28with_gradient%29.svg.png"
          alt=""
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
      </div>
      <Button onClick={signIn} type="submit">
        SignIn
      </Button>
    </div>
  );
}

export default Login;
