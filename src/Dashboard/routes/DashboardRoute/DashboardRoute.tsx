import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

import { useStores } from "../../../Common/stores";
import { isSignedIn } from "../../../Common/utils/AuthUtils";

import { Header } from "../../components/Header";
import { Projects } from "../../components/Projects";

import { Container, DashboardContainer } from "./styledComponents";

const DashboardRoute = (props) => {
   const {
      projectsStore: { getProjectsAPI },
   } = useStores();

   useEffect(() => {
      getProjects();
   });

   if (!isSignedIn()) {
      return <Redirect to="/sign-in" />;
   }

   const getProjects = () => {
      getProjectsAPI();
   };

   return (
      <DashboardContainer>
         <Header />
         <Container>
            <Projects getProjects={getProjects} />
         </Container>
      </DashboardContainer>
   );
};

export { DashboardRoute };
