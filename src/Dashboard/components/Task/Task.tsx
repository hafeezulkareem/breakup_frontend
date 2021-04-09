import React from "react";
import { observer } from "mobx-react-lite";
import { GrEdit } from "react-icons/gr";

import { TaskModel } from "../../stores/models/TaskModel";

import {
   EditButton,
   TaskContainer,
   TaskTitle,
   TaskTitleContainer,
   TitleBar,
} from "./styledComponents";

interface TaskProps {
   task: TaskModel;
}

const Task = observer((props: TaskProps) => {
   const {
      task: { title },
   } = props;

   return (
      <TaskContainer>
         <TitleBar>
            <TaskTitleContainer>
               <TaskTitle>{title}</TaskTitle>
            </TaskTitleContainer>
            <EditButton disableShadow>
               <GrEdit size={16} />
            </EditButton>
         </TitleBar>
      </TaskContainer>
   );
});

export { Task };
