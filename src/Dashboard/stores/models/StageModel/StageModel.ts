import { makeObservable, observable } from "mobx";

class StageModel {
   id: string;
   @observable name: string;
   @observable tasks: Array<any>;

   constructor({ id, name, tasks }) {
      makeObservable(this);
      this.id = id;
      this.name = name;
      this.tasks = tasks;
   }
}

export { StageModel };
