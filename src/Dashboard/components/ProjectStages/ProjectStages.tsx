import React from "react";
import { observer } from "mobx-react-lite";
import { ClipLoader } from "react-spinners";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { isFailed, isFetching } from "../../../Common/utils/APIUtils";
import Button from "../../../Common/components/Button";
import { colors } from "../../../Common/themes/colors";
import { useStores } from "../../../Common/stores";

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
   projectId: string;
}

const ProjectStages = observer((props: ProjectStagesProps) => {
   const {
      getProjectDetails,
      getProjectDetailsAPIStatus,
      getProjectDetailsAPIError,
      projectId,
   } = props;

   const {
      stagesStore: { stages },
   } = useStores();

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
            <Droppable
               droppableId="project"
               direction="horizontal"
               type="COLUMN"
            >
               {(provided, snapshot) => (
                  <StagesContainer
                     ref={provided.innerRef}
                     {...provided.droppableProps}
                  >
                     {stages.map((stage, index) => (
                        <Draggable
                           draggableId={stage.id}
                           index={index}
                           key={stage.id}
                        >
                           {(provided) => (
                              <StageContainer
                                 ref={provided.innerRef}
                                 {...provided.draggableProps}
                                 {...provided.dragHandleProps}
                              >
                                 <ProjectStage
                                    stage={stage}
                                    projectId={projectId}
                                 />
                              </StageContainer>
                           )}
                        </Draggable>
                     ))}
                     {provided.placeholder}
                     <StageContainer>
                        <AddStage projectId={projectId} />
                     </StageContainer>
                  </StagesContainer>
               )}
            </Droppable>
         </>
      );
   };

   return <DragDropContext>{renderProject()}</DragDropContext>;
});

export { ProjectStages };
