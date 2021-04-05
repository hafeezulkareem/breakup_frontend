import React from "react";
import { Redirect } from "react-router-dom";

import { isSignedIn } from "../../../Common/utils/AuthUtils";

import { Projects } from "../../components/Projects";

const DashboardRoute = (props) => {
   if (!isSignedIn()) {
      return <Redirect to="/sign-in" />;
   }
   return <Projects />;
};

export { DashboardRoute };
