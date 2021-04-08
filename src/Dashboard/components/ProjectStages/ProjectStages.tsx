import React from "react";
import { observer } from "mobx-react-lite";

import { StagesContainer } from "./styledComponents";

const ProjectStages = observer((props) => {
   return <StagesContainer>Project Stages</StagesContainer>;
});

export { ProjectStages };
