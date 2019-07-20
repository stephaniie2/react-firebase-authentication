import React, { useState, useContext } from "react";
import useForm from "react-hook-form";
import { Link } from "react-router-dom";

import { FirebaseContext } from "../Firebase";
import * as ROUTES from "../../constants/routes";

const PasswordForget = props => {
  const firebase = useContext(FirebaseContext);
  const [error, setError] = useState([]);
  const { register, handleSubmit } = useForm(); // initialise the hook

  const onSubmit = ({ email }) => {
    firebase
      .doPasswordReset(email)
      .then(authUser => {
        props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        setError(error);
      });
  }; // callback when validation pass

  return (
    <>
      <h1>PasswordForget</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="email"
          placeholder="Email Address"
          ref={register({ required: true })}
        />
        <button type="submit">Send Password</button>
        {error && <p>{error.message}</p>}
      </form>
    </>
  );
};

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export default PasswordForget;

export { PasswordForgetLink };
