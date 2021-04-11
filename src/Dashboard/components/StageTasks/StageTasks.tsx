import { observer } from "mobx-react-lite";
import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

import { useStores } from "../../../Common/stores";

import { TaskModel } from "../../stores/models/TaskModel";

import { Task } from "../Task";

import { TasksContainer, TaskContainer } from "./styledComponents";

interface StageTasksProps {
   stageId: string;
}

const StageTasks = observer((props: StageTasksProps) => {
   const { stageId } = props;

   const {
      tasksStore: { tasks },
   } = useStores();

   const stageTasks = tasks[stageId];

   return (
      <Droppable droppableId={stageId}>
         {(provided) => (
            <TasksContainer
               ref={provided.innerRef}
               {...provided.droppableProps}
               margin={stageTasks.length > 0 ? true : false}
            >
               {stageTasks.map((task: TaskModel, index) => (
                  <Draggable draggableId={task.id} index={index} key={task.id}>
                     {(provided) => (
                        <TaskContainer
                           ref={provided.innerRef}
                           {...provided.draggableProps}
                           {...provided.dragHandleProps}
                        >
                           <Task task={task} />
                        </TaskContainer>
                     )}
                  </Draggable>
               ))}
               {provided.placeholder}
            </TasksContainer>
         )}
      </Droppable>
   );
});

export { StageTasks };
