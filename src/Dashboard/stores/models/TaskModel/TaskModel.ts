import { makeObservable, observable } from "mobx";

class TaskModel {
   id: string;
   @observable title: string;

   constructor({ id, title }) {
      makeObservable(this);
      this.id = id;
      this.title = title;
   }
}

export { TaskModel };
