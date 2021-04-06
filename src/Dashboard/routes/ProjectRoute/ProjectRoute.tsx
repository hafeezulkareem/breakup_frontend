import React from "react";
import { observer } from "mobx-react-lite";
import { Redirect } from "react-router-dom";

import { isSignedIn } from "../../../Common/utils/AuthUtils";

import { Header } from "../../components/Header";

import { Container, ProjectPageContainer } from "./styledComponents";

const ProjectRoute = observer((props) => {
   if (!isSignedIn()) {
      return <Redirect to="/sign-in" />;
   }

   return (
      <ProjectPageContainer>
         <Header />
         <Container>Project Details</Container>
      </ProjectPageContainer>
   );
});

export { ProjectRoute };
