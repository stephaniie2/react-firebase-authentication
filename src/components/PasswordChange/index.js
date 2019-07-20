import React, { useState, useContext } from "react";
import useForm from "react-hook-form";

import { FirebaseContext } from "../Firebase";
import * as ROUTES from "../../constants/routes";

const PasswordChange = props => {
  const firebase = useContext(FirebaseContext);
  const [error, setError] = useState([]);
  const [passwordOne] = useState("");
  const { register, handleSubmit } = useForm(); // initialise the hook

  const onSubmit = ({ passwordOne }) => {
    firebase
      .doPasswordUpdate(passwordOne)
      .then(authUser => {
        props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        setError(error);
      });
  }; // callback when validation pass

  return (
    <>
      <h1>Password Change</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="passwordOne"
          value={passwordOne}
          type="password"
          placeholder="New Password"
          ref={register({ required: true })}
        />
        <input
          name="passwordTwo"
          type="password"
          placeholder="Confirm New Password"
          ref={register({
            validate: value => value === passwordOne || "error message"
          })}
        />
        <button type="submit">Send Password</button>
        {error && <p>{error.message}</p>}
      </form>
    </>
  );
};

export default PasswordChange;
