import React from "react";
import { observer } from "mobx-react-lite";

import { ProjectsTitleBar } from "../ProjectsTitleBar";

import { ProjectsContainer } from "./styledComponents";

const Projects = observer((props) => {
   return (
      <ProjectsContainer>
         <ProjectsTitleBar />
      </ProjectsContainer>
   );
});

export { Projects };
