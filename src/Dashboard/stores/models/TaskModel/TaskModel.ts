import { action, makeObservable, observable } from "mobx";

import { apiStatus } from "../../../../Common/constants/APIConstants";
import { getParsedErrorMessage } from "../../../../Common/utils/APIUtils";

import { TasksService } from "../../../services/TasksService";
import { UpdateTaskDescriptionAPIRequest } from "../../../types";

class TaskModel {
   id: string;
   @observable title: string;
   @observable description: string;
   tasksService: TasksService;
   @observable updateDescriptionAPIStatus!: number;
   @observable updateDescriptionAPIError!: string;

   constructor(tasksService: TasksService, { id, title, description }) {
      makeObservable(this);
      this.tasksService = tasksService;
      this.id = id;
      this.title = title;
      this.description = description;
      this.init();
   }

   @action.bound
   init() {
      this.updateDescriptionAPIStatus = 0;
      this.updateDescriptionAPIError = "";
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
      const updateDescriptionAPIPromise = this.tasksService.updateDescriptionAPI(
         this.id,
         data
      );
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
   clear() {
      this.init();
   }
}

export { TaskModel };
