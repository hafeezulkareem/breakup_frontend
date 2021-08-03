import React from "react";
import { observer } from "mobx-react-lite";
import { Droppable } from "react-beautiful-dnd";

import { useStores } from "../../../Common/stores";

import { TaskModel } from "../../stores/models/TaskModel";

import { Task } from "../Task";

import { TasksContainer } from "./styledComponents";

interface StageTasksProps {
   stageId: string;
}

interface TasksProps {
   tasks: Array<TaskModel>;
   stageId: string;
}

const Tasks = observer((props: TasksProps) => {
   const { tasks, stageId } = props;

   return (
      <>
         {tasks.map((task: TaskModel, index: number) => (
            <Task task={task} index={index} key={task.id} stageId={stageId} />
         ))}
      </>
   );
});

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
               <Tasks tasks={stageTasks} stageId={stageId} />
               {provided.placeholder}
            </TasksContainer>
         )}
      </Droppable>
   );
});

export { StageTasks };
