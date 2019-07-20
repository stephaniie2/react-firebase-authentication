import React, { useState, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import useForm from "react-hook-form";

import { FirebaseContext } from "../Firebase";
import * as ROUTES from "../../constants/routes";

const SignUpPage = props => {
  const firebase = useContext(FirebaseContext);
  const [state, setState] = useState("");
  const { register, handleSubmit } = useForm(); // initialise the hook

  const onSubmit = ({ username, email, passwordOne }) => {
    firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        setState(error);
      });
  }; // callback when validation pass

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="username"
          type="text"
          placeholder="Full Name"
          ref={register({ required: true })}
        />
        <input
          name="email"
          placeholder="Email Adress"
          ref={register({ required: true })}
        />
        <input
          name="passwordOne"
          type="password"
          placeholder="Password"
          ref={register({ required: true })}
        />
        <input
          name="passwordTwo"
          type="password"
          placeholder="Confirm Password"
          ref={register({ required: true })}
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Have an account? <Link to={ROUTES.SIGN_IN}>Login</Link>
      </p>
    </>
  );
};

export default withRouter(SignUpPage);
