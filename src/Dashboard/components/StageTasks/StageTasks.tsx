import { observer } from "mobx-react-lite";
import React from "react";

import { useStores } from "../../../Common/stores";

import { TaskModel } from "../../stores/models/TaskModel";

import { Task } from "../Task";

import { TasksContainer } from "./styledComponents";

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
      <TasksContainer margin={stageTasks.length > 0 ? true : false}>
         {stageTasks.map((task: TaskModel) => (
            <Task key={task.id} task={task} />
         ))}
      </TasksContainer>
   );
});

export { StageTasks };
