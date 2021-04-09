import { action, makeObservable, observable } from "mobx";

import { StageResponse } from "../../types";

import { StageModel } from "../models/StageModel";
import { TasksStore } from "../TasksStore";

class StagesStore {
   projectId!: string;
   @observable stages!: Array<StageModel>;
   tasksStore: TasksStore;

   constructor(tasksStore: TasksStore) {
      makeObservable(this);
      this.tasksStore = tasksStore;
      this.init();
   }

   @action.bound
   init() {
      this.projectId = "";
      this.stages = [];
   }

   @action.bound
   setProjectIdAndStages(projectId: string, stages: Array<StageResponse>) {
      this.projectId = projectId;
      this.stages = stages.map((stage) => {
         const { id, name, tasks } = stage;
         return new StageModel({ id, name, tasks });
      });
      this.tasksStore.setProjectIdAndTasks(projectId, stages);
   }
}

export { StagesStore };
