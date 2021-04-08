import React, { ReactNode, useState } from "react";
import { observer } from "mobx-react-lite";
import { Redirect, withRouter } from "react-router-dom";
import { History } from "history";

import { isSignedIn } from "../../../Common/utils/AuthUtils";
import { useStores } from "../../../Common/stores";

import { Header } from "../../components/Header";
import { TitleAndNavigation } from "../../components/TitleAndNavigation";
import { ProjectTitleBar } from "../../components/ProjectTitleBar";
import { ProjectDetails } from "../../components/ProjectDetails";

import { Container, ProjectPageContainer } from "./styledComponents";
import { UserModel } from "../../../Authentication/stores/models/UserModel";

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

   const [shouldShowProjectsDetails, setShouldShowProjectDetails] = useState(
      false
   );

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

   const showProjectDetails = () => {
      setShouldShowProjectDetails(true);
   };

   const hideProjectDetails = () => {
      setShouldShowProjectDetails(false);
   };

   return (
      <ProjectPageContainer>
         <Header titleAndNavigation={renderTitleAndNavigation} />
         <Container>
            <ProjectTitleBar showProjectDetails={showProjectDetails} />
            <ProjectDetails
               shouldShow={shouldShowProjectsDetails}
               hideProjectDetails={hideProjectDetails}
               title="Sample123"
               description="New Sample"
               members={[
                  new UserModel({
                     id: "123456789",
                     name: "Hafeez",
                     email: "hafeezulkareem@gmail.com",
                     password: "12345",
                  }),
               ]}
            />
         </Container>
      </ProjectPageContainer>
   );
});

const ProjectRouteWithRouter = withRouter(ProjectRoute);

export { ProjectRouteWithRouter };