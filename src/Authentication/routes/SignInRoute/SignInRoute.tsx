import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { History } from "history";

import { isSignedIn } from "../../../Common/utils/AuthUtils";

import { SignIn } from "../../components/SignIn";

interface SignInRouteProps {
   history: History;
}

const SignInRoute = observer((props: SignInRouteProps) => {
   const { history } = props;

   if (isSignedIn()) {
      return <Redirect to="/" />;
   }

   const goToDashboard = () => {
      history.push("/");
   };

   return <SignIn goToDashboard={goToDashboard} />;
});

const SignInRouteWithRouter = withRouter(SignInRoute);

export { SignInRouteWithRouter };
