import React from "react";
import { observer } from "mobx-react-lite";
import { RiMoreFill } from "react-icons/ri";
import { Draggable } from "react-beautiful-dnd";

import { StageModel } from "../../stores/models/StageModel";

import { AddTask } from "../AddTask";
import { StageTasks } from "../StageTasks";

import {
   BlockContainer,
   ProjectStageContainer,
   StageName,
   StageOptionsMenuButton,
   StageTitleBar,
} from "./styledComponents";

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
                  <StageOptionsMenuButton disableShadow>
                     <RiMoreFill size={18} />
                  </StageOptionsMenuButton>
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
