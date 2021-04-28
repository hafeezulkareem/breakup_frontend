import { action, makeObservable, observable } from "mobx";

class TaskUIStore {
   @observable showTaskModal!: boolean;

   constructor() {
      makeObservable(this);
      this.init();
   }

   @action.bound
   init() {
      this.showTaskModal = false;
   }

   @action.bound
   updateTaskModalVisibility(visibility: boolean) {
      this.showTaskModal = visibility;
   }

   @action.bound
   clear() {
      this.init();
   }
}

export { TaskUIStore };
