import React from "react";
import { observer } from "mobx-react-lite";
import { Redirect } from "react-router-dom";

import { isSignedIn } from "../../../Common/utils/AuthUtils";

import { SignUp } from "../../components/SignUp";

const SignUpRoute = observer((props) => {
   if (isSignedIn()) {
      return <Redirect to="/" />;
   }
   return <SignUp />;
});

export { SignUpRoute };
