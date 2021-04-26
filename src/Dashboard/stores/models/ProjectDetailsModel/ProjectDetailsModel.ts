import { makeObservable, observable } from "mobx";

import { MemberDetails } from "../../../types";

import { MiniProjectModel } from "../MiniProjectModel";

class ProjectDetailsModel {
   @observable projectBasicDetails: MiniProjectModel;
   @observable members: MemberDetails;

   constructor({ id, title, description, members }) {
      makeObservable(this);
      this.projectBasicDetails = new MiniProjectModel({
         id,
         title,
         description,
      });
      this.members = members;
   }
}

export { ProjectDetailsModel };
