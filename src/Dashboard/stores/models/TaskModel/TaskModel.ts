import { makeObservable, observable } from "mobx";

class TaskModel {
   id: string;
   @observable title: string;
   @observable description: string;

   constructor({ id, title, description }) {
      makeObservable(this);
      this.id = id;
      this.title = title;
      this.description = description;
   }
}

export { TaskModel };
