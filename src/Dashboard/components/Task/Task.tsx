import React from "react";
import { observer } from "mobx-react-lite";
import { GrEdit } from "react-icons/gr";
import { Draggable, DraggableStateSnapshot } from "react-beautiful-dnd";

import { TaskModel } from "../../stores/models/TaskModel";

import {
   EditButton,
   TaskContainer,
   TaskDraggableContainer,
   TaskTitle,
   TaskTitleContainer,
   TitleBar,
} from "./styledComponents";
import { useStores } from "../../../Common/stores";

interface TaskProps {
   task: TaskModel;
   index: number;
}

const Task = observer((props: TaskProps) => {
   const {
      task: { id, title },
      index,
   } = props;

   const {
      taskUIStore: { updateTaskModalVisibility },
   } = useStores();

   const openTaskModal = () => {
      updateTaskModalVisibility(true);
   };

   return (
      <Draggable draggableId={id} index={index}>
         {(provided, snapshot: DraggableStateSnapshot) => {
            return (
               <TaskDraggableContainer
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
               >
                  <TaskContainer
                     isDragging={snapshot.isDragging}
                     onClick={openTaskModal}
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
               </TaskDraggableContainer>
            );
         }}
      </Draggable>
   );
});

export { Task };
