import React from "react";

import { AuthUserContext, withAuthorization } from "../Session";
import PasswordForget from "../PasswordForget";
import PasswordChange from "../PasswordChange";

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordForget />
        <PasswordChange />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);
