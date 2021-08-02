import React from "react";
import { observer } from "mobx-react-lite";
import { Draggable } from "react-beautiful-dnd";

import { Popover } from "../../../Common/components/Popover";

import { StageModel } from "../../stores/models/StageModel";
import { stageMenuList } from "../../constants/MenuLists";
import { DELETE } from "../../constants/Actions";

import { AddTask } from "../AddTask";
import { StageTasks } from "../StageTasks";

import {
   BlockContainer,
   ProjectStageContainer,
   StageName,
   StageOptionsMenuButton,
   StageTitleBar,
} from "./styledComponents";
import { useStores } from "../../../Common/stores";
import cogoToast from "cogo-toast";

interface ProjectStageProps {
   projectId: string;
   stage: StageModel;
   index: number;
}

const ProjectStage = observer((props: ProjectStageProps) => {
   const {
      stage: { id, name },
      projectId,
      index,
   } = props;

   const {
      stagesStore: { deleteStageAPI },
   } = useStores();

   const onFailureStageDeleteAPI = (error: string) => {
      cogoToast.error(error, { position: "bottom-center" });
   };

   const onSuccessStageDeleteAPI = () => {
      cogoToast.success("Stage deleted successfully", {
         position: "bottom-center",
      });
   };

   const callStageActionAPI = (action: string) => {
      if (action === DELETE) {
         deleteStageAPI(
            projectId,
            id,
            onSuccessStageDeleteAPI,
            onFailureStageDeleteAPI
         );
      }
   };

   return (
      <Draggable draggableId={id} index={index}>
         {(provided) => (
            <ProjectStageContainer
               ref={provided.innerRef}
               {...provided.draggableProps}
               {...provided.dragHandleProps}
            >
               <StageTitleBar>
                  <StageName>{name}</StageName>
                  <Popover
                     popoverButton={
                        <StageOptionsMenuButton disableShadow>
                           &hellip;
                        </StageOptionsMenuButton>
                     }
                     onClickItem={callStageActionAPI}
                     list={stageMenuList}
                  />
               </StageTitleBar>
               <StageTasks stageId={id} />
               <BlockContainer>
                  <AddTask projectId={projectId} stageId={id} />
               </BlockContainer>
            </ProjectStageContainer>
         )}
      </Draggable>
   );
});

export { ProjectStage };
