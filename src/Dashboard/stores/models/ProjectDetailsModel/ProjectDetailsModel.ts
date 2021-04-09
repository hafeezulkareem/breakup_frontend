import { makeObservable, observable } from "mobx";

import { MiniProjectModel } from "../MiniProjectModel";

class ProjectDetailsModel {
   @observable projectBasicDetails: MiniProjectModel;
   adminId: string;
   adminName: string;

   constructor({ id, title, description, adminId, adminName }) {
      makeObservable(this);
      this.projectBasicDetails = new MiniProjectModel({
         id,
         title,
         description,
      });
      this.adminId = adminId;
      this.adminName = adminName;
   }
}

export { ProjectDetailsModel };
