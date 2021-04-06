import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { History } from "history";

import { isSignedIn } from "../../../Common/utils/AuthUtils";

import { Header } from "../../components/Header";
import { Projects } from "../../components/Projects";

import { Container, DashboardContainer } from "./styledComponents";

interface DashboardRouteProps {
   history: History;
}

const DashboardRoute = (props: DashboardRouteProps) => {
   const { history } = props;

   if (!isSignedIn()) {
      return <Redirect to="/sign-in" />;
   }

   const goToProject = (id: string) => {
      history.push(`/project/${id}`);
   };

   return (
      <DashboardContainer>
         <Header />
         <Container>
            <Projects goToProject={goToProject} />
         </Container>
      </DashboardContainer>
   );
};

const DashboardRouteWithRouter = withRouter(DashboardRoute);

export { DashboardRouteWithRouter };
