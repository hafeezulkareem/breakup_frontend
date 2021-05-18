import React from "react";
import { observer } from "mobx-react-lite";
import { Draggable } from "react-beautiful-dnd";

import { Popover } from "../../../Common/components/Popover";

import { StageModel } from "../../stores/models/StageModel";
import { stageMenuList } from "../../constants/MenuLists";

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
                  <Popover
                     popoverButton={
                        <StageOptionsMenuButton disableShadow>
                           &hellip;
                        </StageOptionsMenuButton>
                     }
                     onClickItem={(value) => {
                        console.log(value);
                     }}
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
