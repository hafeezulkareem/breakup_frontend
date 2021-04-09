import { observable } from "mobx";

class MiniProjectModel {
   id: string;
   @observable title: string;
   @observable description: string;

   constructor({
      id,
      title,
      description,
   }: {
      id: string;
      title: string;
      description: string;
   }) {
      this.id = id;
      this.title = title;
      this.description = description;
   }
}

export { MiniProjectModel };
