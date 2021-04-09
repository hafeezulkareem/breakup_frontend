import { makeObservable, observable } from "mobx";

import { MiniProjectModel } from "../MiniProjectModel";

class ProjectDetailsModel {
   projectBasicDetails: MiniProjectModel;
   adminId: string;
   adminName: string;
   @observable stages: Array<string>;

   constructor({ id, title, description, adminId, adminName, stages }) {
      makeObservable(this);
      this.projectBasicDetails = new MiniProjectModel({
         id,
         title,
         description,
      });
      this.adminId = adminId;
      this.adminName = adminName;
      this.stages = stages;
   }
}

export { ProjectDetailsModel };
