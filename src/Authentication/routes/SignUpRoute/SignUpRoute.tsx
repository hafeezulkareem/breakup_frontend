import React from "react";
import { Redirect } from "react-router-dom";

import { isSignedIn } from "../../../Common/utils/AuthUtils";

import { SignUp } from "../../components/SignUp";

const SignUpRoute = (props) => {
   if (isSignedIn()) {
      return <Redirect to="/" />;
   }
   return <SignUp />;
};

export { SignUpRoute };
