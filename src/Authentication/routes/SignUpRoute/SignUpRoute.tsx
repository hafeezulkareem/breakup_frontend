import React from "react";
import { observer } from "mobx-react-lite";
import { Redirect, withRouter } from "react-router-dom";
import { History } from "history";

import { isSignedIn } from "../../../Common/utils/AuthUtils";

import { SignUp } from "../../components/SignUp";

interface SignUpRouteProps {
   history: History;
}

const SignUpRoute = observer((props: SignUpRouteProps) => {
   const { history } = props;

   if (isSignedIn()) {
      return <Redirect to="/" />;
   }

   const goToSignInPage = () => {
      history.replace("/sign-in");
   };

   return <SignUp goToSignInPage={goToSignInPage} />;
});

const SignUpRouteWithRouter = withRouter(SignUpRoute);

export { SignUpRouteWithRouter };
