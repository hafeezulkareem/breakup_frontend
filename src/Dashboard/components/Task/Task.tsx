import React from "react";
import { observer } from "mobx-react-lite";
import { GrEdit } from "react-icons/gr";

import {
   EditButton,
   TaskContainer,
   TaskTitle,
   TaskTitleContainer,
   TitleBar,
} from "./styledComponents";

const Task = observer((props) => {
   return (
      <TaskContainer>
         <TitleBar>
            <TaskTitleContainer>
               <TaskTitle>Sample Task</TaskTitle>
            </TaskTitleContainer>
            <EditButton disableShadow>
               <GrEdit size={16} />
            </EditButton>
         </TitleBar>
      </TaskContainer>
   );
});

export { Task };
