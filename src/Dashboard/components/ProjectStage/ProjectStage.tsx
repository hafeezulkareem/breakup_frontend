import React from "react";
import { observer } from "mobx-react-lite";
import { RiMoreFill } from "react-icons/ri";

import {
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
      </ProjectStageContainer>
   );
});

export { ProjectStage };
