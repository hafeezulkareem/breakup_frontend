import { action, makeObservable } from "mobx";

import { StageResponse } from "../../types";

import { TaskModel } from "../models/TaskModel";

class TasksStore {
   projectId!: string;
   tasks!:
      | {
           stageId: Array<TaskModel>;
        }
      | {};

   constructor() {
      makeObservable(this);
      this.init();
   }

   @action.bound
   init() {
      this.projectId = "";
      this.tasks = {};
   }

   @action.bound
   setProjectIdAndTasks(projectId: string, stages: Array<StageResponse>) {
      this.projectId = projectId;
      stages.forEach((stage) => {
         const { id, tasks } = stage;
         const taskModels = tasks.map((task) => {
            const { id, title } = task;
            return new TaskModel({ id, title });
         });
         this.tasks[id] = taskModels;
      });
   }

   @action.bound
   addNewStage(stageId: string) {
      this.tasks[stageId] = [];
   }
}

export { TasksStore };
