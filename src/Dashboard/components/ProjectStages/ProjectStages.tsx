import React from "react";
import { observer } from "mobx-react-lite";

import { AddStage } from "../AddStage";

import { StageContainer, StagesContainer } from "./styledComponents";

const ProjectStages = observer((props) => {
   return (
      <StagesContainer>
         <StageContainer>
            <AddStage />
         </StageContainer>
      </StagesContainer>
   );
});

export { ProjectStages };
