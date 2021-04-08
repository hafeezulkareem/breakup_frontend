import React from "react";
import { observer } from "mobx-react-lite";

import { AddStage } from "../AddStage";
import { ProjectStage } from "../ProjectStage";

import { StageContainer, StagesContainer } from "./styledComponents";

const ProjectStages = observer((props) => {
   return (
      <StagesContainer>
         <StageContainer>
            <ProjectStage />
         </StageContainer>
         <StageContainer>
            <AddStage />
         </StageContainer>
      </StagesContainer>
   );
});

export { ProjectStages };
