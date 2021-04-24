import React from "react";
import { observer } from "mobx-react-lite";
import { ClipLoader } from "react-spinners";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import cogoToast from "cogo-toast";

import { isFailed, isFetching } from "../../../Common/utils/APIUtils";
import Button from "../../../Common/components/Button";
import { colors } from "../../../Common/themes/colors";
import { useStores } from "../../../Common/stores";

import { StageModel } from "../../stores/models/StageModel";

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

interface StagesProps {
   projectId: string;
}

const Stages = observer((props: StagesProps) => {
   const { projectId } = props;

   const {
      stagesStore: { stages },
   } = useStores();

   return (
      <>
         {stages.map((stage: StageModel, index: number) => (
            <ProjectStage
               stage={stage}
               projectId={projectId}
               index={index}
               key={stage.id}
            />
         ))}
      </>
   );
});

const ProjectStages = observer((props: ProjectStagesProps) => {
   const {
      getProjectDetails,
      getProjectDetailsAPIStatus,
      getProjectDetailsAPIError,
      projectId,
   } = props;

   const {
      stagesStore: { reorderStage },
      tasksStore: { reorderTask, reorderTaskAPI, reorderTaskAPIError },
   } = useStores();

   const renderStages = () => {
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
         <Droppable droppableId="project" direction="horizontal" type="COLUMN">
            {(provided) => (
               <StagesContainer
                  ref={provided.innerRef}
                  {...provided.droppableProps}
               >
                  <Stages projectId={projectId} />
                  {provided.placeholder}
                  <StageContainer>
                     <AddStage projectId={projectId} />
                  </StageContainer>
               </StagesContainer>
            )}
         </Droppable>
      );
   };

   const onFailureTaskReorderAPI = () => {
      cogoToast.error(reorderTaskAPIError, { position: "bottom-center" });
   };

   const handleDragEnd = (result) => {
      if (!result || !result.destination) {
         return;
      }

      const {
         type,
         draggableId,
         source: { index: sourceIndex, droppableId: sourceId },
         destination: { index: destinationIndex, droppableId: destinationId },
      } = result;
      if (type === "COLUMN") {
         if (sourceIndex !== destinationIndex) {
            reorderStage(draggableId, sourceIndex, destinationIndex);
         }
      } else {
         if (sourceId !== destinationId || sourceIndex !== destinationIndex) {
            reorderTask(
               draggableId,
               sourceIndex,
               sourceId,
               destinationIndex,
               destinationId
            );
            reorderTaskAPI(
               draggableId,
               {
                  source_id: sourceId,
                  destination_id: destinationId,
                  order: destinationIndex,
               },
               () => {},
               onFailureTaskReorderAPI
            );
         }
      }
   };

   return (
      <DragDropContext onDragEnd={handleDragEnd}>
         {renderStages()}
      </DragDropContext>
   );
});

export { ProjectStages };
