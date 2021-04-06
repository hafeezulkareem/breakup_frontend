import React, { ReactNode } from "react";
import { observer } from "mobx-react-lite";
import { Redirect, withRouter } from "react-router-dom";
import { History } from "history";

import { isSignedIn } from "../../../Common/utils/AuthUtils";
import { useStores } from "../../../Common/stores";

import { Header } from "../../components/Header";
import { TitleAndNavigation } from "../../components/TitleAndNavigation";
import { ProjectTitleBar } from "../../components/ProjectTitleBar";

import { Container, ProjectPageContainer } from "./styledComponents";

interface ProjectRouteProps {
   history: History;
   match: { params: { id } };
}

const ProjectRoute = observer((props: ProjectRouteProps) => {
   const {
      history,
      match: {
         params: { id },
      },
   } = props;

   const {
      projectsStore: { getProjectTitleWithId },
      uiStore: { updateProjectTitle },
   } = useStores();

   if (!isSignedIn()) {
      return <Redirect to="/sign-in" />;
   }

   const goToProjects = () => {
      history.push("/");
   };

   updateProjectTitle(getProjectTitleWithId(id));

   const renderTitleAndNavigation = (): ReactNode => {
      return <TitleAndNavigation goToProjects={goToProjects} />;
   };

   return (
      <ProjectPageContainer>
         <Header titleAndNavigation={renderTitleAndNavigation} />
         <Container>
            <ProjectTitleBar />
         </Container>
      </ProjectPageContainer>
   );
});

const ProjectRouteWithRouter = withRouter(ProjectRoute);

export { ProjectRouteWithRouter };
