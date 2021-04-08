import React from "react";
import { observer } from "mobx-react-lite";
import { RiMoreFill } from "react-icons/ri";

import { AddTask } from "../AddTask";

import {
   BlockContainer,
   ProjectStageContainer,
   StageName,
   StageOptionsMenuButton,
   StageTitleBar,
} from "./styledComponents";

const ProjectStage = observer((props) => {
   return (
      <ProjectStageContainer>
         <StageTitleBar>
            <StageName>Sample Stage</StageName>
            <StageOptionsMenuButton disableShadow>
               <RiMoreFill size={18} />
            </StageOptionsMenuButton>
         </StageTitleBar>
         <BlockContainer>Tasks</BlockContainer>
         <BlockContainer>
            <AddTask />
         </BlockContainer>
      </ProjectStageContainer>
   );
});

export { ProjectStage };
