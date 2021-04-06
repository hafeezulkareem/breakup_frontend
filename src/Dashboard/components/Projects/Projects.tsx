import React from "react";
import { observer } from "mobx-react-lite";
import { ClipLoader } from "react-spinners";
import { FcEmptyBattery } from "react-icons/fc";

import { useStores } from "../../../Common/stores";
import { colors } from "../../../Common/themes/colors";
import { isFailed, isFetching } from "../../../Common/utils/APIUtils";
import Button from "../../../Common/components/Button";

import { ProjectsTitleBar } from "../ProjectsTitleBar";
import { Project } from "../Project";

import {
   CenterContainer,
   GetProjectsErrorMessage,
   NoProjects,
   ProjectsContainer,
   ProjectsPage,
   RetryButton,
} from "./styledComponents";

interface ProjectsProps {
   getProjects: () => void;
}

const Projects = observer((props: ProjectsProps) => {
   const { getProjects } = props;

   const {
      projectsStore: {
         miniProjects,
         getProjectsAPIStatus,
         getProjectsAPIError,
      },
   } = useStores();

   const renderProjects = () => {
      if (isFetching(getProjectsAPIStatus)) {
         return (
            <CenterContainer>
               <ClipLoader size={48} color={colors.blueWhale} />
            </CenterContainer>
         );
      }

      if (isFailed(getProjectsAPIStatus)) {
         return (
            <CenterContainer>
               <GetProjectsErrorMessage>
                  {getProjectsAPIError}
               </GetProjectsErrorMessage>
               <RetryButton color={Button.colors.primary} onClick={getProjects}>
                  Retry
               </RetryButton>
            </CenterContainer>
         );
      }
      return miniProjects.length === 0 ? (
         <CenterContainer>
            <NoProjects>No Projects</NoProjects>
            <FcEmptyBattery size={32} />
         </CenterContainer>
      ) : (
         miniProjects.map((project) => (
            <Project key={project.id} project={project} />
         ))
      );
   };

   return (
      <ProjectsPage>
         <ProjectsTitleBar />
         <ProjectsContainer
            singleCol={
               isFetching(getProjectsAPIStatus) ||
               isFailed(getProjectsAPIStatus) ||
               miniProjects.length === 0
            }
         >
            {renderProjects()}
         </ProjectsContainer>
      </ProjectsPage>
   );
});

export { Projects };
