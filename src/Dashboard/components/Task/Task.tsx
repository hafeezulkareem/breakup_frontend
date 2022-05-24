import React from "react";
import { observer } from "mobx-react-lite";
import { GrEdit } from "react-icons/gr";
import { Draggable, DraggableStateSnapshot } from "react-beautiful-dnd";

import { useStores } from "../../../Common/stores";

import { TaskModel } from "../../stores/models/TaskModel";
import { RAISE_BUG, RESOLVE_BUG } from "../../constants/UIConstants";

import {
   EditButton,
   TaskContainer,
   TaskDraggableContainer,
   TaskTitle,
   TaskTitleContainer,
   TitleBar,
} from "./styledComponents";

interface TaskProps {
   task: TaskModel;
   index: number;
   stageId: string;
}

const Task = observer((props: TaskProps) => {
   const {
      task: { id, title, status },
      index,
   } = props;

   const {
      taskUIStore: { updateTaskModalVisibility, setTask },
   } = useStores();

   const openTaskModal = () => {
      const { task, stageId } = props;
      setTask(task, stageId);
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
                     style={{
                        backgroundColor:
                           status === RAISE_BUG
                              ? "crimson"
                              : status === RESOLVE_BUG
                              ? "seagreen"
                              : "",
                     }}
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
