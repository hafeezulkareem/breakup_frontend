import React, { ReactNode, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Redirect, withRouter } from "react-router-dom";
import { History } from "history";

import { isSignedIn } from "../../../Common/utils/AuthUtils";
import { useStores } from "../../../Common/stores";
import { UserModel } from "../../../Authentication/stores/models/UserModel";

import { Header } from "../../components/Header";
import { TitleAndNavigation } from "../../components/TitleAndNavigation";
import { ProjectTitleBar } from "../../components/ProjectTitleBar";
import { ProjectDetails } from "../../components/ProjectDetails";
import { ProjectStages } from "../../components/ProjectStages";

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

   const [shouldShowProjectsDetails, setShouldShowProjectDetails] = useState(
      false
   );

   const {
      projectsStore: {
         getProjectDetailsAPI,
         getProjectDetailsAPIStatus,
         getProjectDetailsAPIError,
         projectDetails,
      },
   } = useStores();

   if (!isSignedIn()) {
      return <Redirect to="/sign-in" />;
   }

   useEffect(() => {
      getProjectDetails();
   }, []);

   const getProjectDetails = () => {
      getProjectDetailsAPI(id);
   };

   const goToProjects = () => {
      history.push("/");
   };

   const renderTitleAndNavigation = (): ReactNode => {
      return (
         <TitleAndNavigation
            goToProjects={goToProjects}
            projectTitle={
               projectDetails ? projectDetails.projectBasicDetails.title : ""
            }
         />
      );
   };

   const showProjectDetails = () => {
      setShouldShowProjectDetails(true);
   };

   const hideProjectDetails = () => {
      setShouldShowProjectDetails(false);
   };

   let projectTitle = "",
      projectDescription = "";
   if (projectDetails) {
      const {
         projectBasicDetails: { title, description },
      } = projectDetails;
      projectTitle = title;
      projectDescription = description;
   }

   return (
      <ProjectPageContainer>
         <Header titleAndNavigation={renderTitleAndNavigation} />
         <Container>
            <ProjectTitleBar showProjectDetails={showProjectDetails} />
            <ProjectDetails
               shouldShow={shouldShowProjectsDetails}
               hideProjectDetails={hideProjectDetails}
               title={projectTitle}
               description={projectDescription}
               members={[
                  new UserModel({
                     id: "123456789",
                     name: "Hafeez",
                     email: "hafeezulkareem@gmail.com",
                     password: "12345",
                  }),
               ]}
            />
            <ProjectStages
               getProjectDetails={getProjectDetails}
               getProjectDetailsAPIStatus={getProjectDetailsAPIStatus}
               getProjectDetailsAPIError={getProjectDetailsAPIError}
            />
         </Container>
      </ProjectPageContainer>
   );
});

const ProjectRouteWithRouter = withRouter(ProjectRoute);

export { ProjectRouteWithRouter };
