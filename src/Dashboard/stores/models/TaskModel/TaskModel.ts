import { action, makeObservable, observable } from "mobx";

import { apiStatus } from "../../../../Common/constants/APIConstants";
import { getParsedErrorMessage } from "../../../../Common/utils/APIUtils";

import { TasksService } from "../../../services/TasksService";
import {
   AssignMemberAPIRequest,
   UpdateTaskDescriptionAPIRequest,
} from "../../../types";

class TaskModel {
   id: string;
   @observable title: string;
   @observable description: string;
   @observable assignee: { name: string; email: string };
   tasksService: TasksService;
   @observable updateDescriptionAPIStatus!: number;
   @observable updateDescriptionAPIError!: string;
   @observable assignMemberAPIStatus!: number;
   @observable assignMemberAPIError!: string;

   constructor(
      tasksService: TasksService,
      { id, title, description, assignee }
   ) {
      makeObservable(this);
      this.tasksService = tasksService;
      this.id = id;
      this.title = title;
      this.description = description;
      this.assignee = assignee;
      this.init();
   }

   @action.bound
   init() {
      this.updateDescriptionAPIStatus = 0;
      this.updateDescriptionAPIError = "";
      this.assignMemberAPIStatus = 0;
      this.assignMemberAPIError = "";
   }

   @action.bound
   setUpdateDescriptionAPIStatus(status: number) {
      this.updateDescriptionAPIStatus = status;
   }

   @action.bound
   setUpdateDescriptionAPIError(error) {
      this.updateDescriptionAPIError = getParsedErrorMessage(error);
   }

   @action.bound
   setUpdateDescriptionAPIResponse(description: string) {
      this.description = description;
   }

   @action.bound
   async updateDescriptionAPI(
      data: UpdateTaskDescriptionAPIRequest,
      onSuccess: Function = (): void => {},
      onFailure: Function = (): void => {}
   ) {
      const updateDescriptionAPIPromise =
         this.tasksService.updateDescriptionAPI(this.id, data);
      const { description } = data;
      this.setUpdateDescriptionAPIStatus(apiStatus.loading);
      await updateDescriptionAPIPromise
         .then((data) => {
            this.setUpdateDescriptionAPIStatus(apiStatus.success);
            this.setUpdateDescriptionAPIResponse(description);
            onSuccess();
         })
         .catch((err) => {
            this.setUpdateDescriptionAPIStatus(apiStatus.failed);
            this.setUpdateDescriptionAPIError(err);
            onFailure();
         });
   }

   @action.bound
   setAssignMemberAPIStatus(status: number) {
      this.assignMemberAPIStatus = status;
   }

   @action.bound
   setAssignMemberAPIError(error) {
      this.assignMemberAPIError = getParsedErrorMessage(error);
   }

   @action.bound
   setAssignMemberAPIResponse(email: string, data) {
      this.assignee = { email, name: data.name };
   }

   @action.bound
   async assignMemberAPI(
      data: AssignMemberAPIRequest,
      onSuccess: Function = (): void => {},
      onFailure: Function = (): void => {}
   ) {
      const assignMemberAPIPromise = this.tasksService.assignMemberAPI(
         this.id,
         data
      );
      const { email } = data;
      this.setAssignMemberAPIStatus(apiStatus.loading);
      await assignMemberAPIPromise
         .then((data) => {
            this.setAssignMemberAPIStatus(apiStatus.success);
            this.setAssignMemberAPIResponse(email, data);
            onSuccess();
         })
         .catch((err) => {
            this.setAssignMemberAPIStatus(apiStatus.failed);
            this.setAssignMemberAPIError(err);
            onFailure(this.assignMemberAPIError);
         });
   }

   @action.bound
   clear() {
      this.init();
   }
}

export { TaskModel };
