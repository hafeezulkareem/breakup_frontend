import { action, makeObservable, observable } from "mobx";

import { TaskModel } from "../models/TaskModel";

class TaskUIStore {
   @observable showTaskModal!: boolean;
   @observable task!: TaskModel | null;
   @observable stageId!: string;

   constructor() {
      makeObservable(this);
      this.init();
   }

   @action.bound
   init() {
      this.showTaskModal = false;
      this.task = null;
      this.stageId = "";
   }

   @action.bound
   updateTaskModalVisibility(visibility: boolean) {
      this.showTaskModal = visibility;
   }

   @action.bound
   setTask(task: TaskModel, stageId: string) {
      this.stageId = stageId;
      this.task = task;
   }

   @action.bound
   clear() {
      this.init();
   }
}

export { TaskUIStore };
