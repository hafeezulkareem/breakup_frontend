import React from "react";
import { Redirect } from "react-router-dom";

import { isSignedIn } from "../../../Common/utils/AuthUtils";

import { SignIn } from "../../components/SignIn";

const SignInRoute = (props) => {
   if (isSignedIn()) {
      return <Redirect to="/" />;
   }
   return <SignIn />;
};

export { SignInRoute };
