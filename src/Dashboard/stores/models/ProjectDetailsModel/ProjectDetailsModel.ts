import { action, makeObservable, observable } from "mobx";

import { MemberDetails } from "../../../types";

import { MiniProjectModel } from "../MiniProjectModel";

class ProjectDetailsModel {
   @observable projectBasicDetails: MiniProjectModel;
   @observable members: Array<MemberDetails>;

   constructor({ id, title, description, members }) {
      makeObservable(this);
      this.projectBasicDetails = new MiniProjectModel({
         id,
         title,
         description,
      });
      this.members = members;
   }

   @action.bound
   addNewMember(member) {
      this.members.push(member);
   }
}

export { ProjectDetailsModel };
