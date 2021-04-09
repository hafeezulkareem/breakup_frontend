import { action, makeObservable, observable } from "mobx";

class UIStore {
   @observable showAddProjectModal!: boolean;

   constructor() {
      makeObservable(this);
      this.init();
   }

   @action.bound
   init() {
      this.showAddProjectModal = false;
   }

   @action.bound
   updateAddProjectModalStatus(status: boolean) {
      this.showAddProjectModal = status;
   }

   @action.bound
   clear() {
      this.init();
   }
}

export { UIStore };
