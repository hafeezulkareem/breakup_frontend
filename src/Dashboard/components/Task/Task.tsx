import React from "react";
import { observer } from "mobx-react-lite";
import { GrEdit } from "react-icons/gr";
import { Draggable } from "react-beautiful-dnd";

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
   index: number;
}

const Task = observer((props: TaskProps) => {
   const {
      task: { id, title },
      index,
   } = props;

   return (
      <Draggable draggableId={id} index={index}>
         {(provided) => (
            <TaskContainer
               ref={provided.innerRef}
               {...provided.draggableProps}
               {...provided.dragHandleProps}
            >
               <TitleBar>
                  <TaskTitleContainer>
                     <TaskTitle>{title}</TaskTitle>
                  </TaskTitleContainer>
                  <EditButton disableShadow>
                     <GrEdit size={14} />
                  </EditButton>
               </TitleBar>
            </TaskContainer>
         )}
      </Draggable>
   );
});

export { Task };
