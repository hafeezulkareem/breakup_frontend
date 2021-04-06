import { action, makeObservable, observable } from "mobx";

class UIStore {
   @observable showAddProjectModal!: boolean;
   @observable projectTitle!: string;

   constructor() {
      makeObservable(this);
      this.init();
   }

   @action.bound
   init() {
      this.showAddProjectModal = false;
      this.projectTitle = "";
   }

   @action.bound
   updateAddProjectModalStatus(status: boolean) {
      this.showAddProjectModal = status;
   }

   @action.bound
   updateProjectTitle(title: string) {
      this.projectTitle = title;
   }

   @action.bound
   clear() {
      this.init();
   }
}

export { UIStore };
