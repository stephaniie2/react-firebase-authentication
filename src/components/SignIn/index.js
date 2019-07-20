import React, { useState, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import useForm from "react-hook-form";

import { PasswordForgetLink } from "../PasswordForget";
import { FirebaseContext } from "../Firebase";
import * as ROUTES from "../../constants/routes";

const SignIn = props => {
  const firebase = useContext(FirebaseContext);
  const [error, setError] = useState([]);
  const { register, handleSubmit } = useForm(); // initialise the hook

  const onSubmit = ({ email, password }) => {
    firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
        props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        setError(error);
      });
  }; // callback when validation pass

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="email"
          type="text"
          placeholder="Email Address"
          ref={register({ required: true })}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          ref={register({ required: true })}
        />
        <button type="submit">Login</button>
        {error && <p>{error.message}</p>}
      </form>
      <PasswordForgetLink />
    </>
  );
};

export default withRouter(SignIn);
