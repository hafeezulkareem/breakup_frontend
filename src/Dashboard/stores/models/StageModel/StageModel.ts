import { makeObservable, observable } from "mobx";

class StageModel {
   id: string;
   @observable name: string;

   constructor({ id, name, tasks }) {
      makeObservable(this);
      this.id = id;
      this.name = name;
   }
}

export { StageModel };
