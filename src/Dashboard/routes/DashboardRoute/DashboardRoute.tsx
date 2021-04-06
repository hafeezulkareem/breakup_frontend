import React from "react";
import { Redirect } from "react-router-dom";

import { isSignedIn } from "../../../Common/utils/AuthUtils";

import { Header } from "../../components/Header";
import { Projects } from "../../components/Projects";

import { Container, DashboardContainer } from "./styledComponents";

const DashboardRoute = (props) => {
   if (!isSignedIn()) {
      return <Redirect to="/sign-in" />;
   }

   return (
      <DashboardContainer>
         <Header />
         <Container>
            <Projects />
         </Container>
      </DashboardContainer>
   );
};

export { DashboardRoute };
