import React from "react";
import { observer } from "mobx-react-lite";
import { ClipLoader } from "react-spinners";

import { isFailed, isFetching } from "../../../Common/utils/APIUtils";
import Button from "../../../Common/components/Button";
import { colors } from "../../../Common/themes/colors";

import { AddStage } from "../AddStage";
import { ProjectStage } from "../ProjectStage";

import {
   CenterContainer,
   GetProjectsErrorMessage,
   RetryButton,
   StageContainer,
   StagesContainer,
} from "./styledComponents";

interface ProjectStagesProps {
   getProjectDetails: () => void;
   getProjectDetailsAPIStatus: number;
   getProjectDetailsAPIError: string;
   stages: Array<any>;
}

const ProjectStages = observer((props: ProjectStagesProps) => {
   const {
      getProjectDetails,
      getProjectDetailsAPIStatus,
      getProjectDetailsAPIError,
      stages,
   } = props;

   const renderProject = () => {
      if (isFetching(getProjectDetailsAPIStatus)) {
         return (
            <CenterContainer>
               <ClipLoader size={48} color={colors.blueWhale} />
            </CenterContainer>
         );
      }
      if (isFailed(getProjectDetailsAPIStatus)) {
         return (
            <CenterContainer>
               <GetProjectsErrorMessage>
                  {getProjectDetailsAPIError}
               </GetProjectsErrorMessage>
               <RetryButton
                  color={Button.colors.primary}
                  onClick={getProjectDetails}
               >
                  Retry
               </RetryButton>
            </CenterContainer>
         );
      }

      return (
         <>
            {stages.map((stage) => (
               <StageContainer>
                  <ProjectStage />
               </StageContainer>
            ))}
            <StageContainer>
               <AddStage />
            </StageContainer>
         </>
      );
   };

   return <StagesContainer>{renderProject()}</StagesContainer>;
});

export { ProjectStages };
