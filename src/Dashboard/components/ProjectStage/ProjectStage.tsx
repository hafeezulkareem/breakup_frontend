import React from "react";
import { observer } from "mobx-react-lite";
import { RiMoreFill } from "react-icons/ri";

import { StageModel } from "../../stores/models/StageModel";

import { Task } from "../Task";
import { AddTask } from "../AddTask";

import {
   BlockContainer,
   ProjectStageContainer,
   StageName,
   StageOptionsMenuButton,
   StageTitleBar,
} from "./styledComponents";

interface ProjectStageProps {
   stage: StageModel;
}

const ProjectStage = observer((props: ProjectStageProps) => {
   const {
      stage: { name },
   } = props;

   return (
      <ProjectStageContainer>
         <StageTitleBar>
            <StageName>{name}</StageName>
            <StageOptionsMenuButton disableShadow>
               <RiMoreFill size={18} />
            </StageOptionsMenuButton>
         </StageTitleBar>
         <BlockContainer>
            <Task />
         </BlockContainer>
         <BlockContainer>
            <AddTask />
         </BlockContainer>
      </ProjectStageContainer>
   );
});

export { ProjectStage };
